import React from 'react';
import './phasmoguide.css';

// Importing images
import Main from '../assets/phasmo/Top.gif';
import Name from '../assets/phasmo/phasmologo.png';
import Middle from '../assets/phasmo/Middle.jpg';
import Last from '../assets/phasmo/third.jpg';
    //3rd section -- choices
    import choice1 from '../assets/phasmo/equipment.jpg';
    import choice2 from '../assets/phasmo/entities.webp';
    import choice3 from '../assets/phasmo/maps.jpg';
    import choice4 from '../assets/phasmo/cursedOBJ.jpg';
    import choice5 from '../assets/phasmo/sanity.png';


const Phasguide = () => {
    return (
        <div className="relative">
            {/* Top Section */}
            <div className="relative h-screen">
                <img src={Main} alt="Main" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
                    <img src={Name} alt="Name" className="w-auto h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl" />
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
                        style={{ textShadow: '3px 1px 10px rgba(0, 0, 0, 2)' , fontFamily: 'eco' }}>
                        OVER-VIEW
                    </h1>
                    <p className="text-xxs sm:text-xxs md:text-xs lg:text-base xl:text-base 2xl:text-lg text-white mb-4 sm:mb-6 break-words"
                        style={{ textShadow: '3px 1px 10px rgba(0, 0, 0, 2)' , fontFamily: 'spelite' }}>
                        Phasmophobia is a first-person horror-investigation-survival game for one to four players. The main goal is to identify the type of ghost haunting a location by gathering evidence. Players communicate via local (press "v" to toggle mute) and global (hold "b" to speak) voice chat. Evidence is logged in the ghost diary (press "j" to open).
                    </p>
                    <p className="text-xxs sm:text-xxs md:text-xs lg:text-base xl:text-base 2xl:text-lg text-white mb-4 sm:mb-6 break-words"
                        style={{ textShadow: '3px 1px 10px rgba(0, 0, 0, 2)' , fontFamily: 'spelite' }}>
                        Succeeding will earn you XP to level up and money which can be used to unlock new maps, levels, and upgrades for their equipment. Completing objectives and taking photos can enhance and double the rewards.
                    </p>
                    <p className="text-xxs sm:text-xxs md:text-xs lg:text-base xl:text-base 2xl:text-lg text-white break-words"
                        style={{ textShadow: '3px 1px 10px rgba(0, 0, 0, 2)' , fontFamily: 'spelite' }}>
                        It was made by Kinetic Games in 2020.
                    </p>
                </div>
            </div>

            {/*Last Section */}
            <div>
                <img src={Last} alt='Third' />
                <div>
                    <a href='https://phasmophobia.fandom.com/wiki/Equipment' target='blank'><img src={choice1} alt='equipment' /></a>
                    <a href='https://phasmophobia.fandom.com/wiki/Ghost' target='blank'><img src={choice2} alt='entities' /></a>
                    <a href='https://phasmophobia.fandom.com/wiki/Map' target='blank'><img src={choice3} alt='maps' /></a>
                    <a href='https://phasmophobia.fandom.com/wiki/Cursed_possession' target='blank'><img src={choice4} alt='cursed-objects' /></a>
                    <a href='https://phasmophobia.fandom.com/wiki/Sanity' target='blank'><img src={choice5} alt='sanity' /></a>
                </div>
            </div>


        </div>
    );
}

export default Phasguide;
