
import {Link} from "react-router-dom"
import BtnWsp from "../components/BtnWsp";
import Direccion from "../components/Direccion";

const HomePage = () =>{

    return(
        <>
        
            <div className="container-fluid contenedor-general g-0">
                <Direccion/>
                {/*<BtnWsp/>*/}

                <div className="contenedor-papas ">
                    
                    <div className="contenedor-fondo-home d-flex justify-content-center align-items-center">
                        <div className="enlace">
                            <Link to="/papasfritas" className="enlace-papas text-white" >
                                Papas Fritas
                            </Link>
                        </div>
                    </div>
                </div>

                <div className=" contenedor-empanadas">
                <div className="contenedor-fondo-home d-flex justify-content-center align-items-center">
                    <div className="enlace">
                        <Link to="/empanadas" className="enlace-empanadas text-white " >
                            Empanadas fritas
                        </Link>
                    </div>
                    </div>
                    
                </div>
            </div>
        </>

    )
}

export default HomePage;