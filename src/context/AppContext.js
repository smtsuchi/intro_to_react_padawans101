import React, { useContext, useState } from 'react';


export const AppContext = React.createContext()

const getUser = () => {
    const found = localStorage.getItem('user')
    return found?JSON.parse(found):{}
}

export default function AppProvider({ children }) {
    const [user, setUser] = useState(getUser())
    const [cart, setCart] = useState({size:0})

    const values = {
        user: user,
        setUser: setUser,
        cart: cart,
        setCart: setCart
    }
  return (
    <AppContext.Provider value={values}>
        { children }
    </AppContext.Provider>
  )
}
