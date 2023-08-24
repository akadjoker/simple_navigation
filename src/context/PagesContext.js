import { createContext,useState,useEffect } from "react";


export const PagesContext = createContext();

export const PagesContextProvider = ({children}) =>
{
  
    const [page, setPage] = useState("main");







    
    return(
        <PagesContext.Provider value={{page,setPage}}>
            {children}
        </PagesContext.Provider>
    )
}

