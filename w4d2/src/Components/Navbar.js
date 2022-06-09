import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div  style={{
        display : "flex"
    }}>Navbar
    
    <Link to="/">CounterApp</Link>

     <Link to="/Todoapp">TodoApp</Link>
    
    </div>
  )
}
