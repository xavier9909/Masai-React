import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add } from '../actions/action'
import  {v4 as uuid} from "uuid"
export const Todoapp = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state)=>state.todo.todos)
  const ref = useRef()
  const addNew = (()=>{
    let value = ref.current.value
dispatch(Add({
  value : value,
  isCompleted : false,
  id : uuid()
}))


  })
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
