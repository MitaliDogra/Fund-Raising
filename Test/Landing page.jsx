import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-5xl font-extrabold">Welcome to Our Fundraising Platform</h1>
        <p className="text-lg mt-4 font-medium">
          Empowering communities through impactful fundraising initiatives.
        </p>
      </header>

      {/* Categories Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {['Education', 'Healthcare', 'Environment', 'Community'].map((category) => (
            <div
              key={category}
              className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-600">{category}</h3>
              <p className="text-gray-600 mt-2">
                Support impactful initiatives in {category.toLowerCase()}.
              </p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Fundraising Info Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Fundraise With Us?</h2>
          <p className="text-gray-700 leading-relaxed">
            Our platform connects you to a global network of donors and volunteers.
            Whether it's education, healthcare, or community building, we provide
            tools and resources to turn your vision into reality.
          </p>
        </div>
      </section>

      {/* Top Fundraiser Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Top Fundraiser</h2>
        <div className="max-w-3xl mx-auto bg-blue-50 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-blue-600">John Doe's Education Fund</h3>
          <p className="text-gray-700 mt-4">
            Raised $25,000 to provide quality education to underprivileged children.
          </p>
          <button className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition">
            View Campaign
          </button>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Credentials</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Certified Organization</h4>
            <p className="text-gray-600 mt-2">
              Registered and compliant with global non-profit standards.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Proven Track Record</h4>
            <p className="text-gray-600 mt-2">
              Successfully raised over $1 million for various causes.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Trusted by Donors</h4>
            <p className="text-gray-600 mt-2">
              Verified by thousands of satisfied donors worldwide.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Global Network</h4>
            <p className="text-gray-600 mt-2">
              Access to a wide network of volunteers and supporters.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p className="text-sm">&copy; 2025 Fundraising Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;