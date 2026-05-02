> axomcss is a library of css. 
> it is easy and simple to use. 

*creator : Axom*                    . 
**[our discord](https://discord.com/invite/FgR3MXqZy9)**

### AXOMCSS DOCUMENTATION

# Installation

Add this script tag to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/axom0022/axomcss@main/axomcss.min.js"></script>
```

The library automatically exposes window.axom global object.


# Core Features

1. Utility Classes

Layout & Display

```html
<!-- Display -->
<div class="flex">Flex container</div>
<div class="grid">Grid container</div>
<div class="block">Block element</div>
<div class="inline">Inline element</div>
<div class="hidden">Hidden element</div>

<!-- Flexbox -->
<div class="flex center">Centered items</div>
<div class="flex between">Space between</div>
<div class="flex col">Column direction</div>
<div class="flex row">Row direction</div>
<div class="flex wrap">Wrap items</div>
<div class="flex 1">Flex: 1</div>

<!-- Grid -->
<div class="grid cols-2">2 columns</div>
<div class="grid cols-3">3 columns</div>
<div class="grid cols-4">4 columns</div>
<div class="grid cols-6">6 columns</div>
<div class="grid cols-12">12 columns</div>
```

Spacing (Padding & Margin)

```html
<!-- All sides -->
<div class="p-4">Padding: 1rem</div>
<div class="m-4">Margin: 1rem</div>

<!-- Individual sides -->
<div class="pt-4">Padding top</div>
<div class="pr-4">Padding right</div>
<div class="pb-4">Padding bottom</div>
<div class="pl-4">Padding left</div>

<!-- Horizontal/Vertical -->
<div class="px-4">Padding left & right</div>
<div class="py-4">Padding top & bottom</div>

<!-- Margin equivalents -->
<div class="mt-4 mx-2">Margin top 1rem, horizontal 0.5rem</div>

<!-- Spacing scale -->
<!-- 0,1,2,3,4,5,6,7,8,9,10,12,16,20,24,32,40,48,56,64 -->
<div class="p-8">2rem padding</div>
<div class="m-12">3rem margin</div>

<!-- Fractions -->
<div class="p-4/2">Padding: 0.5rem (4/2)</div>
```

Colors

```html
<!-- Text Colors -->
<span class="text-primary">Primary text</span>
<span class="text-secondary">Secondary text</span>
<span class="text-red">Red text</span>
<span class="text-blue">Blue text</span>
<span class="text-green">Green text</span>
<span class="text-gray">Gray text</span>
<span class="text-white">White text</span>
<span class="text-black">Black text</span>

<!-- Background Colors -->
<div class="bg-primary">Primary background</div>
<div class="bg-surface">Surface background</div>
<div class="bg-red">Red background</div>
<div class="bg-blue">Blue background</div>

<!-- Available colors: primary, secondary, accent, background, surface, text, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose, gray, slate, zinc, neutral, stone, white, black -->
```

Typography

```html
<!-- Font Size -->
<p class="text-size-xs">Extra small</p>
<p class="text-size-sm">Small</p>
<p class="text-size-base">Base</p>
<p class="text-size-lg">Large</p>
<p class="text-size-xl">Extra large</p>
<p class="text-size-2xl">2XL</p>
<p class="text-size-3xl">3XL</p>
<p class="text-size-4xl">4XL</p>

<!-- Font Weight -->
<p class="text-weight-thin">Thin (100)</p>
<p class="text-weight-light">Light (300)</p>
<p class="text-weight-normal">Normal (400)</p>
<p class="text-weight-medium">Medium (500)</p>
<p class="text-weight-semibold">Semibold (600)</p>
<p class="text-weight-bold">Bold (700)</p>
<p class="text-weight-extrabold">Extrabold (800)</p>

<!-- Font Family -->
<p class="font-sans">Sans-serif</p>
<p class="font-mono">Monospace</p>
```

Borders & Shadows

```html
<!-- Border Radius -->
<div class="rounded-none">No radius</div>
<div class="rounded-sm">Small radius</div>
<div class="rounded-md">Medium radius</div>
<div class="rounded-lg">Large radius</div>
<div class="rounded-xl">XL radius</div>
<div class="rounded-2xl">2XL radius</div>
<div class="rounded-full">Full circle</div>

<!-- Shadows -->
<div class="shadow-sm">Small shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">XL shadow</div>
<div class="shadow-2xl">2XL shadow</div>
<div class="shadow-none">No shadow</div>

<!-- Blur Effects -->
<div class="blur-sm">Blur 4px</div>
<div class="blur-md">Blur 8px</div>
<div class="blur-lg">Blur 12px</div>
<div class="blur-xl">Blur 16px</div>
```

Positioning

```html
<div class="relative">Relative position</div>
<div class="absolute">Absolute position</div>
<div class="fixed">Fixed position</div>
<div class="sticky">Sticky position</div>

<div class="top-0">Top: 0</div>
<div class="right-0">Right: 0</div>
<div class="bottom-0">Bottom: 0</div>
<div class="left-0">Left: 0</div>

<div class="w-full">Width: 100%</div>
<div class="h-full">Height: 100%</div>
<div class="w-screen">Width: 100vw</div>
<div class="h-screen">Height: 100vh</div>
```

Animations

```html
<div class="animate-spin">Spinning</div>
<div class="animate-ping">Pinging</div>
<div class="animate-pulse">Pulsing</div>
<div class="animate-bounce">Bouncing</div>
<div class="animate-slide-in">Slide in</div>
<div class="animate-fade-in">Fade in</div>
<div class="animate-scale-in">Scale in</div>
```

Transitions

```html
<div class="transition-all">Transition all properties</div>
<div class="transition-fast">150ms duration</div>
<div class="transition-slow">500ms duration</div>
<div class="transition-opacity">Transition opacity only</div>
```

---

2. Pre-built Components

```html
<!-- Cards -->
<div class="card">Basic card with hover effect</div>

<!-- Buttons -->
<button class="btn btn-primary">Primary button</button>
<button class="btn btn-secondary">Secondary button</button>

<!-- Modal Structure -->
<div class="modal">Modal content</div>
<div class="modal-backdrop">Backdrop overlay</div>

<!-- Containers -->
<div class="container">Responsive container (max-width: 1280px)</div>
<div class="container-sm">Small container (640px)</div>
<div class="container-lg">Large container (1536px)</div>

<!-- Badges -->
<span class="badge badge-primary">New</span>

<!-- Alerts -->
<div class="alert alert-info">Information message</div>
<div class="alert alert-success">Success message</div>
<div class="alert alert-warning">Warning message</div>
<div class="alert alert-error">Error message</div>
```

---

3. Interactive States

```html
<!-- Hover Effects -->
<button class="hover:bg-primary hover:text-white">Hover me</button>

<!-- Focus Effects -->
<input class="focus:border-primary focus:shadow-md">

<!-- Active Effects -->
<button class="active:scale-95">Click me</button>
```

---

4. Responsive Design

```html
<!-- Responsive classes -->
<div class="sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
    Responsive text
</div>

<div class="sm:flex md:grid lg:flex">
    Changes layout at breakpoints
</div>

<!-- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px) -->
```

---

🎯 JavaScript API

axom.cx(...classes)

Dynamically resolve and apply classes:

```javascript
// Basic usage
const classes = axom.cx('flex', 'center', 'p-4');
// Returns: "display-flex align-items-center p-4"

// Conditional classes
const isDark = true;
const themeClasses = axom.cx(
    'text-white',
    isDark && 'bg-gray-800',
    !isDark && 'bg-white'
);

// With arrays and objects (convert to strings first)
const classList = ['flex', 'p-4'];
const objClasses = { 'bg-red': true, 'text-white': false };
const result = axom.cx(...classList, Object.keys(objClasses).filter(k => objClasses[k]));
```

Theme Management

```javascript
// Get current theme config
const config = axom.theme.get();

// Change theme preset
axom.theme.setTheme('dark');    // Built-in: light, dark, ocean, forest, sunset, midnight, corporate, neon, pastel, high-contrast

// Create custom theme
axom.theme.addTheme('custom', {
    colors: {
        background: '#f0f0f0',
        text: '#333333',
        primary: '#ff6b6b'
    }
});
axom.theme.setTheme('custom');

// Watch theme changes
const unsubscribe = axom.theme.watch((newConfig) => {
    console.log('Theme changed:', newConfig);
});

// Custom scoped theme
axom.theme.addScoped('.sidebar', {
    colors: { primary: '#ff0000', background: '#f0f0f0' }
});

// List available themes
const themes = axom.theme.listThemes(); // ['light', 'dark', 'ocean', ...]
```

Custom Utilities & Components

```javascript
// Add custom utility class
axom.addUtility('my-shadow', 'box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);');

// Add custom component
axom.addComponent('hero-section', `
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    padding: 4rem 2rem;
    border-radius: var(--radius-lg);
`);
```

Build & Optimize

```javascript
// Build all CSS (for production)
axom.build().then(css => {
    console.log('Generated CSS:', css);
    // Save to file or inline
});

// Purge unused classes
axom.purge(); // Removes unused CSS rules from document
```

Initialization with Config

```javascript
// Override default config
const customAxom = new AxomCSS({
    colors: {
        primary: '#ff0000',
        secondary: '#00ff00'
    },
    spacing: 'px',     // Use pixels instead of rem
    borderRadius: 'lg', // Default border radius
    fontFamily: 'Arial, sans-serif',
    screens: {
        tablet: '768px',
        desktop: '1024px'
    }
});
```

---

📝 Complete Examples

Example 1: Responsive Navigation Bar

```html
<nav class="bg-primary text-white p-4 shadow-md">
    <div class="container flex between items-center">
        <div class="text-size-xl font-bold">Logo</div>
        <div class="md:flex hidden space-x-4">
            <a href="#" class="hover:text-gray-200">Home</a>
            <a href="#" class="hover:text-gray-200">About</a>
            <a href="#" class="hover:text-gray-200">Contact</a>
        </div>
        <button class="md:hidden block">☰</button>
    </div>
</nav>
```

Example 2: Dynamic Theme Switcher

```javascript
// HTML: <button id="themeToggle">Switch Theme</button>

let themeIndex = 0;
const themes = ['light', 'dark', 'ocean', 'forest'];

document.getElementById('themeToggle').addEventListener('click', () => {
    themeIndex = (themeIndex + 1) % themes.length;
    axom.theme.setTheme(themes[themeIndex]);
    
    // Update button text
    event.target.textContent = `Theme: ${themes[themeIndex]}`;
});
```

Example 3: Product Card with Conditional Classes

```html
<div id="productCard" class="card p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
    <img src="product.jpg" class="w-full rounded-md">
    <h3 class="text-size-xl text-weight-bold mt-4">Product Name</h3>
    <p class="text-gray mt-2">Product description</p>
    <div class="flex between items-center mt-4">
        <span class="text-primary text-size-lg text-weight-bold">$99.99</span>
        <button class="btn btn-primary" onclick="addToCart()">Add to Cart</button>
    </div>
</div>

<script>
function updateStockStatus(inStock) {
    const card = document.getElementById('productCard');
    const classes = axom.cx(
        'card',
        inStock ? 'border-green' : 'border-red opacity-75'
    );
    card.className = classes;
}
</script>
```

Example 4: Form with Validation States

```html
<form id="signupForm">
    <div class="mb-4">
        <label class="block text-weight-medium mb-2">Email</label>
        <input type="email" id="email" class="w-full p-2 rounded-md border">
        <div id="emailError" class="text-red text-size-sm mt-1 hidden"></div>
    </div>
    <button type="submit" class="btn btn-primary w-full">Sign Up</button>
</form>

<script>
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    
    if (!email.value.includes('@')) {
        email.className = axom.cx('w-full p-2 rounded-md border border-red');
        emailError.className = axom.cx('text-red text-size-sm mt-1');
        emailError.textContent = 'Please enter a valid email';
    } else {
        email.className = axom.cx('w-full p-2 rounded-md border border-green');
        emailError.className = 'hidden';
    }
});
</script>
```


# Best Practices

1. Use axom.cx() for dynamic classes - It optimizes and caches styles
2. Leverage built-in themes - Use axom.theme.setTheme() for consistent theming
3. Purge in production - Call axom.purge() to remove unused CSS
4. Combine utility classes - Use multiple small utilities instead of custom CSS
5. Responsive first - Design mobile-first using sm:, md:, lg: prefixes


# Troubleshooting

Issue Solution
Classes not applying Check if script loaded before elements, or call axom.cx() manually
Theme not changing Ensure theme name exists in axom.themes
Custom colors not working Use --color-{name} CSS variables
Animations not playing Check prefers-reduced-motion settings

