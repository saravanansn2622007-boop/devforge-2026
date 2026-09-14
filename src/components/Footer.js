import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, MapPin, Phone, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
  ];


  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const overallCoordinators = [
    { name: 'Mohammed Yunus A', phone: '7010499316' },
    { name: 'Shreya J', phone: '9842484828' },
    { name: 'Mithik Karthikeyan', phone: '8220391947' },
    { name: 'Mohan Raja', phone: '9003948329' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className="logo-icon">
                <Code2 size={28} />
                <Zap size={14} className="logo-zap" />
              </div>
              <span className="logo-text">
                <span className="logo-dev">Dev</span>
                <span className="logo-forge">Forge</span>
                <span className="logo-year">2K26</span>
              </span>
            </a>
            <p className="footer-tagline">
              The ultimate 24-hour hackathon experience where innovation meets creativity.
            </p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4>Overall Coordinators</h4>
            <ul className="coordinators-list">
              {overallCoordinators.map((c, index) => (
                <li key={index}>
                  <span className="coord-name">{c.name}</span>
                  <a href={`tel:${c.phone}`} className="coord-phone"><Phone size={14} /> {c.phone}</a>
                </li>
              ))}
            </ul>
            <div className="venue-info">
              <MapPin size={16} />
              <span>Kongu Engineering College, Perundurai</span>
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>
            Made with <Heart size={14} className="heart-icon" /> by DevForge Team
          </p>
          <p>
            © 2026 DevForge 2K26. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
