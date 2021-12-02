import './App.css';
import BeatMachine from './components/BeatMachine';
import Header from './components/Header';
import { useEffect } from 'react'

function App() {

  //Corrects 100vh problems on mobile
  useEffect ( () => {
    const appHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--fullHeight', `${vh}px`);
    }
    window.addEventListener('resize', appHeight)
    appHeight()
  }, [])

  return (
    <div className="App">
        <div className='container'>
          <Header/>
          <BeatMachine/>
        </div>
    </div>
  );
}

export default App;