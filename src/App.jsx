import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import AboutMe from "./pages/About-me";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import ProjectDetail from "./components/ProjectDetail";
import './App.css'

function App() {
  const location = useLocation();
  const path = location.pathname;
  const isProjectDetail = path.startsWith('/project/');

  return (
    <>
    {path === '/' ? (
      <div className="landing-background">
        <Navbar />
        <Landing />
        <Footer />
      </div>
    ) : path === '/about-me' ? (
      <div className="about-background">
        <Navbar />
        <AboutMe />
        <Footer />
      </div>
    ) : path === '/experience' ? (
      <div className="experience-background">
        <Navbar />
        <Experience />
        <Footer />
      </div>
    ) : path === '/projects' || isProjectDetail ? (
      <div className="projects-background">
        <Navbar />
        <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        <Footer />
      </div>
    ) : path === '/certifications' ? (
      <div className="certifications-background">
        <Navbar />
        <Certifications />
        <Footer />
      </div>
    ) : path === '/contact' ? (
      <div className="contact-background">
        <Navbar />
        <Contact />
        <Footer />
      </div>
    ) : (
        <div className="default-background">
          <Navbar />
          <Routes>
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
