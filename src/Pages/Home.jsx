import React from 'react';
import { Link } from 'react-router-dom';

const SERVICES_PREVIEW = [
  { icon: 'SEO', title: 'Search Engine Optimization', desc: 'Rank higher, get found by the people already looking for you.' },
  { icon: 'PPC', title: 'Paid Media & Ads', desc: 'Google, Meta and programmatic campaigns built to hit target CAC.' },
  { icon: 'SOC', title: 'Social Media Marketing', desc: 'Content, community and growth across every platform that matters.' },
  { icon: 'CON', title: 'Content Marketing', desc: 'Editorial, video and long-form built to earn attention and links.' },
  { icon: 'EML', title: 'Email & Lifecycle', desc: 'Retention flows and campaigns that turn buyers into repeat customers.' },
  { icon: 'BRD', title: 'Branding & Design', desc: 'Identity systems, web design and creative that make brands stick.' },
];

const DIFFERENTIATORS = [
  { title: 'One team, every channel', desc: 'No handoffs between agencies — strategy, creative and media sit under one roof.' },
  { title: 'Data before opinions', desc: 'Every decision is tied to a dashboard you can see, not a hunch you have to trust.' },
  { title: 'Built for compounding growth', desc: 'We optimize for twelve months out, not just this month\u2019s report.' },
];

const TESTIMONIALS = [
  { quote: 'DAZELDEN rebuilt our funnel from the ground up and our CAC dropped by 38% in a quarter.', name: 'Priya Nair', role: 'VP Growth, Fintra' },
  { quote: 'The most transparent agency we\u2019ve worked with — we can see exactly where every rupee goes.', name: 'Marcus Webb', role: 'Founder, Loop Supply Co.' },
];

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div>
          <span className="eyebrow">Full-Service Digital Marketing</span>
          <h1>
            Amplify your <span className="accent-word">signal.</span><br />
            Drown out the noise.
          </h1>
          <p className="hero-lead">
            DAZELDEN is a full-service digital marketing agency — SEO, paid media,
            social, content, email and branding, run by one team that's obsessed
            with your growth number.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-accent">Start a project</Link>
            <Link to="/services" className="btn btn-ghost">Explore services</Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">180+</div>
              <div className="label">Brands scaled</div>
            </div>
            <div className="hero-stat">
              <div className="num">4.6x</div>
              <div className="label">Avg. ROAS lift</div>
            </div>
            <div className="hero-stat">
              <div className="num">9 yrs</div>
              <div className="label">In business</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-glow" />
          <div className="hero-visual-card">
            <span className="eyebrow">Live campaign</span>
            <h4>Organic traffic +212%</h4>
            <p>SEO &amp; content engine — 6 month rolling result for a DTC client.</p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="logo-strip">
          <span>NIMBUS</span>
          <span>LOOP SUPPLY CO.</span>
          <span>FINTRA</span>
          <span>HAVEN &amp; CO</span>
          <span>ORBITAL</span>
          <span>GREENFIELD</span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>Every channel your growth plan needs</h2>
            <p>Pick one service or the full stack — every engagement is built around a single number: your revenue.</p>
          </div>

          <div className="grid-3">
            {SERVICES_PREVIEW.map((s) => (
              <div className="card" key={s.title}>
                <div className="card-icon">{s.icon}</div>
                <h3 style={{ fontSize: '19px' }}>{s.title}</h3>
                <p style={{ fontSize: '14.5px' }}>{s.desc}</p>
                <Link to="/services" className="card-link">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why DAZELDEN</span>
            <h2>Built to be the last agency you hire</h2>
          </div>
          <div className="grid-3">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title}>
                <h3 style={{ fontSize: '19px' }}>{d.title}</h3>
                <p style={{ fontSize: '14.5px' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Client results</span>
            <h2>Brands that trusted us with their signal</h2>
          </div>
          <div className="grid-2">
            {TESTIMONIALS.map((t) => (
              <div className="card" key={t.name}>
                <p style={{ fontSize: '17px', color: 'var(--ink)' }}>&ldquo;{t.quote}&rdquo;</p>
                <strong style={{ fontSize: '14.5px' }}>{t.name}</strong>
                <div style={{ fontSize: '13px', color: 'var(--ink-soft)' }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '96px' }}>
        <div className="cta-banner">
          <div>
            <h2>Ready to turn your marketing into a growth engine?</h2>
            <p>Tell us where you're stuck — we'll map the fastest path to your next revenue milestone.</p>
          </div>
          <Link to="/contact" className="btn btn-light">Book a free audit</Link>
        </div>
      </section>
    </>
  );
}