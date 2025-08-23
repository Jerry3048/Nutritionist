import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Process from "./pages/Process";
import PricePage from "./pages/PricePage";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Process" element={<Process />} />
          <Route path="/PricePage" element={<PricePage />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};

export default App;