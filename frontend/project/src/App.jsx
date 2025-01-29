import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Categories from "./pages/Categories";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
