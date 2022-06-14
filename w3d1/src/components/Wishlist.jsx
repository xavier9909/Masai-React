import React, { useContext } from 'react'
import { CartContext } from '../context/Cartcontext'

export const Wishlist = () => {
    let {count}  = useContext(CartContext)
  return (
    <div>Wishlist : {count}</div>
  )
}
