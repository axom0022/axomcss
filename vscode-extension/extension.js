
const vscode = require("vscode");
const colorlist = ["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","black","white","transparent"];
const shadelist = [50,100,200,300,400,500,600,700,800,900,950];
const spacinglist = [0,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96,"px","auto","full","screen","min","max","fit"];
const roundedlist = ["none","sm","md","lg","xl","2xl","3xl","full"];
const shadowlist = ["sm","","md","lg","xl","2xl","inner","none"];
const displaylist = ["flex","inline-flex","grid","inline-grid","block","inline-block","inline","hidden","contents","table","flow-root","list-item"];
const positionlist = ["relative","absolute","fixed","sticky","static"];
const textsizelist = ["xs","sm","base","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl","fluid","fluid-lg","fluid-xl","balance","pretty","left","center","right","justify","start","end"];
const fontweightlist = ["thin","extralight","light","normal","medium","semibold","bold","extrabold","black","sans","serif","mono"];
const extralist = ["glass","glass-dark","glass-strong","text-gradient","text-gradient-2","glow","glow-purple","inner-glow","shimmer","border-gradient","card","btn","btn-primary","btn-ghost","input","badge","center","center-x","center-y","full","screen","scrollbar-none","scrollbar-thin","antialiased","truncate","sr-only"];
function buildcompletionlist(){
const completionlist = [];
displaylist["forEach"](function(displayitem){
completionlist["push"]({"label":displayitem,"detail":"display","doc":"display: "+displayitem});
});
positionlist["forEach"](function(positionitem){
completionlist["push"]({"label":positionitem,"detail":"position","doc":"position: "+positionitem});
});
["p","px","py","pt","pb","pl","pr","ps","pe","m","mx","my","mt","mb","ml","mr","ms","me"]["forEach"](function(prefixname){
spacinglist["forEach"](function(spacingvalue){
completionlist["push"]({"label":prefixname+"-"+spacingvalue,"detail":"spacing","doc":prefixname+": "+spacingvalue});
});
});
["w","h","min-w","min-h","max-w","max-h","size"]["forEach"](function(prefixname){
["0","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96","px","auto","full","screen","svh","dvh","lvh","svw","dvw","1/2","1/3","2/3","1/4","3/4"]["forEach"](function(sizevalue){
completionlist["push"]({"label":prefixname+"-"+sizevalue,"detail":"sizing"});
});
});
colorlist["forEach"](function(colorname){
if(["black","white","transparent"]["includes"](colorname)){
completionlist["push"]({"label":"bg-"+colorname,"detail":"background","doc":"background-color: "+colorname});
completionlist["push"]({"label":"text-"+colorname,"detail":"color","doc":"color: "+colorname});
completionlist["push"]({"label":"border-"+colorname,"detail":"border","doc":"border-color: "+colorname});
}else{
shadelist["forEach"](function(shadevalue){
completionlist["push"]({"label":"bg-"+colorname+"-"+shadevalue,"detail":"bg "+colorname,"doc":"background: "+colorname+"-"+shadevalue});
completionlist["push"]({"label":"text-"+colorname+"-"+shadevalue,"detail":"text "+colorname});
completionlist["push"]({"label":"border-"+colorname+"-"+shadevalue,"detail":"border "+colorname});
completionlist["push"]({"label":"from-"+colorname+"-"+shadevalue,"detail":"gradient"});
completionlist["push"]({"label":"to-"+colorname+"-"+shadevalue,"detail":"gradient"});
completionlist["push"]({"label":"via-"+colorname+"-"+shadevalue,"detail":"gradient"});
completionlist["push"]({"label":"ring-"+colorname+"-"+shadevalue,"detail":"ring"});
});
completionlist["push"]({"label":"bg-"+colorname,"detail":"background"});
completionlist["push"]({"label":"text-"+colorname,"detail":"color"});
}
});
colorlist["forEach"](function(colorname){
shadelist["forEach"](function(shadevalue){
completionlist["push"]({"label":"bg-"+colorname+"-"+shadevalue+"/50","detail":"bg opacity"});
});
});
roundedlist["forEach"](function(roundedvalue){
completionlist["push"]({"label":"rounded-"+roundedvalue,"detail":"border-radius"});
["t","b","l","r","tl","tr","bl","br","s","e","ss","se","es","ee"]["forEach"](function(dirvalue){
completionlist["push"]({"label":"rounded-"+dirvalue+"-"+roundedvalue,"detail":"radius"});
});
});
shadowlist["forEach"](function(shadowvalue){
const labelname = shadowvalue?"shadow-"+shadowvalue:"shadow";
completionlist["push"]({"label":labelname,"detail":"shadow"});
});
textsizelist["forEach"](function(textsizevalue){
completionlist["push"]({"label":"text-"+textsizevalue,"detail":"typography"});
});
fontweightlist["forEach"](function(fontweightvalue){
completionlist["push"]({"label":"font-"+fontweightvalue,"detail":"font"});
});
["flex-row","flex-col","flex-wrap","flex-nowrap","flex-1","flex-auto","items-start","items-center","items-end","justify-start","justify-center","justify-between","justify-around","justify-evenly","gap-4","gap-x-4","gap-y-4","grid-cols-2","grid-cols-3","grid-cols-12","col-span-1","col-span-full"]["forEach"](function(layoutvalue){
completionlist["push"]({"label":layoutvalue,"detail":"layout"});
});
extralist["forEach"](function(extravalue){
completionlist["push"]({"label":extravalue,"detail":"AxomCSS extra","doc":"Built-in component utility: "+extravalue});
});
["scale-100","scale-110","rotate-45","rotate-90","translate-x-4","translate-y-4","skew-x-3","origin-center","transform","transform-gpu"]["forEach"](function(transformvalue){
completionlist["push"]({"label":transformvalue,"detail":"transform"});
});
["blur","blur-sm","blur-md","brightness-100","contrast-100","grayscale","invert","sepia","drop-shadow","filter-none","backdrop-blur","backdrop-blur-md","glass","glass-strong"]["forEach"](function(filtervalue){
completionlist["push"]({"label":filtervalue,"detail":"filter"});
});
["animate-spin","animate-ping","animate-pulse","animate-bounce","animate-float","animate-shimmer","animate-glow","animate-fade-in","animate-slide-up","animate-scale-in","animate-marquee"]["forEach"](function(animationvalue){
completionlist["push"]({"label":animationvalue,"detail":"animation"});
});
["cursor-pointer","select-none","pointer-events-none","overflow-hidden","scroll-smooth","snap-start","snap-center","touch-none","resize-none"]["forEach"](function(interactivevalue){
completionlist["push"]({"label":interactivevalue,"detail":"interactivity"});
});
["ps-4","pe-4","ms-4","me-4","border-s","border-e","rounded-s-lg","rounded-e-lg"]["forEach"](function(logicalvalue){
completionlist["push"]({"label":logicalvalue,"detail":"logical RTL"});
});
["hover:","focus:","active:","disabled:","group-hover:","peer-focus:","dark:","sm:","md:","lg:","xl:","2xl:","ltr:","rtl:","motion-safe:","motion-reduce:","print:","first:","last:","odd:","even:","open:","*:","**:","not-hover:","in-[.dark]:","has-[>div]:","aria-[checked=true]:","data-[state=open]:","supports-[display:grid]:"]["forEach"](function(variantvalue){
completionlist["push"]({"label":variantvalue,"detail":"variant","doc":"Variant: "+variantvalue});
});
return completionlist;
}
const allcompletionlist = buildcompletionlist();
function activate(contextref){
const completionprovider = vscode["languages"]["registerCompletionItemProvider"]([{"scheme":"file","language":"html"},{"scheme":"file","language":"javascript"},{"scheme":"file","language":"javascriptreact"},{"scheme":"file","language":"typescript"},{"scheme":"file","language":"typescriptreact"},{"scheme":"file","language":"vue"},{"scheme":"file","language":"svelte"},{"scheme":"file","language":"astro"},{"scheme":"file","language":"php"}],{"provideCompletionItems":function(documentref,positionref){
const linecontent = documentref["lineAt"](positionref)["text"];
const beforecursor = linecontent["substring"](0,positionref["character"]);
const classmatch = beforecursor["match"](/class(Name)?=["'][^"']*$/);
if(!classmatch){
const wordmatch = beforecursor["match"](/[\w-:\[\]\/]+$/);
if(!wordmatch)return undefined;
}
const resultlist = allcompletionlist["map"](function(entry){
const completionitem = new vscode["CompletionItem"](entry["label"],vscode["CompletionItemKind"]["Value"]);
completionitem["detail"] = entry["detail"];
completionitem["documentation"] = new vscode["MarkdownString"](entry["doc"]||"AxomCSS utility: `"+entry["label"]+"`\n\nFaster than Tailwind, built-in glass glow gradient.");
completionitem["sortText"] = entry["label"];
if(entry["label"]["startsWith"]("bg-")||entry["label"]["startsWith"]("text-")||entry["label"]["startsWith"]("border-")){
const colorcheck = entry["label"]["split"]("-")["pop"]();
if(colorcheck){
completionitem["kind"] = vscode["CompletionItemKind"]["Color"];
}
}
if(entry["detail"]&&entry["detail"]["includes"]("extra")){
completionitem["kind"] = vscode["CompletionItemKind"]["Constant"];
}
return completionitem;
});
return resultlist;
}},'"',"'"," ",":","-","[","]","/");
const hoverprovider = vscode["languages"]["registerHoverProvider"]([{"language":"html"},{"language":"javascript"},{"language":"javascriptreact"},{"language":"typescript"},{"language":"typescriptreact"},{"language":"vue"},{"language":"svelte"}],{"provideHover":function(documentref,positionref){
const wordrange = documentref["getWordRangeAtPosition"](positionref,/[\w-:\[\]\/\.%#\(\)]+/);
if(!wordrange)return;
const wordtext = documentref["getText"](wordrange);
if(wordtext["includes"]("-")||["flex","grid","block","hidden","glass","glow","card","btn"]["includes"](wordtext)){
const markdown = new vscode["MarkdownString"]();
markdown["appendMarkdown"]("**AxomCSS** `"+wordtext+"`\n\n");
if(wordtext["startsWith"]("bg-")){
markdown["appendMarkdown"]("Background utility instant JIT no build.\n\n```css\n."+wordtext["replace"](/:/g,"\\:")+" { background: ... }\n```");
}else if(wordtext["startsWith"]("text-")){
markdown["appendMarkdown"]("Typography utility.\n\n```css\n."+wordtext["replace"](/:/g,"\\:")+" { ... }\n```");
}else if(wordtext==="glass"||wordtext==="glass-strong"){
markdown["appendMarkdown"]("Built-in glass morphism backdrop-filter blur 24px saturate 200%\n\nNo extra CSS needed.");
}else if(wordtext==="glow"){
markdown["appendMarkdown"]("Glow effect box-shadow with violet glow prettier than Bootstrap.");
}else{
markdown["appendMarkdown"]("AxomCSS utility faster than Tailwind 48KB runtime.\n\n[Docs](https://github.com/axom0022/axomcss)");
}
markdown["isTrusted"] = true;
return new vscode["Hover"](markdown);
}
}});
contextref["subscriptions"]["push"](completionprovider,hoverprovider);
vscode["window"]["showInformationMessage"]("AxomCSS v4 activated instant autocomplete ready Type class=\"...\"");
}
function deactivate(){}
module.exports = {"activate":activate,"deactivate":deactivate};
