import React from "react";
import './Items.css'

const Items = (props) => {
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

export default Items