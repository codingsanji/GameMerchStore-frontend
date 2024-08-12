import React from "react";
import "./vproducts.css";
import { valodata as data_product } from "../assets/valodata";
import Item from "../items/items";

const VProducts = () => {
  return (
    <div className="bg-[#ece8e1] min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center justify-center w-full bg-cover bg-center">
        <div className="mt-10 mb-0">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#0f1923] text-center break-words max-w-screen-lg whitespace-normal lg:whitespace-nowrap"
            style={{
              fontFamily: "tungsten-bold, sans-serif",
            }}
          >
            AVAILABLE PRODUCTS
          </h1>
        </div>
        <div className="w-full p-8 mt-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {data_product.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={
                  <span
                    className="text-[16px] font-[600] uppercase leading-[26px] text-[#0f1923]"
                    style={{
                      fontFamily: "'Radio Canada Big', sans-serif",
                    }}
                  >
                    {item.name}
                  </span>
                }
                image={item.image}
                price={
                  <span
                    className="text-[#ff4655] font-[400]"
                    style={{
                      fontFamily: "'Radio Canada Big', sans-serif",
                    }}
                  >
                    ${item.price}
                  </span>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VProducts;
