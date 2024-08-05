import React from 'react';
import './phasmoguide.css';

// Importing images
import Main from '../assets/phasmo/Top.gif';
import Name from '../assets/phasmo/phasmologo.png';
import Middle from '../assets/phasmo/Middle.jpg';

const Phasguide = () => {
    return (
        <div className="relative">
            {/* Top Section */}
            <div className="relative h-screen">
                <img src={Main} alt="Main" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <img src={Name} alt="Name" className="w-auto h-auto max-w-xl md:max-w-3xl lg:max-w-5xl" />
                    <p className="mt-4 text-lg md:text-2xl lg:text-5xl"
                        style={{ fontFamily: 'phasmain', wordSpacing: '0.5rem', letterSpacing: '0.3rem' }}>
                        a friendly guide w merch
                    </p>
                </div>
            </div>

            {/* Middle Section */}
            <div className="relative">
                <img src={Middle} alt="Middle" className="w-full h-auto object-cover" />
                <div className="absolute top-0 left-0 w-3/4 md:w-2/3 lg:w-1/2 p-6 md:p-10 lg:p-14">
                    <h1 className="text-lg md:text-3xl lg:text-6xl font-bold text-white">
                        OVER-VIEW
                    </h1>
                    <p className="mt-4 text-xs md:text-sm lg:text-xl text-white mb-6">
                        Phasmophobia is a first-person horror-investigation-survival game that can be played either solo or in a group of 4 players. The main objective of the game is to complete a contract by identifying the type of ghost haunting a specific location. In order to achieve this, players can communicate with each other through voice chat, both locally (press v once to unmute and again to mute) and globally (long press "b" as long as you're speaking) using walkie-talkies. They can find the ghost by gathering evidence and eliminating from the ghost-diary ( press "j" to open book).
                    </p>
                    <p className="mt-4 text-xs md:text-sm lg:text-xl text-white mb-6">
                        Succeeding will earn you XP to level up and money which can be used to unlock new maps, levels, and upgrades for their equipment. Completing objectives and taking photos can enhance and double the rewards.
                    </p>
                    <p className="mt-4 text-xs md:text-sm lg:text-xl text-white">
                        It was made by Kinetic Games in 2020.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Phasguide;
