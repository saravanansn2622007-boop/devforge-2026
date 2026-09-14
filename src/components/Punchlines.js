import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Flame, Zap, Feather, Bot, Hourglass, Sparkles, Copy, Check } from 'lucide-react';
import './Punchlines.css';

const DIALOGUES_DATA = [
  // 1. Superstar Rajinikanth
  {
    hero: 'superstar',
    heroName: 'Superstar Rajinikanth',
    tag: 'Baashha Mass',
    dialogue: 'Naan oru thadava sonna... nooru thadava sonna madhiri!',
    movie: 'Baashha (1995)',
    context: 'Iconic Mass Statement',
  },
  {
    hero: 'superstar',
    heroName: 'Superstar Rajinikanth',
    tag: 'Padayappa Swag',
    dialogue: 'En vazhi... thani vazhi! Seendadha!',
    movie: 'Padayappa (1999)',
    context: 'Signature Style & Attitude',
  },
  {
    hero: 'superstar',
    heroName: 'Superstar Rajinikanth',
    tag: 'Jailer Hukum',
    dialogue: 'Hukum... Tiger Ka Hukum! Alappara kelapparom!',
    movie: 'Jailer (2023)',
    context: 'Blockbuster Tiger Roar',
  },
  {
    hero: 'superstar',
    heroName: 'Superstar Rajinikanth',
    tag: 'Sivaji The Boss',
    dialogue: 'Kanna, panni dhan kootama varum... Singam single-ah dhan varum!',
    movie: 'Sivaji The Boss (2007)',
    context: 'Legendary Mass Punch',
  },
  {
    hero: 'superstar',
    heroName: 'Superstar Rajinikanth',
    tag: 'Annamalai Roar',
    dialogue: 'Naan solradhaiyum seiven... solladdhaiyum seiven!',
    movie: 'Annamalai (1992)',
    context: 'Unbeatable Challenge',
  },
  {
    hero: 'superstar',
    heroName: 'Superstar Rajinikanth',
    tag: 'Kabali Style',
    dialogue: 'Kabali da! Engayo eppodho porandhavan illa... Tamil naattulaye meesa vechu vaazhravan da!',
    movie: 'Kabali (2016)',
    context: 'Vintage Don Arrival',
  },
  {
    hero: 'superstar',
    heroName: 'Superstar Rajinikanth',
    tag: 'Muthu Philosophy',
    dialogue: 'Naan eppo varuven, epdi varuven-nu yaarukkum theriyaadhu... Aana vara vendiya nerathula correct-ah varuven!',
    movie: 'Muthu (1995)',
    context: 'Master Destiny Timing',
  },

  // 2. Thalapathy Vijay
  {
    hero: 'thalapathy',
    heroName: 'Thalapathy Vijay',
    tag: 'Ghilli Fire',
    dialogue: 'All are welcome... Aana nallavangalukku mattum dhan idam!',
    movie: 'Ghilli (2004)',
    context: 'Kabaddi Arena Storm',
  },
  {
    hero: 'thalapathy',
    heroName: 'Thalapathy Vijay',
    tag: 'Master JD Beat',
    dialogue: 'I am waiting... Just wait and see!',
    movie: 'Master (2021)',
    context: 'College Professor Swagger',
  },
  {
    hero: 'thalapathy',
    heroName: 'Thalapathy Vijay',
    tag: 'Leo Bloody Sweet',
    dialogue: 'Bloody Sweet! Badass Leo Das!',
    movie: 'Leo (2023)',
    context: 'Cafe Showdown Blast',
  },
  {
    hero: 'thalapathy',
    heroName: 'Thalapathy Vijay',
    tag: 'Mersal Identity',
    dialogue: 'Nee adicha piece-u... Naan adicha mass-u!',
    movie: 'Mersal (2017)',
    context: 'Triple Avatar Power',
  },
  {
    hero: 'thalapathy',
    heroName: 'Thalapathy Vijay',
    tag: 'Thuppakki Strike',
    dialogue: 'I am waiting!',
    movie: 'Thuppakki (2012)',
    context: 'Army Captain Faceoff',
  },
  {
    hero: 'thalapathy',
    heroName: 'Thalapathy Vijay',
    tag: 'Kaththi Corporate War',
    dialogue: 'Pasi-nu vandha dhaan theriyum... Sothoda arumai!',
    movie: 'Kaththi (2014)',
    context: 'Press Room Revolutionary Speech',
  },

  // 3. Thala Ajith Kumar
  {
    hero: 'thala',
    heroName: 'Thala Ajith Kumar',
    tag: 'Mankatha Kingmaker',
    dialogue: 'This is my game... Vinayak Mahadev!',
    movie: 'Mankatha (2011)',
    context: 'No Rules Action Swagger',
  },
  {
    hero: 'thala',
    heroName: 'Thala Ajith Kumar',
    tag: 'Billa Don Swag',
    dialogue: 'I am the best... Enna thadukka yaralayum mudiyadhu!',
    movie: 'Billa (2007)',
    context: 'International Underworld Kingpin',
  },
  {
    hero: 'thala',
    heroName: 'Thala Ajith Kumar',
    tag: 'Vedalam Rage',
    dialogue: 'Theri panna poren... Theri!',
    movie: 'Vedalam (2015)',
    context: 'Transformation Mass Outburst',
  },
  {
    hero: 'thala',
    heroName: 'Thala Ajith Kumar',
    tag: 'Vivegam Willpower',
    dialogue: 'Never, ever, give up!',
    movie: 'Vivegam (2017)',
    context: 'Iron Willpower War Cry',
  },
  {
    hero: 'thala',
    heroName: 'Thala Ajith Kumar',
    tag: 'Varalaru Pride',
    dialogue: 'En vaazhkkaiyla ovvoru naalum, ovvoru nimishamum, yen ovvoru nodiyum naana sethukkitadhu da!',
    movie: 'Varalaru (2006)',
    context: 'Self-Made Legend Monologue',
  },

  // 4. Kamal Haasan
  {
    hero: 'ulaganayagan',
    heroName: 'Kamal Haasan',
    tag: 'LCU Commander',
    dialogue: 'Aarambikkalaangala?',
    movie: 'Vikram (2022)',
    context: 'LCU Commander Battle Cry',
  },
  {
    hero: 'ulaganayagan',
    heroName: 'Kamal Haasan',
    tag: 'Nayakan Classic',
    dialogue: 'Naan nallavana kettavana? Theriyaadhu... Mathavanga nallaa irukka enna venalum pannuven!',
    movie: 'Nayakan (1987)',
    context: 'Velu Naicker Godfather Truth',
  },
  {
    hero: 'ulaganayagan',
    heroName: 'Kamal Haasan',
    tag: 'Thevar Magan Wisdom',
    dialogue: 'Veeram-na enna theriyuma? Bayam illadha madhiri nadikkaradhu dhan!',
    movie: 'Thevar Magan (1992)',
    context: 'Master Leadership Principle',
  },

  // 5. Chitti 2.0
  {
    hero: 'chitti',
    heroName: 'Chitti 2.0 (The Robot)',
    tag: 'Neural Quantum Peak',
    dialogue: 'Speed 1 Terahertz, Memory 1 Zettabyte... I am 2.0!',
    movie: '2.0 (2018)',
    context: 'Super Quantum Upgrade',
  },
  {
    hero: 'chitti',
    heroName: 'Chitti 2.0 (The Robot)',
    tag: 'Red Chip Activation',
    dialogue: 'Dot! I am your creator and your destroyer!',
    movie: 'Enthiran (2010)',
    context: 'Magneto Army Matrix',
  },

  // 6. Suriya (Rolex / 24)
  {
    hero: 'suriya',
    heroName: 'Suriya (Rolex)',
    tag: 'Rolex Arrival',
    dialogue: 'Rolex... Sir, just call me Rolex!',
    movie: 'Vikram (2022)',
    context: 'Nightfall Syndicate Entry',
  },
  {
    hero: 'suriya',
    heroName: 'Suriya (Athreya)',
    tag: 'Time Control Master',
    dialogue: 'Time is the ultimate currency... and I own it!',
    movie: '24 (2016)',
    context: 'Chrono-Watch Mastery',
  },
  {
    hero: 'suriya',
    heroName: 'Suriya (Duraisingam)',
    tag: 'Singam Roar',
    dialogue: 'Ongi adicha ondra ton weightu da... Paakuriya?!',
    movie: 'Singam (2010)',
    context: 'Furious Lion Roar',
  },
];

const HERO_FILTERS = [
  { id: 'all', label: 'All Icons', icon: <Sparkles size={16} /> },
  { id: 'superstar', label: 'Superstar Rajini', icon: <Crown size={16} className="text-gold" /> },
  { id: 'thalapathy', label: 'Thalapathy Vijay', icon: <Flame size={16} className="text-crimson" /> },
  { id: 'thala', label: 'Thala Ajith', icon: <Zap size={16} className="text-gold" /> },
  { id: 'ulaganayagan', label: 'Kamal Haasan', icon: <Feather size={16} /> },
  { id: 'chitti', label: 'Chitti 2.0', icon: <Bot size={16} /> },
  { id: 'suriya', label: 'Suriya (Rolex / 24)', icon: <Hourglass size={16} /> },
];

const getHeroEmblem = (hero) => {
  switch (hero) {
    case 'superstar':
      return <Crown size={32} />;
    case 'thalapathy':
      return <Flame size={32} />;
    case 'thala':
      return <Zap size={32} />;
    case 'ulaganayagan':
      return <Feather size={32} />;
    case 'chitti':
      return <Bot size={32} />;
    case 'suriya':
      return <Hourglass size={32} />;
    default:
      return <Crown size={32} />;
  }
};

const Punchlines = () => {
  const [selectedHero, setSelectedHero] = useState('all');
  const [currentDialogue, setCurrentDialogue] = useState(DIALOGUES_DATA[0]);
  const [takeNumber, setTakeNumber] = useState(1);
  const [isEqualizerActive, setIsEqualizerActive] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const playSynthesizedSound = (type = 'click') => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      if (type === 'clapper') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.4, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.09);
      } else if (type === 'mass') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(120, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.26);
      }
    } catch (e) {
      // Ignore audio synthesis errors on strict browsers
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleGenerate = (filter = selectedHero) => {
    playSynthesizedSound('clapper');
    setIsEqualizerActive(true);
    setTakeNumber((prev) => prev + 1);

    const filtered = filter === 'all'
      ? DIALOGUES_DATA
      : DIALOGUES_DATA.filter((d) => d.hero === filter);

    const available = filtered.filter((d) => d.dialogue !== currentDialogue.dialogue);
    const pool = available.length > 0 ? available : filtered;
    const randomIndex = Math.floor(Math.random() * pool.length);
    const nextItem = pool[randomIndex] || filtered[0];

    setCurrentDialogue(nextItem);

    setTimeout(() => {
      setIsEqualizerActive(false);
    }, 1200);
  };

  const handleFilterChange = (heroId) => {
    setSelectedHero(heroId);
    handleGenerate(heroId);
  };

  const handleCopy = async () => {
    const textToCopy = `"${currentDialogue.dialogue}" — ${currentDialogue.heroName} (${currentDialogue.movie})`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      showToast('Punchline copied to clipboard! Share the inspiration! 🔥');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      showToast('Copied to clipboard!');
    }
  };

  return (
    <section id="punchlines" className="punchlines-section">
      <div className="punchlines-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <Sparkles size={16} /> Inspiration & Leadership
          </span>
          <h2 className="section-title">
            CINEMA & LEADERSHIP <span className="text-gold">MASS PUNCHLINES</span>
          </h2>
          <p className="section-description">
            Draw high-octane energy and confidence from iconic Tamil cinema punchlines to fuel your sprint.
          </p>
        </motion.div>

        <motion.div
          className="punchline-main-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Cinema Clapperboard Header Strip */}
          <div className="cinema-clapper-header">
            <div className="clapper-stripes-pattern"></div>
            <div className="clapper-meta-row">
              <span className="clapper-meta-badge">
                <Zap size={14} color="#D4AF37" /> PRODUCTION: DEVFORGE '26
              </span>
              <span className="clapper-meta-badge">ARENA: CINEMA LEADERSHIP</span>
              <span className="clapper-meta-badge clapper-take-pill">
                TAKE: #{takeNumber}
              </span>
            </div>
          </div>

          {/* Hero Avatar Filter Tabs */}
          <div className="hero-filter-bar">
            {HERO_FILTERS.map((chip) => (
              <button
                key={chip.id}
                className={`hero-tab-btn ${selectedHero === chip.id ? 'active' : ''}`}
                onClick={() => handleFilterChange(chip.id)}
              >
                {chip.icon}
                <span>{chip.label}</span>
              </button>
            ))}
          </div>

          {/* Cinema Dialogue Showcase Stage */}
          <div className="punchline-theatre-stage">
            <div className="theatre-spotlight-beam"></div>

            {/* Hero Dynamic Spotlight Avatar */}
            <motion.div
              key={`emblem-${currentDialogue.hero}`}
              className="hero-avatar-ring"
              initial={{ scale: 0.6, rotate: -20, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {getHeroEmblem(currentDialogue.hero)}
            </motion.div>

            {/* Audio visualizer equalizer */}
            <div className={`theatre-audio-equalizer ${isEqualizerActive ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Dialogue Quote Box */}
            <div className="theatre-quote-box">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDialogue.dialogue}
                  className="theatre-quote-wrapper"
                  initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <span className="theatre-quote-mark">“</span>
                  <div className="theatre-quote-text">
                    {currentDialogue.dialogue}
                  </div>
                  <span className="theatre-quote-mark">”</span>
                </motion.div>
              </AnimatePresence>

              <div className="theatre-speaker-attribution">
                <span className="speaker-hero-name">
                  {getHeroEmblem(currentDialogue.hero)} {currentDialogue.heroName}
                </span>
                <span>•</span>
                <span className="speaker-movie">{currentDialogue.movie}</span>
                <span>•</span>
                <span className="speaker-context">{currentDialogue.context}</span>
              </div>
            </div>
          </div>

          {/* Action Controls */}
          <div className="punchline-action-controls">
            <motion.button
              className="punchline-btn-primary"
              onClick={() => handleGenerate()}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Zap size={18} fill="#0E0709" />
              <span>Generate Next Punchline</span>
            </motion.button>

            <motion.button
              className="punchline-btn-secondary"
              onClick={handleCopy}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              title="Copy dialogue to clipboard"
            >
              {copied ? <Check size={18} color="#D4AF37" /> : <Copy size={18} />}
              <span>{copied ? 'Copied!' : 'Copy Punchline'}</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Toast Feedback */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="punchline-toast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Zap size={16} color="#D4AF37" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Punchlines;
