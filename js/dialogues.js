/* ==========================================================================
   DEVFORGE 2026 (DevForge '26)
   Kollywood Iconic Punch Dialogue Engine with Actor Voice Audio Playback
   ========================================================================== */

const kollywoodDialogues = [
  // 1. Superstar Rajinikanth
  {
    hero: "superstar",
    heroName: "Superstar Rajinikanth",
    icon: "fa-solid fa-crown",
    tag: "Baashha Mass",
    dialogue: "Naan oru thadava sonna... nooru thadava sonna madhiri!",
    movie: "Baashha (1995)",
    context: "Iconic Mass Statement",
    audioFile: "assets/audio/dialogues/rajini_baashha.mp3"
  },
  {
    hero: "superstar",
    heroName: "Superstar Rajinikanth",
    icon: "fa-solid fa-glasses",
    tag: "Padayappa Swag",
    dialogue: "En vazhi... thani vazhi! Seendadha!",
    movie: "Padayappa (1999)",
    context: "Signature Style & Attitude",
    audioFile: "assets/audio/dialogues/rajini_padayappa.mp3"
  },
  {
    hero: "superstar",
    heroName: "Superstar Rajinikanth",
    icon: "fa-solid fa-paw",
    tag: "Jailer Hukum",
    dialogue: "Hukum... Tiger Ka Hukum! Alappara kelapparom!",
    movie: "Jailer (2023)",
    context: "Blockbuster Tiger Roar",
    audioFile: "assets/audio/dialogues/rajini_jailer.mp3"
  },
  {
    hero: "superstar",
    heroName: "Superstar Rajinikanth",
    icon: "fa-solid fa-coins",
    tag: "Sivaji The Boss",
    dialogue: "Kanna, panni dhan kootama varum... Singam single-ah dhan varum!",
    movie: "Sivaji The Boss (2007)",
    context: "Legendary Mass Punch",
    audioFile: "assets/audio/dialogues/rajini_sivaji.mp3"
  },
  {
    hero: "superstar",
    heroName: "Superstar Rajinikanth",
    icon: "fa-solid fa-bolt",
    tag: "Annamalai Roar",
    dialogue: "Naan solradhaiyum seiven... solladdhaiyum seiven!",
    movie: "Annamalai (1992)",
    context: "Unbeatable Challenge",
    audioFile: "assets/audio/dialogues/rajini_annamalai.mp3"
  },
  {
    hero: "superstar",
    heroName: "Superstar Rajinikanth",
    icon: "fa-solid fa-star",
    tag: "Muthu Punch",
    dialogue: "Naan eppo varuven, epdi varuven-nu yarukkum theriyadhu... Aana vara vendiya nerathula correct-ah vandhuduvain!",
    movie: "Muthu (1995)",
    context: "Timeless Entry Punch",
    audioFile: "assets/audio/dialogues/rajini_muthu.mp3"
  },
  {
    hero: "superstar",
    heroName: "Superstar Rajinikanth",
    icon: "fa-solid fa-fire",
    tag: "Petta Swagger",
    dialogue: "Kaali da... Petta paraak!",
    movie: "Petta (2019)",
    context: "Vintage Thalaivar Mass",
    audioFile: "assets/audio/dialogues/rajini_petta.mp3"
  },

  // 2. Thalapathy Vijay
  {
    hero: "thalapathy",
    heroName: "Thalapathy Vijay",
    icon: "fa-solid fa-fire",
    tag: "Thuppakki Style",
    dialogue: "I am waiting!",
    movie: "Thuppakki (2012)",
    context: "Ultimate Climax War Cry",
    audioFile: "assets/audio/dialogues/vijay_thuppakki.mp3"
  },
  {
    hero: "thalapathy",
    heroName: "Thalapathy Vijay",
    icon: "fa-solid fa-shield-halved",
    tag: "Leo Bloody Sweet",
    dialogue: "Bloody Sweet!",
    movie: "Leo (2023)",
    context: "LCU Badass Climax Catchphrase",
    audioFile: "assets/audio/dialogues/vijay_leo.mp3"
  },
  {
    hero: "thalapathy",
    heroName: "Thalapathy Vijay",
    icon: "fa-solid fa-crosshairs",
    tag: "Pokkiri Attitude",
    dialogue: "Oru vaati mudivu pannita... en pecha naane kekka maaten!",
    movie: "Pokkiri (2007)",
    context: "Unyielding Determination",
    audioFile: "assets/audio/dialogues/vijay_pokkiri.mp3"
  },
  {
    hero: "thalapathy",
    heroName: "Thalapathy Vijay",
    icon: "fa-solid fa-bolt",
    tag: "Ghilli Mass",
    dialogue: "Indha area, andha area, endha area-layum enakku bayam kidayadhu... All area-layum aiyya Ghilli da!",
    movie: "Ghilli (2004)",
    context: "All-Area Dominance",
    audioFile: "assets/audio/dialogues/vijay_ghilli.mp3"
  },
  {
    hero: "thalapathy",
    heroName: "Thalapathy Vijay",
    icon: "fa-solid fa-masks-theater",
    tag: "Mersal Swagger",
    dialogue: "Neenga aala maathalaam... aana adhe aal thirumba varumpothu, Aandavane vandhaalum thadukka mudiyaadhu!",
    movie: "Mersal (2017)",
    context: "High Voltage Mass Warning",
    audioFile: "assets/audio/dialogues/vijay_mersal.mp3"
  },
  {
    hero: "thalapathy",
    heroName: "Thalapathy Vijay",
    icon: "fa-solid fa-headphones",
    tag: "Master Vibe",
    dialogue: "Vathi coming othukko!",
    movie: "Master (2021)",
    context: "Swag Entry Beat",
    audioFile: "assets/audio/dialogues/vijay_master.mp3"
  },

  // 3. Thala Ajith Kumar
  {
    hero: "thala",
    heroName: "Thala Ajith Kumar",
    icon: "fa-solid fa-dice",
    tag: "Mankatha Gaming",
    dialogue: "En vazhi thani vazhi... Vinayagam game starts now! Money Money Money... No rules!",
    movie: "Mankatha (2011)",
    context: "Ruthless Anti-Hero Swagger",
    audioFile: "assets/audio/dialogues/ajith_mankatha.mp3"
  },
  {
    hero: "thala",
    heroName: "Thala Ajith Kumar",
    icon: "fa-solid fa-gauge-high",
    tag: "Billa Swagger",
    dialogue: "I'm back! Enna thedi ethaavathu varalaam... Aana naan thedi pona oruthan kooda escape aaga mudiyaadhu!",
    movie: "Billa (2007)",
    context: "Deadly Style & Alpha Swag",
    audioFile: "assets/audio/dialogues/ajith_billa.mp3"
  },
  {
    hero: "thala",
    heroName: "Thala Ajith Kumar",
    icon: "fa-solid fa-flag-checkered",
    tag: "Vedalam Rage",
    dialogue: "Theri panna poren... Theri!",
    movie: "Vedalam (2015)",
    context: "Transformation Mass Outburst",
    audioFile: "assets/audio/dialogues/ajith_vedalam.mp3"
  },
  {
    hero: "thala",
    heroName: "Thala Ajith Kumar",
    icon: "fa-solid fa-bolt",
    tag: "Vivegam Willpower",
    dialogue: "Never, ever, give up!",
    movie: "Vivegam (2017)",
    context: "Iron Willpower War Cry",
    audioFile: "assets/audio/dialogues/ajith_vivegam.mp3"
  },
  {
    hero: "thala",
    heroName: "Thala Ajith Kumar",
    icon: "fa-solid fa-crown",
    tag: "Varalaru Pride",
    dialogue: "En vaazhkkaiyla ovvoru naalum, ovvoru nimishamum, yen ovvoru nodiyum naana sethukkitadhu da!",
    movie: "Varalaru (2006)",
    context: "Self-Made Legend Monologue",
    audioFile: "assets/audio/dialogues/ajith_varalaru.mp3"
  },

  // 4. Kamal Haasan (Vikram / LCU / Nayakan)
  {
    hero: "ulaganayagan",
    heroName: "Kamal Haasan (Vikram)",
    icon: "fa-solid fa-feather-pointed",
    tag: "LCU Commander",
    dialogue: "Aarambikkalaangala?",
    movie: "Vikram (2022)",
    context: "LCU Commander Battle Cry",
    audioFile: "assets/audio/dialogues/kamal_vikram.mp3"
  },
  {
    hero: "ulaganayagan",
    heroName: "Kamal Haasan (Vikram)",
    icon: "fa-solid fa-fire",
    tag: "Pathala Pathala",
    dialogue: "Pathala Pathala... Sandhula vandhu kooda sandai poduven!",
    movie: "Vikram (2022)",
    context: "Fearless Ground Warfare",
    audioFile: "assets/audio/dialogues/kamal_pathala.mp3"
  },
  {
    hero: "ulaganayagan",
    heroName: "Kamal Haasan (Nayakan)",
    icon: "fa-solid fa-masks-theater",
    tag: "Nayakan Philosophy",
    dialogue: "Naalu perukku nalladhu nadakkum-na... edhuvume thappu illa!",
    movie: "Nayakan (1987)",
    context: "Legendary Godfather Morality",
    audioFile: "assets/audio/dialogues/kamal_nayakan.mp3"
  },
  {
    hero: "ulaganayagan",
    heroName: "Kamal Haasan (Dasavathaaram)",
    icon: "fa-solid fa-om",
    tag: "Dasavathaaram Philosophy",
    dialogue: "Kadavul illai-nu sollala... Irundha nalla irukkum-nu dhaan solren!",
    movie: "Dasavathaaram (2008)",
    context: "Intellectual Masterclass",
    audioFile: "assets/audio/dialogues/kamal_dasavathaaram.mp3"
  },
  {
    hero: "ulaganayagan",
    heroName: "Kamal Haasan (Thevar Magan)",
    icon: "fa-solid fa-crown",
    tag: "Thevar Magan Legacy",
    dialogue: "Unakku vendiyadhai nee dhaan kettu vaanganum!",
    movie: "Thevar Magan (1992)",
    context: "Classic Cinema Golden Words",
    audioFile: "assets/audio/dialogues/kamal_thevarmagan.mp3"
  },

  // 5. Chitti Robo 2.0
  {
    hero: "chitti",
    heroName: "Chitti Robo 2.0",
    icon: "fa-solid fa-robot",
    tag: "Robo Tech Overclock",
    dialogue: "Hello world! Memory 1 Zettabyte, speed 1 Terahertz! Chitti speed 1 THz!",
    movie: "Enthiran (2010)",
    context: "Super Android Initialization",
    audioFile: "assets/audio/dialogues/chitti_enthiran.mp3"
  },
  {
    hero: "chitti",
    heroName: "Chitti Robo 2.0",
    icon: "fa-solid fa-circle-dot",
    tag: "Red Neural Chip",
    dialogue: "Dot... Black sheep!",
    movie: "Enthiran (2010)",
    context: "Red Chip Rogue Rampage",
    audioFile: "assets/audio/dialogues/chitti_blacksheep.mp3"
  },
  {
    hero: "chitti",
    heroName: "Chitti Robo 2.0",
    icon: "fa-solid fa-bolt",
    tag: "Version 2.0 Reloaded",
    dialogue: "I am 2.0! Version 2.0 reloaded!",
    movie: "Enthiran 2.0 (2018)",
    context: "Upgraded Titan Awakening",
    audioFile: "assets/audio/dialogues/chitti_2point0.mp3"
  },
  {
    hero: "chitti",
    heroName: "Chitti Robo 2.0",
    icon: "fa-solid fa-explosion",
    tag: "Enthiran 2.0 Punch",
    dialogue: "Kanna, 2.0 vandhuttaan... Game over!",
    movie: "Enthiran 2.0 (2018)",
    context: "Mass Villain Crushing Roar",
    audioFile: "assets/audio/dialogues/chitti_gameover.mp3"
  },

  // 6. Suriya (Chronos 24 / Rolex / Singam)
  {
    hero: "suriya",
    heroName: "Suriya (Rolex)",
    icon: "fa-solid fa-skull",
    tag: "Rolex Sir",
    dialogue: "Sir... Just call me Rolex!",
    movie: "Vikram (2022)",
    context: "LCU Kingpin Entry Punch",
    audioFile: "assets/audio/dialogues/suriya_rolex.mp3"
  },
  {
    hero: "suriya",
    heroName: "Suriya (Singam)",
    icon: "fa-solid fa-paw",
    tag: "Durai Singam",
    dialogue: "Ongi adicha ondra ton weightu da... Paakkuriya! Singam da!",
    movie: "Singam (2010)",
    context: "Thunderous 1.5-Ton Punch",
    audioFile: "assets/audio/dialogues/suriya_singam.mp3"
  },
  {
    hero: "suriya",
    heroName: "Suriya (Chronos 24)",
    icon: "fa-solid fa-hourglass-half",
    tag: "Time Freeze Watch",
    dialogue: "Time-ah control panna mudiyum-na... Ulagathaye control pannalaam!",
    movie: "24 The Movie (2016)",
    context: "Temporal Mastery",
    audioFile: "assets/audio/dialogues/suriya_24.mp3"
  },
  {
    hero: "suriya",
    heroName: "Suriya (Ayan)",
    icon: "fa-solid fa-gem",
    tag: "Ayan Deva",
    dialogue: "Namma ethula step eduthu vechaalum... adhula top-la irukkanum!",
    movie: "Ayan (2009)",
    context: "Peak Hustle & Mastery",
    audioFile: "assets/audio/dialogues/suriya_ayan.mp3"
  },
  {
    hero: "suriya",
    heroName: "Suriya (Ghajini)",
    icon: "fa-solid fa-brain",
    tag: "Ghajini Legend",
    dialogue: "Sanjay Ramaswamy... Remember the name!",
    movie: "Ghajini (2005)",
    context: "Unforgettable Titan Legacy",
    audioFile: "assets/audio/dialogues/suriya_ghajini.mp3"
  }
];

class DialogueEngine {
  constructor() {
    this.currentHero = "all";
    this.takeNumber = 1;
    this.isPlayingVoice = false;

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
      this.emblemEl.innerHTML = `<i class="${item.icon || 'fa-solid fa-crown'} text-gold"></i>`;
    }

    // Pulse Equalizer
    this.pulseEqualizer(1200);

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
      <span class="author-name"><i class="${item.icon || 'fa-solid fa-crown'} text-gold" style="margin-right: 6px;"></i>${item.heroName}</span> • 
      <span class="author-movie">${item.movie || item.context}</span> • 
      <span class="author-context">${item.context}</span>
    `;
  }



  pulseEqualizer(durationMs = 1000) {
    if (this.equalizerEl) {
      this.equalizerEl.classList.add('active');
      setTimeout(() => {
        if (!this.isPlayingVoice && this.equalizerEl) {
          this.equalizerEl.classList.remove('active');
        }
      }, durationMs);
    }
  }

  copyCurrentDialogue() {
    if (!this.currentDialogueItem) return;

    const copyText = `"${this.currentDialogueItem.dialogue}" — ${this.currentDialogueItem.heroName} [${this.currentDialogueItem.movie}] #DevForge2026`;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(copyText).then(() => {
        if (window.showToast) {
          window.showToast("Punchline copied to clipboard! Share the inspiration!");
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
      window.showToast("Punchline copied to clipboard!");
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.dialogueEngine = new DialogueEngine();
});
