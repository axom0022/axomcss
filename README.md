> axomcss is a library of css. 
> it is easy and simple to use. 

*creator : Axom*                    . 
**[our discord](https://discord.com/invite/FgR3MXqZy9)**

>> AXOMCSS DOCUMENTATION

CDN link

```html
<script src="https://cdn.jsdelivr.net/gh/axom0022/axomcss@main/axomcss.min.js"></script>
```

---

THEMES


axom.theme.setTheme('light')
axom.theme.setTheme('dark')
axom.theme.setTheme('ocean')
axom.theme.setTheme('forest')
axom.theme.setTheme('sunset')
axom.theme.setTheme('midnight')
axom.theme.setTheme('corporate')
axom.theme.setTheme('neon')
axom.theme.setTheme('pastel')
axom.theme.setTheme('high-contrast')


---

COLORS

Semantic Colors

```
bg-primary        text-primary
bg-secondary      text-secondary
bg-accent         text-accent
bg-background     text-text
bg-surface
```

Standard Colors

```
bg-red            text-red
bg-orange         text-orange
bg-amber          text-amber
bg-yellow         text-yellow
bg-lime           text-lime
bg-green          text-green
bg-emerald        text-emerald
bg-teal           text-teal
bg-cyan           text-cyan
bg-sky            text-sky
bg-blue           text-blue
bg-indigo         text-indigo
bg-violet         text-violet
bg-purple         text-purple
bg-fuchsia        text-fuchsia
bg-pink           text-pink
bg-rose           text-rose
bg-gray           text-gray
bg-slate          text-slate
bg-zinc           text-zinc
bg-neutral        text-neutral
bg-stone          text-stone
bg-white          text-white
bg-black          text-black
bg-transparent    text-transparent
bg-current        text-current
```

---

SPACING (0-64)

Padding

```
p-0 to p-64
px-0 to px-64
py-0 to py-64
pt-0 to pt-64
pr-0 to pr-64
pb-0 to pb-64
pl-0 to pl-64
```

Margin

```
m-0 to m-64
mx-0 to mx-64
my-0 to my-64
mt-0 to mt-64
mr-0 to mr-64
mb-0 to mb-64
ml-0 to ml-64
```

---

DISPLAY

```
flex
grid
block
inline
inline-block
hidden
```

---

FLEXBOX

```
flex:row
flex:col
flex:row-reverse
flex:col-reverse
flex:center
flex:between
flex:wrap
flex:nowrap
flex:1
flex:grow
flex:shrink
```

---

GRID

```
grid:cols-2
grid:cols-3
grid:cols-4
grid:cols-6
grid:cols-12
```

---

POSITION

```
relative
absolute
fixed
sticky
top-0
right-0
bottom-0
left-0
```

---

SIZING

```
w-full
w-screen
h-full
h-screen
```

---

BORDER RADIUS

```
rounded
rounded:none
rounded:sm
rounded:md
rounded:lg
rounded:xl
rounded:2xl
rounded:full
```

---

BOX SHADOW

```
shadow
shadow:sm
shadow:md
shadow:lg
shadow:xl
shadow:2xl
shadow:none
```

---

FILTERS

```
blur:sm
blur:md
blur:lg
blur:xl
```

---

ANIMATIONS

```
animate-spin
animate-ping
animate-pulse
animate-bounce
animate-fade-in
animate-slide-in
animate-scale-in
```

---

TRANSITIONS

```
transition:all
transition:fast
transition:slow
```

---

TYPOGRAPHY

Text Color

```
text-primary
text-secondary
text-accent
text-text
text-white
text-black
text-gray
text-red
text-blue
text-green
text-yellow
text-purple
text-pink
```

Font Size

```
text:size-xs
text:size-sm
text:size-base
text:size-lg
text:size-xl
text:size-2xl
text:size-3xl
text:size-4xl
text:size-5xl
text:size-6xl
```

Font Weight

```
text:weight-thin
text:weight-light
text:weight-normal
text:weight-medium
text:weight-semibold
text:weight-bold
text:weight-extrabold
text:weight-black
```

Font Family

```
font:sans
font:mono
```

---

COMPONENTS

Card

```
card
```

Buttons

```
btn
btn-primary
btn-secondary
```

Badges

```
badge
badge-primary
```

Alerts

```
alert
alert-info
alert-success
alert-warning
alert-error
```

Containers

```
container
container-sm
container-lg
```

Modal

```
modal
modal-backdrop
```

---

PSEUDO-CLASSES

```
hover:class
focus:class
active:class
```

---

RESPONSIVE BREAKPOINTS

```
sm:class     640px
md:class     768px
lg:class     1024px
xl:class     1280px
2xl:class    1536px
```

---

SYNTAX EXAMPLES

Basic Card

```html
<div class="card bg-surface p-6 rounded-lg shadow-md">
  <h3 class="text-primary font-bold">Title</h3>
  <p class="text-text">Content here</p>
  <button class="btn btn-primary mt-4">Action</button>
</div>
```

Flex Layout

```html
<div class="flex center between p-4">
  <div class="text-white">Left</div>
  <div class="text-white">Right</div>
</div>
```

Grid Layout

```html
<div class="grid:cols-3 gap-4">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
</div>
```

Alert

```html
<div class="alert alert-success">Operation completed successfully</div>
<div class="alert alert-error mt-2">Something went wrong</div>
```

Animated Element

```html
<div class="animate-pulse text-primary">Loading...</div>
<div class="animate-spin">⟳</div>
```

Responsive

```html
<div class="block md:flex lg:grid:cols-2">
  <div>content</div>
</div>
```

Interactive Button

```html
<button class="btn btn-primary hover:bg-blue-600 focus:outline-none">
  Hover or focus me
</button>
```

Modal Trigger

```html
<button class="btn btn-primary" onclick="axom.modal.open('#myModal')">
  Open Modal
</button>

<div id="myModal" class="modal" style="display:none">
  <h3>Modal Title</h3>
  <p>Modal content</p>
  <button onclick="axom.modal.close('#myModal')">Close</button>
</div>
<div class="modal-backdrop" style="display:none"></div>
```

Theme Switcher

```html
<button onclick="axom.theme.setTheme('midnight')">Midnight</button>
<button onclick="axom.theme.setTheme('ocean')">Ocean</button>
<button onclick="axom.theme.setTheme('light')">Light</button>
```

---

API METHODS

```javascript
axom.theme.setTheme(name)
axom.theme.get()
axom.theme.addTheme(name, config)
axom.theme.listThemes()
axom.modal.open(selector)
axom.modal.close(selector)
axom.addUtility(name, css)
axom.addComponent(name, css)
axom.purge()
axom.build()
```

---

SPACING VALUES REFERENCE

Value rem px
0 0rem 0px
1 0.25rem 4px
2 0.5rem 8px
3 0.75rem 12px
4 1rem 16px
5 1.25rem 20px
6 1.5rem 24px
8 2rem 32px
10 2.5rem 40px
12 3rem 48px
16 4rem 64px
20 5rem 80px
24 6rem 96px
32 8rem 128px
40 10rem 160px
48 12rem 192px
64 16rem 256px

---

CSS VARIABLES

```
--color-primary
--color-secondary
--color-accent
--color-background
--color-surface
--color-text
--color-red
--color-blue
--color-green
--radius-sm
--radius-md
--radius-lg
--radius-xl
--radius-2xl
--radius-full
--shadow-sm
--shadow-md
--shadow-lg
--shadow-xl
--shadow-2xl
--font-sans
--font-mono
