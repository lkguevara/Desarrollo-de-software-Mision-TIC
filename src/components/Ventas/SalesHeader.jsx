import React from 'react'

const SalesHeader = (props) => {
    return (
        <div >
            <div className="headerFactura__date">
                    <p className="headerFactura__fecha"> Fecha: {props.fecha}</p>
                    <p className="headerFactura__id">ID venta: {props.id}</p>
                </div>
            <div className="mainFacturaUser">
                <p>{props.user}</p>
                <input placeholder={props.date1}/>
                <input placeholder={props.date2}/>
                <input placeholder={props.date3}/>
                
            </div>
        </div>
    )
}

export default SalesHeader
