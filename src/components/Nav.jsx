import React, { useState } from "react";

import logo from "./logo.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Nav = () => {
  const [open, SetOpen] = useState(false);
  return (
    <div
      className="w-full fixed   z-50 top-0 left-0 shadow-2xl  shadow-gray-700/60  bg-opacity-90 bg-gray-700 
     items-center  border-y-cyan-100"
    >
      <div className=" p-3 font-normal text-2xl  sm:flex md:flex justify-between  md:px-10 items-center    ">
        <img src={logo} width="60px" height="60px" alt="logo" />

        <div
          className="text-3xl absolute right-4 top-4 cursor-pointer md:hidden transition-all
           ease-in duration-350 text-white "
          onClick={() => SetOpen(!open)}
        >
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </div>
        <div>
          <ul
            className={` cursor-pointer  mt-1 absolute  md:static  flex-col  md:flex md:flex-row   bg-opacity-90 bg-gray-700 md:bg-transparent 
             text-white p-6  left-0  duration-500 sm:absolute  space-y-4 
             sm:p-6 sm:mx-auto md:p-2   sm:mt-10 md:mt-0  md:space-x-8  pb-12 md:pb-0
              w-full pl-8 items-center  sm:shadow-none md:mr-12 grid justify-items-center md:items-baseline shadow-2xl  shadow-gray-700/90
              
             ${
               open
                 ? "top-20px opacity-100 sm:opacity-100"
                 : "top-[-500px] opacity-0 sm:opacity-100"
             }`}
          >
            <Link to="home" spy={true} smooth={true}>
              <RouterLink
                className="my-2 md:my-0  hover:underline underline-offset-4
               transition-all opacity-100  hover:opacity-70  duration-500    "
                to="/"
              >
                Home
              </RouterLink>
            </Link>

            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-200}
                activeClass="active"
                className="mb-3 md:my-0 hover:underline underline-offset-4 transition-all
             opacity-100 hover:opacity-70  duration-500  "
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-200}
                activeClass="active"
                className="my-2 md:my-0 hover:underline underline-offset-4 transition-all
               opacity-100 hover:opacity-70  duration-500  md:ml-0"
                duration={500}
              >
                Contact
              </Link>
            </li>
            <Link to="about" spy={true} smooth={true} offset={-200}>
              <RouterLink
                to="/about"
                className="my-2 md:my-0 hover:underline underline-offset-4 transition-all
             opacity-100 hover:opacity-70  duration-500  "
              >
                About
              </RouterLink>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
