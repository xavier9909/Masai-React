import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Inc,Dec } from '../actions/action'
export const CounterApp = () => {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.count)
  return (
    <div>CounterApp
    <div></div>
    <button  onClick={()=>dispatch(Inc())} >+</button>
    {count}
    <button onClick={()=>dispatch(Dec())}>-</button>
    
    
    
    </div>
  )
}
