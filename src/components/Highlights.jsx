import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

export default function Highlights() {
  const [sectionRef, isInView] = useInView({ threshold: 0.12 });
  const [activeHighlight, setActiveHighlight] = useState(0);

  const highlightsData = [
    {
      id: 'hackathon',
      tag: 'CORE_SPRINT',
      index: '01',
      title: 'THE HACKATHON',
      subtitle: '24-Hour Code Infiltration Sprint',
      icon: '⚡',
      badge: 'MAIN EVENT',
      description:
        'A high-octane 24-hour sprint where syndicates lock in to engineer innovative software and hardware prototypes from scratch. Receive curated problem statements, undergo checkpoint evaluations, and submit your builds before the timer zeros out.',
      features: [
        'Curated challenges in AI, Web3, FinTech, & Systems',
        'Mid-sprint code health & architecture checkpoints',
        'Live mentorship from industry veterans & tech leads',
        'Direct project review with judging panel & prizes'
      ],
      terminalCommand: '$ hackheist --sprint 24h --mode intense'
    },
    {
      id: 'workshop',
      tag: 'SKILL_UPGRADE',
      index: '02',
      title: 'HANDS-ON WORKSHOPS',
      subtitle: 'Tactical Tooling & Technical Mastery',
      icon: '🛠️',
      badge: 'PRACTICAL LAB',
      description:
        'Guided, hands-on masterclasses designed to arm hackers with cutting-edge tools before and during the hackathon. Dive into modern cloud pipelines, AI agents, API integrations, and robust security practices directly on your machine.',
      features: [
        'Fast-paced implementation labs with sample code',
        'Zero-to-deploy cloud setups & containerization',
        'Practical security defense & vulnerability mitigation',
        'Certificates of completion for all attendees'
      ],
      terminalCommand: '$ git clone lab://security-protocols-mastery'
    },
    {
      id: 'tech-session',
      tag: 'INTEL_BRIEFING',
      index: '03',
      title: 'TECH SESSIONS',
      subtitle: 'Keynotes & Fireside Intel from Leaders',
      icon: '📡',
      badge: 'EXPERT TALKS',
      description:
        'Unfiltered talks and fireside sessions from senior Google Developer Experts, security researchers, and startup founders. Learn how real-world engineering teams scale systems to millions and navigate today’s evolving tech landscape.',
      features: [
        'Keynote addresses on AI breakthroughs & cyber resilience',
        'Behind-the-scenes engineering post-mortems',
        'Interactive Q&A open mic with industry figures',
        'Career roadmaps for aspiring engineering leaders'
      ],
      terminalCommand: '$ stream --channel intel --speaker GDE_LEAD'
    },
    {
      id: 'networking',
      tag: 'SYNDICATE_ALLIANCE',
      index: '04',
      title: 'COMMUNITY & NETWORKING',
      subtitle: 'Forge Alliances & Connect with Recruiters',
      icon: '🌐',
      badge: 'ECOSYSTEM',
      description:
        'HackHeist is where friendships are made and startups are born. Meet like-minded developers, exchange insights with community organizers, and engage with sponsoring companies actively looking for exceptional builder talent.',
      features: [
        'Dedicated Hacker Lounge for peer discussions & games',
        'Direct sponsor booth interactions & resume drops',
        'Community mixer with GDG leads from across the region',
        'Exclusive swag bags, stickers, and heist merchandise'
      ],
      terminalCommand: '$ ping --network gdg-community --port 2026'
    }
  ];

  return (
    <section id="highlights" className="highlights-section section-padding" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header-block reveal-elem ${isInView ? 'revealed' : ''}`}>
          <div className="section-eyebrow">
            <span className="eyebrow-hash">// 02</span>
            <span className="eyebrow-text">MISSION_COMPONENTS</span>
          </div>
          <h2 className="section-title">EVENT HIGHLIGHTS</h2>
          <div className="title-divider-line"></div>
          <p className="section-subtitle">
            Four interconnected pillars engineered to elevate every operative, from first-time coder to seasoned architect.
          </p>
        </div>

        {/* Highlights Cards Grid */}
        <div className={`highlights-grid reveal-elem ${isInView ? 'revealed' : ''}`}>
          {highlightsData.map((item, idx) => {
            const isActive = activeHighlight === idx;
            return (
              <div
                key={item.id}
                className={`highlight-card ${isActive ? 'highlight-card-active' : ''}`}
                onClick={() => setActiveHighlight(idx)}
                onMouseEnter={() => setActiveHighlight(idx)}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveHighlight(idx);
                  }
                }}
              >
                {/* Top Terminal Metadata */}
                <div className="highlight-card-top">
                  <span className="highlight-num">// {item.index}</span>
                  <span className="highlight-tag">{item.tag}</span>
                  <span className="highlight-badge">{item.badge}</span>
                </div>

                {/* Card Icon & Header */}
                <div className="highlight-header">
                  <div className="highlight-icon-wrap" aria-hidden="true">
                    <span>{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="highlight-title">{item.title}</h3>
                    <p className="highlight-subtitle">{item.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="highlight-desc">{item.description}</p>

                {/* Bullet Features */}
                <ul className="highlight-features-list">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="highlight-feature-item">
                      <span className="feature-check" aria-hidden="true">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Bottom Terminal Prompt */}
                <div className="highlight-card-bottom">
                  <code className="highlight-cmd">{item.terminalCommand}</code>
                  <span className="highlight-status-indicator">
                    <span className="pulse-indicator"></span>
                    ACTIVE
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
