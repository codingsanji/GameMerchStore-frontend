import React from "react";
import "./phasmoguide.css";

// Importing images
import Main from "../assets/phasmo/Top.gif";
import Name from "../assets/phasmo/phasmologo.png";
import Middle from "../assets/phasmo/Middle.jpg";

const Phasguide = () => {
  return (
    <div className="relative">
      {/* Top Section */}
      <div className="relative h-screen">
        <img
          src={Main}
          alt="Main"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 md:p-6">
          <img
            src={Name}
            alt="Name"
            className="w-auto h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
          />
          <p
            className="mt-4 text-base sm:text-lg md:text-xl lg:text-3xl"
            style={{
              fontFamily: "phasmain",
              wordSpacing: "0.5rem",
              letterSpacing: "0.3rem",
            }}
          >
            a friendly guide w merch
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="relative">
        <img
          src={Middle}
          alt="Middle"
          className="w-full h-auto object-cover opacity-100"
        />
        <div className="absolute top-0 left-0 w-full sm:w-4/5 md:w-3/4 lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-start">
          <h1
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4"
            style={{ textShadow: "3px 1px 10px rgba(0, 0, 0, 2)" }}
          >
            OVER-VIEW
          </h1>
          <p
            className="text-xs sm:text-sm md:text-base lg:text-lg text-white mb-4 sm:mb-6"
            style={{ textShadow: "3px 1px 10px rgba(0, 0, 0, 2)" }}
          >
            Phasmophobia is a first-person horror-investigation-survival game
            that can be played either solo or in a group of 4 players. The main
            objective of the game is to complete a contract by identifying the
            type of ghost haunting a specific location. In order to achieve
            this, players can communicate with each other through voice chat,
            both locally (press v once to unmute and again to mute) and globally
            (long press "b" as long as you're speaking) using walkie-talkies.
            They can find the ghost by gathering evidence and eliminating from
            the ghost-diary ( press "j" to open book).
          </p>
          <p
            className="text-xs sm:text-sm md:text-base lg:text-lg text-white mb-4 sm:mb-6"
            style={{ textShadow: "3px 1px 10px rgba(0, 0, 0, 2)" }}
          >
            Succeeding will earn you XP to level up and money which can be used
            to unlock new maps, levels, and upgrades for their equipment.
            Completing objectives and taking photos can enhance and double the
            rewards.
          </p>
          <p
            className="text-xs sm:text-sm md:text-base lg:text-lg text-white"
            style={{ textShadow: "3px 1px 10px rgba(0, 0, 0, 2)" }}
          >
            It was made by Kinetic Games in 2020.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Phasguide;
