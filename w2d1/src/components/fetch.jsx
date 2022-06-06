import React, { useState, useEffect } from 'react'

const Fetch = () => {
    const [Todo, setTodo] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/todos")
            .then((r) => r.json())
            .then((d) => {
                setTodo(d)
                console.log(d);
            })


    }, [])
 const [newTodo, setnewTodo] = useState("")
const save  = ()=>{
  fetch("http://localhost:8080/todos",{
      method :"POST",
      headers:{
          "content-type":"application/json",
      },
      body : JSON.stringify({
          title :newTodo,
          status : true,
      })
  }).then((res)=>res.json()).then((d)=>{setTodo([...Todo,d]);})

}
    return (
        <div>Todo
          <input onChange={(e)=>{ setnewTodo(e.target.value)    }}  />
<button onClick={()=>save()} >+</button>
            {Todo && Todo.map((e) => { return <><div key={e.id}>{e.title}</div></> })}
        </div>

    )
}

export default Fetch