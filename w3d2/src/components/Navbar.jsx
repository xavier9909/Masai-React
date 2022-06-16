import React from 'react'
import {Link, useNavigate} from "react-router-dom"
export const Navbar = () => {
    const nav = useNavigate()
    const Nav =  ()=>{
        nav("/products/1")
    }
  return (
 <>
<Link to='/'>Home</Link>
<Link to='/about'>About</Link>
<Link to='/products'>Products</Link>
<button onClick={Nav} >product :1</button>
 </>
  )
}
