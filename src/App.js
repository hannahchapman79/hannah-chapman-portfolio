import './App.css';
import Home from './components/Home';
import TechStack from './components/TechStack';
import NavBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<TechStack />} />
      </Routes>
    </>
  )
}

export default App;
