import React from 'react'
import "../../styles/Ventas/Sales.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import SalesList from "../../components/Ventas/SalesList"
import SalesHeader from "../../components/Ventas/SalesHeader"
import Edit from "../../images/Ventas/edit.svg"
import Add from "../../images/Ventas/add.svg"
import { Link } from 'react-router-dom';

const MaestroVenta = () => {
    return (
        <div>
           <RutaNav route="/ Maestro de venta"/>
           <div className="maestroVenta">

                <SalesHeader fecha="12 de octubre 2021" id="001" user="Vendedor" date1="ID vendedor" date2="Nombre vendedor" date3="Apellidos vendedor" />
                
                
                <div className="HeaderMaestro">
                    <div className="RegisterSale">
                        <p>Maestro de ventas <p>4 Registros</p> </p>
                    </div>
                    <form>
                        <p>Filtrar por:
                            <select className="optionFilter">
                                <option></option>
                                <option>ID venta</option>
                                <option>ID cliente</option>
                                <option>Nombre cliente</option>
                                <option>Fecha venta</option>
                                <option>Estado de la venta</option>
                            </select>
                        </p>
                        

                    </form>
                    <div className="SaleAdd">
                        <Link to="/">
                            <img src={Add} height="25px" alt="AgregarVenta" />
                            <p>Nueva Venta</p>
                        </Link>
                        
                    </div>
                </div>
            </div>

            <form className="listSales">
                <div className="listSaleColum">
                    <SalesList item="ID Producto" date="Id de producto"/>
                </div>

                <div className="listSaleColum">
                    <SalesList item="Fecha" date="Fecha"/>
                </div>


                <div className="listSaleColum">
                    <SalesList item="ID Cliente" date="ID Cliente"/>
                </div>

                <div className="listSaleColum">
                    <SalesList item="Total" date="Total"/>    
                </div>

                <div id="status" className="listSaleColum">
                    <SalesList item="Estado" date="Estado"/>    
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
        </div>
    )
}

export default MaestroVenta
