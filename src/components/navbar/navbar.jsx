// import React, { useState, useEffect, useRef } from "react";
// import "./navbar.css";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/logo.png";
// import { IoCartOutline, IoMenu } from "react-icons/io5";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const dropdownRef = useRef(null);

//   // toggle the dropdown menu
//   const toggleMenu = () => setIsOpen(!isOpen);

//   // close the dropdown menu when the route changes
//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   // close the dropdown menu when clicking outside of it
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <header
//       className="sticky top-0 z-50 flex items-center h-20 px-8 bg-[#0b022e] shadow-md"
//       style={{ fontFamily: "silk" }}
//     >
//       <div className="flex-shrink-0">
//         <Link to="/">
//           <img className="logo md:w-16 w-12" src={logo} alt="Logo" />
//         </Link>
//       </div>

//       {/* default navbar */}
//       <div className="flex-grow hidden lg:flex lg:justify-center lg:items-center">
//         <ul className="flex text-[#22e000] text-2xl space-x-4">
//           <li className="links p-4">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="links p-4">
//             <Link to="/phasmo">Phasmophobia</Link>
//           </li>
//           <li className="links p-4">
//             <Link to="/valo">Valorant</Link>
//           </li>
//           <li className="links p-4">
//             <Link to="/shop">Shop</Link>
//           </li>
//         </ul>
//       </div>

//       <div className="flex items-center ml-auto gap-8 text-white">
//         {/* login button */}
//         <Link to="/login">
//           <button className="login-button bg-[#22e000] text-black rounded-lg md:text-xl text-md px-4 py-2">
//             Login
//           </button>
//         </Link>

//         {/* item count on cart button */}
//         <Link to="/cart" className="relative">
//           <IoCartOutline size={50} className="cursor-pointer" />
//           <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//             0
//           </div>
//         </Link>

//         {/* mobile menu dropdown button */}
//         <button onClick={toggleMenu} className="lg:hidden text-white">
//           <IoMenu size={40} />
//         </button>
//       </div>

//       {/* dropdown menu for mobile */}
//       {isOpen && (
//         <div
//           ref={dropdownRef}
//           className="lg:hidden absolute top-20 left-0 right-0 bg-[#0b022e] text-[#22e000] text-xl space-y-4 z-50"
//         >
//           <ul className="flex flex-col text-right ml-4">
//             <li className="links1 p-4">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="links1 p-4">
//               <Link to="/phasmo">Phasmophobia</Link>
//             </li>
//             <li className="links1 p-4">
//               <Link to="/valo">Valorant</Link>
//             </li>
//             <li className="links1 p-4">
//               <Link to="/shop">Shop</Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoCartOutline, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // toggle the dropdown menu when clicking on the menu icon
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // close the dropdown menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // close the dropdown menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // check if the click is outside the dropdown or menu icon
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".menu-icon")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-50 flex items-center h-20 px-8 bg-[#0b022e] shadow-md"
      style={{ fontFamily: "silk" }}
    >
      <div className="flex-shrink-0">
        <Link to="/">
          <img className="logo md:w-16 w-12" src={logo} alt="Logo" />
        </Link>
      </div>

      {/* default navbar */}
      <div className="flex-grow hidden lg:flex lg:justify-center lg:items-center">
        <ul className="flex text-[#22e000] text-2xl space-x-4">
          <li className="links p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="links p-4">
            <Link to="/phasmo">Phasmophobia</Link>
          </li>
          <li className="links p-4">
            <Link to="/valo">Valorant</Link>
          </li>
          <li className="links p-4">
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center ml-auto gap-8 text-white">
        {/* login button */}
        <Link to="/login">
          <button className="login-button bg-[#22e000] text-black rounded-lg md:text-xl text-md px-4 py-2">
            Login
          </button>
        </Link>

        {/* item count on cart button */}
        <Link to="/cart" className="relative">
          <IoCartOutline size={50} className="cursor-pointer" />
          <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            0
          </div>
        </Link>

        {/* mobile menu dropdown button */}
        <button onClick={toggleMenu} className="lg:hidden text-white menu-icon">
          <IoMenu size={40} />
        </button>
      </div>

      {/* dropdown menu for mobile */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="lg:hidden absolute top-20 left-0 right-0 bg-[#0b022e] text-[#22e000] text-xl space-y-4 z-50"
        >
          <ul className="flex flex-col text-right ml-4">
            <li className="links1 p-4">
              <Link to="/">Home</Link>
            </li>
            <li className="links1 p-4">
              <Link to="/phasmo">Phasmophobia</Link>
            </li>
            <li className="links1 p-4">
              <Link to="/valo">Valorant</Link>
            </li>
            <li className="links1 p-4">
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
