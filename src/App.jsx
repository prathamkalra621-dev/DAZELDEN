import { useEffect, useRef } from 'react'
import './App.css'
import Footer from './components/Footer'

const SERVICES = [
  { num: '01', title: 'SEO & Organic', copy: 'Technical fixes, content architecture, and link building that compound over months, not days.' },
  { num: '02', title: 'Paid Media', copy: 'Search, social, and programmatic campaigns managed against a target cost per acquisition.' },
  { num: '03', title: 'Content & Creative', copy: "Copy, video, and design produced for the channel it's going to run on, not repurposed after." },
  { num: '04', title: 'Social & Community', copy: 'Editorial calendars, community management, and creator partnerships that build a following.' },
  { num: '05', title: 'Email & Lifecycle', copy: 'Segmentation, automation, and campaigns that turn a list into a retention channel.' },
  { num: '06', title: 'Brand & Strategy', copy: 'Positioning, messaging, and identity work that gives every channel above something to say.' },
]

const PROCESS = [
  { num: '01', title: 'Discover', copy: 'Audit the current stack, the market, and the numbers to find where the growth is actually stuck.' },
  { num: '02', title: 'Build', copy: 'Set up campaigns, content, and tracking — the infrastructure a channel needs before it can scale.' },
  { num: '03', title: 'Launch', copy: 'Ship in public, on the timeline agreed at kickoff, with reporting live from day one.' },
  { num: '04', title: 'Optimize', copy: "Weekly review of what's working, reallocate spend, and cut what isn't earning its place." },
]

const TICKER_ITEMS = [
  'SEO & ORGANIC', 'PAID MEDIA', 'CONTENT & CREATIVE', 'SOCIAL & COMMUNITY',
  'EMAIL & LIFECYCLE', 'BRAND & STRATEGY', 'ANALYTICS & CRO',
]

function App() {
  const eqRef = useRef(null)

  // Load the brand fonts once, and randomize the equalizer bars on mount.
  useEffect(() => {
    const linkId = 'dazelden-fonts'
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link')
      link.id = linkId
      link.rel = 'stylesheet'
      link.href =
        'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap'
      document.head.appendChild(link)
    }

    if (eqRef.current) {
      eqRef.current.innerHTML = ''
      for (let i = 0; i < 24; i++) {
        const bar = document.createElement('span')
        bar.style.animationDelay = `${(Math.random() * 1.4).toFixed(2)}s`
        bar.style.opacity = 0.55 + Math.random() * 0.45
        eqRef.current.appendChild(bar)
      }
    }
  }, [])

  const loopedTicker = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <>
      <header>
        <nav>
          <div className="logo">DAZEL<span>DEN</span></div>
          <div className="navlinks">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="nav-cta">Start a project</a>
        </nav>
      </header>

      <section className="hero">
        <div className="eyebrow"><span className="dot"></span> FULL-SERVICE GROWTH MARKETING</div>
        <h1 className="display">Turn attention<br />into <span className="accent">revenue.</span></h1>
        <div className="hero-sub">
          <p>DAZELDEN plans, builds, and runs the full marketing stack — SEO, paid media, content, and lifecycle — for brands that need every channel pulling the same direction.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Start a project →</a>
            <a href="#services" className="btn btn-ghost">See our services</a>
          </div>
        </div>
      </section>

      <div className="ticker-band">
        <div className="ticker-track">
          {loopedTicker.map((item, i) => (
            <span className="ticker-item" key={i}>
              <b>{item}</b><span className="sep">/</span>
            </span>
          ))}
        </div>
      </div>

      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="section-tag">// 01 — SERVICES</span>
              <h2 className="display">Every channel,<br />one team.</h2>
            </div>
            <p>Hire us channel-by-channel or hand over the whole stack — the disciplines below are built to work together.</p>
          </div>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.num}>
              <span className="service-num">{s.num}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="process">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="section-tag">// 02 — PROCESS</span>
              <h2 className="display">How a project<br />actually runs.</h2>
            </div>
            <p>Four stages, same order every time — so you always know what's next.</p>
          </div>
          <div className="process-list">
            {PROCESS.map((p) => (
              <div className="process-row" key={p.num}>
                <span className="pnum">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="signal-panel">
            <div className="signal-copy">
              <span className="section-tag">// 03 — HOW WE REPORT</span>
              <h2 className="display">A live read on<br />every channel.</h2>
              <p>You get one dashboard for every channel we run, updated in real time — no monthly PDF, no waiting for a call to find out what's working.</p>
            </div>
            <div className="eq" ref={eqRef}></div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <span className="section-tag">// LET'S TALK</span>
        <h2 className="display" style={{ marginTop: '18px' }}>Ready to<br />get moving?</h2>
        <a href="mailto:hello@dazelden.com" className="btn btn-primary">hello@dazelden.com</a>
      </section>

      <Footer />
    </>
  )
}

export default App