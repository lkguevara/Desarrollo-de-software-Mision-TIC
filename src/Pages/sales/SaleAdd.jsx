import React, { useState, useEffect} from 'react';
import "../../styles/Ventas/Sales.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import SalesList from "../../components/Ventas/SalesList"
import MaestroProductos from "../../Pages/products/Master"
import Add from "../../images/Ventas/add.svg"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AgregarVenta = () => {

    const [productos,setProductos] = useState([])

    useEffect(() => {
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
           <RutaNav route="/ Agregar Venta"/>
           
           <div className="maestroVenta">

                
                <div className="HeaderMaestro">
                    <div className="RegisterSale">
                        <label>Nombre Cliente</label>
                        <input className="search" placeholder='Nombre Cliente'/>
                        <label>Nombre Vendedor</label>
                        <input className="search" placeholder='Nombre Vendedor'/>
                        
                    </div>

                    <button className="buttonVenta">Agregar</button>
                    <div className="SaleAdd">
                        
                        <Link to="/sales/master">
                            <div className="AgregarVenta"> 
                                <p>Maestro de ventas</p>
                            </div>
                            
                        </Link>
                        
                    </div>
                </div>
            </div>
            <div className="textAddProduct">
                <h2>Stock de productos</h2>
            </div>
            <table className="maestroProducto">

                
                <tr className="cabeceraTabla">
                    {/* <td>Id Producto</td> */}
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
                                <Link to="/">
                                <img src= {Add} height="20px" alt="" />
                                </Link>
                                
                            </tr>

                        )
                    })
                }
               
                
            </table>

            <table className="maestroProducto">


                <tr className="cabeceraTabla">
                    <td>Producto</td>
                    <td>Vendedor</td>
                    <td>Cliente</td>
                    <td>Cantidad</td>
                    <td>Subtotal</td>
                    
                </tr>
                
            </table>

            <div className="TotalVenta">
                <label>Total Venta</label> 
                <input placeholder="Total" required/> 
            </div>
        </div>
    )
}

export default AgregarVenta
