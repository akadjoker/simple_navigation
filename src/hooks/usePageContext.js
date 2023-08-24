import { useContext } from "react";
import { PagesContext } from "../context/PagesContext";

export const usePageContext = () => 
{
    const { page, setPage } = useContext(PagesContext);
    if (!page) 
        throw new Error("usePageContext must be used within a PagesContextProvider");

    return { page, setPage };
}