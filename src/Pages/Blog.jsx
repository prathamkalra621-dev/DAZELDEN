import React from 'react';

const FEATURED = {
  tag: 'STRATEGY',
  date: 'Aug 12, 2026',
  title: 'Why "full-funnel" marketing is broken — and what replaces it',
  excerpt: 'Most funnels are built for how marketers think, not how customers actually buy. Here\u2019s the signal-based model we use with every DAZELDEN client instead.',
};

const POSTS = [
  { tag: 'SEO', date: 'Aug 04, 2026', title: 'The 2026 technical SEO checklist for growing e-commerce brands', excerpt: 'Twelve technical fixes that consistently move the needle on organic traffic.' },
  { tag: 'PAID ADS', date: 'Jul 28, 2026', title: 'Google Ads vs. Meta Ads: where to spend your next dollar', excerpt: 'A practical framework for allocating budget across paid channels by funnel stage.' },
  { tag: 'SOCIAL', date: 'Jul 19, 2026', title: 'How we grew a DTC brand\u2019s Instagram to 250k without paid boosts', excerpt: 'The content system behind an organic growth curve most brands never see.' },
  { tag: 'EMAIL', date: 'Jul 09, 2026', title: 'Five lifecycle emails every subscription brand is missing', excerpt: 'Simple automations that quietly recover thousands in lost revenue.' },
  { tag: 'BRANDING', date: 'Jun 30, 2026', title: 'Rebranding without losing your existing customers', excerpt: 'A step-by-step approach to evolving identity without breaking trust.' },
  { tag: 'ANALYTICS', date: 'Jun 21, 2026', title: 'Building a marketing dashboard your CEO will actually read', excerpt: 'What to include, what to cut, and how to tie every metric to revenue.' },
];

export default function Blog() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">The DAZELDEN Journal</span>
          <h1>Ideas, playbooks and results from the growth desk.</h1>
          <p>Field notes from campaigns we're running right now — no recycled advice.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-featured">
            <div className="blog-thumb" data-tag={FEATURED.tag} />
            <div>
              <div className="blog-meta">{FEATURED.tag} · {FEATURED.date}</div>
              <h2 style={{ fontSize: '32px' }}>{FEATURED.title}</h2>
              <p>{FEATURED.excerpt}</p>
              <a href="#" className="card-link">Read the full article →</a>
            </div>
          </div>

          <div className="blog-grid">
            {POSTS.map((post) => (
              <div className="blog-card" key={post.title}>
                <div className="blog-thumb" data-tag={post.tag} />
                <div className="blog-meta">{post.tag} · {post.date}</div>
                <h3>{post.title}</h3>
                <p style={{ fontSize: '14.5px' }}>{post.excerpt}</p>
                <a href="#" className="card-link">Read more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}