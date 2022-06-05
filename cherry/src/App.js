import logo from './logo.svg';
import './App.css';
import offers from "./data/offers.json"
import {Navbar} from "./components/Navbar"
import  Offers from "./components/Offers"
import userinfo from "./data/userInfo.json"
import Filters from './components/Filters';
import Restaurants from "./components/Restaurants"
import restaurant from "./data/restaurant.json"
function App() {
  return (
    <div className="App">
     <Navbar  {...userinfo.location} />
   <Offers offers={offers} />
   <section className='near-you'>
   <Filters/>
     <Restaurants  restaurant={restaurant} />
   </section>
   
    </div>
  );
}

export default App;
