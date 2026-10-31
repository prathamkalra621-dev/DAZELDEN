import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for contacting DAZELDEN! We will get back to you soon."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  return (
    <main>

      <section className="page-hero">
        <div className="container">

          <span className="eyebrow">CONTACT US</span>

          <h1>
            Let's Grow Your
            <span> Business.</span>
          </h1>

          <p>
            Tell us about your project and let's discuss how DAZELDEN
            can help your brand reach its next level.
          </p>

        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">

          {/* CONTACT INFORMATION */}
          <div className="contact-info">

            <span className="eyebrow">
              GET IN TOUCH
            </span>

            <h2>
              Have An Idea?
              <span> Let's Talk.</span>
            </h2>

            <p>
              Whether you need a complete digital marketing strategy,
              social media management, SEO, branding or a new website,
              we're ready to help.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <span>EMAIL</span>
                <a href="mailto:dazeldenofficial.com">
                  dazeldenofficial.com
                </a>
              </div>

              <div className="contact-item">
                <span>PHONE</span>
                <a href="tel:+918529151147">
                  +91 8529151147
                </a>
              </div>

              <div className="contact-item">
                <span>LOCATION</span>
                <p>Udaipur,India</p>
              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="contact-form-wrapper">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">
                  <label>Your Name</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Service</label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select a service
                    </option>
                    <option value="digital-marketing">
                      Digital Marketing
                    </option>
                    <option value="social-media">
                      Social Media Marketing
                    </option>
                    <option value="seo">
                      SEO
                    </option>
                    <option value="branding">
                      Branding
                    </option>
                    <option value="website">
                      Website Development
                    </option>
                    <option value="content">
                      Content Marketing
                    </option>
                  </select>
                </div>

              </div>

              <div className="form-group">
                <label>Tell Us About Your Project</label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell us about your business and project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary form-button"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;