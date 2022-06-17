import { createContext, useState } from "react";
import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";


export const Authcontext  =createContext()
export const AuthProvider   = ({children})=>{
const [isAuth,setAuth] = useState(false)
const {state} = useLocation()
const navigate = useNavigate()
const login =()=>{

setAuth(true)
navigate(state.from)

}
const logout =()=>{
    setAuth(false)
    navigate("/")
}
    return( <Authcontext.Provider value={{isAuth,login,logout}}> {children}</Authcontext.Provider>)
}
