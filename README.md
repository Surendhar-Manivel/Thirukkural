# திருக்குறள் Website — Beginner's Guide

A beautiful, fully functional Thirukkural website built with **plain HTML, CSS, and JavaScript** — no frameworks, no build tools, no npm. Just open the files and it works.

---

## Tech Stack

| Layer    | Technology             | Why                                      |
|----------|------------------------|------------------------------------------|
| HTML     | Plain HTML5            | Simple, no compilation needed            |
| CSS      | Plain CSS (one file)   | CSS variables for design tokens          |
| JS       | Plain JavaScript       | No frameworks — easy to read and edit    |
| Fonts    | Google Fonts (CDN)     | Noto Serif Tamil + Crimson Pro           |
| Hosting  | Any static host        | No server required                       |

---

## File Structure

```
thirukkural/
│
├── index.html          ← Homepage with hero + Kural of the Day
├── browse.html         ← Browse all kurals by Pal and Adhigaram
├── search.html         ← Search kurals in Tamil and English
├── detail.html         ← Individual kural detail page
├── thiruvalluvar.html  ← Thiruvalluvar biography
│
├── css/
│   └── style.css       ← All styles in one file
│
├── js/
│   └── main.js         ← All JavaScript logic in one file
│
└── data/
    └── kurals.js       ← All 1330 kurals as a JS array
```

---

## How to Run Locally

### Option 1: Just open the file (simplest)
Double-click `index.html`. It opens in your browser and works immediately.

> **Note:** The `copyText()` function needs a web server for security reasons in some browsers. Use Option 2 if copy buttons don't work.

### Option 2: VS Code Live Server (recommended)
1. Install [VS Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Opens at `http://localhost:5500`

### Option 3: Python (if installed)
```bash
cd thirukkural
python3 -m http.server 3000
# Open http://localhost:3000
```

---

## How to Add the Full 1330 Kurals

The file `data/kurals.js` currently has **20 sample kurals**. To add all 1330:

### Step 1: Download the dataset
Go to: https://github.com/vijayanandrp/Thirukkural-Tamil-Dataset

Download `kural.json` from the repository.

### Step 2: Convert to our format
Each kural in our format looks like this:

```js
{
  number: 1,
  pal: { ta: "அறத்துப்பால்", en: "Virtue" },
  iyal: { ta: "பாயிரவியல்", en: "Preface" },
  adhigaram: { number: 1, ta: "கடவுள் வாழ்த்து", en: "God" },
  kural: {
    line1: "அகர முதல எழுத்தெல்லாம் ஆதி",
    line2: "பகவன் முதற்றே உலகு."
  },
  meaning: {
    ta: "தமிழ் பொருள் இங்கே...",
    en: "English meaning here..."
  },
  couplet_en: "English couplet here...",
  transliteration: "Transliteration here...",
  tags: {
    ta: ["கடவுள்", "ஆரம்பம்"],
    en: ["god", "beginning"]
  }
}
```

### Step 3: Replace the array in kurals.js
Replace the `const KURALS = [...]` array with all 1330 entries. Keep all the utility functions at the bottom.

---

## How to Deploy for Free

### Option A: GitHub Pages (easiest)
1. Create a free account at [github.com](https://github.com)
2. Create a new repository called `thirukkural`
3. Upload all the files
4. Go to Settings → Pages → Source: main branch
5. Your site is live at `https://yourusername.github.io/thirukkural`

### Option B: Netlify (drag and drop)
1. Go to [netlify.com](https://netlify.com) and sign up free
2. Drag your `thirukkural/` folder onto the Netlify dashboard
3. Live in 30 seconds at a Netlify URL

### Option C: Vercel
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Import your GitHub repository
3. Click Deploy — done

---

## How to Customize

### Change colours
Open `css/style.css` and find the `:root` block at the top:
```css
:root {
  --color-gold: #B8860B;   /* ← change this */
  --color-stone: #1C0F06;  /* ← or this */
  --color-lotus: #8B1A4A;  /* ← etc */
}
```

### Change fonts
In `css/style.css`, find the `@import url(...)` at the top and swap font names.

### Add a new page
1. Copy `detail.html`
2. Rename it
3. Add a link in the `<nav>` of every page

---

## Understanding the Code

### `data/kurals.js`
- Contains all kural data as a JavaScript array called `KURALS`
- Has helper functions: `searchKurals()`, `filterByPal()`, `getKuralByNumber()`

### `js/main.js`
Organised into clearly labelled sections:
- **Section 1:** Rendering — turn kural data into HTML
- **Section 2:** Search — filter kurals by query
- **Section 3:** Browse / Filter — filter by Pal or Adhigaram
- **Section 4:** Kural of the Day — picks today's kural
- **Section 5:** Detail Page — renders the full kural detail
- **Section 6:** Copy to Clipboard — copy buttons
- **Section 7:** Helpers — small utility functions
- **Section 8:** Page Init — runs when page loads

### `css/style.css`
Organised with comments for each section:
- CSS variables (colours, fonts, spacing)
- Reset
- Layout utilities
- Navbar
- Buttons and tags
- Kural card
- Page-specific sections

---

## Recommended Next Steps

1. **Add all 1330 kurals** from the GitHub dataset
2. **Add more scholar meanings** — Parimelalagar, Mu. Varadharasanar
3. **Add a "Share as image"** feature (html2canvas library)
4. **Add Google Analytics** for usage tracking
5. **Add a custom domain** (free with Netlify or GitHub Pages)
6. **Submit to Google Search Console** for SEO

---

## Dataset Credits

- **vijayanandrp/Thirukkural-Tamil-Dataset** — Tamil meanings and structure
- **tk120404/thirukkural** — JSON format reference
- **Project Madurai** — Classical translations

All free and open source.
