import React, { createContext, useState } from 'react';
export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, settheme] = useState("light")
    const Toggletheme = () => {

        if (theme === 'light') {
            settheme("dark")
        } else settheme("light")
    }
    return <ThemeContext.Provider value={{
        theme,
        islight: theme === "light",
        Toggletheme,
    }} >{children}</ThemeContext.Provider>
}

