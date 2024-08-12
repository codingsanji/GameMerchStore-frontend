import React from "react";
import "./pproducts.css";
import { phasmodata as data_product } from "../assets/phasmodata";
import Item from "../Items/Items";

const PProducts = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center justify-center w-full bg-cover bg-center">
        <div className="mt-10 mb-0">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white text-center break-words max-w-screen-lg whitespace-normal lg:whitespace-nowrap"
            style={{
              fontFamily: "phasmain",
              textShadow: "3px 1px 10px rgba(0, 0, 0, 0.7)",
            }}
          >
            AVAILABLE PRODUCTS
          </h1>
        </div>
        <hr className="border-gray-700 mb-5" />
        <div className="w-full p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {data_product.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={<span className="text-[#8c34eb]">${item.price}</span>}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PProducts;
