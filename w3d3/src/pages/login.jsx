import React, { useState } from 'react'

export const Login = () => {
  const [logincred,setcreds] = useState({})
  const Change = (e)=>{
    const {name ,value}  = e.target
    setcreds({
      ...logincred,
      [name]:value
    })
  }
  const HandleSubmit = (e)=>{
    e.preventDefault();
console.log(logincred);
  }
  return (
    <div>
<form onSubmit={(e)=>{HandleSubmit(e)}} >
 <input onChange={(e)=>{Change(e)}} name='email' type="text" placeholder='Email' />
<input  onChange={(e)=>{Change(e)}} name='password' type="password" placeholder='password'/>
<button type='submit'>Login</button></form>
    </div>
  )
}
