import React from "react";
import { all_product as data_product } from "../assets/all_product";
import Item from "../Items/Items";

const PProducts = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center -mt-7">
      <div className="flex flex-col items-center justify-center w-full bg-cover bg-center">
        <hr className="border-gray-700 mb-5" />
        <div className="w-full p-8">
          <div className="grid grid-cols-2 sm:grid-cols-  4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8">
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
