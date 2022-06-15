import React, { createContext, useState } from 'react';
export const AuthContext  = createContext()

export const AuthProvider  = ({children}) =>{
const [islogin,setlogin]=  useState(false)

const login = (username,password)=>{
    if(username && password){
        setlogin(true)
    }
}
const logout = ()=>{
    setlogin(false)
}
    return <><AuthContext.Provider value={{islogin,login,logout}} >{children}</AuthContext.Provider></>
}

