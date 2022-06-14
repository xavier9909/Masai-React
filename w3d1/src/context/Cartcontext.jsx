import React, {  createContext, useState } from "react";
export const CartContext = createContext()


export const CartPorvider = ({ children }) => {

const [count,setcount] = useState(0)
    return <>


        <CartContext.Provider value={{count ,setcount}} >{children}</CartContext.Provider>
    </>

}