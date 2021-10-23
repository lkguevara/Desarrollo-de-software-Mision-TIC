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

const EditarProducto = () => {
    const [IDProducto, setIDProducto] = useState()
    const [nombre, setNombre] = useState()
    const [marca, setMarca] = useState()
    const [tamano, setTamano] = useState()
    const [precio, setPrecio] = useState()
    
    const enviarBackend = () => {
        console.log(IDProducto, nombre, marca, tamano, precio);
        toast.success("Producto actualizado con éxito")
    }

    return (
               
        <div>
           <RutaNav route="/ Editar Producto"/>
           <div className="AddProduct">
                <Link to="/product/master">
                    <p>Maestro Productos</p>
                </Link>
            </div>
            <input className="search" placeholder='Buscar'/>
           <div className="textAddProduct">
                <h2>Formulario para actualizar un producto</h2>
           </div>
           <ToastContainer position="bottom-center" autoClose={5000} />

            <form className="listSales">
                <div className="listSaleColum">
                    <SalesList item="ID Producto" date="Id de producto" onChange={(e)=>{setIDProducto(e.target.value)}}/>
                </div>

                <div className="listSaleColum">
                    <SalesList item="Nombre" date="Nombre" onChange={(e)=>{setNombre(e.target.value)}}/>
                </div>


                <div className="listSaleColum">
                    <SalesList item="Marca" date="Marca" onChange={(e)=>{setMarca(e.target.value)}}/>
                </div>

                <div className="listSaleColum">
                    <SalesList item="Tamaño" date="Tamaño" onChange={(e)=>{setTamano(e.target.value)}}/>    
                </div>

                <div id="status" className="listSaleColum">
                    <SalesList item="Precio" date="Precio" onChange={(e)=>{setPrecio(e.target.value)}}/>    
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

export default EditarProducto
