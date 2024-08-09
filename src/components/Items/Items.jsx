import React from "react";
import './items.css'

const Item = (props) => {
    return(
        <div className="item bg-white rounded-lg shadow-md overflow-hidden">
            <img src={props.image} alt={props.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <p className="text-lg font-bold" style={{fontFamily:'marga'}}>{props.name}</p>
                <div className="text-lg font-semibold" style={{color:'#8c34eb'}}>
                    ${props.price}
                </div>
            </div>
        </div>
    )
}

export default Item;
