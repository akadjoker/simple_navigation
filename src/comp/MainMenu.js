import {usePageContext} from "../hooks/usePageContext";


const  MainMenu = () => {
    
    
    const {setPage} = usePageContext();

    const setCurrentPage = (page) =>
    {
        setPage(page);
        localStorage.setItem("page", page);
        console.log("save last page: "+page);
    }

    

    return (
        <div>
        <button onClick={()=>setCurrentPage("main")}     >Home</button>
        <button onClick={()=>setCurrentPage("about")}    >About</button>
        <button onClick={()=>setCurrentPage("contact")}  >Contact</button>
        </div>
    );
    }


export default MainMenu;