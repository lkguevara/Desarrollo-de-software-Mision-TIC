import React, { useState} from 'react';
import "../../styles/products/products.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Productos = () => {

    const [nombre, setNombre] = useState()
    const [marca, setMarca] = useState()
    const [tamano, setTamano] = useState()
    const [unidad, setUnidad] = useState()
    const [precio, setPrecio] = useState()
    
    const enviarBackend = () => {
        console.log(nombre, marca, tamano, unidad, precio);
        toast.success("Producto agregado con éxito")
    }
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
           <ToastContainer position="bottom-center" autoClose={5000} />
                        
           <form >
                <div className="addProduct">
                    <input  placeholder= "Nombre del producto"  required onChange={(e)=>{setNombre(e.target.value)}}/>  
                    <input  placeholder= "Marca"  required onChange={(e)=>{setMarca(e.target.value)}} /> 
                    <input  placeholder= "Tamaño"  required onChange={(e)=>{setTamano(e.target.value)}} /> 
                    <input  placeholder= "Unidad"  required onChange={(e)=>{setUnidad(e.target.value)}} /> 
                    <input  placeholder= "Precio"  required onChange={(e)=>{setPrecio(e.target.value)}} /> 
                    
                    <button className="buttonAdd" onClick={()=>{enviarBackend()}}><p>Agregar producto</p></button>
                    
                </div>
                
            </form >
           
        </div>
    )
}
 

export default Productos
