import logo from './logo.svg';
import './App.css';
import IncrementDecrement from './components/incrementDecrement';

function App() {
  return (
    <div className="App">
      <IncrementDecrement number={0}/>
    </div>
  );
}

export default App;
