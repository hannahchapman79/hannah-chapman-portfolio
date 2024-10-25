import './App.css';
import IntroCard from './components/IntroCard';
import ButtonAppBar from './components/Navbar';
import TechStack from './components/TechStack';
// import useScreenSize from './useScreenSize';

function App() {

  // const screenSize = useScreenSize();
  return (
    <>
    <ButtonAppBar/>
    <IntroCard/>
    <TechStack/>
    </>
  )

}

export default App;
