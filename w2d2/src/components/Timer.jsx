import { useEffect, useState } from "react"
import React from 'react'

export const Timer = () => {
    const [timer, settimer] = React.useState(100)
useEffect(() => {
const id  = setInterval(()=>{

    settimer((prev)=> prev -1)
},1000)

  return () => {
    clearInterval(id)
  }
}, [])

  return (
    <div>{timer}</div>
  )
}
