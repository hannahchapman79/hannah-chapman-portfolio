import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import About from './components/about/About';
import ProjectsGrid from "./components/projects/ProjectsGrid"
import Cv from './components/Cv/Cv';
import Contact from './components/contact/Contact';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsGrid />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;
