import React, { useContext, useState } from 'react'
import { Authcontext } from '../context/Auth'

export const Login = () => {
  const [logincred,setcreds] = useState({})
  const {login} = useContext(Authcontext)
  const Change = (e)=>{
    const {name ,value}  = e.target
    setcreds({
      ...logincred,
      [name]:value
    })
  }
  const HandleSubmit = (e)=>{
    e.preventDefault();
    login()
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
