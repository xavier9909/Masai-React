import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Authcontext } from '../context/Auth'

export const RequireAuth = ({children}) => {
    const {isAuth} = useContext(Authcontext)
    if(isAuth){
        return children
    }
    else { <Navigate to="/login" />}

}
