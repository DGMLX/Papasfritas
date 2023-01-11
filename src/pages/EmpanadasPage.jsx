import {Link} from "react-router-dom"
import BtnWsp from "../components/BtnWsp";
import Direccion from "../components/Direccion";

const EmpanadasPage = () =>{

    return(

        <div className="contenedor-pageEmpanada">
            <Direccion/>
            {/*<BtnWsp/>*/}
            <div className="contenedor-fondo">
            <div>
                <h1 className="text-center text-white pt-5 pb-5">Empanadas fritas</h1>

                <div className="contenido-empanadas text-white">
                    <ul className="me-3">
                        <li className="d-flex justify-content-between mb-2">
                            <span>Empanadas queso</span>
                            <span>$2000</span>
                            
                        </li>
                        <hr />
                        <li className="d-flex justify-content-between mb-2">
                            <span>Empanadas loco queso</span>
                            <span>$3000</span>
                            
                        </li>
                        <hr />
                        <li className="d-flex justify-content-between mb-2">
                            <span>Empanadas macha queso</span>
                            <span>$3000</span>
                            
                        </li>
                        <hr />
                        <li className="d-flex justify-content-between mb-2">
                            <span>Empanadas camaron queso</span>
                            <span>$3000</span>
                            
                        </li>
                        <hr />
                        <li className="d-flex justify-content-between mb-2">
                            <span>Empanadas surtido mariscos queso</span>
                            <span>$3000</span>
                            
                        </li>
                        <hr />
                        
                    </ul>
                </div>

                <div className="text-center enlace-volver mt-5 fs-3">
                    <Link to="/" className="text-white">Volver</Link>
                </div>


            </div>
            </div>
        </div>
    )
}

export default EmpanadasPage;