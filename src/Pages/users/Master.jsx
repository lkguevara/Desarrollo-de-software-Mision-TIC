import React from 'react'
import "../../styles/Ventas/Sales.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import SalesList from "../../components/Ventas/SalesList"
import Edit from "../../images/Ventas/edit.svg"
import Add from "../../images/Ventas/add.svg"
import { Link } from 'react-router-dom';

const MaestroVenta = () => {
    return (
        <div>
           <RutaNav route="/ Maestro de Usuarios"/>
           
           <input className="search" placeholder='Buscar'/>
           

           <div className="textAddProduct">
                <h2>Lista de usuarios</h2>
           </div>
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
                    <SalesList item="Rol de usuario" date="Rol"/>    
                </div>


                <div className="editSale">
                    <Link to='/user/update'>
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
