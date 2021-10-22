import React from 'react'


const SalesList = (props) => {
    return (
        <form>
                <div className="listSale">
                    <label>{props.item}</label> 
                    <input placeholder= {props.date} required/> 
                    <input placeholder= {props.date} required/> 
                    <input placeholder= {props.date} required/> 
                    <input placeholder= {props.date} required/> 
                </div>
        </form>
    )
}

export default SalesList
