import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
    const [products,setproducts] = useState([])
    useEffect(()=>{

        const fetchp = async()=>{
           let r = await fetch("http://localhost:8080/products")
           let d = await r.json()
           setproducts(d)
        };  fetchp()
    },[])
  return (
    <div>Products :{" "}
    
    <div  style={{display : "grid" ,gridTemplateColumns: "1fr 1fr"} } >
    <div>
        {products.map((p)=>(
     
          <div key={p.id} >
          <Link to={`/products/${p.id}`}>{p.name}</Link>
          </div>)
          
        )}</div>
        <Outlet></Outlet>
    </div>
    
    
    </div>
  )
}
