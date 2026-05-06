# 🌱 Vaagai Green Farm - Sustainable Urban Farming Website

![Vaagai Green Farm](https://img.shields.io/badge/UrbanFarming-Sustainable-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-blue)

> A complete, SEO-optimized front-end website for Vaagai Green Farm — an innovative agritech startup in Arakkonam, Tamil Nadu, promoting organic vegetables, hydroponics, aquaponics, beekeeping, and sustainable farming education.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Pages & Structure](#pages--structure)
- [SEO Implementation](#seo-implementation)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Installation & Setup](#installation--setup)
- [Customization Guide](#customization-guide)
- [Browser Support](#browser-support)
- [Credits](#credits)
- [License](#license)

---

## 🌿 Overview

Vaagai Green Farm is a modern urban farming initiative based in Arakkonam, Tamil Nadu. This website serves as their digital storefront, showcasing their commitment to **pesticide-free organic produce**, **water-efficient hydroponics**, **aquaponics systems**, **pure honey**, **specialty flowers**, and **community workshops**. The website is fully responsive, SEO-optimized, and includes engaging animations, floating social media widgets, and a custom 404 page with interactive plant animation.

---

## ✨ Features

### 🎨 Frontend Features
- **Fully Responsive Design** – Works seamlessly on desktop, tablet, and mobile devices.
- **Smooth Scroll Animations** – Fade-in on scroll, floating elements, and CSS keyframe animations.
- **Custom 404 Page** – Interactive "Thirsty Plant" animation where users can click to water the plant (adds personality and reduces bounce rate).
- **Sticky Floating Social Bar** – WhatsApp, Facebook, Instagram, and LinkedIn icons visible on all pages.
- **Mobile-Friendly Navigation** – Hamburger menu with smooth toggle.
- **Counter Animations** – Statistics section with dynamic number counting.
- **Parallax Floating Elements** – Leaves and eco-themed icons floating softly on hero sections.

### 🧭 Functional Pages
| Page | Description |
|------|-------------|
| **Home (index.html)** | Hero section, features grid, stats counter, CTA, and service highlights. |
| **About (about.html)** | Mission, vision, values, expertise, milestones, and story of Vaagai Green Farm. |
| **Services (products.html)** | Detailed service cards: organic veggies, honey, hydroponics, aquaponics, flowers, workshops. |
| **Contact (contact.html)** | Contact form, location map info, phone, email, WhatsApp direct link. |
| **404 Page** | Custom error page with plant animation and site navigation suggestions. |

### 🔍 SEO Enhancements
- **Meta Tags** – Title, description, keywords, author, geo-region, and viewport.
- **Open Graph Tags** – For rich social sharing on Facebook, LinkedIn, and WhatsApp.
- **Twitter Cards** – Optimized for Twitter sharing.
- **Canonical URLs** – Prevent duplicate content issues.
- **Schema.org Structured Data (JSON-LD)** – Organization, LocalBusiness, ContactPage, ItemList for services, and BreadcrumbList.
- **Semantic HTML5** – Proper use of `<header>`, `<section>`, `<footer>`, `<nav>`, `<article>`.
- **Accessibility** – ARIA labels on social icons, alt attributes for images, focus styles.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup |
| **CSS3** | Custom styling, animations, gradients |
| **JavaScript (Vanilla)** | Scroll animations, counter, hamburger menu, water drop effect on 404 page |
| **Font Awesome 6** | Social icons, UI icons |
| **Google Fonts** | Poppins font family |
| **Animate.css** | Pre-built animation classes |
| **Intersection Observer API** | Scroll-triggered reveals |
| **JSON-LD** | Structured data for search engines |

---

## 📁 File Structure
vaagai-green-farm/
│
├── index.html # Homepage
├── about.html # About page (mission, vision, expertise)
├── products.html # Services page
├── contact.html # Contact & inquiry form
├── 404.html # Custom 404 error page (thirsty plant animation)
│
├── css/
│ ├── style.css # Core styles (variables, navbar, hero, footer)
│ ├── animations.css # Keyframe animations (pulse, glow, slide, etc.)
│ └── responsive.css # Mobile & tablet breakpoints (max-width: 768px, 480px)
│
├── js/
│ ├── main.js # Hamburger menu, counter, smooth scroll
│ ├── animations.js # Scroll reveal, ripple effect, stagger animations
│ └── scroll-animate.js # Scroll-based triggers, navbar shadow, section detection
│
├── images/ # (Optional) Store OG images, favicon, farm photos
│ ├── favicon.ico
│ ├── og-image.jpg
│ └── about-og.jpg
│
├── README.md # Project documentation
└── .gitignore # (Optional) Ignore dev files


> **Note:** External libraries (Font Awesome, Google Fonts, Animate.css) are loaded via CDN.

---

## 🚀 Installation & Setup

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional – you can open files directly)

### Steps to Run Locally

1. **Clone or Download**
   ```bash
   git clone https://github.com/yourusername/vaagai-green-farm.git

Or download the ZIP and extract.

Navigate to Project Folder

bash
cd vaagai-green-farm
Open with Live Server (Recommended)

Use VS Code with Live Server extension.

Right-click index.html → "Open with Live Server".

OR simply double-click index.html – all pages will work (some external fonts & icons require internet).

Verify all pages:

Home: http://localhost:5500/index.html

About: about.html

Services: products.html

Contact: contact.html

404: 404.html

🎨 Customization Guide
Change Logo / Brand Name
Edit the .logo-text inside index.html and all pages.

Update the <title> tag on each HTML file.

Update Contact Information
Phone number, address, email: Edit within each footer and contact page.

WhatsApp number: Update href="https://wa.me/919655118268" across all floating bars and buttons.

Modify Colors
Open css/style.css and change CSS variables inside :root:

:root {
    --primary-color: #22c55e;    /* Main green */
    --secondary-color: #84cc16;  /* Light green */
    --dark-color: #1f2937;       /* Dark text */
}
Adjust Floating Social Icons
Edit the .floating-social-bar div in each HTML file to add/remove platforms.

Update SEO Meta Tags
Edit the <head> section per page:

<meta name="description">

<meta name="keywords">

Open Graph tags (og:title, og:description, etc.)

Replace Images
Place your own images inside /images/ folder.

Update og:image and any <img> src attributes.

🌐 Browser Support
Browser	Version	Status
Chrome	90+	✅ Fully supported
Firefox	88+	✅ Fully supported
Safari	14+	✅ Fully supported
Edge	90+	✅ Fully supported
Opera	75+	✅ Fully supported
iOS Safari	14+	✅ Responsive & touch-friendly
Android Chrome	90+	✅ Fully supported
CSS Grid, Flexbox, Intersection Observer, and ES6 are used – all modern browsers are supported.

📸 Preview & Demo
https://via.placeholder.com/800x400?text=Vaagai+Green+Farm+Homepage

Live Demo: https://vaagaigreenfarm.com (update with your actual domain)

🤝 Credits
Design & Development – Vaagai Green Farm Team

Icons – Font Awesome 6

Animations – Animate.css

Fonts – Google Fonts (Poppins)

Structured Data Guidance – Schema.org

📄 License
This project is proprietary to Vaagai Green Farm.
All rights reserved. For any reuse, redistribution, or modification, please contact the farm administration.

📞 Support & Contact
For technical issues or website inquiries:

Email: hello@vaagaigreenfarm.com

Phone: +91 96551 18268

WhatsApp: Click to Chat

🧪 Future Enhancements (Roadmap)
Add a blog / news section for farm updates

Integrate a working contact form backend (PHP/Node.js)

Implement Google Maps embed for location

Add product catalog with pricing

E-commerce functionality for organic vegetable subscriptions

Multilingual support (Tamil & English)

*🌻 Vaagai Green Farm – Growing Fresh Food, Sustainably. *

Last Updated: March 2026