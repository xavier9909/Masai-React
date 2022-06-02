import logo from './logo.svg';
import {Navbar} from "./components/Navbar"
import './App.css';
import Offers from './components/Offers';
import Filters from './components/Filters';
import Restaurants from './components/Restaurants';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Offers/>
     <Filters/>
     <Restaurants/> 

    </div>
  );
}

export default App;
