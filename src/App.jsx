import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Resume from "./pages/resume/Resume"
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import WhyOsIsNotAProcess from "./pages/blog/posts/WhyOsIsNotAProcess";
import KernelModeIsJustABit from "./pages/blog/posts/KernelModeIsJustABit";
import OpenSourceFailsBecauseIncentives from "./pages/blog/posts/OpenSourceFailsBecauseIncentives";
import DoMoreCoresMeanMoreRegisters from "./pages/blog/posts/DoMoreCoresMeanMoreRegisters";
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
            <Route
                path="/blog/why-os-is-not-a-process"
                element={<WhyOsIsNotAProcess />}
            />
            <Route
                path="/blog/kernel-mode-is-just-a-bit"
                element={<KernelModeIsJustABit />}
            />
            <Route
                path="/blog/open-source-and-incentives"
                element={<OpenSourceFailsBecauseIncentives />}
            />
            <Route
                path="/blog/do-more-cores-mean-more-registers"
                element={<DoMoreCoresMeanMoreRegisters />}
            />

          </Routes>
      </Router>
  );
}
