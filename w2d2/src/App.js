// import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react"
import axios from "axios"
import Todo from './components/Todo';
import { Timer } from './components/Timer';
import { Stopwatch } from './components/stopwatch';
function App() {
 return (
   <div className='App'>
     <Todo/>
     <Timer/>
     <Stopwatch/>
        </div>
 )
}

export default App;
