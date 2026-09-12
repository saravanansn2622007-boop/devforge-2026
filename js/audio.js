/* ==========================================================================
   DEVFORGE 2026 (DevForge '26)
   Cinema Web Audio Synthesizer (Zero External MP3 Assets Required)
   ========================================================================== */

class CinemaAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.initAudioContext();
  }

  initAudioContext() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    } catch (e) {
      console.warn("Web Audio API not supported in this browser:", e);
    }
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  // 1. Clapperboard Snap Sound (Sharp impact + wooden resonance)
  playClapperSnap() {
    if (this.isMuted || !this.ctx) return;
    this.resume();

    const now = this.ctx.currentTime;
    
    // Noise buffer for snap crack
    const bufferSize = this.ctx.sampleRate * 0.08;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.015));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1200, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    noise.start(now);

    // Wooden thud body
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(280, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.06);

    oscGain.gain.setValueAtTime(0.8, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(oscGain);
    oscGain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.08);
  }

  // 2. Anirudh-Style Mass Bass Drop / Cinematic Hit
  playMassBassDrop() {
    if (this.isMuted || !this.ctx) return;
    this.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.6);

    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.7);
  }

  // 3. Chitti 2.0 Laser / Futuristic Tech Blip
  playChittiLaser() {
    if (this.isMuted || !this.ctx) return;
    this.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1800, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.25);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  // 4. Superstar Whistle / Cheer Stinger
  playSuperstarWhistle() {
    if (this.isMuted || !this.ctx) return;
    this.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.linearRampToValueAtTime(2400, now + 0.15);
    osc.frequency.linearRampToValueAtTime(1900, now + 0.35);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.4);
  }

  // 5. Subtle UI Click
  playClick() {
    if (this.isMuted || !this.ctx) return;
    this.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.04);
  }

  // 6. Dialogue Audio & Superstar Voice Engine
  playActorVoice(heroKey, dialogueText, audioFilePath, onStart = null, onEnd = null) {
    if (this.isMuted) return;
    this.resume();

    // Stop any ongoing speech or audio
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (this.currentAudioElement) {
      this.currentAudioElement.pause();
      this.currentAudioElement = null;
    }

    // Try playing actual MP3 audio file first if provided
    if (audioFilePath) {
      const audio = new Audio(audioFilePath);
      this.currentAudioElement = audio;

      let hasStarted = false;

      audio.addEventListener('play', () => {
        hasStarted = true;
        if (onStart) onStart();
      });

      audio.addEventListener('ended', () => {
        if (onEnd) onEnd();
        this.currentAudioElement = null;
      });

      audio.addEventListener('error', () => {
        // MP3 not yet found or error loading, fall back to AI superstar voice synthesis
        console.info(`Audio file '${audioFilePath}' not found or unplayable. Using Superstar Voice Synthesizer.`);
        this.currentAudioElement = null;
        this.synthesizeSuperstarVoice(heroKey, dialogueText, onStart, onEnd);
      });

      audio.play().catch(err => {
        console.warn("Audio play prevented or missing:", err);
        this.currentAudioElement = null;
        this.synthesizeSuperstarVoice(heroKey, dialogueText, onStart, onEnd);
      });
      return;
    }

    // Fallback: Synthesize Voice
    this.synthesizeSuperstarVoice(heroKey, dialogueText, onStart, onEnd);
  }

  // 7. Superstar Tuned Speech Synthesizer
  synthesizeSuperstarVoice(heroKey, text, onStart = null, onEnd = null) {
    if (this.isMuted) return;

    // Trigger hero-specific sound effects stinger in background
    if (heroKey === 'superstar') {
      this.playSuperstarWhistle();
    } else if (heroKey === 'chitti') {
      this.playChittiLaser();
    } else if (heroKey === 'thalapathy' || heroKey === 'ulaganayagan') {
      this.playMassBassDrop();
    } else {
      this.playClapperSnap();
    }

    if (!('speechSynthesis' in window)) {
      if (onStart) onStart();
      setTimeout(() => { if (onEnd) onEnd(); }, 1500);
      return;
    }

    // Clean text for speech
    const cleanText = text.replace(/[\.]{2,}/g, '. ').replace(/[!]+/g, '!');
    const utterance = new SpeechSynthesisUtterance(cleanText);

    // Actor-specific pitch and speech rates
    const profiles = {
      superstar: { pitch: 0.85, rate: 1.0, lang: 'ta-IN' },
      thalapathy: { pitch: 1.08, rate: 1.15, lang: 'ta-IN' },
      thala: { pitch: 0.88, rate: 0.98, lang: 'ta-IN' },
      ulaganayagan: { pitch: 0.92, rate: 0.94, lang: 'ta-IN' },
      chitti: { pitch: 1.45, rate: 1.25, lang: 'ta-IN' },
      suriya: { pitch: 0.96, rate: 1.08, lang: 'ta-IN' }
    };

    const config = profiles[heroKey] || { pitch: 1.0, rate: 1.0, lang: 'ta-IN' };
    utterance.pitch = config.pitch;
    utterance.rate = config.rate;

    // Pick best available voice (Tamil if available, otherwise Indian English or default)
    const voices = window.speechSynthesis.getVoices();
    const tamilVoice = voices.find(v => v.lang.startsWith('ta') || v.name.toLowerCase().includes('tamil'));
    const indianVoice = voices.find(v => v.lang === 'en-IN');
    
    if (tamilVoice) {
      utterance.voice = tamilVoice;
    } else if (indianVoice) {
      utterance.voice = indianVoice;
    }

    utterance.onstart = () => {
      if (onStart) onStart();
    };

    utterance.onend = () => {
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.warn("SpeechSynthesis error:", e);
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  }
}

// Export singleton
window.cinemaAudio = new CinemaAudioEngine();
