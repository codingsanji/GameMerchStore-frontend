import React from "react";
import "./weapons.css";
import Gun from "./gun";
import {
  machineGuns,
  melees,
  rifles,
  shotguns,
  sidearms,
  smgs,
  sniperRifles,
} from "../../assets/weaponsdata";

const Weapons = () => {
  return (
    <div className="bg-[#ece8e1] py-10">
      <div className="mb-4">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#0f1923] text-center"
          style={{
            fontFamily: "tungsten-bold, sans-serif",
          }}
        >
          WEAPONS
        </h1>
      </div>
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {/* sidearms */}
          <div className="space-y-4">
            <h1>SIDEARMS</h1>
            {sidearms.map((gun) => (
              <Gun key={gun.id} name={gun.name} image={gun.image} />
            ))}
          </div>

          {/* smgs and shotguns */}
          <div className="space-y-4">
            <h1>SMGS</h1>
            {smgs.map((gun) => (
              <Gun key={gun.id} name={gun.name} image={gun.image} />
            ))}
            <h1>SHOTGUNS</h1>
            {shotguns.map((gun) => (
              <Gun key={gun.id} name={gun.name} image={gun.image} />
            ))}
          </div>

          {/* rifles and melee */}
          <div className="space-y-4">
            <h1>RIFLES</h1>
            {rifles.map((gun) => (
              <Gun key={gun.id} name={gun.name} image={gun.image} />
            ))}
            <h1>MELEE</h1>
            {melees.map((gun) => (
              <Gun key={gun.id} name={gun.name} image={gun.image} />
            ))}
          </div>

          {/* sniper rifles and machine guns */}
          <div className="space-y-4">
            <h1>SNIPER RIFLES</h1>
            {sniperRifles.map((gun) => (
              <Gun key={gun.id} name={gun.name} image={gun.image} />
            ))}
            <h1>MACHINE GUNS</h1>
            {machineGuns.map((gun) => (
              <Gun key={gun.id} name={gun.name} image={gun.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weapons;
