import React, {  createContext } from "react";
export const CartContext = createContext()


export const CartPorvider = ({ children }) => {


    return <>


        <CartContext.Provider>{children}</CartContext.Provider>
    </>

}