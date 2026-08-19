import React from 'react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: '01',
    title: 'Search Engine Optimization',
    desc: 'Technical SEO, on-page optimization and link building to grow organic traffic that compounds month over month.',
    tags: ['Technical SEO', 'Keyword strategy', 'Link building', 'Local SEO'],
  },
  {
    id: '02',
    title: 'Paid Media & Performance Ads',
    desc: 'Google, Meta, LinkedIn and programmatic campaigns engineered around your target CAC and LTV, not just clicks.',
    tags: ['Google Ads', 'Meta Ads', 'Programmatic', 'Conversion tracking'],
  },
  {
    id: '03',
    title: 'Social Media Marketing',
    desc: 'Organic strategy, content calendars and community management that build a following that actually converts.',
    tags: ['Content calendars', 'Community mgmt', 'Influencer partnerships', 'Reels & Shorts'],
  },
  {
    id: '04',
    title: 'Content Marketing',
    desc: 'Blogs, guides, video and thought leadership built to earn organic visibility, backlinks and trust.',
    tags: ['Editorial strategy', 'Video production', 'Copywriting', 'Distribution'],
  },
  {
    id: '05',
    title: 'Email & Lifecycle Marketing',
    desc: 'Automated flows and campaigns that turn first-time buyers into repeat customers and brand advocates.',
    tags: ['Automation flows', 'Segmentation', 'A/B testing', 'CRM integration'],
  },
  {
    id: '06',
    title: 'Branding & Creative Design',
    desc: 'Identity systems, packaging and campaign creative that make a brand instantly recognizable.',
    tags: ['Brand identity', 'Packaging', 'Ad creative', 'Design systems'],
  },
  {
    id: '07',
    title: 'Web Design & Development',
    desc: 'Fast, conversion-focused websites and landing pages built to turn traffic into pipeline.',
    tags: ['Landing pages', 'E-commerce', 'CRO', 'Web performance'],
  },
  {
    id: '08',
    title: 'Analytics & Reporting',
    desc: 'Custom dashboards and attribution modeling so you always know exactly what\u2019s working.',
    tags: ['Dashboards', 'Attribution', 'Marketing mix modeling', 'Reporting'],
  },
];

const PROCESS = [
  { title: 'Discover', desc: 'Audit your current channels, data and competitive landscape.' },
  { title: 'Plan', desc: 'Build a channel roadmap tied to a single growth target.' },
  { title: 'Launch', desc: 'Ship campaigns, content and creative on a tight sprint cycle.' },
  { title: 'Scale', desc: 'Double down on what works, cut what doesn\u2019t, report weekly.' },
];

export default function Services() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>Everything your growth stack needs, in one place.</h1>
          <p>
            From technical SEO to full brand campaigns — pick a single service or
            let us run the entire stack as your outsourced marketing department.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {SERVICES.map((s) => (
            <div className="service-row" key={s.id}>
              <div className="service-index">{s.id}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="service-tags">
                {s.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">How we work</span>
            <h2>A simple process, run on a tight loop</h2>
          </div>
          <div className="process-strip">
            {PROCESS.map((p, i) => (
              <div className="process-step" key={p.title}>
                <div className="step-num">STEP {i + 1}</div>
                <h3 style={{ fontSize: '19px' }}>{p.title}</h3>
                <p style={{ fontSize: '14.5px' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '96px' }}>
        <div className="cta-banner">
          <div>
            <h2>Not sure which service you need?</h2>
            <p>Send us a quick brief and we'll recommend the right starting point.</p>
          </div>
          <Link to="/contact" className="btn btn-light">Talk to us</Link>
        </div>
      </section>
    </>
  );
}