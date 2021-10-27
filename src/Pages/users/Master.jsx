import React, { useState, useEffect} from 'react';
import "../../styles/Ventas/Sales.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import Edit from "../../images/Ventas/edit.svg"
import { Link } from 'react-router-dom';

const MaestroUsuarios = () => {
    
    const [usuarios,setusuarios] = useState([])

    useEffect(() => {
        
        const fetchData = async () => {
            const response = await fetch('https://latzi-nodejs.herokuapp.com/usuarios')
            const data = await response.json()

            setusuarios(data)
            console.log(data)
        }



        fetchData()

    }, [])
    
    
    
    
    
    return (
        <div>
           <RutaNav route="/ Maestro de Usuarios"/>
           
           <input className="search" placeholder='Buscar'/>
           

           <div className="textAddProduct">
                <h2>Lista de usuarios</h2>
           </div>
           <table className="maestroProducto">


                <tr className="cabeceraTabla">
                    <td>Nombre</td>
                    <td>Apellido</td>
                    <td>Rol</td>
                    
                </tr>

                {
                    usuarios.length > 0 && usuarios.map(usuario =>{
                        return(
                            <tr>
                                <td>{usuario.name}</td>
                                <td>{usuario.lastname}</td>
                                <td>{usuario.rol}</td>
                                <Link to = {`/user/update/${usuarios._id}`}>
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

export default MaestroUsuarios
