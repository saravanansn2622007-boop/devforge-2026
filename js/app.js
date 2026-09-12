/* ==========================================================================
   DEVFORGE 2026 (DevForge '26)
   Main Application Controller & Interactive Animations
   ========================================================================== */

// Global Toast System
window.showToast = function(message, duration = 3500) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-bolt toast-icon text-gold"></i> <div>${message}</div>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Audio Control & Equalizer
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const equalizer = document.getElementById('sound-eq');

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      if (window.cinemaAudio) {
        const isMuted = window.cinemaAudio.toggleMute();
        if (isMuted) {
          equalizer.classList.add('paused');
          soundToggleBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
          window.showToast("Audio Muted");
        } else {
          equalizer.classList.remove('paused');
          soundToggleBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
          window.cinemaAudio.playClick();
          window.showToast("Cinema Audio FX Activated!");
        }
      }
    });
  }

  // 3. Clapperboard Theme / Atmosphere Switcher
  const themeChips = document.querySelectorAll('.theme-chip');
  themeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      themeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const theme = chip.getAttribute('data-theme-val');
      document.documentElement.setAttribute('data-theme', theme);

      // Clapperboard audio & visual snap
      if (window.cinemaAudio) {
        window.cinemaAudio.playClapperSnap();
        setTimeout(() => {
          if (theme === 'chitti') window.cinemaAudio.playChittiLaser();
          else if (theme === 'lcu') window.cinemaAudio.playMassBassDrop();
          else window.cinemaAudio.playSuperstarWhistle();
        }, 120);
      }

      const clapperCard = document.querySelector('.hero-clapper-card');
      if (clapperCard) {
        clapperCard.classList.remove('clapper-snapping');
        void clapperCard.offsetWidth; // trigger reflow
        clapperCard.classList.add('clapper-snapping');
      }

      window.showToast(`Scene Atmosphere Changed: ${chip.textContent.trim()}`);
    });
  });

  // 4. Hero Clapperboard Click Interaction
  const heroClapperCard = document.querySelector('.hero-clapper-card');
  if (heroClapperCard) {
    heroClapperCard.addEventListener('click', (e) => {
      // Avoid retriggering if a theme chip inside was clicked
      if (e.target.closest('.theme-chip') || e.target.closest('button')) return;
      
      if (window.cinemaAudio) window.cinemaAudio.playClapperSnap();
      heroClapperCard.classList.remove('clapper-snapping');
      void heroClapperCard.offsetWidth;
      heroClapperCard.classList.add('clapper-snapping');
      window.showToast("ACTION! Take 2026: Code Rolling!");
    });
  }

  // 5. Superstar Intro Celebration Button
  const superstarIntroBtn = document.getElementById('superstar-intro-btn');
  if (superstarIntroBtn) {
    superstarIntroBtn.addEventListener('click', () => {
      if (window.cinemaAudio) {
        window.cinemaAudio.playSuperstarWhistle();
        setTimeout(() => window.cinemaAudio.playMassBassDrop(), 250);
      }

      // Flash & Sparkle
      const flash = document.createElement('div');
      flash.className = 'superstar-flash';
      document.body.appendChild(flash);
      setTimeout(() => flash.remove(), 900);

      window.showToast("Keynote Prelude Activated! Welcome to DevForge 2026!");
    });
  }

  // 6. Live 24-Hour FDFS Countdown Timer
  function initCountdown() {
    // Target: 24 Hours Hackathon Launch (September 22, 2026)
    const targetDate = new Date().getTime() + (24 * 60 * 60 * 1000) + (14 * 60 * 1000);

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    function updateTimer() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) return;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
      if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }
  initCountdown();

  // 7. Interactive FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherAns = otherItem.querySelector('.faq-answer');
          if (otherAns) otherAns.style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
          if (window.cinemaAudio) window.cinemaAudio.playClick();
        }
      });
    }
  });

  // 8. Stats Counter Animation on Viewport Scroll
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  let statsCounted = false;

  function countUpStats() {
    if (statsCounted) return;
    const statsSection = document.querySelector('.hero-stats-row');
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      statsCounted = true;
      statNumbers.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        let count = 0;
        const speed = target / 50;

        const updateCount = () => {
          count += speed;
          if (count < target) {
            el.textContent = `${prefix}${Math.ceil(count).toLocaleString()}${suffix}`;
            requestAnimationFrame(updateCount);
          } else {
            el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
          }
        };
        updateCount();
      });
    }
  }

  window.addEventListener('scroll', countUpStats);
  countUpStats(); // Initial check

  // 9. Mobile Menu Toggle & Navigation Control
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('mobile-open');
      mobileToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
      mobileToggle.setAttribute('aria-expanded', isOpen);
      if (window.cinemaAudio) window.cinemaAudio.playClick();
    });

    // Close mobile menu when clicking any nav link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close mobile menu when tapping outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('mobile-open') && !navMenu.contains(e.target) && e.target !== mobileToggle) {
        navMenu.classList.remove('mobile-open');
        mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
