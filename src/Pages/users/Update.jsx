import React, { useState, useEffect} from 'react';
import "../../styles/Ventas/Sales.css"
import "../../styles/Ventas/text.css"
import RutaNav from "../../components/Ventas/Route"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditarUsuario = (props) => {
    const [usuario, setusuario] = useState({})
    useEffect(() => {

        try{
            const fetchData = async () => {
                const response = await fetch(`https://latzi-nodejs.herokuapp.com/usuarios/${props.match.params.id}`)
                const data = await response.json()
                
                console.log(data)

                if(data !== null){
                    setusuario(data)
                }
            }
    
            fetchData()
        }catch(e){
            toast.error('Lo siento tenemos un error, vuelve mas tarde')
        }
    }, [])


    const changeForm = (e)=>{
        setusuario({...usuario,[e.target.name]:e.target.value})

    }
    

    const updateUsuario = async (e) => {

        e.preventDefault();

        try{      
            
            const response = await fetch(`https://latzi-nodejs.herokuapp.com/usuarios/${props.match.params.id}`,{
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            })

            await response.json()

            toast.info('Todo melo!')

        }catch(e){
            toast.error('Lo sentimos el servidor no esta disponible')
        }
    
    }

    const deleteUser = async (e) => {

        e.preventDefault();

        try{      
            
            const response = await fetch(`https://node-express-latiz.herokuapp.com/usuarios/delete/${props.match.params.id}`,{
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })

            await response.json()

            toast.info('Usuario actualizado con éxito!')

        }catch(e){
            toast.error('Lo sentimos el servidor no esta disponible')
            console.log(e)
        }
    
    }

    
    return (
        <div>
           <RutaNav route="/ Editar usuario"/>
           <div className="AddProduct">
                <Link to="/user/master">
                    <p>Maestro usuarios</p>
                </Link>
            </div>
           <div className="textAddProduct">
                <h2>Formulario para editar un usuario</h2>
           </div>
           <ToastContainer position="bottom-center" autoClose={5000} />

            {
                Object.entries(usuario).length > 0 ?
                <div className="addProduct">

                    <form >
                        <input  placeholder= "Nombre" name='name' value={usuario.name} onChange={changeForm}/>  
                        <input  placeholder= "Apellido" name='lastname' value={usuario.lastname} onChange={changeForm} /> 
                        <input  placeholder= "Rol"  name='rol' value={usuario.rol}onChange={changeForm}  /> 
                         
                        
                    </form >

                    <div className="editarProducto">
                        <button className="buttonAdd" name='buttonEdit' onClick={updateUsuario}>Guardar cambios</button>
                        <button className="buttonAdd" onClick={deleteUser} >Eliminar usuario</button>
                    </div>
                
                </div>
                :
                <h1 style={{margin:'150px auto', width:'90%', textAlign:'center'}}>El usuario no existe en la base de datos</h1>
            }
               
            
        </div>
    )
}

export default EditarUsuario
