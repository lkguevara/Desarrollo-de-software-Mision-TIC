import React from 'react'
import "../../styles/products/products.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import { Link } from 'react-router-dom';

const AgregarVenta = () => {
    return (
        <div>
           <RutaNav route="/ Agregar Producto"/>
           <div className="AddProduct">
                <Link to="/product/master">
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
