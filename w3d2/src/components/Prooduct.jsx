import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Prooduct = () => {
    const {id} = useParams() 
    console.log(id);
    const [product,setproduct] = useState({})


    useEffect(()=>{
        if(id){
            fetch(`http://localhost:8080/products/${id}`).then((r)=>r.json()).then((d)=>setproduct(d))
        }
    },[id])
  return (
    <div>ID : {" "+id+" "} -:
      {" "+product.name}
    
    </div>
  )
}
