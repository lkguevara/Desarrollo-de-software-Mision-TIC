import React, { useState, useEffect} from 'react';
import "../../styles/Ventas/Sales.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import SalesList from "../../components/Ventas/SalesList"
import SalesHeader from "../../components/Ventas/SalesHeader"
import Edit from "../../images/Ventas/edit.svg"
import Add from "../../images/Ventas/add.svg"
import { Link } from 'react-router-dom';

const MaestroVenta = () => {

    const [ventas,setVentas] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://node-express-latiz.herokuapp.com/sales')
            const data = await response.json()

            setVentas(data)
            console.log(data)
        }



        fetchData()

    }, [])
    return (
        <div>
        <RutaNav route="/ Maestro de Ventas"/>
        
        <div className="maestroVenta">

             
             <div className="HeaderMaestro">
                 <div className="RegisterSale">
                     <input className="search" placeholder='Buscar'/>
                 </div>
                 <div className="SaleAdd">
                     <Link to="/Sales/add">
                         <div className="AgregarVenta"> 
                             <img src={Add} height="25px" alt="AgregarVenta" />
                             <p>Agregar Venta</p>
                         </div>
                         
                     </Link>
                     
                 </div>
             </div>
         </div>

         <table className="maestroProducto">


            <tr className="cabeceraTabla">
                <td>Vendedor</td>
                <td>Cliente</td>
                <td>Total</td>
                <td>Fecha</td>
                <td>Estado</td>
                
            </tr>

             {
                 ventas.length > 0 && ventas.map(venta =>{
                     return(
                         <tr>
                             <td>{venta.Vendedor}</td>
                             <td>{venta.Cliente}</td>
                             <td>{venta.Total}</td>
                             <td>{venta.Fecha}</td>
                             <td>{venta.Estado}</td>
                             <Link to = {`/sales/update/${venta._id}`}>
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

export default MaestroVenta
