import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Smartphone, ChevronRight, ArrowRight, X, Target, CheckCircle, Lightbulb, Phone, Code2, Building2 } from 'lucide-react';
import './Domains.css';

const Domains = () => {
  const [activeDomain, setActiveDomain] = useState(0);
  const [selectedProblem, setSelectedProblem] = useState(null);

  const domains = [
    {
      code: 'EX',
      icon: <Building2 size={32} />,
      name: 'EnterpriseX',
      tagline: 'Build. Scale. Deploy.',
      contacts: [
        { name: 'Mohan Raja', phone: '9003948329' },
        { name: 'Sounderhari', phone: '9489669639' },
      ],
      color: '#7C5CFF',
      description: 'Design production-grade enterprise systems, scalable backend architectures, and high-performance cloud applications.',
      problems: [],
    },
    {
      code: 'CS',
      icon: <Code2 size={32} />,
      name: 'CyberStack',
      tagline: 'Build. Secure. Defend.',
      contacts: [
        { name: 'Krithika S', phone: '6379962402' },
        { name: 'Shehsanth', phone: '8072953989' },
      ],
      color: '#C1121F',
      description: 'Engineer resilient full-stack web applications while fortifying systems against modern security threats and cyber vulnerabilities.',
      problems: [],
    },
    {
      code: 'IN',
      icon: <Brain size={32} />,
      name: 'Innovate',
      tagline: 'Think. Learn. Create.',
      contacts: [
        { name: 'Shreya J', phone: '9842484828' },
        { name: 'Arnald', phone: '' },
      ],
      color: '#E8C36A',
      description: 'Harness Artificial Intelligence, Machine Learning algorithms, and creative problem-solving to build futuristic intelligent solutions.',
      problems: [],
    },
    {
      code: 'MX',
      icon: <Smartphone size={32} />,
      name: 'MobileX',
      tagline: 'Mobile Application Development',
      contacts: [
        { name: 'Dharnish BM', phone: '9842375676' },
        { name: 'Navaneethan', phone: '9342512455' },
      ],
      color: '#4A90D9',
      description: 'Develop next-generation mobile applications for iOS & Android with intuitive interfaces and seamless cross-platform performance.',
      problems: [],
    },
  ];

  const openProblemModal = (problem, domainColor, domainName) => {
    setSelectedProblem({ ...problem, domainColor, domainName });
  };

  const closeProblemModal = () => {
    setSelectedProblem(null);
  };

  const activeProblems = domains[activeDomain].problems;

  return (
    <section id="domains" className="domains">
      <div className="domains-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Challenge Tracks</span>
          <h2 className="section-title">Choose Your Domain</h2>
          <p className="section-description">
            Select from four exciting domains, each featuring unique problem statements
            designed to challenge and inspire innovative solutions.
          </p>
        </motion.div>

        <div className="domains-content">
          <motion.div
            className="domain-tabs"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {domains.map((domain, index) => (
              <motion.button
                key={index}
                className={`domain-tab ${activeDomain === index ? 'active' : ''}`}
                onClick={() => setActiveDomain(index)}
                whileHover={{ x: 10 }}
                style={{
                  '--domain-color': domain.color,
                }}
              >
                <div className="tab-icon">{domain.icon}</div>
                <div className="tab-content">
                  <h3 className="tab-name">{domain.name}</h3>
                  <div className="tab-tagline">{domain.tagline}</div>
                  <p className="tab-desc">{domain.description}</p>
                  <div className="tab-contacts-list">
                    <div className="contacts-heading">
                      <Phone size={13} /> <span>Coordinators:</span>
                    </div>
                    {domain.contacts.map((c, i) => (
                      <span key={i} className="contact-chip">
                        <span className="c-name">{c.name}</span>
                        {c.phone && <a href={`tel:${c.phone}`} className="c-phone">{c.phone}</a>}
                      </span>
                    ))}
                  </div>
                </div>
                <ChevronRight className="tab-arrow" size={20} />
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="problems-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="problems-container"
              >
                <h3 className="problems-title">
                  <span
                    className="domain-indicator"
                    style={{ background: domains[activeDomain].color }}
                  ></span>
                  Problem Statements
                </h3>
                {activeProblems.length > 0 ? (
                  <div className="problems-list">
                    {activeProblems.map((problem, index) => (
                      <motion.div
                        key={problem.id}
                        className="problem-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => openProblemModal(problem, domains[activeDomain].color, domains[activeDomain].name)}
                      >
                        <div className="problem-number">
                          <span>
                            {domains[activeDomain].code}
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="problem-content">
                          <h4 className="problem-title">{problem.title}</h4>
                          <p className="problem-description">{problem.description}</p>
                          <span className="click-hint">Click for details</span>
                        </div>
                        <ArrowRight className="problem-arrow" size={20} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="problems-coming-soon">
                    <div className="coming-soon-icon">
                      <Lightbulb size={30} />
                    </div>
                    <h4>Problem Statements Coming Soon</h4>
                    <p>
                      The challenge statements for {domains[activeDomain].name} will be
                      announced shortly. Stay tuned!
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Problem Detail Modal */}
      <AnimatePresence>
        {selectedProblem && (
          <motion.div
            className="problem-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProblemModal}
          >
            <motion.div
              className="problem-modal"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{ '--modal-color': selectedProblem.domainColor }}
            >
              <button className="modal-close" onClick={closeProblemModal}>
                <X size={24} />
              </button>

              <div className="modal-header">
                <span className="modal-domain">{selectedProblem.category || selectedProblem.domainName}</span>
                <h2 className="modal-title">{selectedProblem.title}</h2>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <div className="modal-section-header">
                    <Lightbulb size={20} />
                    <h3>Problem Overview</h3>
                  </div>
                  <p>{selectedProblem.detailedDescription}</p>
                </div>

                <div className="modal-section">
                  <div className="modal-section-header">
                    <Target size={20} />
                    <h3>Objectives</h3>
                  </div>
                  <ul className="modal-objectives">
                    {selectedProblem.objectives.map((objective, index) => (
                      <li key={index}>
                        <CheckCircle size={16} />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>Deliverables</h3>
                  <div className="modal-tags">
                    {selectedProblem.deliverables.map((item, index) => (
                      <span key={index} className="modal-tag deliverable">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Domains;
