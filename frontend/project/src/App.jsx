import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Categories from "./pages/Categories";
import ProfilePage from "./pages/profile";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
