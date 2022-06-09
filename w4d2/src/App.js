import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import { Navbar } from './Components/Navbar';
import { CounterApp } from './pages/CounterApp';
import {Todoapp} from "./pages/Todoapp"
function App() {
  return (
    <div className="App">
   <Navbar> </Navbar>
  <Routes>
    <Route path='/'  element={<CounterApp/>}  />
    <Route path='/Todoapp'  element={<Todoapp/>}  />
  </Routes>


  
    </div>
  );
}

export default App;
