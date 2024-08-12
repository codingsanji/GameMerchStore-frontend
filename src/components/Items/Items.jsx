import React from "react";
import "./Items.css";

const Item = (items) => {
  return (
    <div className="item bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={items.image}
        alt={items.name}
        className="w-full h-48 object-cover"
      />
      <div className="w-[85%] h-20 break-words p-4">
        <p
          className="text-lg font-bold"
          style={{ fontFamily: "marga" }}
        >
          {items.name}
        </p>
      </div>
      <div className="text-lg font-semibold p-4">
          {/* I removed the '$' so we can make it different colors for our pages */}
          {items.price}
      </div>
    </div>
  );
};

export default Item;
