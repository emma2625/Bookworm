'use client'
import React, {createContext, useState} from 'react'

export const UserContext =  createContext();


const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        name: 'Jeremy Downing',
        age: 43
    });

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
