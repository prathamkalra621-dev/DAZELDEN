import { Link } from "react-router-dom";

function Blog() {

  const posts = [
    {
      category: "SOCIAL MEDIA",
      title: "How Social Media Can Transform Your Business",
      date: "August 2026",
      text: "Discover how a strategic social media presence can increase awareness, engagement and customer loyalty."
    },
    {
      category: "SEO",
      title: "Why SEO Is Essential For Modern Businesses",
      date: "August 2026",
      text: "Learn why search visibility matters and how businesses can build a sustainable source of organic traffic."
    },
    {
      category: "BRANDING",
      title: "How To Build A Brand People Remember",
      date: "July 2026",
      text: "Your brand is more than a logo. Discover the essential elements of a strong and memorable identity."
    },
    {
      category: "DIGITAL MARKETING",
      title: "Digital Marketing Trends Every Business Should Know",
      date: "July 2026",
      text: "Explore the strategies and ideas shaping the future of digital marketing."
    },
    {
      category: "CONTENT",
      title: "Creating Content That Actually Converts",
      date: "June 2026",
      text: "Learn how to create useful content that attracts your audience and moves them closer to action."
    },
    {
      category: "GROWTH",
      title: "From Visibility To Real Business Growth",
      date: "June 2026",
      text: "Understand how to turn digital attention into measurable business results."
    }
  ];

  return (
    <main>

      <section className="page-hero">
        <div className="container">

          <span className="eyebrow">DAZELDEN INSIGHTS</span>

          <h1>
            Ideas That
            <span> Move Brands Forward.</span>
          </h1>

          <p>
            Digital marketing insights, strategies and practical ideas
            to help your business grow in an ever-changing digital world.
          </p>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="blog-grid">

            {posts.map((post, index) => (
              <article className="blog-card" key={index}>

                <div className="blog-image">
                  <span>{post.category}</span>
                  <div className="blog-shape">
                    D
                  </div>
                </div>

                <div className="blog-content">

                  <div className="blog-meta">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>

                  <h2>{post.title}</h2>

                  <p>{post.text}</p>

                  <Link to="/contact">
                    Read More →
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}

export default Blog;