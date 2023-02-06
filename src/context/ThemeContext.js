import React, { useContext, useState } from 'react';

export const ThemeContext = React.createContext()

export default function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true)
  return (
    <ThemeContext.Provider value={darkTheme}>
        {children}
    </ThemeContext.Provider>
  )
}
