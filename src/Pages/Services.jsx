import { Link } from "react-router-dom";

function Services() {

  const services = [
    {
      number: "01",
      title: "Digital Marketing",
      text: "Build a powerful online presence with campaigns designed around your business goals."
    },
    {
      number: "02",
      title: "Social Media Marketing",
      text: "Create engaging social strategies that turn followers into loyal customers."
    },
    {
      number: "03",
      title: "Search Engine Optimization",
      text: "Improve your search visibility and attract high-intent organic traffic."
    },
    {
      number: "04",
      title: "Performance Marketing",
      text: "Reach your ideal audience through highly targeted paid advertising campaigns."
    },
    {
      number: "05",
      title: "Branding & Identity",
      text: "Develop a distinctive visual identity and brand voice that people remember."
    },
    {
      number: "06",
      title: "Content Marketing",
      text: "Tell your story with strategic content that educates, engages and converts."
    },
    {
      number: "07",
      title: "Website Development",
      text: "Create fast, modern and responsive websites designed to turn visitors into customers."
    },
    {
      number: "08",
      title: "Creative Design",
      text: "Stand out with premium graphics, campaigns and creative digital experiences."
    }
  ];

  return (
    <main>

      <section className="page-hero">
        <div className="container">

          <span className="eyebrow">OUR SERVICES</span>

          <h1>
            Digital Solutions
            <span> Built For Growth.</span>
          </h1>

          <p>
            From strategy and branding to performance marketing and
            web development, DAZELDEN gives your business everything
            it needs to grow online.
          </p>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="services-list">

            {services.map((service) => (
              <article className="service-large-card" key={service.number}>

                <span className="large-number">
                  {service.number}
                </span>

                <div>
                  <h2>{service.title}</h2>

                  <p>{service.text}</p>

                  <Link to="/contact">
                    Get Started →
                  </Link>
                </div>

                <span className="service-arrow">↗</span>

              </article>
            ))}

          </div>

        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">

          <span className="eyebrow">
            HAVE A PROJECT?
          </span>

          <h2>
            Let's Build Something
            <span> Great Together.</span>
          </h2>

          <Link to="/contact" className="btn btn-primary">
            Start Your Project →
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Services;