import React from "react";
import "./items.css";

const Item = (items) => {
  return (
    // <div className="item bg-white rounded-lg shadow-md overflow-hidden">
    //   <img
    //     src={items.image}
    //     alt={items.name}
    //     className="w-full h-48 object-cover"
    //   />
    //   <div className="p-4">
    //     <p className="text-lg font-bold" style={{ fontFamily: "marga" }}>
    //       {items.name}
    //     </p>
    //     <div className="text-lg font-semibold" style={{ color: "#8c34eb" }}>
    //       ${items.price}
    //     </div>
    //   </div>
    // </div>

    <div className="max-w-[400px] bg-gray-400 rounded-lg shadow-md ">
      <img
        src={items.image}
        alt={items.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-lg font-bold" style={{ fontFamily: "marga" }}>
          {items.name}
        </p>
        <div className="text-lg font-semibold" style={{ color: "#8c34eb" }}>
          ${items.price}
        </div>
      </div>
    </div>
  );
};

export default Item;
