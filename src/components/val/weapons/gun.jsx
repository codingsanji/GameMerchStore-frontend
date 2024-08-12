import React from "react";
import "./weapons.css";

const Gun = (gun) => {
  return (
    <div className="bg-[#1c4659] w-full 2xl:m-4 p-4 pb-0 border-[2px] border-gray-600 shadow-md shadow-[#1a1a1a] rounded-sm guns">
      <img
        className="xl:h-[110px] lg:h-[100px] md:h-[90px] h-[70px] object-contain mx-auto"
        src={gun.image}
        alt={gun.name}
      />
      <span>
        <p
          className="uppercase text-[#ece8e1] text-sm"
          style={{ fontFamily: "Arial, san-serif" }}
        >
          {gun.name}
        </p>
      </span>
    </div>
  );
};

export default Gun;
