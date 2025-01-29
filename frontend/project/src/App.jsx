import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Categories from "./pages/Categories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
