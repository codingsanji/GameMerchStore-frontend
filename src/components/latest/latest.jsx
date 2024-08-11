import React from "react";
import "./latest.css";
import heroimg from "../assets/heroimg.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from '../assets/homeface.png';

const Latest = () => {
  return (
    <div className="container max-w-full mb-4 pt-12 pb-16 px-8 bg-gray-800">
      <div className="hero grid md:grid-cols-2 rounded-md mb-8">
        <div className="flex flex-col text-white p-16 2xl:ml-[4rem] xl:ml-[2rem] md:text-left text-center">
          <h2 className="text-[#ff00ff] font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl">
            FRESH AND FIERCE
          </h2>
          <p className="font-light xl:text-2xl lg:text-xl sm:text-2xl text-lg">
            New👋
          </p>
          <p className="font-light xl:text-2xl lg:text-xl sm:text-2xl text-lg">
            Collections
          </p>
          <p className="font-light xl:text-2xl lg:text-xl sm:text-2xl text-lg">
            For everyone
          </p>
          <Link to="/shop">
            <button className="bg-[#ff00ff] text-[rgb(43,39,91)] font-bold mt-4 p-1 lg:w-70 md:w-60 w-50 h-12 rounded-lg cursor-pointer md:text-lg text-sm transition-colors duration-300 ease-in-out">
              LATEST COLLECTION{" "}
              <FaLongArrowAltRight className="inline mb-1 text-xl" />
            </button>
          </Link>
        </div>
        <img
          src={heroimg}
          alt="/"
          className="w-auto m-auto max-w-full h-auto"
        />
      </div>

      <div className="max-w-full mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center p-4 sm:mt-1 md:mt-8 sm:mt-6 md:mt-8">
          <div className="flex-1 flex justify-center items-center mb-4">
            <img src={Logo} alt="" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="flex gap-4">
            <a href="/shop" className="bg-blue-500 text-white rounded-lg p-4 flex-1 text-center hover:bg-blue-600 transition duration-200">Store</a>
            <a href="/valo" className="bg-green-500 text-white rounded-lg p-4 flex-1 text-center hover:bg-green-600 transition duration-200">Valorant</a>
            <a href="/phasmo" className="bg-red-500 text-white rounded-lg p-4 flex-1 text-center hover:bg-red-600 transition duration-200">Phasmophobia</a>
          </div>
        </div>
        <div className="p-4 flex items-center">
          <div className="bg-gray-900 text-gray-100 shadow-lg rounded-lg p-6 sm:p-7 md:p-8 flex-1">
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">To the Newbies,</h1>
            <h2 className="text-lg sm:text-xl md:text-xl font-normal mb-3 sm:mb-4">
              Hello there! We are <span className="text-orange-500">Gamerch</span> and we promote games while making fan-merch.
            </h2>
            <h2 className="text-lg sm:text-xl md:text-xl font-light mb-3 sm:mb-4">
              This is 100% non-profitable as it is a way to promote games and suggest game merch that we, as a fan community, want.
            </h2>
            <h2 className="text-lg sm:text-xl md:text-xl font-light mb-3 sm:mb-4">
              In the future, if this becomes a successful endeavor, with permission, we shall make the merch available for you to order!
            </h2>
            <h2 className="text-lg sm:text-xl md:text-xl font-light mb-3 sm:mb-4">
              Feel free to <Link to="#contact-us-section" className="text-orange-500">contact us</Link> (in the section before the footer) to suggest new games to try or merch ideas to create.
            </h2>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Latest;