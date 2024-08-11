import React from "react";
import "./latest.css";
import heroimg from "../assets/heroimg.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Latest = () => {
  return (
    <div className="container max-w-full pt-12 pb-16 px-8 bg-gray-800">
      <div className="hero grid md:grid-cols-2 rounded-md">
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
          <button className="bg-[#ff00ff] text-[rgb(43,39,91)] font-bold mt-4 p-1 lg:w-70 md:w-60 w-50 h-12 rounded-lg cursor-pointer md:text-lg text-sm transition-colors duration-300 ease-in-out">
            LATEST COLLECTION{" "}
            <FaLongArrowAltRight className="inline mb-1 text-xl" />
          </button>
        </div>
        <img
          src={heroimg}
          alt="/"
          className="w-auto m-auto max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Latest;
