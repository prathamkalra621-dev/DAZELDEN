import { Link } from "react-router-dom";

function About() {
  return (
    <main>

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">ABOUT DAZELDEN</span>

          <h1>
            Strategy Meets
            <span> Creativity.</span>
          </h1>

          <p>
            At Dazelden, we help businesses grow in the digital world with smart, creative, and results-driven marketing solutions. From digital strategy and SEO to social media and online branding, we focus on building strong digital presence, reaching the right audience, and turning ideas into measurable growth.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">

          <div className="about-image">
            <div className="about-logo-card">
              <img src="/dazelden-logo.png" alt="DAZELDEN" />
              <h3>DAZELDEN</h3>
              <p>Grow Your Business Online.</p>
            </div>
          </div>

          <div className="about-content">
            <span className="eyebrow">OUR STORY</span>

            <h2>
              Building Brands That
              <span> Matter.</span>
            </h2>

            <p>
              DAZELDEN was created with one simple belief:
              marketing should create real business impact.
            </p>

            <p>
              We combine creative thinking, digital strategy,
              technology and data to help businesses communicate
              better, reach the right people and grow consistently.
            </p>

            <p>
              Whether you're launching a new business, building a
              personal brand or scaling an established company,
              we're here to turn your vision into a strong digital
              presence.
            </p>

            <Link to="/contact" className="btn btn-primary">
              Work With Us →
            </Link>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="dark-section">
        <div className="container">

          <div className="section-heading light-heading">
            <div>
              <span className="eyebrow">OUR VALUES</span>

              <h2>
                What Drives
                <span> Us.</span>
              </h2>
            </div>
          </div>

          <div className="values-grid">

            <div className="value-card">
              <span>01</span>
              <h3>Creativity</h3>
              <p>
                We believe great ideas make brands memorable.
              </p>
            </div>

            <div className="value-card">
              <span>02</span>
              <h3>Strategy</h3>
              <p>
                Every creative decision is backed by a clear strategy.
              </p>
            </div>

            <div className="value-card">
              <span>03</span>
              <h3>Results</h3>
              <p>
                We focus on outcomes, not vanity metrics.
              </p>
            </div>

            <div className="value-card">
              <span>04</span>
              <h3>Innovation</h3>
              <p>
                We constantly adapt to the changing digital world.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default About;