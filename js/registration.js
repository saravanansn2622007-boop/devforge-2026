/* ==========================================================================
   DEVFORGE 2026 (DevForge '26)
   Multi-Step Crew Registration Engine (1 Team Lead + 3 Members)
   Details captured: Name, Roll Number, Year, Department, Section, Mail ID
   ========================================================================== */

class RegistrationEngine {
  constructor() {
    this.currentStep = 1;
    this.totalSteps = 3;
    this.formData = {
      teamName: "Leo Tech Creations",
      track: "cyber-fullstack",
      trackName: "Cybersecurity + Fullstack",
      lead: {
        name: "Vijay Kumar",
        roll: "22CS101",
        email: "vijay.lead@devforge.io",
        year: "3rd Year",
        dept: "CSE",
        section: "A"
      },
      member1: {
        name: "Karthik R",
        roll: "22CS102",
        email: "karthik@devforge.io",
        year: "3rd Year",
        dept: "CSE",
        section: "A"
      },
      member2: {
        name: "Anirudh S",
        roll: "22IT105",
        email: "anirudh@devforge.io",
        year: "3rd Year",
        dept: "IT",
        section: "B"
      },
      member3: {
        name: "Lokesh K",
        roll: "22AI108",
        email: "lokesh@devforge.io",
        year: "3rd Year",
        dept: "AI&DS",
        section: "A"
      },
      pitchTitle: "Zero-Trust Sentinel & Web App Shield",
      pitchSynopsis: "Real-time AI threat intelligence, zero-trust token authentication, and resilient fullstack web architecture."
    };

    this.initElements();
    this.bindEvents();
    this.syncFormData();
  }

  initElements() {
    this.wizardNodes = document.querySelectorAll('.wizard-step-node');
    this.formSteps = document.querySelectorAll('.form-step');
    this.btnPrev = document.getElementById('btn-prev-step');
    this.btnNext = document.getElementById('btn-next-step');
    this.btnSubmit = document.getElementById('btn-submit-reg');
    this.form = document.getElementById('crew-reg-form');
    this.printBtn = document.getElementById('print-ticket-btn');
    this.downloadBtn = document.getElementById('download-ticket-btn');
  }

  bindEvents() {
    // Form Inputs real-time sync
    const inputs = document.querySelectorAll('#crew-reg-form input, #crew-reg-form select, #crew-reg-form textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => this.syncFormData());
      input.addEventListener('change', () => this.syncFormData());
    });

    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => {
        if (this.validateStep(this.currentStep)) {
          this.goToStep(this.currentStep + 1);
          if (window.cinemaAudio) window.cinemaAudio.playClapperSnap();
        }
      });
    }

    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', () => {
        this.goToStep(this.currentStep - 1);
        if (window.cinemaAudio) window.cinemaAudio.playClick();
      });
    }

    if (this.form) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.submitRegistration();
      });
    }

    if (this.printBtn) {
      this.printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    if (this.downloadBtn) {
      this.downloadBtn.addEventListener('click', () => {
        this.downloadTicket();
      });
    }

    // Modal Events
    const viewCrewsBtn = document.getElementById('view-crews-btn');
    const modal = document.getElementById('crew-modal-overlay');
    const closeModalBtn = document.getElementById('close-crew-modal');

    if (viewCrewsBtn && modal) {
      viewCrewsBtn.addEventListener('click', () => {
        this.renderCrewsTable();
        modal.classList.add('active');
        if (window.cinemaAudio) window.cinemaAudio.playClick();
      });
    }

    if (closeModalBtn && modal) {
      closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    }
  }

  renderCrewsTable() {
    const tableBody = document.getElementById('crew-table-body');
    if (!tableBody) return;

    const defaultCrews = [
      { teamName: "Leo Tech Creations", trackName: "Cybersecurity + Fullstack", leadName: "Vijay Kumar", dept: "CSE (3rd Yr)", id: "DF26-FDFS-984210" },
      { teamName: "Mankatha Mobile Syndicate", trackName: "Mobile App Development", leadName: "Ajith V", dept: "IT (4th Yr)", id: "DF26-FDFS-774120" },
      { teamName: "Vikram Enterprise Squad", trackName: "Enterprise Application Architecture", leadName: "Kamal S", dept: "CSE (3rd Yr)", id: "DF26-FDFS-552190" },
      { teamName: "Chitti Neural AI Labs", trackName: "AI & Machine Learning", leadName: "Rajini M", dept: "AI&DS (2nd Yr)", id: "DF26-FDFS-331902" }
    ];

    const localCrews = JSON.parse(localStorage.getItem('devforge_registrations') || localStorage.getItem('kollyhack_registrations') || '[]');
    const allCrews = [...defaultCrews, ...localCrews.map(c => ({
      teamName: c.teamName,
      trackName: c.trackName,
      leadName: c.lead?.name || c.director || "Team Lead",
      dept: c.lead ? `${c.lead.dept} (${c.lead.year})` : "Tech Dept",
      id: `DF26-FDFS-${Math.abs(this.hashCode(c.teamName)) % 900000 + 100000}`
    }))];

    tableBody.innerHTML = allCrews.map(crew => `
      <tr>
        <td style="font-weight: 700; color: #fff;">🎬 ${crew.teamName}</td>
        <td><span style="color: var(--accent-gold);">${crew.trackName}</span></td>
        <td>${crew.leadName}</td>
        <td style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-cyan);">${crew.id}</td>
      </tr>
    `).join('');
  }

  syncFormData() {
    // Act 1
    const teamNameInput = document.getElementById('reg-team-name');
    const trackInput = document.getElementById('reg-track');
    if (teamNameInput && teamNameInput.value.trim()) this.formData.teamName = teamNameInput.value.trim();
    if (trackInput) {
      this.formData.track = trackInput.value;
      this.formData.trackName = trackInput.options[trackInput.selectedIndex].text;
    }

    // Act 2: Team Lead
    const leadName = document.getElementById('reg-lead-name')?.value.trim();
    const leadRoll = document.getElementById('reg-lead-roll')?.value.trim();
    const leadEmail = document.getElementById('reg-lead-email')?.value.trim();
    const leadYear = document.getElementById('reg-lead-year')?.value;
    const leadDept = document.getElementById('reg-lead-dept')?.value.trim();
    const leadSec = document.getElementById('reg-lead-sec')?.value.trim();
    if (leadName) this.formData.lead.name = leadName;
    if (leadRoll) this.formData.lead.roll = leadRoll;
    if (leadEmail) this.formData.lead.email = leadEmail;
    if (leadYear) this.formData.lead.year = leadYear;
    if (leadDept) this.formData.lead.dept = leadDept;
    if (leadSec) this.formData.lead.section = leadSec;

    // Member 1
    const m1Name = document.getElementById('reg-m1-name')?.value.trim();
    const m1Roll = document.getElementById('reg-m1-roll')?.value.trim();
    const m1Email = document.getElementById('reg-m1-email')?.value.trim();
    const m1Year = document.getElementById('reg-m1-year')?.value;
    const m1Dept = document.getElementById('reg-m1-dept')?.value.trim();
    const m1Sec = document.getElementById('reg-m1-sec')?.value.trim();
    if (m1Name) this.formData.member1.name = m1Name;
    if (m1Roll) this.formData.member1.roll = m1Roll;
    if (m1Email) this.formData.member1.email = m1Email;
    if (m1Year) this.formData.member1.year = m1Year;
    if (m1Dept) this.formData.member1.dept = m1Dept;
    if (m1Sec) this.formData.member1.section = m1Sec;

    // Member 2
    const m2Name = document.getElementById('reg-m2-name')?.value.trim();
    const m2Roll = document.getElementById('reg-m2-roll')?.value.trim();
    const m2Email = document.getElementById('reg-m2-email')?.value.trim();
    const m2Year = document.getElementById('reg-m2-year')?.value;
    const m2Dept = document.getElementById('reg-m2-dept')?.value.trim();
    const m2Sec = document.getElementById('reg-m2-sec')?.value.trim();
    if (m2Name) this.formData.member2.name = m2Name;
    if (m2Roll) this.formData.member2.roll = m2Roll;
    if (m2Email) this.formData.member2.email = m2Email;
    if (m2Year) this.formData.member2.year = m2Year;
    if (m2Dept) this.formData.member2.dept = m2Dept;
    if (m2Sec) this.formData.member2.section = m2Sec;

    // Member 3
    const m3Name = document.getElementById('reg-m3-name')?.value.trim();
    const m3Roll = document.getElementById('reg-m3-roll')?.value.trim();
    const m3Email = document.getElementById('reg-m3-email')?.value.trim();
    const m3Year = document.getElementById('reg-m3-year')?.value;
    const m3Dept = document.getElementById('reg-m3-dept')?.value.trim();
    const m3Sec = document.getElementById('reg-m3-sec')?.value.trim();
    if (m3Name) this.formData.member3.name = m3Name;
    if (m3Roll) this.formData.member3.roll = m3Roll;
    if (m3Email) this.formData.member3.email = m3Email;
    if (m3Year) this.formData.member3.year = m3Year;
    if (m3Dept) this.formData.member3.dept = m3Dept;
    if (m3Sec) this.formData.member3.section = m3Sec;

    // Act 3
    const pitchTitleInput = document.getElementById('reg-pitch-title');
    const pitchSynopsisInput = document.getElementById('reg-pitch-synopsis');
    if (pitchTitleInput && pitchTitleInput.value.trim()) this.formData.pitchTitle = pitchTitleInput.value.trim();
    if (pitchSynopsisInput && pitchSynopsisInput.value.trim()) this.formData.pitchSynopsis = pitchSynopsisInput.value.trim();
  }

  hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  }

  validateStep(step) {
    if (step === 1) {
      const team = document.getElementById('reg-team-name');
      const track = document.getElementById('reg-track');
      if (!team || !team.value.trim()) {
        window.showToast("⚠️ Please enter your Movie / Team Banner Name!");
        if (team) team.focus();
        return false;
      }
      if (!track || !track.value) {
        window.showToast("⚠️ Please choose your Hackathon Theme Track!");
        if (track) track.focus();
        return false;
      }
    } else if (step === 2) {
      // Validate Team Lead
      const leadName = document.getElementById('reg-lead-name');
      const leadRoll = document.getElementById('reg-lead-roll');
      const leadEmail = document.getElementById('reg-lead-email');
      const leadDept = document.getElementById('reg-lead-dept');
      const leadSec = document.getElementById('reg-lead-sec');

      if (!leadName?.value.trim()) {
        window.showToast("⚠️ Team Lead name is required!");
        leadName?.focus();
        return false;
      }
      if (!leadRoll?.value.trim()) {
        window.showToast("⚠️ Team Lead roll number is required!");
        leadRoll?.focus();
        return false;
      }
      if (!leadEmail?.value.trim() || !leadEmail.value.includes('@')) {
        window.showToast("⚠️ Please enter a valid Team Lead email address!");
        leadEmail?.focus();
        return false;
      }
      if (!leadDept?.value.trim()) {
        window.showToast("⚠️ Team Lead department is required!");
        leadDept?.focus();
        return false;
      }
      if (!leadSec?.value.trim()) {
        window.showToast("⚠️ Team Lead section is required!");
        leadSec?.focus();
        return false;
      }

      // Validate Member 1
      const m1Name = document.getElementById('reg-m1-name');
      const m1Roll = document.getElementById('reg-m1-roll');
      const m1Email = document.getElementById('reg-m1-email');
      const m1Dept = document.getElementById('reg-m1-dept');
      const m1Sec = document.getElementById('reg-m1-sec');

      if (!m1Name?.value.trim() || !m1Roll?.value.trim() || !m1Email?.value.trim() || !m1Dept?.value.trim() || !m1Sec?.value.trim()) {
        window.showToast("⚠️ Please fill all required fields for Team Member 1!");
        if (!m1Name?.value.trim()) m1Name?.focus();
        return false;
      }

      // Validate Member 2
      const m2Name = document.getElementById('reg-m2-name');
      const m2Roll = document.getElementById('reg-m2-roll');
      const m2Email = document.getElementById('reg-m2-email');
      const m2Dept = document.getElementById('reg-m2-dept');
      const m2Sec = document.getElementById('reg-m2-sec');

      if (!m2Name?.value.trim() || !m2Roll?.value.trim() || !m2Email?.value.trim() || !m2Dept?.value.trim() || !m2Sec?.value.trim()) {
        window.showToast("⚠️ Please fill all required fields for Team Member 2!");
        if (!m2Name?.value.trim()) m2Name?.focus();
        return false;
      }

      // Validate Member 3
      const m3Name = document.getElementById('reg-m3-name');
      const m3Roll = document.getElementById('reg-m3-roll');
      const m3Email = document.getElementById('reg-m3-email');
      const m3Dept = document.getElementById('reg-m3-dept');
      const m3Sec = document.getElementById('reg-m3-sec');

      if (!m3Name?.value.trim() || !m3Roll?.value.trim() || !m3Email?.value.trim() || !m3Dept?.value.trim() || !m3Sec?.value.trim()) {
        window.showToast("⚠️ Please fill all required fields for Team Member 3!");
        if (!m3Name?.value.trim()) m3Name?.focus();
        return false;
      }
    }
    return true;
  }

  goToStep(step) {
    if (step < 1 || step > this.totalSteps) return;
    this.currentStep = step;

    // Update wizard nodes
    this.wizardNodes.forEach((node, idx) => {
      const stepNum = idx + 1;
      node.classList.remove('active', 'completed');
      if (stepNum === this.currentStep) {
        node.classList.add('active');
      } else if (stepNum < this.currentStep) {
        node.classList.add('completed');
      }
    });

    // Update form steps
    this.formSteps.forEach((fs, idx) => {
      fs.classList.remove('active');
      if (idx + 1 === this.currentStep) {
        fs.classList.add('active');
      }
    });

    // Update navigation button states
    if (this.btnPrev) {
      this.btnPrev.style.display = this.currentStep === 1 ? 'none' : 'inline-flex';
    }
    if (this.btnNext) {
      this.btnNext.style.display = this.currentStep === this.totalSteps ? 'none' : 'inline-flex';
    }
    if (this.btnSubmit) {
      this.btnSubmit.style.display = this.currentStep === this.totalSteps ? 'inline-flex' : 'none';
    }
  }

  submitRegistration() {
    this.syncFormData();
    
    // Save to local storage
    const registrations = JSON.parse(localStorage.getItem('devforge_registrations') || localStorage.getItem('kollyhack_registrations') || '[]');
    registrations.push({
      ...this.formData,
      registeredAt: new Date().toISOString()
    });
    localStorage.setItem('devforge_registrations', JSON.stringify(registrations));

    // Audio & Visual celebratory fanfare
    if (window.cinemaAudio) {
      window.cinemaAudio.playSuperstarWhistle();
      setTimeout(() => window.cinemaAudio.playMassBassDrop(), 300);
    }

    // Superstar Flash Effect
    const flash = document.createElement('div');
    flash.className = 'superstar-flash';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 900);

    window.showToast("🌟 BLOCKBUSTER! Your Crew is Registered for DevForge '26!");
  }

  downloadTicket() {
    window.showToast("🎟️ Preparing your FDFS VIP Pass for Download / Print...");
    setTimeout(() => {
      window.print();
    }, 500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.regEngine = new RegistrationEngine();
});
