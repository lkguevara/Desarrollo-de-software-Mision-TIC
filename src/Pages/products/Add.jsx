import React, { useState, useEffect} from 'react';
import "../../styles/products/products.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Productos = () => {
    // const [data, setData] = useState({
    //     nombre: '',
    //     marca:  '',
    //     tamano: '',
    //     unidad: '',
    //     precio: ''
    // })
    const [nombre, setNombre] = useState()
    const [marca, setMarca] = useState()
    const [tamano, setTamano] = useState()
    const [unidad, setUnidad] = useState()
    const [precio, setPrecio] = useState()

    const createProduct = async () => {

        
        const producto = {"Product": nombre,
                        "mark": marca,
                        "ServingSizes": tamano,
                        "Size": unidad,
                        "price": precio}

        const response = await fetch('https://latzi-nodejs.herokuapp.com/products/create',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        })
        const data = await response.json()

        return data
    }
    
    const enviarBackend = async (e) => {
        // console.log(nombre, marca, tamano, unidad, precio);

        e.preventDefault()

        //ejecutar la funcion para enviar el producto mediante mi api a mongo

        try{

            const response = await createProduct()
            setNombre('')
            setMarca('')
            setPrecio('')
            setTamano('')
            setUnidad('')
            toast.success("Producto agregado con éxito")

        }catch(e){
            toast.error(`sorry ${e}`)
        }

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
                        
           <form onSubmit={enviarBackend}>
                <div className="addProduct">
                    <input  placeholder= "Nombre del producto" value={nombre}  required onChange={(e)=>{setNombre(e.target.value)}}/>  
                    <input  placeholder= "Marca"  value={marca} required onChange={(e)=>{setMarca(e.target.value)}} /> 
                    <input  placeholder= "Tamaño"  value={tamano}  required onChange={(e)=>{setTamano(e.target.value)}} /> 
                    <input  placeholder= "Unidad" value={unidad}  required onChange={(e)=>{setUnidad(e.target.value)}} /> 
                    <input  placeholder= "Precio" value={precio} required onChange={(e)=>{setPrecio(e.target.value)}} /> 
                    
                    <button className="buttonAdd" ><p>Agregar producto</p></button>
                    
                </div>
                
            </form >
            
        </div>
        
    )
}


 

export default Productos
