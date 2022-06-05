import logo from './logo.svg';
import './App.css';
import React from 'react';
import offers from "./data/offers.json"
import { Navbar } from "./components/Navbar"
import Offers from "./components/Offers"
import userinfo from "./data/userInfo.json"
import Filters from './components/Filters';
import Restaurants from "./components/Restaurants"
import restaurant from "./data/restaurant.json"
const filters = {
  1: "Cost High to Lost",


  2: "Cost Lost to High",


  3: "Ratings",


  4: "Delivery Time",

  5: "Relevance",


}
function App() {
  const [filterBy, setfilterBy] = React.useState("")
  const [data, setData] = React.useState(restaurant)
  const updateFilter = (newFilter) => {
    console.log(newFilter);
switch (newFilter){

  case "1" :{
    setfilterBy(1)
    data.sort((a,b)=>a.costfortwo - b.costfortwo)
    setData(data)
    break;}
  default:{
setData(restaurant)
break
  }
  }
}
  
  return (
    <div className="App">
      <Navbar  {...userinfo.location} />
      <Offers offers={offers} />
      <section className='near-you'>
        <Filters filters={filters} currentFilterBy={filterBy} updateFilter={updateFilter} />
        <Restaurants restaurant={data} />
      </section>

    </div>
  );
}

export default App;
