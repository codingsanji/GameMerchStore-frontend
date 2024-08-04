import React from "react";
import './item.css'

const items = (props) => {
    return(
        <div className="item">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-prices">
                {props.price}
            </div>
        </div>
    )
}

export default items