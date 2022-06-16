import React, { useEffect, useState } from 'react'

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
    
    
    <div>
        {products.map((p)=>(

          <div key={p.id} >{p.name}</div>)
        )}
    </div>
    
    
    </div>
  )
}
