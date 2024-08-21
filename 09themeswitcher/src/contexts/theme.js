import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light", // context bane ga tab ya value pehle se hogi
    darkTheme: () => {}, // ya method bhi aa jayega jab context bane ga
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// custom hooks
export default function useTheme(){
    return useContext(ThemeContext)
}