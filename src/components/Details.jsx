import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

export default function Details() {
  const [sectionRef, isInView] = useInView({ threshold: 0.12 });
  const [activeDay, setActiveDay] = useState('day1');

  const scheduleDay1 = [
    { time: '09:00 AM', tag: 'INFILTRATION', title: 'Operative Check-In & Badge Collection', desc: 'Arrive at the MIET main terminal, collect your operative kit, hack badge, and setup your workstation.' },
    { time: '10:15 AM', tag: 'KEYNOTE', title: 'Opening Ceremony & Theme Reveal', desc: 'Welcome address by GDG on Campus MIET leads, sponsor keynotes, and release of problem statement vaults.' },
    { time: '11:30 AM', tag: 'HACKING', title: 'Sprint Commences: Vault Breaching', desc: 'Teams commence architecture building, repository creation, and initial sprints. Mentors on stand-by.' },
    { time: '01:30 PM', tag: 'REFUEL', title: 'Networking Lunch & Operative Fuel', desc: 'Complimentary high-energy lunch served at the campus commons.' },
    { time: '03:30 PM', tag: 'WORKSHOP', title: 'Hands-on Technical Deep Dive Lab', desc: 'Session by guest experts on modern cloud deployment and AI security protocols.' },
    { time: '06:00 PM', tag: 'CHECKPOINT', title: 'Mentorship Checkpoint 01', desc: 'Mandatory syndicate review with domain mentors to review progress, validate feasibility, and refine direction.' },
    { time: '09:00 PM', tag: 'REFUEL', title: 'Dinner & Midnight Fuel Up', desc: 'Dinner served followed by midnight coffee, energy refreshments, and fun mini-challenges.' }
  ];

  const scheduleDay2 = [
    { time: '08:00 AM', tag: 'REFUEL', title: 'Day 02 Breakfast & Morning Sync', desc: 'Fresh breakfast served. syndicates enter the final sprint zone.' },
    { time: '10:00 AM', tag: 'CHECKPOINT', title: 'Mentorship Checkpoint 02 (Dry Runs)', desc: 'Final mock pitch check with mentors to ensure project deployment links and presentations are solid.' },
    { time: '11:30 AM', tag: 'SUBMISSION', title: 'Code Freeze & Vault Lockdown', desc: 'All code repositories and presentation slides must be pushed to the evaluation portal.' },
    { time: '12:30 PM', tag: 'PITCHING', title: 'Grand Syndicate Pitching Rounds', desc: 'Top qualifying teams pitch live to the jury panel of industry executives and tech leaders.' },
    { time: '03:30 PM', tag: 'CEREMONY', title: 'Valedictory, Awards & Bounty Distribution', desc: 'Announcing HackHeist 2026 champions, track winners, distribution of cash bounties, trophies, and swag.' }
  ];

  const venueAmenities = [
    { icon: '📶', title: 'High-Speed Wi-Fi', desc: 'Dedicated gigabit fiber connections across all hacking zones' },
    { icon: '⚡', title: 'Dedicated Power Drops', desc: 'Multiple spike guards and uninterrupted power supply at every table' },
    { icon: '☕', title: 'Fuel & Refreshments', desc: 'Round-the-clock coffee, energy drinks, snacks, and wholesome meals' },
    { icon: '🛋️', title: 'Rest & Gaming Zones', desc: 'Designated relaxation zones and fun casual games to recharge between commits' }
  ];

  return (
    <section id="details" className="details-section section-padding" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header-block reveal-elem ${isInView ? 'revealed' : ''}`}>
          <div className="section-eyebrow">
            <span className="eyebrow-hash">// 03</span>
            <span className="eyebrow-text">LOCATION_AND_TIMELINE</span>
          </div>
          <h2 className="section-title">EVENT DETAILS</h2>
          <div className="title-divider-line"></div>
          <p className="section-subtitle">
            Essential mission intelligence: coordinates, timeline checkpoints, and operative logistics.
          </p>
        </div>

        {/* Primary Intel Cards (Date, Time, Venue) */}
        <div className={`details-summary-grid reveal-elem ${isInView ? 'revealed' : ''}`}>
          {/* Card 1: Date */}
          <div className="summary-intel-card">
            <div className="summary-intel-header">
              <span className="intel-hash">SYS://DATE</span>
              <span className="intel-pill-badge">24H SPRINT</span>
            </div>
            <div className="summary-intel-main">
              <div className="summary-icon">🗓️</div>
              <div className="summary-text-group">
                <h3 className="summary-title">March 27 – 28, 2026</h3>
                <p className="summary-desc">Two days of continuous high-intensity engineering, learning, and collaboration.</p>
              </div>
            </div>
            <div className="summary-footer-meta">
              <span>STATUS: CONFIRMED</span>
              <span className="status-blink">● LIVE</span>
            </div>
          </div>

          {/* Card 2: Timing */}
          <div className="summary-intel-card">
            <div className="summary-intel-header">
              <span className="intel-hash">SYS://TIME</span>
              <span className="intel-pill-badge">SHARP START</span>
            </div>
            <div className="summary-intel-main">
              <div className="summary-icon">⏱️</div>
              <div className="summary-text-group">
                <h3 className="summary-title">9:00 AM Onwards</h3>
                <p className="summary-desc">Check-in desk opens at 08:30 AM. Opening briefing initiates at 10:15 AM sharp.</p>
              </div>
            </div>
            <div className="summary-footer-meta">
              <span>TIMEZONE: IST (UTC+5:30)</span>
              <span>NO TARDINESS</span>
            </div>
          </div>

          {/* Card 3: Venue */}
          <div className="summary-intel-card">
            <div className="summary-intel-header">
              <span className="intel-hash">SYS://LOCATION</span>
              <span className="intel-pill-badge">ON-CAMPUS</span>
            </div>
            <div className="summary-intel-main">
              <div className="summary-icon">📍</div>
              <div className="summary-text-group">
                <h3 className="summary-title">MIET Meerut Campus</h3>
                <p className="summary-desc">Auditorium & Innovation Computing Labs, NH-58, Bypass Road, Meerut, UP 250005.</p>
              </div>
            </div>
            <div className="summary-footer-meta">
              <span>ORGANIZER: GDG MIET</span>
              <span className="geo-tag">28.9845° N, 77.7064° E</span>
            </div>
          </div>
        </div>

        {/* Schedule & Venue Tabs Grid */}
        <div className={`details-content-grid reveal-elem ${isInView ? 'revealed' : ''}`}>
          {/* Timeline Schedule Column */}
          <div className="schedule-column">
            <div className="schedule-header-card">
              <div className="schedule-title-area">
                <span className="terminal-prefix">// TIMELINE</span>
                <h3 className="subheading-cyber">MISSION SCHEDULE</h3>
              </div>
              <div className="schedule-tabs" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeDay === 'day1'}
                  className={`tab-btn ${activeDay === 'day1' ? 'tab-btn-active' : ''}`}
                  onClick={() => setActiveDay('day1')}
                >
                  DAY 01 (MAR 27)
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeDay === 'day2'}
                  className={`tab-btn ${activeDay === 'day2' ? 'tab-btn-active' : ''}`}
                  onClick={() => setActiveDay('day2')}
                >
                  DAY 02 (MAR 28)
                </button>
              </div>
            </div>

            {/* Timeline Stream */}
            <div className="timeline-stream">
              {(activeDay === 'day1' ? scheduleDay1 : scheduleDay2).map((item, idx) => (
                <div key={idx} className="timeline-node">
                  <div className="timeline-time-col">
                    <span className="timeline-time">{item.time}</span>
                    <span className="timeline-tag">{item.tag}</span>
                  </div>
                  <div className="timeline-connector">
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-card">
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Venue & Logistics Dossier Column */}
          <div className="venue-column">
            <div className="venue-card">
              <div className="terminal-bar">
                <span className="terminal-filename">venue_logistics_manifest.sh</span>
                <span className="terminal-status-green">ONLINE</span>
              </div>
              <div className="venue-body">
                <h3 className="subheading-cyber">FACILITY AMENITIES</h3>
                <p className="venue-intro">
                  MIET Campus provides an enterprise-tier environment equipped to support hundreds of concurrent developers without interruption.
                </p>

                <div className="amenities-grid">
                  {venueAmenities.map((amenity, aIdx) => (
                    <div key={aIdx} className="amenity-item">
                      <div className="amenity-icon">{amenity.icon}</div>
                      <div>
                        <h4 className="amenity-title">{amenity.title}</h4>
                        <p className="amenity-desc">{amenity.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Venue Quick Directives Box */}
                <div className="venue-directive-box">
                  <div className="directive-header">
                    <span className="directive-tag">CHECK-IN DIRECTIVES:</span>
                  </div>
                  <ul className="directive-list">
                    <li>Valid College / Government ID card is mandatory for gate entry.</li>
                    <li>Bring your personal laptops, chargers, spike guards, and hardware kits.</li>
                    <li>Both vegetarian and non-vegetarian meals will be provided.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
