/* ==========================================================================
   DEVFORGE 2026 (DevForge '26)
   Kollywood Mass Punch Dialogue Tech Generator - Cinema Engine Edition
   ========================================================================== */

const kollywoodDialogues = [
  // 1. Superstar Rajinikanth
  {
    hero: "superstar",
    heroName: "Superstar Rajinikanth",
    avatar: "👑",
    tag: "Thalaivar Mass",
    dialogue: "Naan oru thadava code commit panna... noora thadava run aana maathiri!",
    movie: "Baashha (1995)",
    context: "Clean Code & Git Commit Mastery"
  },
  {
    hero: "superstar",
    heroName: "Superstar Rajinikanth",
    avatar: "🕶️",
    tag: "Padayappa Swag",
    dialogue: "En vazhi... clean architecture vazhi! Production-ku vandha single tea shot-la zero-downtime deploy!",
    movie: "Padayappa (1999)",
    context: "Zero-Downtime Deployment & CI/CD"
  },
  {
    hero: "superstar",
    heroName: "Superstar Rajinikanth",
    avatar: "🦁",
    tag: "Jailer Hukum",
    dialogue: "Alappara kelapparom... DevForge 2026-la first prize thookki koodave podium blast panrom!",
    movie: "Jailer (2023)",
    context: "Hackathon Championship Mindset"
  },
  {
    hero: "superstar",
    heroName: "Superstar Rajinikanth",
    avatar: "💸",
    tag: "Sivaji The Boss",
    dialogue: "Kanna, panni dhan O(n^2) loop-la suthum... Singam epovum O(1) constant time-la single shot-la finish pannum!",
    movie: "Sivaji (2007)",
    context: "Algorithmic Time Complexity Optimization"
  },

  // 2. Thalapathy Vijay
  {
    hero: "thalapathy",
    heroName: "Thalapathy Vijay",
    avatar: "🔥",
    tag: "Thuppakki Style",
    dialogue: "I am waiting... for that 0 Errors, 0 Warnings, Production Build!",
    movie: "Thuppakki (2012)",
    context: "Flawless Production Build Deployment"
  },
  {
    hero: "thalapathy",
    heroName: "Thalapathy Vijay",
    avatar: "⚔️",
    tag: "Leo Bloody Sweet",
    dialogue: "Bloody Sweet! Serverless backend 100K concurrent requests handle panniduchu!",
    movie: "Leo (2023)",
    context: "High-Concurrency Cloud Architecture"
  },
  {
    hero: "thalapathy",
    heroName: "Thalapathy Vijay",
    avatar: "🎧",
    tag: "Master Vibe",
    dialogue: "Vathi coming othukko! AI neural network training convergence aagi 99.9% accuracy reach aayiduchu!",
    movie: "Master (2021)",
    context: "Deep Learning Model Convergence"
  },
  {
    hero: "thalapathy",
    heroName: "Thalapathy Vijay",
    avatar: "⚡",
    tag: "Ghilli Mass",
    dialogue: "Indha area, andha area, any track area... All 4 DevForge themes-layum namma code dhan king!",
    movie: "Ghilli (2004)",
    context: "Cross-Track Dominance"
  },

  // 3. Thala Ajith Kumar
  {
    hero: "thala",
    heroName: "Thala Ajith Kumar",
    avatar: "⚡",
    tag: "Mankatha Gaming",
    dialogue: "En vazhi thani vazhi! No StackOverflow, no copy-paste... Only pure raw algorithmic logic!",
    movie: "Mankatha (2011)",
    context: "Hardcore Algorithmic Problem Solving"
  },
  {
    hero: "thala",
    heroName: "Thala Ajith Kumar",
    avatar: "🏍️",
    tag: "Billa Swagger",
    dialogue: "Enna thedi bugs varalaam... Aana naan thedi pona oru memory leak kooda escape aagathu!",
    movie: "Billa (2007)",
    context: "Ruthless Bug Hunting & Security Pentesting"
  },
  {
    hero: "thala",
    heroName: "Thala Ajith Kumar",
    avatar: "🏁",
    tag: "Vedalam Rage",
    dialogue: "Theri panna poren! Microservices response time 2 milliseconds-la lock pannitaen!",
    movie: "Vedalam (2015)",
    context: "Ultra Low-Latency Performance Tuning"
  },

  // 4. Kamal Haasan (Vikram / LCU)
  {
    hero: "ulaganayagan",
    heroName: "Kamal Haasan (Vikram)",
    avatar: "🦅",
    tag: "LCU Commander",
    dialogue: "Arambikalaangala? 24 hours-la enterprise cloud system architect panni full prototype deliver panrom!",
    movie: "Vikram (2022)",
    context: "Hackathon Kickoff Battlecry"
  },
  {
    hero: "ulaganayagan",
    heroName: "Kamal Haasan (Nayakan)",
    avatar: "🎭",
    tag: "Nayakan Philosophy",
    dialogue: "Naalu peruku nalladhu nadakkum-na endha open-source PR-ayum merge pannalam thappey illa!",
    movie: "Nayakan (1987)",
    context: "Open Source Contribution Ethos"
  },

  // 5. Chitti Robo 2.0
  {
    hero: "chitti",
    heroName: "Chitti Robo 2.0",
    avatar: "🤖",
    tag: "Robo Tech Overclock",
    dialogue: "Speed 1 Terahertz, Memory 1 Zettabyte! Full-stack hackathon project built and deployed in 0.001 milliseconds!",
    movie: "Enthiran 2.0 (2018)",
    context: "Ultra High-Performance Computing"
  },
  {
    hero: "chitti",
    heroName: "Chitti Robo 2.0",
    avatar: "🔴",
    tag: "Red Neural Chip",
    dialogue: "Security mode activated! Neural shield enabled. Zero DDoS, Zero SQL injections penetrated!",
    movie: "Enthiran (2010)",
    context: "Cybersecurity & Fortress Hardening"
  },

  // 6. Suriya (Chronos 24 / Rolex)
  {
    hero: "suriya",
    heroName: "Suriya (Rolex / 24)",
    avatar: "⏳",
    tag: "Time Freeze Watch",
    dialogue: "Oru nimisham time freeze panni bug-ah hot-patch panni live production-ku push panniruven!",
    movie: "24 The Movie (2016)",
    context: "Hot-Reloading & Live Patching"
  },
  {
    hero: "suriya",
    heroName: "Suriya (Rolex)",
    avatar: "🦂",
    tag: "Rolex Sir",
    dialogue: "Sir, oru 24 hours time kudunga... Enterprise app ready panni pitch desk-la rule pannidren!",
    movie: "Vikram (2022)",
    context: "High-Stakes Demo Presentation"
  }
];

class DialogueEngine {
  constructor() {
    this.currentHero = "all";
    this.takeNumber = 1;
    this.isSpeaking = false;

    // DOM Elements
    this.card = document.getElementById('dialogue-main-card');
    this.dialogueText = document.getElementById('dialogue-quote');
    this.dialogueAuthor = document.getElementById('dialogue-speaker');
    this.heroChips = document.querySelectorAll('.hero-chip');
    this.generateBtn = document.getElementById('generate-dialogue-btn');
    this.copyBtn = document.getElementById('copy-dialogue-btn');
    this.takeNumEl = document.getElementById('dialogue-take-num');
    this.emblemEl = document.getElementById('hero-dynamic-emblem');
    this.equalizerEl = document.getElementById('dialogue-equalizer');

    this.currentDialogueItem = kollywoodDialogues[0];

    this.init();
  }

  init() {
    // Hero filter chips
    if (this.heroChips) {
      this.heroChips.forEach(chip => {
        chip.addEventListener('click', () => {
          this.heroChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          this.currentHero = chip.getAttribute('data-hero');
          this.getRandomDialogue();
          if (window.cinemaAudio) window.cinemaAudio.playClick();
        });
      });
    }

    // Generate dialogue button
    if (this.generateBtn) {
      this.generateBtn.addEventListener('click', () => {
        this.takeNumber += 1;
        if (this.takeNumEl) this.takeNumEl.textContent = this.takeNumber;
        this.getRandomDialogue();
        if (window.cinemaAudio) window.cinemaAudio.playMassBassDrop();
      });
    }

    // Copy dialogue button
    if (this.copyBtn) {
      this.copyBtn.addEventListener('click', () => {
        this.copyCurrentDialogue();
      });
    }

    // Initial dialogue render
    this.getRandomDialogue(true);
  }

  getRandomDialogue(isFirstLoad = false) {
    if (!this.dialogueText || !this.dialogueAuthor) return;

    let filtered = kollywoodDialogues;
    if (this.currentHero && this.currentHero !== 'all') {
      filtered = kollywoodDialogues.filter(d => d.hero === this.currentHero);
    }

    // Pick random item (avoid repeating identical consecutive if possible)
    let candidates = filtered.length > 1 
      ? filtered.filter(item => item.dialogue !== (this.currentDialogueItem && this.currentDialogueItem.dialogue))
      : filtered;
    
    if (candidates.length === 0) candidates = filtered;
    const item = candidates[Math.floor(Math.random() * candidates.length)];
    this.currentDialogueItem = item;

    // Update Card Theme & Emblem
    if (this.card) {
      this.card.setAttribute('data-hero-theme', item.hero);
    }
    if (this.emblemEl) {
      this.emblemEl.textContent = item.avatar;
    }

    // Trigger Equalizer Pulse
    if (this.equalizerEl) {
      this.equalizerEl.classList.add('active');
      setTimeout(() => {
        if (!this.isSpeaking && this.equalizerEl) {
          this.equalizerEl.classList.remove('active');
        }
      }, 1000);
    }

    // Smooth transition animation
    if (!isFirstLoad) {
      this.dialogueText.style.opacity = '0';
      this.dialogueText.style.transform = 'translateY(12px) scale(0.98)';
      this.dialogueAuthor.style.opacity = '0';

      setTimeout(() => {
        this.renderDialogueContent(item);
        this.dialogueText.style.opacity = '1';
        this.dialogueText.style.transform = 'translateY(0) scale(1)';
        this.dialogueText.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
        this.dialogueAuthor.style.opacity = '1';
        this.dialogueAuthor.style.transition = 'all 0.35s ease';
      }, 180);
    } else {
      this.renderDialogueContent(item);
    }
  }

  renderDialogueContent(item) {
    this.dialogueText.textContent = item.dialogue;
    this.dialogueAuthor.innerHTML = `
      <span class="author-name">${item.avatar} ${item.heroName}</span> • 
      <span class="author-movie">${item.movie || item.context}</span> • 
      <span class="author-context">${item.context}</span>
    `;
  }

  copyCurrentDialogue() {
    if (!this.currentDialogueItem) return;

    const copyText = `"${this.currentDialogueItem.dialogue}" — ${this.currentDialogueItem.heroName} (${this.currentDialogueItem.context}) #DevForge2026`;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(copyText).then(() => {
        if (window.showToast) {
          window.showToast("📋 Punchline copied to clipboard! Share the mass!");
        }
        if (window.cinemaAudio) window.cinemaAudio.playClick();
      }).catch(() => {
        this.fallbackCopy(copyText);
      });
    } else {
      this.fallbackCopy(copyText);
    }
  }

  fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    if (window.showToast) {
      window.showToast("📋 Punchline copied to clipboard!");
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.dialogueEngine = new DialogueEngine();
});
