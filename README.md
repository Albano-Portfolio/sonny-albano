# 🏓 Sonny Albano — Pickleball & Tennis Website

**Live website for Sonny Albano's pickleball/tennis instruction business and pro shop.**

---

## 📁 Project Files

```
sonny-pickleball/
├── index.html          ← Main website (open this in a browser to preview)
├── css/
│   └── styles.css      ← All styles and design
├── js/
│   └── main.js         ← Interactions, animations, form handling
└── README.md           ← This file
```

---

## 🚀 Step-by-Step: Upload to GitHub & Go Live (Free)

### STEP 1 — Create a GitHub Account (if you don't have one)
1. Go to **https://github.com**
2. Click **"Sign up"** (top right)
3. Enter your email, create a username and password
4. Verify your email

---

### STEP 2 — Create a New Repository
1. After logging in, click the **green "New"** button (top left) or go to:
   `https://github.com/new`
2. **Repository name:** Type exactly → `sonny-albano` (or any name you like)
3. Make sure it's set to **Public**
4. ✅ Check **"Add a README file"**
5. Click **"Create repository"** (green button)

---

### STEP 3 — Upload Your Files
1. Inside your new repository, click **"Add file"** → **"Upload files"**
2. **Drag and drop** ALL of these into the upload area:
   - `index.html`
   - The **entire `css` folder** (drag the whole folder)
   - The **entire `js` folder** (drag the whole folder)
3. Scroll down to "Commit changes"
4. Leave the default message or type: `Add website files`
5. Click **"Commit changes"** (green button)

> ⚠️ **Important:** Make sure `index.html` is at the ROOT level (not inside a subfolder).
> The structure in GitHub should look like:
> ```
> index.html
> css/styles.css
> js/main.js
> ```

---

### STEP 4 — Enable GitHub Pages (Free Hosting)
1. In your repository, click **"Settings"** (top menu, gear icon)
2. In the left sidebar, scroll down and click **"Pages"**
3. Under **"Branch"**, click the dropdown and select **"main"**
4. Make sure the folder shows **"/ (root)"**
5. Click **"Save"**

---

### STEP 5 — Get Your Live URL
1. After clicking Save, wait **1–3 minutes**
2. Refresh the Pages settings page
3. You'll see a green box with your live URL:
   ```
   https://YOUR-USERNAME.github.io/sonny-albano/
   ```
4. **Click it — your website is live! 🎉**

---

## 📬 Setting Up the Contact Form (So Messages Actually Send)

The contact form currently shows a success animation but doesn't send real emails.
To make it send real emails for **FREE**, use **Formspree**:

### Option A — Formspree (Recommended, Free)
1. Go to **https://formspree.io** and create a free account
2. Click **"New Form"** → give it a name like "Sonny Contact Form"
3. Copy the **form endpoint URL** (looks like `https://formspree.io/f/xxxxxxxx`)
4. Open `js/main.js` in a text editor
5. Find this line near the bottom of the form submit handler:
   ```js
   // Simulate send (replace with real backend/formspree/netlify)
   setTimeout(() => {
   ```
6. Replace the entire form submit handler with:
   ```js
   form.addEventListener('submit', async (e) => {
     e.preventDefault();
     const btn = form.querySelector('button[type="submit"]');
     btn.textContent = 'Sending...';
     btn.disabled = true;
     
     const data = new FormData(form);
     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       body: data,
       headers: { 'Accept': 'application/json' }
     });
     
     if (response.ok) {
       btn.textContent = '✓ Message Sent! Sonny will be in touch soon.';
       btn.style.background = '#22c55e';
       form.reset();
     } else {
       btn.textContent = 'Error — please email directly';
       btn.style.background = '#ef4444';
     }
     btn.disabled = false;
   });
   ```
7. Replace `YOUR_FORM_ID` with your actual Formspree form ID
8. Upload the updated `main.js` to GitHub (same upload steps as above)
9. Form submissions will now arrive in your email inbox!

---

## 🌐 Using a Custom Domain (Optional)

If you want the URL to be `www.sonnypickleball.com` instead of the GitHub URL:

1. Buy a domain from **Namecheap** (~$10/yr) or **GoDaddy**
2. In your GitHub Pages settings, enter your custom domain
3. GitHub will give you DNS settings to enter at your domain registrar
4. Takes 24–48 hours to activate

**Recommended domain ideas:**
- `sonnypickleball.com`
- `albanocoach.com`
- `sonnypickleballph.com`
- `coachsonnyalbano.com`

---

## 📱 The Website Includes

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern dark navy + electric lime color scheme
- ✅ Hero with animated court lines
- ✅ Stats bar (40+ years, 7 years pickleball, 1st place, PTR certified)
- ✅ About section with awards
- ✅ Career timeline
- ✅ 6 service cards (pickleball, tennis, racket stringing, etc.)
- ✅ Pro Shop section
- ✅ Contact form
- ✅ Smooth scroll animations
- ✅ Mobile hamburger menu
- ✅ SEO-ready meta tags

---

## ✏️ How to Edit Content

All text content is in `index.html`. Open it in any text editor (Notepad, TextEdit, VS Code).

**To change the phone number:** Search for `615-653-5918` and update it.
**To change the email:** Search for `albanosonny@yahoo.com` and update it.
**To add lesson prices:** Find the service cards in `index.html` and add pricing inside.
**To change colors:** Open `css/styles.css` and edit the `:root` section at the top.

---

## 📞 Need Help?

If you run into any issues uploading or activating GitHub Pages, these free guides help:
- GitHub Pages docs: https://pages.github.com
- Formspree docs: https://help.formspree.io

---

*Built for Sonny Albano — Senior Olympic Champion · PTR Certified · Philippines 🇵🇭*
