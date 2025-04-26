import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Resume from "./pages/resume/Resume"
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/blog";
import './App.css'
// import Resume from "./components/Resume/Resume";

export default function App() {
  return (
      <Router>
          <Routes>

              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
          </Routes>
      </Router>
  );
}
