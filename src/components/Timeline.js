import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, Coffee, Users, Code, Award, PartyPopper,
  Sunrise, Moon, Utensils, Lightbulb, Trophy,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import './Timeline.css';

const Timeline = () => {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = {
    1: [
      {
        time: '09:00 AM - 09:30 AM',
        title: 'Inaugural',
        description: 'Welcome address, rules briefing, and kick-off for DevForge 2026',
        icon: <PartyPopper size={26} />,
        type: 'ceremony',
      },
      {
        time: '09:30 AM - 10:45 AM',
        title: 'Coding Sprint',
        description: 'The clock starts! Focus on building your innovative solutions',
        icon: <Code size={26} />,
        type: 'hack',
      },
      {
        time: '10:45 AM - 11:00 AM',
        title: 'Refreshment',
        description: 'Quick tea/coffee breather and snack break',
        icon: <Coffee size={26} />,
        type: 'break',
      },
      {
        time: '11:00 AM - 11:30 AM',
        title: 'Coding',
        description: 'Continue initial setup and component structuring',
        icon: <Code size={26} />,
        type: 'hack',
      },
      {
        time: '11:30 AM - 01:00 PM',
        title: 'Mentoring Session',
        description: 'Get expert 1-on-1 guidance and validate your technical approach',
        icon: <Lightbulb size={26} />,
        type: 'mentor',
      },
      {
        time: '01:00 PM - 02:00 PM',
        title: 'Lunch',
        description: 'Refuel with lunch before the first jury evaluation round',
        icon: <Utensils size={26} />,
        type: 'break',
      },
      {
        time: '02:00 PM - 02:30 PM',
        title: 'Coding',
        description: 'Final touches before Evaluation 1',
        icon: <Code size={26} />,
        type: 'hack',
      },
      {
        time: '02:30 PM - 04:00 PM',
        title: 'Evaluation 1',
        description: '1st Round review of project scope and architecture by judges',
        icon: <Award size={26} />,
        type: 'presentation',
      },
      {
        time: '04:00 PM - 04:30 PM',
        title: 'Refreshment',
        description: 'Evening tea and refreshment break',
        icon: <Coffee size={26} />,
        type: 'break',
      },
      {
        time: '04:30 PM - 06:00 PM',
        title: 'Coding',
        description: 'Implement feedback and build core features',
        icon: <Code size={26} />,
        type: 'hack',
      },
      {
        time: '06:00 PM - 07:00 PM',
        title: 'Coding & Mentoring',
        description: 'Mid-sprint checkpoint and refinement',
        icon: <Users size={26} />,
        type: 'mentor',
      },
      {
        time: '08:00 PM - 09:00 PM',
        title: 'Dinner',
        description: 'Evening feast and networking session with teams',
        icon: <Utensils size={26} />,
        type: 'break',
      },
      {
        time: '09:00 PM - 11:30 PM',
        title: 'Coding & Evaluation 2',
        description: 'Overnight hacking sprint & 2nd round progress evaluation',
        icon: <Award size={26} />,
        type: 'presentation',
      },
      {
        time: '11:30 PM - 12:30 AM',
        title: 'Culturals',
        description: 'Midnight entertainment, music, and refreshment',
        icon: <PartyPopper size={26} />,
        type: 'ceremony',
      },
      {
        time: '12:30 AM - 02:30 AM',
        title: 'Coding',
        description: 'Late night deep-tech development sprint',
        icon: <Moon size={26} />,
        type: 'hack',
      },
      {
        time: '02:30 AM - 03:00 AM',
        title: 'Refreshment',
        description: 'Late night snacks and hot coffee',
        icon: <Coffee size={26} />,
        type: 'break',
      },
      {
        time: '03:00 AM - 06:00 AM',
        title: 'Coding',
        description: 'Overnight sprint to lock in critical features',
        icon: <Code size={26} />,
        type: 'hack',
      },
    ],
    2: [
      {
        time: '06:00 AM - 08:00 AM',
        title: 'Break',
        description: 'Rest, wash up, and relax before final submission',
        icon: <Sunrise size={26} />,
        type: 'break',
      },
      {
        time: '08:00 AM - 08:45 AM',
        title: 'Breakfast',
        description: 'Morning breakfast for all participants',
        icon: <Utensils size={26} />,
        type: 'break',
      },
      {
        time: '09:00 AM - 10:45 AM',
        title: 'Final Evaluation',
        description: 'Final presentation and live project demonstration to judges',
        icon: <Award size={26} />,
        type: 'presentation',
      },
      {
        time: '10:45 AM - 11:00 AM',
        title: 'Refreshment',
        description: 'Brief refreshment break',
        icon: <Coffee size={26} />,
        type: 'break',
      },
      {
        time: '11:30 AM - 12:30 PM',
        title: 'Valedictory',
        description: 'Grand award ceremony, felicitation, and prize distribution',
        icon: <Trophy size={26} />,
        type: 'ceremony',
      },
    ],
  };

  const currentEvents = scheduleData[activeDay];

  return (
    <section id="timeline" className="timeline">
      <div className="timeline-bg">
        <div className="timeline-pattern"></div>
      </div>

      <div className="timeline-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Event Schedule</span>
          <h2 className="section-title">24 Hours of Innovation</h2>
          <p className="section-description">
            A meticulously crafted schedule to maximize creativity, learning, and building
          </p>
        </motion.div>

        <motion.div
          className="day-selector"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            className={`day-btn ${activeDay === 1 ? 'active' : ''}`}
            onClick={() => setActiveDay(1)}
          >
            <span className="day-number">01</span>
            <span className="day-text">Day One</span>
            <span className="day-date">Sep 22, 2026</span>
          </button>
          <div className="day-connector">
            <div className="connector-line"></div>
            <div className="connector-hours">24 HRS</div>
            <div className="connector-line"></div>
          </div>
          <button
            className={`day-btn ${activeDay === 2 ? 'active' : ''}`}
            onClick={() => setActiveDay(2)}
          >
            <span className="day-number">02</span>
            <span className="day-text">Day Two</span>
            <span className="day-date">Sep 23, 2026</span>
          </button>
        </motion.div>

        <div className="timeline-navigation">
          <button
            className="nav-arrow prev"
            onClick={() => setActiveDay(1)}
            disabled={activeDay === 1}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="nav-arrow next"
            onClick={() => setActiveDay(2)}
            disabled={activeDay === 2}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            className="timeline-grid"
            initial={{ opacity: 0, x: activeDay === 1 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeDay === 1 ? 50 : -50 }}
            transition={{ duration: 0.4 }}
          >
            {currentEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`timeline-card type-${event.type}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="card-glow"></div>
                <div className="card-header">
                  <div className="card-time">
                    <Clock size={14} />
                    <span>{event.time}</span>
                  </div>
                  <div className={`card-type-badge ${event.type}`}>
                    {event.type}
                  </div>
                </div>
                <div className="card-icon">
                  {event.icon}
                </div>
                <h3 className="card-title">{event.title}</h3>
                <p className="card-description">{event.description}</p>
                <div className="card-decoration">
                  <div className="deco-line"></div>
                  <div className="deco-dot"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="timeline-progress"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: activeDay === 1 ? '50%' : '100%' }}></div>
          </div>
          <div className="progress-labels">
            <span>Start</span>
            <span>12 Hours</span>
            <span>24 Hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
