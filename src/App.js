import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import AboutMe from './components/About';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </>
  )
}

export default App;
