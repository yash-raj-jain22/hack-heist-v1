import React from 'react';
import { useInView } from '../hooks/useInView';

export default function About() {
  const [sectionRef, isInView] = useInView({ threshold: 0.12 });

  const metrics = [
    { label: 'SPRINT_DURATION', value: '24+', unit: 'HOURS', desc: 'Non-stop hacking, mentoring, and code execution' },
    { label: 'BOUNTY_POOL', value: '₹1.5L', unit: 'CASH & PERKS', desc: 'Cash prizes, track awards, and cloud credits' },
    { label: 'OPERATIVES', value: '500+', unit: 'HACKERS', desc: 'Developers, designers, and security minds assembled' },
    { label: 'DOMAINS', value: '04', unit: 'TRACKS', desc: 'AI/ML, Web3 & Cyber, Open Innovation, Cloud Dev' }
  ];

  return (
    <section id="about" className="about-section section-padding" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header-block reveal-elem ${isInView ? 'revealed' : ''}`}>
          <div className="section-eyebrow">
            <span className="eyebrow-hash">// 01</span>
            <span className="eyebrow-text">DOSSIER_BRIEFING</span>
          </div>
          <h2 className="section-title">ABOUT HACKHEIST</h2>
          <div className="title-divider-line"></div>
        </div>

        {/* Dossier Grid */}
        <div className="about-grid">
          {/* Main Description Terminal Box */}
          <div className={`about-card dossier-main-card reveal-elem ${isInView ? 'revealed' : ''}`}>
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-filename">dossier_hackheist_2026.log</span>
              <span className="terminal-badge">CONFIDENTIAL</span>
            </div>

            <div className="dossier-body">
              <div className="dossier-meta-line">
                <span className="dossier-key">TARGET:</span>
                <span className="dossier-value">Real-World Technological Paradigms</span>
              </div>
              <div className="dossier-meta-line">
                <span className="dossier-key">ORGANIZED_BY:</span>
                <span className="dossier-value accent-green">GDG on Campus MIET</span>
              </div>

              <div className="dossier-text-block">
                <p>
                  <strong>HackHeist 2026</strong> is the premier flagship collegiate hackathon engineered by 
                  <strong> GDG on Campus MIET</strong>. Designed with a cyber-heist narrative, it brings together 
                  hundreds of passionate developers, security analysts, algorithmic thinkers, and creative designers 
                  under one high-energy terminal.
                </p>
                <p>
                  Over an intense 24-hour sprint starting at <strong>9:00 AM onwards</strong>, syndicates tackle 
                  complex real-world problems. Whether building breach-proof distributed systems, next-gen AI applications, 
                  or high-impact community tools, HackHeist is where theory translates into battle-tested execution.
                </p>
              </div>

              <div className="dossier-quote-box">
                <span className="quote-bracket">“</span>
                <p className="quote-text">
                  This isn’t just another hackathon. It’s an engineered heist on conventional limits — breaking bugs, 
                  seizing opportunities, and constructing the future.
                </p>
              </div>
            </div>
          </div>

          {/* Dossier Directive Badges */}
          <div className={`about-card dossier-side-card reveal-elem ${isInView ? 'revealed' : ''}`}>
            <div className="terminal-bar">
              <span className="terminal-filename">// OPERATIVE_PILLARS</span>
            </div>
            
            <div className="pillars-list">
              <div className="pillar-item">
                <div className="pillar-num">01</div>
                <div className="pillar-content">
                  <h3 className="pillar-heading">BATTLE-TESTED MENTORSHIP</h3>
                  <p className="pillar-desc">
                    Direct access to experienced Google Developer Experts, senior software architects, and cybersecurity pros guiding your architecture.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-num">02</div>
                <div className="pillar-content">
                  <h3 className="pillar-heading">COLLABORATIVE SYNDICATES</h3>
                  <p className="pillar-desc">
                    Teams of 2 to 4 operatives uniting varied skillsets across frontend, backend, smart systems, and user experience.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-num">03</div>
                <div className="pillar-content">
                  <h3 className="pillar-heading">PRODUCTION-READY CRITERIA</h3>
                  <p className="pillar-desc">
                    Projects are evaluated on technical ingenuity, operational viability, UI polish, and functional execution — no slide-only vaporware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className={`about-metrics-row reveal-elem ${isInView ? 'revealed' : ''}`}>
          {metrics.map((item, idx) => (
            <div key={idx} className="metric-box">
              <span className="metric-tag">{item.label}</span>
              <div className="metric-value-wrap">
                <span className="metric-number">{item.value}</span>
                <span className="metric-unit">{item.unit}</span>
              </div>
              <p className="metric-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
