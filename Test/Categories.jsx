import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

const categories = {
  education: "Education empowers individuals and strengthens communities by providing knowledge and skills.",
  healthcare: "Healthcare initiatives improve lives by ensuring access to medical services and promoting wellness.",
  environment: "Environmental projects aim to protect natural resources and create a sustainable future.",
  community: "Community support fosters inclusivity, economic growth, and overall societal well-being."
};

const Home = () => {
  return (
    <div>
      <h1>Explore Categories</h1>
      <div className="categories">
        {Object.keys(categories).map((key) => (
          <div key={key} className="category-card">
            <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
            <p>{categories[key]}</p>
            <Link to={`/category/${key}`}><button>Learn More</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const CategoryPage = () => {
  const { category } = useParams();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", amount: "", frequency: "", payment: "", purpose: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your donation!");
  };

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <p>{categories[category]}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone No" onChange={handleChange} required />
        <input type="number" name="amount" placeholder="Donation Amount" onChange={handleChange} required />
        <select name="frequency" onChange={handleChange} required>
          <option value="">Select Frequency</option>
          <option value="one-time">One-time</option>
          <option value="monthly">Monthly</option>
        </select>
        <select name="payment" onChange={handleChange} required>
          <option value="">Select Payment Method</option>
          <option value="credit">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        <textarea name="purpose" placeholder="Purpose of Funds" onChange={handleChange} required></textarea>
        <button type="submit">Donate</button>
      </form>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
