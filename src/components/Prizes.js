import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Gift } from 'lucide-react';
import './Prizes.css';

const Prizes = () => {
  const highlights = [
    {
      icon: <Trophy size={24} />,
      title: 'Grand Cash Rewards',
      description: 'Total ₹8,000 cash pool awarded to top winning teams.',
    },
    {
      icon: <Award size={24} />,
      title: 'Certificates for All',
      description: 'Official Certificate of Participation for every verified attendee.',
    },
    {
      icon: <Gift size={24} />,
      title: 'Swag & Mentorship',
      description: 'Trophies, tech goodies, and direct industry mentorship.',
    },
  ];

  return (
    <section id="prizes" className="prizes">
      <div className="prizes-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Rewards & Recognition</span>
          <h2 className="section-title">Grand Prize Pool</h2>
        </motion.div>

        {/* Single Unified Prize Pool Hero Showcase */}
        <motion.div
          className="unified-prize-hero"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
        >
          <div className="prize-glow"></div>
          <div className="prize-trophy-icon">
            <Trophy size={60} />
          </div>

          <div className="prize-hero-content">
            <span className="prize-hero-badge">DEVFORGE 2026</span>
            <div className="prize-hero-amount">₹8,000</div>
            <div className="prize-hero-subtitle">TOTAL CASH PRIZE POOL</div>
            <p className="prize-hero-desc">
              Compete for cash rewards, winner trophies, certificates, and exciting perks across DevForge 2026!
            </p>
          </div>
        </motion.div>

        {/* Highlights Row */}
        <motion.div
          className="prizes-highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {highlights.map((item, index) => (
            <div key={index} className="highlight-item">
              <div className="highlight-icon">{item.icon}</div>
              <div>
                <h4 className="highlight-title">{item.title}</h4>
                <p className="highlight-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Participation Note */}
        <motion.div
          className="prizes-note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>🎓 Participation certificates will be provided to all verified hackathon participants</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
