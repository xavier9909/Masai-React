// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react"
import Fetch from './components/fetch';
function App() {
 
  const [first, setfirst] = React.useState(0)
  const [count, setcount] = React.useState(0)
  useEffect(() => {
    console.log(first, count);
}, [])

  const counter = () => setfirst(first + 1)
  return (
  

    <div className="App">
      <Fetch/>
      <div onClick={() => { counter() }} >hello {first}</div>
      <div onClick={() => { setcount(count + 1) }} >hello2 {count}</div>
    </div>
  );
}

export default App;
