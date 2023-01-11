import {Link} from "react-router-dom"
import BtnWsp from "../components/BtnWsp";
import Direccion from "../components/Direccion";

const PapasPage = () =>{

    return(

        <div className="contenedor-pagePapas">
            <Direccion/>
            {/*<BtnWsp/>*/}
            <div className="contenedor-fondo">
            <div>
                <h1 className="text-center text-white pt-5 ">Papas fritas</h1>

                <div className="contenido-papas text-white">
                    <ul className="mt-5 me-3">
                    <li className="d-flex justify-content-between mb-2">
                            <span>Papas fritas chicas</span>
                            <span>$1000</span>
                            
                        </li>
                        <hr />
                        <li className="d-flex justify-content-between mb-2">
                            <span>Papas fritas grandes</span>
                            <span>$2000</span>
                            
                        </li>
                        <hr />
                    </ul>

                </div>
                
                <div className="text-center mt-5 fs-3 enlace-volver">
                    <Link to="/" className="text-white">Volver</Link>
                </div>

            </div>
            </div>
            
        </div>
    )
}

export default PapasPage;