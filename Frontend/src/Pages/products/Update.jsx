import React from 'react'
import "../../styles/Ventas/Sales.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import SalesList from "../../components/Ventas/SalesList"
import Edit from "../../images/Ventas/edit.svg"
import Delete from "../../images/Ventas/delete.svg"
import { Link } from 'react-router-dom';

const EditarProducto = () => {
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

            <form className="listSales">
                <div className="listSaleColum">
                    <SalesList item="ID Producto" date="Id de producto"/>
                </div>

                <div className="listSaleColum">
                    <SalesList item="Nombre" date="Nombre"/>
                </div>


                <div className="listSaleColum">
                    <SalesList item="Marca" date="Marca"/>
                </div>

                <div className="listSaleColum">
                    <SalesList item="Tamaño" date="Tamaño"/>    
                </div>

                <div id="status" className="listSaleColum">
                    <SalesList item="Precio" date="Precio"/>    
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
            <button className="buttonUpdate">
                <p>Guardar cambios</p>
            </button>
            
        </div>
    )
}

export default EditarProducto
