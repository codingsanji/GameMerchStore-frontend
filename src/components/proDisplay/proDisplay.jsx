import React from 'react';
import { Link } from 'react-router-dom';
import starY from '../assets/star.png';
import starN from '../assets/starN.png';

const getRandomItems = (items, count) => {
  let shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const ProDisplay = ({ product, all_product }) => {
  if (!product || !all_product || !Array.isArray(all_product)) {
    console.error('Invalid product or all_product data.');
    return null;
  }

  const sameCategoryProducts = all_product.filter(p => p.category === product.category && p.id !== product.id);
  const randomProducts = getRandomItems(sameCategoryProducts, 4);

  return (
    <div className="min-h-screen text-white p-4 mb-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-start space-x-4">
        {/* Left Side */}
        <div className="productDisplay-left flex flex-col w-full lg:w-2/3 xl:w-3/5 lg:ml-4">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="img-list flex flex-row flex-wrap lg:flex-col space-x-2 lg:space-x-0 space-y-2 lg:space-y-4 mr-4">
              {randomProducts.length > 0 ? (
                randomProducts.map((p, index) => (
                  <Link key={p.id} to={`/product/${p.id}`} className="flex-shrink-0">
                    <img
                      src={p.image}
                      alt={p.name}
                      className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover cursor-pointer ${index === 0 ? 'self-start' : ''}`}
                    />
                  </Link>
                ))
              ) : (
                <p>No products available</p>
              )}
            </div>
            <div className="prodImg flex-shrink-0 w-full lg:w-3/5 xl:w-2/3 mt-4 lg:mt-0">
              <img
                className="mainproductImg w-full h-auto object-contain"
                src={product.image}
                alt={product.name}
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="productDisplay-right w-full lg:w-1/3 xl:w-2/5 mt-6 lg:mt-0 lg:ml-4">
          <h1 className="text-2xl lg:text-3xl font-bold mb-2 text-gray-800">{product.name}</h1>
          <div className="productStar flex items-center space-x-1">
            <img src={starY} alt="" className="w-5 h-5 lg:w-6 lg:h-6" />
            <img src={starY} alt="" className="w-5 h-5 lg:w-6 lg:h-6" />
            <img src={starY} alt="" className="w-5 h-5 lg:w-6 lg:h-6" />
            <img src={starY} alt="" className="w-5 h-5 lg:w-6 lg:h-6" />
            <img src={starN} alt="" className="w-5 h-5 lg:w-6 lg:h-6" />
            <p className="ml-2 text-gray-400">27</p>
          </div>
          <div className="proPrice text-lg lg:text-xl font-semibold mt-4 text-gray-800">
            ${product.price}
          </div>
          <div className="proDesc mt-4">
            <h1 className="text-md lg:text-lg font-bold text-gray-800">Select Size:</h1>
            <div className="sizes flex flex-wrap space-x-2 mt-2 text-gray-800">
              <div className="px-3 py-1 lg:px-4 lg:py-2 border rounded cursor-pointer hover:bg-gray-200 hover:text-gray-900">S</div>
              <div className="px-3 py-1 lg:px-4 lg:py-2 border rounded cursor-pointer hover:bg-gray-200 hover:text-gray-900">M</div>
              <div className="px-3 py-1 lg:px-4 lg:py-2 border rounded cursor-pointer hover:bg-gray-200 hover:text-gray-900">L</div>
              <div className="px-3 py-1 lg:px-4 lg:py-2 border rounded cursor-pointer hover:bg-gray-200 hover:text-gray-900">XL</div>
              <div className="px-3 py-1 lg:px-4 lg:py-2 border rounded cursor-pointer hover:bg-gray-200 hover:text-gray-900">XXL</div>
            </div>
          </div>
          <button className="mt-6 px-4 lg:px-6 py-2 lg:py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProDisplay;
