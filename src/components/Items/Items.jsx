import React from "react";
import './items.css'

const items = (props) => {
    return(
        <div className="item max-w-s ">
            <img src={props.image} alt="" />
            <p className="mt-0.4 mx-0 ">{props.name}</p>
            <div className="item-prices flex gap-1.25 text-lg " style={{color:'#230134'}}>
                {props.price}
            </div>
        </div>
    )
}

export default items