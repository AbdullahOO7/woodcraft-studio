# 🌳 WoodCraft Studio Website

A beautiful, fully responsive website for your custom wood and epoxy furniture business. Built with pure HTML, CSS, and JavaScript - no frameworks required.

## ✨ Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Product Gallery** - Showcase all your wood furniture, epoxy tables, iron stands, and cabinets
- **Epoxy Color Customizer** - Interactive tool where customers can:
  - Choose table type (Coffee, Dining, Side, Nightstand)
  - Select from 8 epoxy colors (Ocean Blue, Forest Green, Golden Amber, Galaxy Purple, Ruby Red, Onyx Black, Pearl White, Turquoise)
  - Pick wood type (Walnut, Oak, Cherry, Maple, Pine)
  - See a live preview of their combination
- **Inquiry Form** - Customers can request quotes with product selection and epoxy color preferences
- **Product Filtering** - Filter by category: All, Epoxy Tables, Wood Furniture, Iron & Metal, Storage
- **Smooth Animations** - Scroll animations, hover effects, and smooth scrolling navigation
- **SEO Ready** - Proper meta tags and semantic HTML structure

## 📁 Files

```
woodcraft-website/
├── index.html      # Main HTML file (all sections in one page)
├── styles.css      # All styles and responsive design
├── script.js       # All interactive functionality
└── README.md       # This file
```

## 🚀 How to Deploy for Free (GitHub Pages)

### Step 1: Create a GitHub Account
1. Go to https://github.com and sign up for free

### Step 2: Create a New Repository
1. Click the **+** icon → **New repository**
2. Name it: `woodcraft-studio` (or any name you want)
3. Make it **Public**
4. Click **Create repository**

### Step 3: Upload Your Files
1. In your new repository, click **"Uploading an existing file"**
2. Drag and drop all 3 files (`index.html`, `styles.css`, `script.js`)
3. Click **Commit changes**

### Step 4: Enable GitHub Pages
1. Go to **Settings** tab
2. Click **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**
6. Wait 1-2 minutes, then visit the URL shown (e.g., `https://yourusername.github.io/woodcraft-studio/`)

## 📧 Setup Form Submissions (Formspree - Free)

Your contact form needs a backend to send emails. Here's the free setup:

1. Go to https://formspree.io/
2. Sign up for free (50 submissions/month)
3. Click **New Project** → **New Form**
4. Copy your form endpoint URL (e.g., `https://formspree.io/f/xnqeqjya`)
5. Open `index.html` and find this line:
   ```html
   <form class="contact-form" id="inquiryForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
6. Replace `YOUR_FORM_ID` with your actual form ID from Formspree

## 📱 Update Your Contact Information

Before launching, update these in `index.html`:

### WhatsApp Number
Find: `href="https://wa.me/1234567890"` and replace with your actual WhatsApp number (with country code, no + or spaces)

### Email Address
Find: `href="mailto:your-email@example.com"` and replace with your email

### Location
Find: `Your City, Country` and replace with your actual location

### Social Media Links
Find the Facebook, Instagram, Pinterest links and replace `#` with your actual profile URLs.

## 🎨 Customization

### Change Colors
Edit the CSS variables at the top of `styles.css`:
```css
:root {
    --primary: #5d4e37;      /* Main brown color */
    --accent: #c4956a;      /* Gold/amber accent */
    --cream: #faf6f1;       /* Background color */
    ...
}
```

### Add Real Product Photos
Replace the CSS gradient "images" in the product cards with actual `<img>` tags:

1. Take photos of your work
2. Upload them to the GitHub repository (in an `images/` folder)
3. Replace gradient backgrounds with:
   ```html
   <img src="images/your-photo.jpg" alt="Product Name">
   ```

### Add/Remove Products
Edit the product cards in `index.html` in the `#products` section. Each product card follows this pattern:
```html
<div class="product-card" data-category="epoxy">
    <div class="product-image">[Your image or gradient]</div>
    <div class="product-info">
        <h3>Product Name</h3>
        <p class="product-desc">Description...</p>
        <div class="product-meta">
            <span class="delivery-time"><i class="far fa-clock"></i> 2-3 weeks</span>
        </div>
        <button class="btn-inquiry" data-product="Product Name">Inquire Now</button>
    </div>
</div>
```

## 🔗 Connect with Facebook Ads

After your website is live:

1. **Get your website URL** (e.g., `https://yourusername.github.io/woodcraft-studio/`)
2. Go to Facebook Ads Manager: https://business.facebook.com/ads/manage
3. Create a new campaign with objective: **Traffic** or **Leads**
4. In the ad creative, use your website URL as the destination
5. Create engaging ad copy highlighting your custom epoxy tables

## 🖼️ Replace Placeholder Images

The current website uses CSS gradients as placeholders. To add real photos:

1. Create an `images` folder in your project
2. Add your photos: `table1.jpg`, `chair1.jpg`, etc.
3. In the product cards, replace the `div class="product-image"` with:
   ```html
   <div class="product-image">
       <img src="images/table1.jpg" alt="Product Name" style="width:100%;height:100%;object-fit:cover;">
   </div>
   ```
4. Update the gallery section similarly

## 📊 Website Structure

| Section | Description |
|---------|-------------|
| **Hero** | Big banner with your business name, tagline, and CTA buttons |
| **Products** | Filterable gallery of all products with inquiry buttons |
| **Design Your Table** | Interactive epoxy color customizer with live preview |
| **Gallery** | Visual showcase of completed projects |
| **About** | Your story, stats, and why customers choose you |
| **Contact** | Quote request form with epoxy color selection |

## 🛠️ Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Need Help?

The console in your browser (F12 → Console) shows setup instructions when you load the page.

---

Made with ❤️ for your woodworking business!
