import React from 'react';
import './phasmoguide.css';

// Importing images
import Main from '../assets/phasmo/Top.gif';
import Name from '../assets/phasmo/phasmologo.png';
import Middle from '../assets/phasmo/Middle.jpg';
import last from '../assets/phasmo/third.jpg';
// 3rd section -- choices
import choice1 from '../assets/phasmo/equipment.jpg';
import choice2 from '../assets/phasmo/entities.webp';
import choice3 from '../assets/phasmo/maps.jpg';
import choice4 from '../assets/phasmo/cursedOBJ.jpg';
import choice5 from '../assets/phasmo/sanity.png';
import choice from '../assets/phasmo/controls.jpg';

const Phasguide = () => {
    return (
        <div className="relative">
            {/* Top Section */}
            <div className="relative h-screen">
                <img src={Main} alt="Main" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
                    <img src={Name} alt="Name" className="w-auto h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl" />
                    <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
                        style={{ fontFamily: 'phasmain', wordSpacing: '0.5rem', letterSpacing: '0.3rem' }}>
                        a friendly guide w merch
                    </p>
                </div>
            </div>

            {/* Middle Section */}
            <div className="relative">
                <img src={Middle} alt="Middle" className="w-full h-auto object-cover opacity-100" />
                <div className="absolute top-0 left-0 w-full sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-2/5 2xl:w-1/3 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 flex flex-col items-start">
                    <h1 className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-white mb-4" 
                        style={{ textShadow: '3px 1px 10px rgba(0, 0, 0, 0.7)', fontFamily: 'spelite' }}>
                        OVER-VIEW
                    </h1>
                    <p className="text-xxs sm:text-xxs md:text-xs lg:text-base xl:text-base 2xl:text-lg text-white mb-4 sm:mb-6 break-words"
                        style={{ textShadow: '3px 1px 10px rgba(0, 0, 0, 0.7)', fontFamily: 'eco' }}>
                        Phasmophobia is a first-person horror-investigation-survival game for one to four players. The main goal is to identify the type of ghost haunting a location by gathering evidence. Players communicate via local (press "v" to toggle mute) and global (hold "b" to speak) voice chat. Evidence is logged in the ghost diary (press "j" to open).
                    </p>
                    <p className="text-xxs sm:text-xxs md:text-xs lg:text-base xl:text-base 2xl:text-lg text-white mb-4 sm:mb-6 break-words"
                        style={{ textShadow: '3px 1px 10px rgba(0, 0, 0, 0.7)', fontFamily: 'eco' }}>
                        Succeeding will earn you XP to level up and money which can be used to unlock new maps, levels, and upgrades for their equipment. Completing objectives and taking photos can enhance and double the rewards.
                    </p>
                    <p className="text-xxs sm:text-xxs md:text-xs lg:text-base xl:text-base 2xl:text-lg text-white break-words"
                        style={{ textShadow: '3px 1px 10px rgba(0, 0, 0, 0.7)', fontFamily: 'eco' }}>
                        It was made by Kinetic Games in 2020.
                    </p>
                </div>
            </div>

            {/* Last Section */}
            <div className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${last})` }}>
                <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
                    <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-7xl text-white mb-0 text-center break-words max-w-screen-lg"
                    style={{ textShadow: '3px 1px 10px rgba(0, 0, 0, 0.7)', fontFamily: 'phasmain', marginBottom: '-1.3rem' }}>
                    CHOOSE YOUR NEXT TOPIC!
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-4 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
                    <div className="flex flex-col items-center">
                        <a href="https://phasmophobia.fandom.com/wiki/Guides" target="_blank" rel="noopener noreferrer">
                            <img src={choice} alt="guides" className="choice-image w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 2xl:w-48 h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44 2xl:h-48 object-cover" />
                        </a>
                        <a href="https://phasmophobia.fandom.com/wiki/Guides" target="_blank" rel="noopener noreferrer">
                            <p className="mt-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white" style={{fontFamily: 'spelite'}}>Controls</p>
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://phasmophobia.fandom.com/wiki/Equipment" target="_blank" rel="noopener noreferrer">
                            <img src={choice1} alt="equipment" className="choice-image w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 2xl:w-48 h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44 2xl:h-48 object-cover" />
                        </a>
                        <a href="https://phasmophobia.fandom.com/wiki/Equipment" target="_blank" rel="noopener noreferrer">
                            <p className="mt-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white" style={{fontFamily: 'spelite'}}>Equipments</p>
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://phasmophobia.fandom.com/wiki/Ghost" target="_blank" rel="noopener noreferrer">
                            <img src={choice2} alt="entities" className="choice-image w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 2xl:w-48 h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44 2xl:h-48 object-cover" />
                        </a>
                        <a href="https://phasmophobia.fandom.com/wiki/Ghost" target="_blank" rel="noopener noreferrer">
                            <p className="mt-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white" style={{fontFamily: 'spelite'}}>Entities</p>
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://phasmophobia.fandom.com/wiki/Map" target="_blank" rel="noopener noreferrer">
                            <img src={choice3} alt="maps" className="choice-image w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 2xl:w-48 h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44 2xl:h-48 object-cover" />
                        </a>
                        <a href="https://phasmophobia.fandom.com/wiki/Map" target="_blank" rel="noopener noreferrer">
                            <p className="mt-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white" style={{fontFamily: 'spelite'}}>Maps</p>
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://phasmophobia.fandom.com/wiki/Cursed_possession" target="_blank" rel="noopener noreferrer">
                            <img src={choice4} alt="cursed-objects" className="choice-image w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 2xl:w-48 h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44 2xl:h-48 object-cover" />
                        </a>
                        <a href="https://phasmophobia.fandom.com/wiki/Cursed_possession" target="_blank" rel="noopener noreferrer">
                            <p className="mt-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white" style={{fontFamily: 'spelite'}}>Cursed Objects</p>
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://phasmophobia.fandom.com/wiki/Sanity" target="_blank" rel="noopener noreferrer">
                            <img src={choice5} alt="sanity" className="choice-image w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 2xl:w-48 h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44 2xl:h-48 object-cover" />
                        </a>
                        <a href="https://phasmophobia.fandom.com/wiki/Sanity" target="_blank" rel="noopener noreferrer">
                            <p className="mt-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white" style={{fontFamily: 'spelite'}}>Sanity</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Phasguide;
