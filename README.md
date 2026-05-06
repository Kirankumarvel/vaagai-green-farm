## 🌱 Vaagai Green Farm — Sustainable Urban Farming Website

![Vaagai Green Farm](https://img.shields.io/badge/UrbanFarming-Sustainable-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-blue)

A complete, SEO-optimized front-end website for **Vaagai Green Farm** — an innovative agritech startup in **Arakkonam, Tamil Nadu**, promoting organic vegetables, hydroponics, aquaponics, beekeeping, and sustainable farming education.

---

## 📌 Overview

Vaagai Green Farm is a modern urban farming initiative based in Arakkonam, Tamil Nadu. This website serves as their digital storefront, showcasing their commitment to:

- **Pesticide-free organic produce**
- **Water-efficient hydroponics**
- **Aquaponics systems**
- **Pure honey & beekeeping**
- **Specialty flowers**
- **Community workshops & sustainable farming education**

The site is **fully responsive**, **SEO-focused**, and includes animations, floating social media widgets, and a custom interactive **404 page**.

---

## ✨ Features

### 🎨 Front-End Highlights
- ✅ Fully responsive (desktop / tablet / mobile)
- ✅ Smooth scroll + fade-in reveal animations
- ✅ Floating eco-themed hero elements (parallax feel)
- ✅ Sticky floating social bar (WhatsApp, Facebook, Instagram, LinkedIn)
- ✅ Mobile navigation with hamburger menu
- ✅ Counter/statistics animation section
- ✅ Clean semantic HTML5 layout

### 🌿 Custom 404 Page (Interactive)
Includes a “Thirsty Plant” animation where users can click to water the plant — adds brand personality and helps reduce bounce rate.

---

## 📄 Pages & Site Structure

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, features grid, stats counters, CTA, service highlights |
| About | `about.html` | Mission, vision, values, expertise, milestones, story |
| Services / Products | `products.html` | Service cards: veggies, honey, hydroponics, aquaponics, flowers, workshops |
| Contact | `contact.html` | Form, phone, email, map/location info, WhatsApp link |
| 404 | `404.html` | Custom error page with interactive animation |

---

## 🔍 SEO Implementation

This project includes SEO best practices across all pages:

### ✅ Meta + Social Sharing
- Title, description, keywords, author, geo-region, viewport
- Open Graph tags (Facebook/LinkedIn/WhatsApp rich preview)
- Twitter Card metadata
- Canonical URLs (avoid duplicate content)

### ✅ Structured Data (JSON‑LD)
Uses Schema.org JSON-LD types such as:
- `Organization`
- `LocalBusiness`
- `ContactPage`
- `ItemList` (services)
- `BreadcrumbList`

### ✅ Semantic & Accessible Markup
- Semantic HTML5 tags (`<header>`, `<nav>`, `<section>`, `<footer>`, etc.)
- Alt text for images
- ARIA labels for social icons
- Focus styles for keyboard navigation

---

## 🛠️ Technologies Used

| Technology | Purpose |
|----------|---------|
| **HTML5** | Semantic markup |
| **CSS3** | Styling, animations, gradients |
| **JavaScript (Vanilla)** | Scroll animations, counters, hamburger menu, 404 interactions |
| **Font Awesome 6** | Icons & social buttons |
| **Google Fonts (Poppins)** | Typography |
| **Animate.css** | Prebuilt animations |
| **Intersection Observer API** | Scroll-triggered reveals |
| **JSON‑LD (Schema.org)** | Structured data for SEO |

---

## 📁 File Structure

```text
vaagai-green-farm/
│
├── index.html                # Homepage
├── about.html                # About page
├── products.html             # Services/Products page
├── contact.html              # Contact page
├── 404.html                  # Custom 404 page (interactive plant)
│
├── css/
│   ├── style.css             # Core styles (variables, navbar, hero, footer)
│   ├── animations.css        # Keyframe animations (pulse, glow, slide, etc.)
│   └── responsive.css        # Breakpoints (768px, 480px)
│
├── js/
│   ├── main.js               # Hamburger menu, counter, smooth scroll
│   ├── animations.js         # Scroll reveal, ripple effect, stagger animations
│   └── scroll-animate.js     # Scroll triggers, navbar shadow, section detection
│
├── images/                   # Assets (optional)
│   ├── favicon.ico
│   ├── og-image.jpg
│   └── about-og.jpg
│
├── README.md                 # Documentation
└── .gitignore                # Optional ignore rules
```

**Note:** External libraries (Font Awesome, Google Fonts, Animate.css) are loaded via CDN.

---

## 🚀 Installation & Setup

### ✅ Prerequisites
- Any modern browser (Chrome / Firefox / Safari / Edge)
- Local web server (optional, recommended)

### ▶️ Run Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/kirankumarvel/vaagai-green-farm.git
   ```

2. **Open the project folder**
   ```bash
   cd vaagai-green-farm
   ```

3. **Run using Live Server (recommended)**
   - Open the folder in VS Code
   - Right-click `index.html` → **Open with Live Server**

   OR simply open `index.html` directly in a browser.

### ✅ Verify Pages
- Home: `index.html`
- About: `about.html`
- Services: `products.html`
- Contact: `contact.html`
- 404: `404.html`

---

## 🎨 Customization Guide

### 1) Change Logo / Brand Name
- Update `.logo-text` in **all HTML files**
- Update the `<title>` tag per page

### 2) Update Contact Information
- Phone number, address, email → update in footer + `contact.html`
- WhatsApp link (update everywhere it appears):
  ```html
  https://wa.me/919655118268
  ```

### 3) Modify Colors (Theme)
Edit CSS variables inside `css/style.css`:

```css
:root {
  --primary-color: #22c55e;    /* Main green */
  --secondary-color: #84cc16;  /* Light green */
  --dark-color: #1f2937;       /* Dark text */
}
```

### 4) Adjust Floating Social Icons
Edit the `.floating-social-bar` block in each HTML file to add/remove platforms.

### 5) Update SEO Meta Tags
In each page `<head>` section, update:
- `<meta name="description">`
- `<meta name="keywords">`
- Open Graph tags (`og:title`, `og:description`, `og:image`, etc.)
- Canonical URL

### 6) Replace Images
- Put assets in `/images/`
- Update `og:image` and `<img src="...">` paths accordingly

---

## 🌐 Browser Support

Modern browser support is expected because the site uses:
- CSS Grid / Flexbox
- ES6 JavaScript
- Intersection Observer API

| Browser | Version | Status |
|--------|---------|--------|
| Chrome | 90+ | ✅ Fully supported |
| Firefox | 88+ | ✅ Fully supported |
| Safari | 14+ | ✅ Fully supported |
| Edge | 90+ | ✅ Fully supported |
| Opera | 75+ | ✅ Fully supported |
| iOS Safari | 14+ | ✅ Responsive & touch-friendly |
| Android Chrome | 90+ | ✅ Fully supported |

---

## 📸 Preview & Demo

**Preview image (placeholder):**  
https://via.placeholder.com/800x400?text=Vaagai+Green+Farm+Homepage

**Live Demo:**  
https://vaagaigreenfarm.com *(replace with your actual domain if different)*

---

## 🤝 Credits

- **Design & Development:** Vaagai Green Farm Team  
- **Icons:** Font Awesome 6  
- **Animations:** Animate.css  
- **Fonts:** Google Fonts (Poppins)  
- **Structured Data Guidance:** Schema.org  

---

## 📄 License

This project is **proprietary to Vaagai Green Farm**.  
All rights reserved. For any reuse, redistribution, or modification, please contact the farm administration.

---

## 📞 Support & Contact

For technical issues or website inquiries:

- **Email:** hello@vaagaigreenfarm.com  
- **Phone:** +91 96551 18268  
- **WhatsApp:** Click to Chat (via floating bar / direct link)

---

## 🧪 Future Enhancements (Roadmap)

- Add a blog / news section for farm updates
- Integrate a working contact form backend (PHP/Node.js)
- Implement Google Maps embed for location
- Add product catalog with pricing
- E-commerce functionality for organic vegetable subscriptions
- Multilingual support (Tamil & English)

---

**Vaagai Green Farm — Growing Fresh Food, Sustainably.**

**Last Updated:** MAY 2026
