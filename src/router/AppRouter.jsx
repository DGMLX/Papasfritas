import { Navigate, Route, Routes } from "react-router-dom";
import EmpanadasPage from "../pages/EmpanadasPage";
import HomePage from "../pages/HomePage";
import PapasPage from "../pages/PapasPage";


const AppRouter = () =>{

    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/papasfritas" element={<PapasPage/>}/>
                <Route path="/empanadas" element={<EmpanadasPage/>}/>
                <Route path="/*" element={<Navigate to="/"/>}/>
            </Routes>
        
        </>
    )
}


export default AppRouter;