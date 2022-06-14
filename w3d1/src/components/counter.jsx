
import React, { useReducer } from 'react'


const reducer = (counter,action)=>{
switch (action.type) {
    case "inc":{
        return counter+1
      //  break;
    }
    case "dec":{
    return counter-1
      //  break;
    }
    default:
        return counter
}

}

export const Counter = () => {

    const [counter,dispatch] = useReducer(reducer,0)
  return (
    <div>
 <h1>Counter : {counter}</h1>
<button
   onClick={()=>dispatch({type : "inc"})}>+</button>
<button onClick={()=>dispatch({type : "dec"})} >-</button>

    </div>
  )
}
