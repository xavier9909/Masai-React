import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';
import { Navbar } from './components/Navbar';
import { Body } from './components/Body';
import { CartPorvider } from './context/Cartcontext';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const {islight} = useContext(ThemeContext)
  return (
    <div className={`App ${islight ? "light":"dark"} `}>

    <Navbar/>
<Body/>
 
    </div>
  );
}

export default App;
