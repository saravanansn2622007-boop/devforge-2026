/* ==========================================================================
   DEVFORGE 2026 (DevForge '26)
   Kollywood Superstar Characters & Dynamic Card Engine
   Rule: 1 Whistle / Vote per Superstar ID per User Session
   ========================================================================== */

class InteractiveActorsEngine {
  constructor() {
    this.actorCards = document.querySelectorAll('.actor-card');
    this.storageKey = 'devforge_whistle_votes_v1';
    this.votedActors = this.loadVotes();

    this.initParallax();
    this.bindActionTriggers();
    this.restoreVotedStates();
  }

  loadVotes() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn("localStorage not available", e);
      return [];
    }
  }

  saveVotes() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.votedActors));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  }

  // 1. 3D Mouse Parallax Tilt Physics
  initParallax() {
    this.actorCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -12; // tilt degrees
        const rotateY = ((x - centerX) / centerX) * 12;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.4s ease';
      });

      card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
      });
    });
  }

  // 2. Restore Voted Button States from localStorage
  restoreVotedStates() {
    this.actorCards.forEach(card => {
      const actorKey = card.getAttribute('data-actor');
      const hypeBtn = card.querySelector('.hype-btn');
      if (this.votedActors.includes(actorKey) && hypeBtn) {
        this.markButtonAsVoted(hypeBtn);
      }
    });
  }

  markButtonAsVoted(btn) {
    btn.classList.add('voted');
    btn.innerHTML = '<span><i class="fa-solid fa-check"></i> Whistled</span>';
    btn.setAttribute('title', 'Whistle already recorded (1 vote per user)');
  }

  // 3. Signature Action Triggers & Sound FX
  bindActionTriggers() {
    this.actorCards.forEach(card => {
      const actorKey = card.getAttribute('data-actor');
      const hypeBtn = card.querySelector('.hype-btn');
      const hypeCounter = card.querySelector('.hype-counter');

      // Click card to trigger signature visual & audio animation
      card.addEventListener('click', (e) => {
        if (e.target.closest('.hype-btn')) return; // handled separately
        this.triggerActorSignature(actorKey, card);
      });

      // Click hype/whistle button (Strict 1 vote per ID)
      if (hypeBtn && hypeCounter) {
        hypeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.handleWhistleVote(card, hypeBtn, hypeCounter, actorKey);
        });
      }
    });
  }

  handleWhistleVote(card, btn, counterEl, actorKey) {
    // Check if already voted for this superstar ID
    if (this.votedActors.includes(actorKey)) {
      if (window.cinemaAudio) window.cinemaAudio.playClick();
      if (window.showToast) {
        window.showToast("You have already sent a whistle for this Superstar! (Strictly 1 vote per ID)");
      }
      btn.classList.add('voted-shake');
      setTimeout(() => btn.classList.remove('voted-shake'), 600);
      return;
    }

    // Record new vote
    this.votedActors.push(actorKey);
    this.saveVotes();
    this.markButtonAsVoted(btn);

    // Increment hype count
    let count = parseInt(counterEl.getAttribute('data-count') || '100', 10);
    count += 1;
    counterEl.setAttribute('data-count', count);
    counterEl.innerHTML = `${count}K HYPE <i class="fa-solid fa-fire text-crimson"></i>`;

    // Audio & Toast Fanfare
    if (window.cinemaAudio) {
      window.cinemaAudio.playSuperstarWhistle();
    }
    
    const actorName = card.querySelector('.actor-name')?.textContent || 'Superstar';
    if (window.showToast) {
      window.showToast(`1 Whistle Vote Recorded for ${actorName}!`);
    }

    // Spawn celebration particle burst
    this.spawnReactionParticles(card);
  }

  spawnReactionParticles(card) {
    const iconClasses = [
      'fa-solid fa-star text-gold',
      'fa-solid fa-fire text-crimson',
      'fa-solid fa-crown text-gold',
      'fa-solid fa-bolt text-gold',
      'fa-solid fa-trophy text-gold'
    ];
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        const iconClass = iconClasses[Math.floor(Math.random() * iconClasses.length)];
        const reaction = document.createElement('div');
        reaction.className = 'floating-reaction';
        reaction.innerHTML = `<i class="${iconClass}"></i>`;
        reaction.style.left = `${Math.random() * 60 + 20}%`;
        reaction.style.bottom = '80px';
        card.appendChild(reaction);
        setTimeout(() => reaction.remove(), 1200);
      }, i * 120);
    }
  }

  triggerActorSignature(actorKey, card) {
    card.classList.remove('triggered');
    void card.offsetWidth; // force reflow
    card.classList.add('triggered');

    if (window.cinemaAudio) {
      if (actorKey === 'rajini') {
        window.cinemaAudio.playSuperstarWhistle();
        window.showToast("SUPERSTAR: Sunglasses Flipped! Thalaivar Mass!");
      } else if (actorKey === 'vijay') {
        window.cinemaAudio.playMassBassDrop();
        window.showToast("THALAPATHY: Bloody Sweet Leo Mode Activated!");
      } else if (actorKey === 'chitti') {
        window.cinemaAudio.playChittiLaser();
        window.showToast("CHITTI 2.0: Speed 1 THz, Memory 1 ZB! Neural Red Scan!");
      } else if (actorKey === 'kamal') {
        window.cinemaAudio.playMassBassDrop();
        window.showToast("ULAGANAYAGAN: LCU Commander Vikram Enters!");
      } else if (actorKey === 'ajith') {
        window.cinemaAudio.playClapperSnap();
        window.showToast("THALA AJITH: Mankatha Coin Flipped! No Rules!");
      } else if (actorKey === 'suriya') {
        window.cinemaAudio.playClick();
        window.showToast("SURIYA: Chronos 24 Watch Time Freeze Engaged!");
      }
    }

    setTimeout(() => {
      card.classList.remove('triggered');
    }, 1800);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.interactiveActors = new InteractiveActorsEngine();
});
