# If You Ever Forget How Much I Love You ❤️
### A Cinematic Universe for Jannat, From Ziaan

A deeply emotional, respectful, and romantic web experience created to express unconditional love, heartfelt gratitude, accountability, and emotional safety without guilt-tripping, pressure, or expectations.

---

## 🌟 Features & Sections

1. **Chapter 0 • Opening (Hero)**
   - Starlight cosmos background with animated twinkling stars and soft romantic nebulae.
   - Elegant greeting: *"Hey Jannat... ❤️"*
   - Gentle lead: *"I made a little universe for someone who means the world to me."*
   - Glowing **"Open My Heart"** button with a blooming heart opening animation into the story.

2. **Chapter I • Our Story (Cinematic Timeline)**
   - Headline: *"Every little moment with you matters to me."*
   - Interactive timeline of memories with editable photo cards, date placeholders, and location notes.
   - Click-to-enlarge photo lightbox with polaroid captions.

3. **Chapter II • What I Adore About You**
   - Interactive glowing cards revealing sincere messages:
     - *Your Radiant Smile* (disarms any worry, feels like arriving home)
     - *Your Infectious Laughter* (favorite sound in the world)
     - *Your Tender Kindness* (gentle empathy and soft heart)
     - *Your Sweet Little Habits* (the cute quirks that make her irreplacably herself)
     - *The Peace of Being With You* (the stillness and comfort of just sitting together)
   - Micro-heart sparkle effect on tap/hover.

4. **Chapter III • What I Wish I Did Better (Accountability & Reflections)**
   - Emotionally mature, sincere accountability with zero defensiveness.
   - Reflections on:
     - Listening to understand rather than to defend or reply with cold logic.
     - Respecting her emotional timing and avoiding pressure for quick fixes.
     - Noticing subtle shifts sooner so she never has to carry emotional weight alone.
     - Proving love through consistent everyday actions, humility, and emotional safety.

5. **Chapter IV • A Letter From My Heart (Interactive Envelope & Wax Seal)**
   - An interactive 3D wax seal envelope stamped with **"Z ❤️ J"**.
   - Clicking breaks the seal to unfold a typeset letter on delicate stationery.
   - Features the exact heartfelt Hinglish message:
     > *"Bachaaaa, mujhe nahi pata ki hum dono ke beech kab aur kaise itni doori aa gayi. Shayad kuch baatein main samajh nahi paaya. Main tumhe blame nahi karna chahta. Bas itna kehna hai ki jo moments humne saath bitaye woh mere liye bahut special hain. Main tumhari feelings sunna chahta hoon, bina argue kiye. Main tumse bahut pyaar karta hoon, jaan. Agar tumhe space chahiye, main uski respect karunga. ❤️"*

6. **Chapter V • One Last Thing (The Constellation & The Gentle Choice)**
   - A celestial starry sky with an animated constellation forming a glowing heart centered around *"Jannat's Star"*.
   - Sincere words:
     - *"If there is still a little space for us to talk, I'd love to listen."*
     - *"And if your heart needs a different path, I will respect that too."*
   - Two transparent, non-manipulative options:
     - **"Can We Talk?"** — Opens a pre-filled WhatsApp draft (`https://wa.me/...`) without auto-sending, allowing her to send only if she chooses to.
     - **"Not right now"** — Gracefully opens a warm, comforting modal honoring her boundaries with zero guilt and complete peace.

7. **Bonus Touches**
   - **Polaroid Gallery**: Tilt-shift polaroid frames of memories.
   - **Floating Audio Player**: Luxury waveform player that is **OFF by default** as requested, with volume slider and play/pause controls.
   - **Cursor Heart Trail**: Subtle heart particles following cursor on desktop and soft touch ripples on mobile.
   - **Accessibility**: Built-in "Gentle Motion" toggle (`prefers-reduced-motion` aware).
   - **Footer**: *"Made with love, Ziaan ❤️"*.

---

## 🎨 How to Customize (Takes 2 Minutes)

All memories, text, photos, phone numbers, and music are neatly organized in one single file:
👉 **`src/data/content.js`**

### 1. Update WhatsApp Phone Number
Open `src/data/content.js` and edit:
```javascript
whatsapp: {
  phoneNumber: "919876543210", // Put your country code + phone number here without '+'
  prefilledMessage: "Hey Ziaan... I saw what you made. Can we talk?",
}
```

### 2. Replace Photos with Your Own
In `src/data/content.js`, you can replace the image URLs under `timeline.memories` and `gallery.photos` with:
- Any direct image URL (from Google Photos, Imgur, Cloudinary, etc.)
- Or put your photos inside the `public/photos/` folder (e.g. `/photos/memory1.jpg`) and set `image: "/photos/memory1.jpg"`.

### 3. Change Background Song
In `src/data/content.js`:
```javascript
audio: {
  title: "Your Song Name",
  artist: "Artist Name",
  audioUrl: "/music/our-song.mp3", // Place your MP3 inside the /public folder
}
```

---

## 🚀 How to Run Locally

### Method 1: Using Python (Simplest)
Just open your terminal in this folder and run:
```bash
python run.py
```
*(Or on Windows, simply double-click the [`run.bat`](file:///c:/Users/LOQ/OneDrive/Desktop/all%20in%20one/jannat/run.bat) file!)*

It will automatically:
- Install packages if needed
- Start the server
- Automatically open your browser to `http://localhost:3000`

To run the static production server using only Python (no Node required):
```bash
python run.py --static
```

### Method 2: Using npm directly
```bash
npm run dev
```

---

## 🌐 How to Deploy for Free (Shareable Link for Jannat)

### Option A: Deploy to Vercel (Recommended — Takes 1 minute)
1. Push your folder to a GitHub repository or install the Vercel CLI:
   ```bash
   npm i -g vercel
   vercel
   ```
2. Or go to [vercel.com](https://vercel.com), log in with GitHub, click **Add New Project**, select this repository, and click **Deploy**. Vercel will automatically detect `vite` and deploy it instantly.
3. You get a clean link like `https://for-jannat.vercel.app` that you can share with her!

### Option B: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and log in.
2. Drag and drop the `dist/` folder into the Netlify dashboard, or connect your GitHub repository.
3. It deploys in seconds.

---

*Made with love, Ziaan ❤️*
