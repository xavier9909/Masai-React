import React, { useContext } from 'react'
import { CartContext } from '../context/Cartcontext'

export const Wishlist = () => {
    const {count}  = useContext(CartContext)
  return (
    <div>Wishlist : {count}</div>
  )
}
