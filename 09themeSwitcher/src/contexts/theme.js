import { createContext, useActionState, useContext } from "react";

export const ThemeContext = createContext({  //This can include default values
    themeMode:"light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

export const ThemeProvider = ThemeContext.Provider  //It is used to Provide defined values to the components, which are inside Provider Tag

export default function useTheme(){  //it is used to access values which are defined with Provider, in any component
    return useContext(ThemeContext)
} 