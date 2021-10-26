import React, { useState, useEffect} from 'react';
import "../../styles/products/products.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditarProducto = (props) => {

    
    const [producto, setProducto] = useState({})
    //los useeffect que estan suscritos a una lista vacia [] ocurren cuando el componente ya se cargo visualmente 1 vez
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://latzi-nodejs.herokuapp.com/products/${props.match.params.id}`)
            const data = await response.json()

            setProducto(data)
        }

        fetchData()

    }, [])


    const changeForm = (e)=>{
        setProducto({...producto,[e.target.name]:e.target.value})
        // console.log(e.target.name)
        // setProducto({Product:e.target.value})
    }
    

    const enviarBackend = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch(`https://latzi-nodejs.herokuapp.com/products/edit/${props.match.params.id}`,{
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })

            const data = await response.json()
            
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
    
           <form onSubmit={(e)=>{e.preventDefault()}}>
                <div className="addProduct">
                    <input  placeholder= "Nombre del producto" name='Product' value={producto.Product} onChange={changeForm}/>  
                    <input  placeholder= "Marca" name='mark' value={producto.mark} onChange={changeForm} /> 
                    <input  placeholder= "Tamaño"  name='ServingSizes' value={producto.ServingSizes}onChange={changeForm}  /> 
                    <input  placeholder= "Unidad" name='Size' value={producto.Size} onChange={changeForm} /> 
                    <input  placeholder= "Precio" name='price' value={producto.price} onChange={changeForm} /> 
                    
                    <div className="editarProducto">
                        <button className="buttonAdd" onclick={enviarBackend} ><p>Guardar cambios</p></button>
                        <button className="buttonAdd" ><p>Eliminar producto</p></button>
                    </div>
                    
                </div>
                
            </form >
            
        </div>
    )
}

export default EditarProducto
