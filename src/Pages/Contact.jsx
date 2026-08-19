import React, { useState } from 'react';

const INITIAL_FORM = {
  name: '',
  email: '',
  company: '',
  service: 'SEO',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your backend / email API of choice.
    console.log('DAZELDEN contact form submission:', form);
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Let's map your next growth milestone.</h1>
          <p>Tell us about your brand and goals — we typically reply within one business day.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info-card">
            <h3>Get in touch</h3>
            <p>Prefer to skip the form? Reach us directly through any of the channels below.</p>

            <div className="contact-detail">
              <span className="k">Email</span>
              <span className="v">hello@dazelden.com</span>
            </div>
            <div className="contact-detail">
              <span className="k">Phone</span>
              <span className="v">+1 (555) 204-8890</span>
            </div>
            <div className="contact-detail">
              <span className="k">Studio</span>
              <span className="v">221 Signal Ave, Suite 4B<br />Austin, TX 78701</span>
            </div>
            <div className="contact-detail">
              <span className="k">Hours</span>
              <span className="v">Mon–Fri, 9:00 AM – 6:00 PM CST</span>
            </div>

            <div className="social-row">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="LinkedIn">IN</a>
              <a href="#" aria-label="X / Twitter">X</a>
              <a href="#" aria-label="YouTube">YT</a>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="form-success">
                Thanks — your message has been sent. A DAZELDEN strategist will
                reach out within one business day.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jordan Blake"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Work email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jordan@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="service">Service you're interested in</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option>SEO</option>
                      <option>Paid Media</option>
                      <option>Social Media Marketing</option>
                      <option>Content Marketing</option>
                      <option>Email Marketing</option>
                      <option>Branding &amp; Design</option>
                      <option>Web Development</option>
                      <option>Full-service package</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Tell us about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="What are you trying to grow, and by when?"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-accent">Send message</button>
                <p className="form-note">
                  By submitting, you agree to be contacted by DAZELDEN about your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}