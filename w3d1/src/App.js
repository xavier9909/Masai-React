import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';
import { Navbar } from './components/Navbar';
import { Body } from './components/Body';
import { CartPorvider } from './context/Cartcontext';

function App() {
  return (
    <div className="App">
    <CartPorvider><Navbar/>
<Body/></CartPorvider>
 
    </div>
  );
}

export default App;
