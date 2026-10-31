import { Link } from "react-router-dom";

function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="hero-background">
          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>
        </div>

        <div className="container hero-grid">

          <div className="hero-content">
            <span className="eyebrow">
              DIGITAL MARKETING AGENCY
            </span>

            <h1>
              Turn Your
              <span> Digital Presence </span>
              Into Growth.
            </h1>

            <p>
              DAZELDEN helps ambitious brands grow through strategic
              digital marketing, powerful branding, creative content,
              and performance-driven campaigns.
            </p>

            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                Explore Services
                <span>→</span>
              </Link>

              <Link to="/contact" className="btn btn-outline">
                Start a Project
              </Link>
            </div>

            <div className="hero-trust">
              <div>
                <strong>360°</strong>
                <span>Digital Solutions</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Growth Focused</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Creative Thinking</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-top">
                <span>DAZELDEN</span>
                <span className="status">● LIVE</span>
              </div>

              <div className="chart">
                <div className="chart-line"></div>

                <div className="chart-point point-one"></div>
                <div className="chart-point point-two"></div>
                <div className="chart-point point-three"></div>
                <div className="chart-point point-four"></div>
              </div>

              <div className="visual-bottom">
                <div>
                  <small>Growth</small>
                  <strong>+248%</strong>
                </div>

                <div>
                  <small>Reach</small>
                  <strong>+186K</strong>
                </div>
              </div>
            </div>

            <div className="floating-card floating-one">
              <span>SEO</span>
              <strong>+94%</strong>
            </div>

            <div className="floating-card floating-two">
              <span>Social</span>
              <strong>12.8K</strong>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="eyebrow">WHAT WE DO</span>

              <h2>
                Everything Your Brand
                <span> Needs To Grow.</span>
              </h2>
            </div>

            <p>
              From strategy to execution, we create digital experiences
              that attract attention, build trust and generate results.
            </p>
          </div>

          <div className="service-preview-grid">

            <div className="service-card">
              <div className="service-number">01</div>
              <div className="service-icon">↗</div>
              <h3>Digital Marketing</h3>
              <p>
                Data-driven strategies that connect your brand with
                the right audience.
              </p>
              <Link to="/services">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-number">02</div>
              <div className="service-icon">◎</div>
              <h3>Social Media</h3>
              <p>
                Build communities and create content people actually
                want to engage with.
              </p>
              <Link to="/services">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-number">03</div>
              <div className="service-icon">⌁</div>
              <h3>SEO</h3>
              <p>
                Increase organic visibility and bring qualified
                customers to your website.
              </p>
              <Link to="/services">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-number">04</div>
              <div className="service-icon">✦</div>
              <h3>Branding</h3>
              <p>
                Create a memorable brand identity that stands apart
                from your competition.
              </p>
              <Link to="/services">Learn More →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="dark-section">
        <div className="container about-home">

          <div>
            <span className="eyebrow">WHY DAZELDEN</span>

            <h2>
              We Don't Just
              <span> Market.</span>
              <br />
              We Build Brands.
            </h2>
          </div>

          <div>
            <p>
              Your brand deserves more than generic marketing.
              DAZELDEN combines strategy, creativity and technology
              to create digital campaigns that move businesses forward.
            </p>

            <Link to="/about" className="text-link">
              Discover Our Story →
            </Link>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-box">
          <span className="eyebrow">READY TO GROW?</span>

          <h2>
            Let's Make Your Brand
            <span> Impossible To Ignore.</span>
          </h2>

          <p>
            Have an idea, business or campaign in mind?
            Let's turn it into something remarkable.
          </p>

          <Link to="/contact" className="btn btn-primary">
            Let's Work Together →
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Home;