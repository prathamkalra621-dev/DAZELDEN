import React from 'react';
import { Link } from 'react-router-dom';

const VALUES = [
  { title: 'Signal over noise', desc: 'We chase the metrics that move revenue, not the ones that just look good on a slide.' },
  { title: 'Radical transparency', desc: 'Live dashboards, honest reporting, no vanity numbers dressed up as wins.' },
  { title: 'Craft matters', desc: 'Strategy without great creative execution is just a spreadsheet. We obsess over both.' },
  { title: 'Long-term thinking', desc: 'We build systems that keep compounding long after the campaign ends.' },
];

const TIMELINE = [
  { year: '2016', text: 'DAZELDEN founded as a two-person SEO consultancy working out of a co-working space.' },
  { year: '2018', text: 'Launched our paid media and social practice; crossed 40 active client accounts.' },
  { year: '2021', text: 'Opened our creative studio, bringing branding and web design fully in-house.' },
  { year: '2023', text: 'Built our in-house analytics platform, DazelSignal, for real-time client reporting.' },
  { year: '2026', text: 'Now a 60-person full-service agency working with brands across 12 countries.' },
];

const TEAM = [
  { name: 'Ariana Cole', role: 'Founder & CEO' },
  { name: 'Devon Okafor', role: 'Head of Strategy' },
  { name: 'Sana Rahman', role: 'Creative Director' },
  { name: 'Leo Ferreira', role: 'Head of Performance' },
];

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">About DAZELDEN</span>
          <h1>We build marketing engines, not just campaigns.</h1>
          <p>
            Founded in 2016, DAZELDEN has grown from a two-person SEO shop into a
            full-service agency trusted by ambitious brands to own their growth —
            end to end, channel to channel.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Our mission</span>
            <h2>Turn attention into a durable growth advantage</h2>
            <p>
              Most brands don't have a marketing problem — they have a signal
              problem. Too many channels, too much noise, not enough clarity on
              what's actually working. We exist to cut through that: one strategy,
              one team, every channel pulling in the same direction.
            </p>
            <p>
              We're not a vendor you manage. We're an extension of your team that
              shows up with a point of view, a plan, and the numbers to back it up.
            </p>
            <Link to="/contact" className="btn btn-primary">Work with us</Link>
          </div>
          <div className="hero-visual" style={{ aspectRatio: '4/4' }}>
            <div className="hero-visual-glow" />
            <div className="hero-visual-card">
              <span className="eyebrow">Since 2016</span>
              <h4>60 people. One growth signal.</h4>
              <p>Strategy, media, content and design under a single roof.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we stand for</span>
            <h2>The principles behind every campaign</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div className="card" key={v.title}>
                <h3 style={{ fontSize: '19px' }}>{v.title}</h3>
                <p style={{ fontSize: '14.5px' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our journey</span>
            <h2>Ten years of compounding growth</h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((t) => (
              <div className="timeline-row" key={t.year}>
                <div className="timeline-year">{t.year}</div>
                <p style={{ margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Leadership</span>
            <h2>The people steering the signal</h2>
          </div>
          <div className="team-grid">
            {TEAM.map((m) => (
              <div className="team-card" key={m.name}>
                <div className="team-photo" />
                <h4>{m.name}</h4>
                <span>{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '96px' }}>
        <div className="cta-banner">
          <div>
            <h2>Curious what your growth engine could look like?</h2>
            <p>Let's talk about where you are and where you want to be.</p>
          </div>
          <Link to="/contact" className="btn btn-light">Get in touch</Link>
        </div>
      </section>
    </>
  );
}