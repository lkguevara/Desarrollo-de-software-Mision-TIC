import React, { useState, useEffect} from 'react';
import "../../styles/Ventas/Sales.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
// import SalesList from "../../components/Ventas/SalesList"
import Edit from "../../images/Ventas/edit.svg"
import Add from "../../images/Ventas/add.svg"
import { Link } from 'react-router-dom';


const MaestroProdutos = () => {

    const [productos,setProductos] = useState([])

    useEffect(() => {
        //obtener lista de vehículos desde el front

        // setProductos(productosBackend)

        // /products -> solicitar todos los productos
        // /products/create -> crear un producto (un objeto json)
        // /products/edite -> editar un producto  (un objeto json con las mod)
        // /products/delete -> eliminar un producto (id)

        const fetchData = async () => {
            const response = await fetch('https://latzi-nodejs.herokuapp.com/products')
            const data = await response.json()

            setProductos(data)
            console.log(data)
        }



        fetchData()

    }, [])

    
    return (
        <div>
           <RutaNav route="/ Maestro de Productos"/>
           
           <div className="maestroVenta">

                <input className="search" placeholder='Buscar'/>
                <div className="HeaderMaestro">
                    <div className="RegisterSale">
                        <p>Maestro de productos <p>4 Registros</p> </p>
                    </div>
                    <form>
                        <p>Filtrar por:
                            <select className="optionFilter">
                                <option></option>
                                <option>ID producto</option>
                                <option>Nombre producto</option>
                            </select>
                        </p>
                        

                    </form>
                    <div className="SaleAdd">
                        <Link to="/product/add">
                            <div className="AgregarVenta"> 
                                <img src={Add} height="25px" alt="AgregarVenta" />
                                <p>Agregar un producto</p>
                            </div>
                            
                        </Link>
                        
                    </div>
                </div>
            </div>

            <table className="maestroProducto">


                <tr className="cabeceraTabla">
                    <td>Id Producto</td>
                    <td>Nombre</td>
                    <td>Marca</td>
                    <td>Tamano</td>
                    <td>Precio</td>
                </tr>

                {
                    productos.length > 0 && productos.map(product =>{
                        return(
                            <tr>
                                <td>{product.Product}</td>
                                <td>{product.mark}</td>
                                <td>{product.Size}</td>
                                <td>{product.price}</td>
                                <Link to="/product/update">
                                <img src= {Edit} height="20px" alt="" />
                                </Link>
                                
                            </tr>

                        )
                    })
                }
               
                
            </table>
        </div>
    )
}



export default MaestroProdutos
