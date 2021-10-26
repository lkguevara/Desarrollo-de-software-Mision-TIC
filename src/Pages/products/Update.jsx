import React, { useState, useEffect} from 'react';
import "../../styles/products/products.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const EditarProducto = () => {
    
    const [nombre, setNombre] = useState()
    const [marca, setMarca] = useState()
    const [tamano, setTamano] = useState()
    const [unidad, setUnidad] = useState()
    const [precio, setPrecio] = useState()

    
    
    const enviarBackend = async (e) => {
        try{
            toast.success("Producto actualizado con éxito")

        }catch(e){
            toast.error(`sorry ${e}`)
        }

    }

    return (
        <div>
           <RutaNav route="/ Editar producto"/>
           <div className="AddProduct">
                <Link to="/product/master">
                    <p>Maestro Productos</p>
                </Link>
            </div>
           <div className="textAddProduct">
                <h2>Formulario para editar un producto</h2>
           </div>
           <ToastContainer position="bottom-center" autoClose={5000} />
                        
           <form onSubmit={enviarBackend}>
                <div className="addProduct">
                    <input  placeholder= "Nombre del producto" value={nombre}  required onChange={(e)=>{setNombre(e.target.value)}}/>  
                    <input  placeholder= "Marca"  value={marca} required onChange={(e)=>{setMarca(e.target.value)}} /> 
                    <input  placeholder= "Tamaño"  value={tamano}  required onChange={(e)=>{setTamano(e.target.value)}} /> 
                    <input  placeholder= "Unidad" value={unidad}  required onChange={(e)=>{setUnidad(e.target.value)}} /> 
                    <input  placeholder= "Precio" value={precio} required onChange={(e)=>{setPrecio(e.target.value)}} /> 
                    
                    <div className="editarProducto">
                        <button className="buttonAdd" ><p>Guardar cambios</p></button>
                        <button className="buttonAdd" ><p>Eliminar producto</p></button>
                    </div>
                    
                </div>
                
            </form >
            
        </div>
    )
}

export default EditarProducto
