import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

export default function FAQ() {
  const [sectionRef, isInView] = useInView({ threshold: 0.12 });
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Who is eligible to participate in HackHeist 2026?',
      a: 'HackHeist is open to all enrolled college students (undergraduate and postgraduate) across any engineering, polytechnic, design, or business stream. Inter-college and inter-year teams are actively encouraged.'
    },
    {
      q: 'What is the required team size?',
      a: 'Syndicates must comprise 2 to 4 members. Solo participation is generally discouraged because the scope of the challenges rewards diverse collaboration across frontend, backend, design, and pitch delivery.'
    },
    {
      q: 'Is there any registration or entry fee?',
      a: 'No! Registration for HackHeist 2026 is completely free of cost, thanks to GDG on Campus MIET and our partners. Meals, swag kits, Wi-Fi, mentorship, and venue access are fully covered.'
    },
    {
      q: 'What should operatives bring to the venue?',
      a: 'Bring your student ID, government photo ID, laptops, power adapters, extra spike guards, any custom IoT/hardware devices you wish to hack with, and your personal toiletries for the overnight sprint.'
    },
    {
      q: 'Can I start writing code before the hackathon begins?',
      a: 'No. To ensure fair competition, all code and design prototypes must be developed during the official hackathon period. You may use open-source libraries, public APIs, and pre-existing frameworks.'
    },
    {
      q: 'What if I am a beginner and have never attended a hackathon?',
      a: 'HackHeist is engineered to be welcoming to builders at every stage. We have beginner-friendly workshop tracks, dedicated mentors ready to unblock you, and judges who evaluate innovation and execution relative to your journey.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIdx(openIdx === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section section-padding" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header-block reveal-elem ${isInView ? 'revealed' : ''}`}>
          <div className="section-eyebrow">
            <span className="eyebrow-hash">// 04</span>
            <span className="eyebrow-text">SECURITY_CLEARANCE_FAQ</span>
          </div>
          <h2 className="section-title">RULES & FREQUENT INQUIRIES</h2>
          <div className="title-divider-line"></div>
          <p className="section-subtitle">
            Everything operatives need to know before initiating their breach sequence.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className={`faq-list reveal-elem ${isInView ? 'revealed' : ''}`}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-card ${isOpen ? 'faq-card-open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-index">0{idx + 1}.</span>
                  <span className="faq-question-text">{faq.q}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer-pane">
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
