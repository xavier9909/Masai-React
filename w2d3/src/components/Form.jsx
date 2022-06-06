import React, { useEffect, useState } from 'react'


export const Form = () => {
const  [form , setform] = useState({
    username : "",
    email : "",
    password : "",
    age : 5
})
const handleChange = (e)=>{

let {name , value} = e.target
setform({...form,[name]:value,})
console.log(form);
}
  return (
    <div>Form
    <form><input type="text"
    name = "username"
    placeholder='enter name'
    value={form.name}
    onChange={handleChange}
    
      /> 
      <input type="number"
    name = "age"
    placeholder='enter age'
    value={form.age}
    onChange={handleChange}
    
      />     </form>
    
    
    
    </div>
  )
}
