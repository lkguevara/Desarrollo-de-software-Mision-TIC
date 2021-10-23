import React, { useState} from 'react';
import "../../styles/Ventas/Sales.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import SalesList from "../../components/Ventas/SalesList"
import Edit from "../../images/Ventas/edit.svg"
import Delete from "../../images/Ventas/delete.svg"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditarVenta = () => {
    const [rol, setRol] = useState()
    const [estado, setEstado] = useState()
    
    const enviarBackend = () => {
        console.log(rol, estado);
        toast.success("Producto agregado con éxito")
    }

    return (
        <div>
           <RutaNav route="/ Editar Usuario"/>
           <div className="AddProduct">
                <Link to="/user/master">
                    <p>Maestro Usaurios</p>
                </Link>
            </div>
            <input className="search" placeholder='Buscar'/>
           <div className="textAddProduct">
                <h2>Formulario para actualizar un usuario</h2>
           </div>
           <ToastContainer position="bottom-center" autoClose={5000} />

            <form className="listSales">
            <div className="listSaleColum">
                    <SalesList item="ID Usuario" date="Id de usuario"/>
                </div>

                <div className="listSaleColum">
                    <SalesList item="Nombre" date="Nombre"/>
                </div>


                <div className="listSaleColum">
                    <SalesList item="Apellido" date="Apellido"/>
                </div>

                <div className="listSaleColum">
                    <SalesList item="Rol de usuario" date="Rol" onChange={(e)=>{setRol(e.target.value)}}/>    
                </div>

                <div className="listSaleColum">
                    <SalesList item="Estado-Registro" date="Estado-Registro" onChange={(e)=>{setEstado(e.target.value)}}/>    
                </div>
                

                

                <div className="editSale">
                    <Link to='./'>
                        <img src= {Edit} height="20px" alt="" />
                        <img src= {Edit} height="20px" alt="" />
                        <img src= {Edit} height="20px" alt="" />
                        <img src= {Edit} height="20px" alt="" />
                    </Link>
                </div>

                <div className="editSale">
                    <Link to='./'>
                        <img src= {Delete} height="20px" alt="" />
                        <img src= {Delete} height="20px" alt="" />
                        <img src= {Delete} height="20px" alt="" />
                        <img src= {Delete} height="20px" alt="" />
                    </Link>
                </div>
                
            </form>
            <button className="buttonUpdate" onClick={()=>{enviarBackend()}}>
                <p>Guardar cambios</p>
            </button>
            
        </div>
    )
}

export default EditarVenta
