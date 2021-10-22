import React from 'react'
import "../../styles/Ventas/Sales.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import SalesList from "../../components/Ventas/SalesList"
import Edit from "../../images/Ventas/edit.svg"
import Add from "../../images/Ventas/add.svg"
import { Link } from 'react-router-dom';

const MaestroProdutos = () => {
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

            <form className="listSales">
                <div className="listSaleColum">
                    <SalesList item="ID Producto" date="Id de producto"/>
                </div>

                <div className="listSaleColum">
                    <SalesList item="Nombre" date="Nombre"/>
                </div>


                <div className="listSaleColum">
                    <SalesList item="Marca" date="Marca"/>
                </div>

                <div className="listSaleColum">
                    <SalesList item="Tamaño" date="Tamaño"/>    
                </div>

                <div id="status" className="listSaleColum">
                    <SalesList item="Precio" date="Precio"/>    
                </div>
                

                

                <div className="editSale">
                    <Link to='/product/update'>
                        <img src= {Edit} height="20px" alt="" />
                        <img src= {Edit} height="20px" alt="" />
                        <img src= {Edit} height="20px" alt="" />
                        <img src= {Edit} height="20px" alt="" />
                    </Link>
                </div>
                
                
            </form>
        </div>
    )
}

export default MaestroProdutos
