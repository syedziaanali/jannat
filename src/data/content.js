/**
 * =======================================================================
 * JANNAT & ZIAAN — LOVE STORY & EMOTIONAL RECONNECTION CONFIGURATION
 * =======================================================================
 * 
 * ZIAAN, YOU CAN CUSTOMIZE ALL CONTENT IN THIS FILE EASILY:
 * - Update your names and messages.
 * - Change the WhatsApp phone number (with country code, e.g. '919876543210')
 * - Change background music or add your own audio file.
 * - Customize the heartfelt letter anytime.
 */

export const siteConfig = {
  girlfriendName: "Jannat",
  boyfriendName: "Ziaan",
  siteTitle: "If You Ever Forget How Much I Love You",
  subtitle: "A little universe made with love, accountability, and a quiet heart that will always listen.",
  
  // WhatsApp Configuration (Option for Jannat to reach out if she feels ready)
  // Format: international format without '+' or spaces, e.g. "919876543210"
  whatsapp: {
    phoneNumber: "917507274276", // Ziaan's WhatsApp number
    prefilledMessage: "Hey Ziaan... I saw what you made. Can we talk?",
  },

  // Audio Configuration (Turned OFF by default as required)
  audio: {
    title: "Soft Piano & Starlight (Romantic Theme)",
    artist: "A gentle melody for Jannat",
    // Gentle copyright-free romantic ambient piano track (hosted & reliable)
    // You can also place an mp3 file in the /public folder (e.g. '/music/our-song.mp3') and put that path here!
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112199.mp3",
  },

  // Section 1: Opening Hero
  hero: {
    greeting: "Hey Jannat... ❤️",
    leadMessage: "I made a little universe for someone who means the world to me.",
    scrollHint: "Scroll gently to continue",
  },

  // Chapter I: What I Adore About You
  // Interactive glowing cards revealing loving messages
  adorations: {
    headline: "What I Adore About You",
    subheadline: "In a world full of noise, here are the little wonders about you that captivate my soul.",
    items: [
      {
        id: "smile",
        title: "Your Radiant Smile",
        tag: "Pure Sunshine",
        icon: "Sparkles",
        shortDesc: "The way your entire face lights up...",
        fullMessage: "Your smile isn't just beautiful—it has this calming gravity that disarms any worry I carry. Even on days when everything feels overwhelming, seeing you smile feels like arriving safely back home.",
        highlight: "A warmth that softens the world."
      },
      {
        id: "laughter",
        title: "Your Infectious Laughter",
        tag: "Favorite Melody",
        icon: "Heart",
        shortDesc: "Unfiltered, sweet, and pure joy...",
        fullMessage: "When you really laugh—the kind that comes from deep inside where you lose your breath for a second—it is hands down my favorite sound on this earth. It's a reminder of how bright life can be.",
        highlight: "The soundtrack to my happiest moments."
      },
      {
        id: "kindness",
        title: "Your Tender Kindness",
        tag: "Rare Heart",
        icon: "Feather",
        shortDesc: "The gentle care you show to others...",
        fullMessage: "You possess a gentle empathy that is so rare. You notice when someone is quiet, you feel deeply for people, and your heart is always soft even when the world is rough. It inspires me to be better.",
        highlight: "A softness that is actually immense strength."
      },
      {
        id: "habits",
        title: "Your Sweet Little Habits",
        tag: "Uniquely You",
        icon: "Stars",
        shortDesc: "The quirky, adorable little things...",
        fullMessage: "The way you explain things with so much excitement, the subtle expressions you make when you're thinking, how you care about tiny details—all those little things make you irreplacably you.",
        highlight: "Every quirk is poetry to me."
      },
      {
        id: "peace",
        title: "The Peace of Being With You",
        tag: "Sanctuary",
        icon: "Compass",
        shortDesc: "The quiet comfort in your presence...",
        fullMessage: "With you, I never had to wear a mask or pretend to be someone else. Just sitting quietly beside you, listening to you breathe or talk about your day, brought me a stillness I never found anywhere else.",
        highlight: "My favorite stillness."
      }
    ]
  },

  // Chapter II: What I Wish I Did Better (Accountability & Sincere Reflection)
  // Sincere, humble, no claiming specific mistakes as absolute facts, no defensive tone.
  reflection: {
    headline: "What I Wish I Did Better",
    subheadline: "True love requires looking inward, taking accountability, and learning how to love someone the way they need to be loved.",
    introNote: "Jannat, I don't want to make excuses or defend myself. If you are feeling distant or hurt, your feelings are valid. Here is what I reflect upon with all my honesty:",
    reflections: [
      {
        title: "I Want to Listen to Understand, Not to Respond",
        description: "Sometimes in the rush of life, I may have replied with logic when your heart just needed comfort. I wish I had held more quiet space for you, listening to your unspoken words and emotional needs without getting defensive.",
        takeaway: "Your emotions deserve to be held gently, never debated."
      },
      {
        title: "Awaiting Your Timing, Not Pressuring Mine",
        description: "When communication felt tense, I may have unintentionally overwhelmed you with too much at once. I am learning that love means giving you room to breathe, respecting your emotional pace, and not forcing quick resolutions.",
        takeaway: "Patience is how love proves its sincerity."
      },
      {
        title: "Noticing the Small Shifts Sooner",
        description: "I wish I had been more observant to the subtle ways you were carrying weight alone. You shouldn't have had to reach a breaking point for me to realize that you were hurting or feeling disconnected.",
        takeaway: "Attunement requires continuous attention, not just good intentions."
      },
      {
        title: "Love Shown Through Consistent Actions",
        description: "Words of love are easy to speak, but real emotional safety is built in everyday consistency, thoughtfulness, and humility. I am committed to growing into a partner who reflects that every single day.",
        takeaway: "Accountability is a promise of growth, not just an apology."
      }
    ],
    closingQuote: "I don't expect things to magically fix themselves overnight. I only want you to know that I see you, I hear you, and your peace will always matter more to me than my pride."
  },

  // Chapter III: A Letter From My Heart
  // Interactive envelope with wax seal & handwritten Hinglish letter
  letter: {
    envelopePrompt: "Click the seal to unfold what's inside my heart",
    salutation: "Dearest Jannat (Mera Bachaaa),",
    hinglishText: `Bachaaaa, mujhe nahi pata ki hum dono ke beech kab aur kaise itni doori aa gayi. Shayad kuch baatein main samajh nahi paaya. Main tumhe blame nahi karna chahta. Bas itna kehna hai ki jo moments humne saath bitaye woh mere liye bahut special hain. Main tumhari feelings sunna chahta hoon, bina argue kiye. Main tumse bahut pyaar karta hoon, jaan. Agar tumhe space chahiye, main uski respect karunga. ❤️`,
    extendedEnglishNote: `You will never have to explain your boundaries twice to me. If you need time to breathe, take it. If you need silence, I will honor it. And if you ever decide to look back, you will find only gratitude, warmth, and an open door.`,
    signoff: "Forever yours in sincerity,",
    signature: "Ziaan",
    date: "Under the quiet stars"
  },

  // Chapter IV: One Last Thing (The Constellation & The Gentle Choice)
  constellation: {
    headline: "One Last Thing...",
    subheadline: "Look closely at the stars above—they form a constellation that will always hold your name.",
    messagePrimary: "If there is still a little space for us to talk, I'd love to listen.",
    messageSecondary: "And if your heart needs a different path, I will respect that too.",
    chatButtonText: "Can We Talk?",
    respectButtonText: "Not right now",
    respectResponse: {
      title: "I Respect Your Heart Completely, Jannat.",
      message: "Thank you for being true to yourself. There is zero pressure, zero guilt, and nothing but pure love and gratitude for you in my heart. Take all the time and space you need.",
      quote: "\"Love doesn't demand its own way; it protects, trusts, and holds gentle grace.\"",
      footer: "Always wishing you peace, happiness, and all the light in the world. — Ziaan ❤️"
    }
  },

  // Footer
  footer: {
    madeWithLove: "Made with love, Ziaan ❤️",
    dedication: "Crafted specifically for Jannat — with all the care in the universe.",
    year: "2026",
    gentleReminder: "No pressure. No conditions. Just unconditional love."
  }
};
