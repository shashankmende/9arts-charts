import logo from './logo.svg';
import './App.css';
import AnimationChart from './components/barChart'
import Banner from './components/banner';

function App() {
  return (
    <div className="App">
      <Banner/>
      <div className='animation-chart-bg-container'>
        <AnimationChart/>
      </div>
    </div>
  );
}

export default App;
