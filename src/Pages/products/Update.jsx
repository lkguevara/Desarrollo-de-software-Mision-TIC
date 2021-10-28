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

        try{
            const fetchData = async () => {
                const response = await fetch(`https://node-express-latiz.herokuapp.com/products/${props.match.params.id}`)
                const data = await response.json()
                
                //si data es diferente de null -> seteear el dato del producto
                //porq ue debe ser diferente porque, null.property = error
                if(data !== null){
                    setProducto(data)
                }
            }
    
            fetchData()
        }catch(e){
            toast.error('Lo siento tenemos un error, vuelve mas tarde')
        }
    }, [])


    const changeForm = (e)=>{
        setProducto({...producto,[e.target.name]:e.target.value})
        // console.log(e.target.name)
        // setProducto({Product:e.target.value})
    }
    

    const updateProduct = async (e) => {

        e.preventDefault();

        try{      
            
            const response = await fetch(`https://node-express-latiz.herokuapp.com/products/edit/${props.match.params.id}`,{
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })

            await response.json()

            toast.info('Producto eliminado con éxito!')

        }catch(e){
            toast.error('Lo sentimos el servidor no esta disponible')
        }
    
    }

    const deleteProduct = async (e) => {

        e.preventDefault();

        try{      
            
            const response = await fetch(`https://node-express-latiz.herokuapp.com/products/delete/${props.match.params.id}`,{
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })

            await response.json()

            toast.info('Producto eliminado con éxito!')

        }catch(e){
            toast.error('Lo sentimos el servidor no esta disponible')
            console.log(e)
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

            {
                Object.entries(producto).length > 0 ?
                <div className="addProduct">

                    <form >
                        <input  placeholder= "Nombre del producto" name='Product' value={producto.Product} onChange={changeForm}/>  
                        <input  placeholder= "Marca" name='mark' value={producto.mark} onChange={changeForm} /> 
                        <input  placeholder= "Tamaño"  name='ServingSizes' value={producto.ServingSizes}onChange={changeForm}  /> 
                        <input  placeholder= "Unidad" name='Size' value={producto.Size} onChange={changeForm} /> 
                        <input  placeholder= "Precio" name='price' value={producto.price} onChange={changeForm} /> 
                        
                    </form >

                    <div className="editarProducto">
                        <button className="buttonAdd" name='buttonEdit' onClick={updateProduct}>Guardar cambios</button>
                        <button className="buttonAdd" onClick={deleteProduct} >Eliminar producto</button>
                    </div>
                
                </div>
                :
                <h1 style={{margin:'150px auto', width:'90%', textAlign:'center'}}>El Producto no existe en la base de datos</h1>
            }
               
            
        </div>
    )
}

export default EditarProducto
