import React from "react";
import "./latest.css";
import heroimg from "../assets/heroimg.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const latest = () => {
  return (
    // add a introduction sheet before the hero one, make sure to make it margin top and bottom evenly

    // these 2 lines below are for making the cotainer a box
    // <div className="w-full mb-4 py-12 px-4">
    //   <div className="container max-w-[2000px] mx-auto grid md:grid-cols-2 rounded-md">

    <div className="hero w-full mb-4 py-12 px-4">
      <div className="max-w-[2000px] mx-auto grid md:grid-cols-2 rounded-md">
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
          <button className="bg-[#ff00ff] text-[rgb(43,39,91)] font-bold md:mx-0 mx-auto mt-4 p-1 w-[250px] rounded-lg cursor-pointer text-lg transition-colors duration-300 ease-in-out h-12">
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

export default latest;
