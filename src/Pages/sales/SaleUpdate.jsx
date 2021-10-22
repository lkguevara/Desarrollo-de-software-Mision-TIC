import React from 'react'
import "../../styles/Ventas/Sales.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import SalesList from "../../components/Ventas/SalesList"
import SalesHeader from "../../components/Ventas/SalesHeader"
import Edit from "../../images/Ventas/edit.svg"
import Add from "../../images/Ventas/add.svg"
import Delete from "../../images/Ventas/delete.svg"
import { Link } from 'react-router-dom';

const EditarVenta = () => {
    return (
        <div>
           <RutaNav route="/ Editar Venta"/>
           <div className="maestroVenta">

                <SalesHeader fecha="12 de octubre 2021" id="001" user="Vendedor" date1="ID vendedor" date2="Nombre vendedor" date3="Apellidos vendedor" />

                
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

            <form className="listSales">
                <div className="listSaleColum">
                    <SalesList item="ID Producto" date="ID Producto"/>
                </div>

                <div className="listSaleColum">
                    <SalesList item="Nombre" date="Nombre"/>
                </div>


                <div id="PrecioUnitario" className="listSaleColum">
                    <SalesList item="Precio unitario" date="Precio unitario"/>
                </div>

                <div className="listSaleColum">
                    <SalesList item="Cantidad" date="Cantidad"/>    
                </div>

                <div id="status" className="listSaleColum">
                    <SalesList item="Subtotal" date="Subtotal"/>    
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
            <button class="button">Guardar</button>
            
        </div>
    )
}

export default EditarVenta
