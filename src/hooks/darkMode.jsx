import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()
const DarkModeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    const toggleDark = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark') 
    }

  return (
    <ThemeContext.Provider value={{theme, toggleDark}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default DarkModeProvider