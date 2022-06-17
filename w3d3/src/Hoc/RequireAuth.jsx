import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Authcontext } from '../context/Auth'

export const RequireAuth = ({children}) => {
    const location = useLocation()
    const {isAuth} = useContext(Authcontext)
    if(isAuth){
        return children;
    }
    else { return  <Navigate to="/login" state={{from: location.pathname}} replace />}

}
