import React from "react";
import "./landing.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <h1>Welcome to Our Fundraising Platform</h1>
        <p>
          Empowering communities through impactful fundraising initiatives.
        </p>
      </header>

      {/* Categories Section */}
      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="category-cards">
          {['Education', 'Healthcare', 'Environment', 'Community'].map((category) => (
            <div key={category} className="category-card">
              <h3>{category}</h3>
              <p>Support impactful initiatives in {category.toLowerCase()}.</p>
              <button>Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Fundraising Info Section */}
      <section className="fundraising-info">
        <div className="info-text">
          <h2>Why Fundraise With Us?</h2>
          <p>
            Our platform connects you to a global network of donors and
            volunteers. Whether it's education, healthcare, or community
            building, we provide tools and resources to turn your vision into
            reality.
          </p>
        </div>
      </section>

      {/* Top Fundraiser Section */}
      <section className="top-fundraiser">
        <h2>Top Fundraiser</h2>
        <div className="fundraiser-card">
          <h3>John Doe's Education Fund</h3>
          <p>
            Raised $25,000 to provide quality education to underprivileged
            children.
          </p>
          <button>View Campaign</button>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="credentials">
        <h2>Our Credentials</h2>
        <div className="credential-cards">
          <div className="credential-card">
            <h4>Certified Organization</h4>
            <p>Registered and compliant with global non-profit standards.</p>
          </div>
          <div className="credential-card">
            <h4>Proven Track Record</h4>
            <p>Successfully raised over $1 million for various causes.</p>
          </div>
          <div className="credential-card">
            <h4>Trusted by Donors</h4>
            <p>Verified by thousands of satisfied donors worldwide.</p>
          </div>
          <div className="credential-card">
            <h4>Global Network</h4>
            <p>Access to a wide network of volunteers and supporters.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Fundraising Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;