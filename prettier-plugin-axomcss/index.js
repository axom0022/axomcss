
const orderlist = [/^(container|columns-|break-|box-|display|flex|grid|place-|items-|justify-|content-|self-|order-|float-|clear-|isolation|object-|overflow|overscroll|position|inset|z-|top-|bottom-|left-|right-|ps-|pe-|ms-|me-)/,/^(w-|h-|min-|max-|size-|aspect-)/,/^(p-|px-|py-|pt-|pb-|pl-|pr-|ps-|pe-|m-|mx-|my-|mt-|mb-|ml-|mr-|ms-|me-|gap-|space-|divide-)/,/^(font-|text-|leading-|tracking-|align-|whitespace-|break-|hyphens-|indent-|content-|decoration-|underline-|antialiased)/,/^(bg-|from-|via-|to-|bg-clip|bg-origin|bg-blend)/,/^(border-|rounded-|divide-|ring-|outline-|shadow)/,/^(opacity-|mix-|filter|backdrop-|blur|brightness|contrast|grayscale|hue-|invert|saturate|sepia|drop-shadow|glass|glow|shimmer|text-gradient|border-gradient)/,/^(transform|scale-|rotate-|translate-|skew-|origin-|perspective|backface|transition|duration|delay|ease|animate|will-change)/,/^(appearance|accent-|caret-|cursor|pointer-|resize|scroll-|snap-|touch-|select-|user-select)/,/^(sr-|not-sr|visible|invisible|forced-|color-scheme|field-sizing|clip-|mask-)/,/^(card|btn|badge|input|center|full|screen|scrollbar)/];
const variantorder = ["","first:","last:","odd:","even:","hover:","focus:","active:","visited:","disabled:","focus-within:","focus-visible:","checked:","open:","ltr:","rtl:","motion-safe:","motion-reduce:","print:","portrait:","landscape:","contrast-more:","contrast-less:","dark:","sm:","md:","lg:","xl:","2xl:","supports-","aria-","data-","has-","not-","in-","group-","peer-", "*:","**:"];
function getorderindex(classname){
const partlist = classname["split"](":");
const basename = partlist["pop"]()||classname;
for(let index=0;index<orderlist["length"];index++){
if(orderlist[index]["test"](basename))return index;
}
return 99;
}
function getvariantindex(classname){
const partlist = classname["split"](":");
if(partlist["length"]===1)return 0;
const variantname = partlist[0]+":";
const foundindex = variantorder["findIndex"](function(variantitem){return variantname["startsWith"](variantitem);});
return foundindex===-1?50:foundindex;
}
function sortclasses(classstring){
if(!classstring||typeof classstring!=="string")return classstring;
const classlist = classstring["trim"]()["split"](/\s+/)["filter"](function(item){return !!item;});
const seenobj = {};
const uniquelist = [];
for(const classname of classlist){
if(!seenobj[classname]){
seenobj[classname]=true;
uniquelist["push"](classname);
}
}
uniquelist["sort"](function(firstitem,seconditem){
const firstvariant = getvariantindex(firstitem);
const secondvariant = getvariantindex(seconditem);
if(firstvariant!==secondvariant)return firstvariant-secondvariant;
const firstorder = getorderindex(firstitem);
const secondorder = getorderindex(seconditem);
if(firstorder!==secondorder)return firstorder-secondorder;
return firstitem["localeCompare"](seconditem);
});
return uniquelist["join"](" ");
}
function sortintext(textcontent){
return textcontent["replace"](/class(?:Name)?\s*=\s*["']([^"']+)["']/g,function(fullmatch,firstgroup,secondgroup,thirdgroup){
return firstgroup+sortclasses(secondgroup)+thirdgroup;
});
}
module["exports"] = {"parsers":{"html":{"preprocess":sortintext},"html-ast":{"preprocess":sortintext}},"languages":[{"name":"html","parsers":["html"]}]};
module["exports"]["printers"] = {};
module["exports"]["sortClasses"] = sortclasses;
if(require["main"]===module){
const teststring = "text-red-500 flex p-4 bg-white rounded-lg hover:bg-red-600 dark:bg-zinc-900 ps-4 ms-auto glass-strong btn-primary";
console["log"]("Before:",teststring);
console["log"]("After: ",sortclasses(teststring));
}
