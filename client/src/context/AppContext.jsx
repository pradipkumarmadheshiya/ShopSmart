import { createContext, useContext, useState } from "react";

const  AppContext=createContext()

export const AppContextProvider=({children})=>{

    const [isMenuOpen, setIsMenuOpen]=useState(false)

    const value={
        isMenuOpen, setIsMenuOpen, 
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext=()=>{
    return useContext(AppContext)
}