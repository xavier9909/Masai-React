import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { About } from './components/About';
import {Routes,Route} from "react-router-dom"
import { Prooduct } from './components/Prooduct';

function App() {
  return (
    <div className="App">

   <Navbar/>

   <Routes  >
    <Route path="/" element ={<Home/>}/>
    <Route path="/about" element ={<About/>}/>
    <Route path="/products" element ={<Products/>}/>
    <Route path="/products/:id" element ={<Prooduct/>}/>
   </Routes>
 
    </div>
  );
}

export default App;
