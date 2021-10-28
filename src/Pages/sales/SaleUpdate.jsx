import React, { useState, useEffect} from 'react';
import "../../styles/Ventas/Sales.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import SalesList from "../../components/Ventas/SalesList"
import SalesHeader from "../../components/Ventas/SalesHeader"
import Edit from "../../images/Ventas/edit.svg"
import Add from "../../images/Ventas/add.svg"
import Delete from "../../images/Ventas/delete.svg"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditarVenta = (props) => {
    const [venta, setVenta] = useState({})
    //los useeffect que estan suscritos a una lista vacia [] ocurren cuando el componente ya se cargo visualmente 1 vez
    useEffect(() => {

        try{
            const fetchData = async () => {
                const response = await fetch(`https://latzi-nodejs.herokuapp.com/ventas/${props.match.params.id}`)
                const data = await response.json()
                
                //si data es diferente de null -> seteear el dato del producto
                //porq ue debe ser diferente porque, null.property = error
                if(data !== null){
                    setVenta(data)
                }
            }
    
            fetchData()
        }catch(e){
            toast.error('Lo siento tenemos un error, vuelve mas tarde')
        }
    }, [])


    const changeForm = (e)=>{
        setVenta({...venta,[e.target.name]:e.target.value})
        // console.log(e.target.name)
        // setProducto({Product:e.target.value})
    }
    

    const updateProduct = async (e) => {

        e.preventDefault();

        try{      
            
            const response = await fetch(`https://node-express-latiz.herokuapp.com/sales/${props.match.params.id}`,{
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(venta)
            })

            await response.json()

            toast.info('Venta actualizada con éxito!')

        }catch(e){
            toast.error('Lo sentimos el servidor no esta disponible')
        }
    
    }

    const deleteProduct = async (e) => {

        e.preventDefault();

        try{      
            
            const response = await fetch(`https://node-express-latiz.herokuapp.com/sales/${props.match.params.id}`,{
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })

            await response.json()

            toast.info('Venta actualizada con éxito!')

        }catch(e){
            toast.error('Lo sentimos el servidor no esta disponible')
        }
    
    }



    return (
        <div>
           <RutaNav route="/ Editar Venta"/>
           <div className="AddProduct">
                <Link to="/Sales/master">
                    <p>Maestro Ventas</p>
                </Link>
            </div>
           <div className="textAddProduct">
                <h2>Formulario para editar una venta</h2>
           </div>
           <ToastContainer position="bottom-center" autoClose={5000} />

            {
                Object.entries(venta).length > 0 ?
                <div className="addProduct">

                    <form >
                        <input  placeholder= "Vendedor" name='Vendedor' value={venta.Vendedor} onChange={changeForm}/>  
                        <input  placeholder= "Cliente" name='Cliente' value={venta.Cliente} onChange={changeForm} /> 
                        <input  placeholder= "Total"  name='Total' value={venta.Total}onChange={changeForm}  /> 
                        <input  placeholder= "Fecha" name='Fecha' value={venta.Fecha} onChange={changeForm} /> 
                        <input  placeholder= "Estado" name='Estado' value={venta.Estado} onChange={changeForm} /> 
                        
                    </form >

                    <div className="editarProducto">
                        <button className="buttonAdd" name='buttonEdit' onClick={updateProduct}>Guardar cambios</button>
                        <button className="buttonAdd" onClick={deleteProduct} >Eliminar venta</button>
                    </div>
                
                </div>
                :
                <h1 style={{margin:'150px auto', width:'90%', textAlign:'center'}}>La venta no existe en la base de datos</h1>
            }
               
            
        </div>
    )
}

export default EditarVenta
