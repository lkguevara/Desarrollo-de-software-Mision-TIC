import React from 'react'
import Home from "../../images/Ventas/home.svg"
import { Link } from 'react-router-dom';

const Route = (props) => {
    return (
        <div className="routeNav">
            <Link to='./'>
                <img src= {Home} alt="Home" />
            </ Link>
            <h3>{props.route}</h3>
        </div>
    )
}

export default Route
