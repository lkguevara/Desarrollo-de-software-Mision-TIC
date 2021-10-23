import React, { useState} from 'react';
import "../../styles/Ventas/Sales.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import SalesList from "../../components/Ventas/SalesList"
import SalesHeader from "../../components/Ventas/SalesHeader"
import Edit from "../../images/Ventas/edit.svg"
import Add from "../../images/Ventas/add.svg"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AgregarVenta = () => {

    const [IDProducto, setIDProducto] = useState()
    const [nombre, setNombre] = useState()
    const [cantidad, setCantidad] = useState()
    const [subtotal, setSubtotal] = useState()
    const [precio, setPrecio] = useState()
    
    const enviarBackend = () => {
        console.log(IDProducto, nombre, cantidad, subtotal, precio);
        toast.success("Producto actualizado con éxito")
    }


    return (
        <div>
           <RutaNav route="/ Agregar Venta"/>
           <div className="maestroVenta">

                <SalesHeader fecha="12 de octubre 2021" id="001" user="Vendedor" date1="ID vendedor" date2="Nombre vendedor" date3="Apellidos vendedor" />
                <ToastContainer position="bottom-center" autoClose={5000} />
                
                <div className="mainFacturaUser">
                    <p>Cliente</p>
                    <input placeholder= "ID Cliente"/>
                    <input placeholder="Nombre Cliente"/>
                    <input placeholder="Apellidos Cliente"/>
                </div>

                
                
                
                <div className="HeaderMaestro">
                    <div className="SaleAdd__register">
                        <Link to="/">
                            <img src={Add} height="25px" alt="AgregarVenta" />
                            <p>Maestro Venta</p>
                        </Link>
                    </div>
                    
                </div>
            </div>

            <form >
                <div className="addProductSale">
                    <input placeholder= "ID" required/> 
                    <input placeholder= "Nombre"  required/> 
                    <input placeholder= "Valor unitario"  required/> 
                    <input placeholder= "Cantidad"  required/> 
                    
                    <button className="buttonSale" onClick={()=>{enviarBackend()}}>
                        <img src={Add} height="25px" alt="AgregarVenta" />
                    </button>
                </div>
                
            </form >

            <form className="listSales">
                <div className="listSaleColum">
                    <SalesList item="ID Producto" date="ID Producto" onChange={(e)=>{setIDProducto(e.target.value)}}/>
                </div>

                <div className="listSaleColum">
                    <SalesList item="Nombre" date="Nombre" onChange={(e)=>{setNombre(e.target.value)}}/>
                </div>


                <div id="PrecioUnitario" className="listSaleColum">
                    <SalesList item="Precio unitario" date="Precio unitario" onChange={(e)=>{setPrecio(e.target.value)}}/>
                </div>

                <div className="listSaleColum">
                    <SalesList item="Cantidad" date="Cantidad" onChange={(e)=>{setCantidad(e.target.value)}}/>    
                </div>

                <div id="status" className="listSaleColum">
                    <SalesList item="Subtotal" date="Subtotal" onChange={(e)=>{setSubtotal(e.target.value)}}/>    
                </div>
                

                

                <div className="editSale">
                    <Link to='./ActualizarVenta'>
                        <img src= {Edit} height="20px" alt="" />
                        <img src= {Edit} height="20px" alt="" />
                        <img src= {Edit} height="20px" alt="" />
                        <img src= {Edit} height="20px" alt="" />
                    </Link>
                </div>
                

                
            </form>
            <div className="TotalVenta">
                <label>Total Venta</label> 
                <input placeholder="Total" required/> 
            </div>
        </div>
    )
}

export default AgregarVenta
