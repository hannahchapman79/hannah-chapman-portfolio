import './App.css';
import Home from './components/Home';
import TechStack from './components/TechStack';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
// import useScreenSize from './useScreenSize';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<TechStack />} />
      </Routes>
    </>
  )
}

export default App;
