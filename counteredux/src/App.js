import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {Inc,Dec} from "./actions/index"
function App() {

  const mystate = useSelector((state)=>state.nmbr)
  const dis = useDispatch()
  return (
    <div className="App">
     <button  onClick={()=>dis(Dec())}> - </button>
   <div>{mystate}</div>
   <button onClick={()=>dis(Inc())} >+</button>
    </div>
  );
}

export default App;
