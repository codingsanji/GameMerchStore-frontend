import React from "react";
import "./latest.css";
import heroimg from "../assets/heroimg.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Latest = () => {
  return (
    // <div className="hero">
    //   <div className="left">
    //     <h2>FRESH AND FIERCE</h2>
    //     <div>
    //       <p>New 👋 </p>
    //       <p>Collections</p>
    //       <p>For Everyone</p>
    //     </div>
    //     <div className="latestbtn">
    //       <div>Latest Collection ➔</div>
    //     </div>
    //   </div>

    //   <div className="right">
    //     <img src={img} alt="" />
    //   </div>
    // </div>


    <div className="hero w-full py-12 px-4">
      <div className="container max-w-[2000px] mx-auto grid md:grid-cols-2 rounded-md">
        <div className="flex flex-col text-white p-16 2xl:ml-[4rem] xl:ml-[2rem] md:text-left text-center">
          <h2 className="text-[#ff00ff] font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl">
            FRESH AND FIERCE
          </h2>
          <p className="font-light xl:text-2xl lg:text-xl sm:text-2xl text-lg">
            new👋
          </p>
          <p className="font-light xl:text-2xl lg:text-xl sm:text-2xl text-lg">
            collections
          </p>
          <p className="font-light xl:text-2xl lg:text-xl sm:text-2xl text-lg">
            for everyone
          </p>
          <button className="bg-[#ff00ff] text-[rgb(48,43,99)] font-bold md:mx-0 mx-auto mt-4 p-1 w-[250px] rounded-lg cursor-pointer text-lg transition-colors duration-300 ease-in-out h-12">
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
