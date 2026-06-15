/* @refresh disable */
import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext ()

const AuthProvider = ({children}) => {
  //localStorage.clear()

    const [userdata, setUserdata] = useState([])
      useEffect(() => {
        setLocalStorage()
        const {emp} = getLocalStorage()
        setUserdata(emp)
   }, [])
   
  return (
     <AuthContext.Provider value={[userdata,setUserdata]}>
         {children}
     </AuthContext.Provider>
  )
}

export default AuthProvider
