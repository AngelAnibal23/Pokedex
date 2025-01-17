import {createContext, ReactNode, useContext, useState} from "react";

const ThemeContext = createContext<any> (null); 

interface ThemeProviderProps {
    children: ReactNode; 
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState ("light"); 


    return (
        <ThemeContext.Provider value = {{theme, setTheme}}>
        <div data-theme={theme} className="min-h-screen">{children}</div>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext); 