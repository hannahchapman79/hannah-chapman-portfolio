import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import About from './components/about/About';
import ProjectsGrid from "./components/projects/ProjectsGrid"
import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import CvImage from './components/Cv/CvImage';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsGrid />} />
        <Route path="/cv" element={<CvImage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
