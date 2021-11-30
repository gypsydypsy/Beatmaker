import './App.css';
import BeatMachine from './components/BeatMachine';
import Header from './components/Header';

function App() {
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