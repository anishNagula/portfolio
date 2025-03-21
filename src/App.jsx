import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Layout />}/>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="blog" element={<Blog />} />
              <Route path="resume" element={<Resume />} />
              <Route path="contact" element={<Contact />} />
          </Routes>
      </Router>
  );
}
