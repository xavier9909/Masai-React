import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add } from '../actions/action'
import  {v4 as uuid} from "uuid"
import axios from "axios"
import { getTodos } from '../actions/action'
import { useEffect } from 'react'
export const Todoapp = () => {
  const dispatch = useDispatch()
  const {loading,error,todos} = useSelector((state)=>state.todo)
  const ref = useRef()


  const addNew = (()=>{
    let value = ref.current.value
dispatch(Add({
  value : value,
  isCompleted : false,
  id : uuid()
}))


  })
  useEffect(()=>{
    getTodos(dispatch);
  },[])
 if(loading){
return <h1>loading.....</h1>
 }
 if(error){
 return  <h1>error.....</h1>
 }
  return (
    <div>Todoapp
    <div>
    <button onClick={addNew} >add</button>
      <input ref={ref} />
   
<br/><br/>
{ todos.map((todo)=>{
return <>
    <div key={todo.id} >{todo.value}</div>

</>

})}
    </div>
    
    </div>
  )
}
