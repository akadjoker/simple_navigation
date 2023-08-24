
import React, { useEffect,useState } from "react";
import MainPage from "./comp/MainPage";
import AboutPage from "./comp/AboutPage";
import ContactPage from "./comp/ContactPage";
import {usePageContext} from "./hooks/usePageContext";

 

function App() 
{
  
  const {page,setPage} = usePageContext();
  const [isPageLoaded, setPageLoaded] = useState(true); // Estado para acompanhar se a página foi carregada


  useEffect(() => 
  {
    console.log("Componente foi montado");
    setPageLoaded(true); 

    const handlePageLoad = () => 
    {
      console.log("Página foi completamente carregada");
      setPageLoaded(false);
    };

    window.addEventListener("load", handlePageLoad);

    const savedPage = localStorage.getItem("page");
    if (savedPage) 
    {
      setPage(savedPage);
     // console.log("load last page: "+savedPage);
    }
    return () => 
    {
      console.log("Componente está sendo desmontado");
      window.removeEventListener("load", handlePageLoad); 
    };
  }, []); // Passando um array vazio como dependência para garantir que isso seja executado apenas uma vez na montagem




  const getPage = () => 
  {
    console.log(page);


    switch(page)
    {
      case "main":
        return <MainPage/>;
      case "about":
        return <AboutPage/>;
      case "contact":
        return <ContactPage/>;
      default:
          return null;
    } 
  };


  return (

    <div >
    {isPageLoaded && (<p>Loading...</p>)}
    {!isPageLoaded && (
      <>
      {getPage()}
      </>
    )}
    </div>
    );
}

export default App;
