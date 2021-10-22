import React from 'react'
import "../../styles/products/products.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import SalesList from "../../components/Ventas/SalesList"
import SalesHeader from "../../components/Ventas/SalesHeader"
import Edit from "../../images/Ventas/edit.svg"
import Add from "../../images/Ventas/add.svg"
import { Link } from 'react-router-dom';

const AgregarVenta = () => {
    return (
        <div>
           <RutaNav route="/ Agregar Producto"/>
           <div className="AddProduct">
                <Link to="/">
                    <p>Maestro Productos</p>
                </Link>
            </div>
           <div className="textAddProduct">
                <h2>Formulario para agregar productos</h2>
           </div>
           
            <form >
                <div className="addProduct">
                    <input placeholder= "Nombre del producto"  required/> 
                    <input placeholder= "Marca"  required/> 
                    <input placeholder= "Tamaño"  required/> 
                    <input placeholder= "Unidad"  required/> 
                    <input placeholder= "Precio"  required/> 
                    
                    <button className="buttonAdd">
                        <p>Agregar producto</p>
                    </button>
                </div>
                
            </form >

           
        </div>
    )
}

export default AgregarVenta
