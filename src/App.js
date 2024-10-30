import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import About from './components/about/About';
import ProjectsGrid from "./components/projects/ProjectsGrid"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsGrid />} />
      </Routes>
    </>
  )
}

export default App;
