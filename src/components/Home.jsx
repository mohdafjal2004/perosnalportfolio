import React from "react";
import logo from "./logo.png";

const Home = (props) => {
  return (
    <div id="home" className="w-auto">
      <div
        className="absolute z-10 top-[10rem]  md:top-[10rem] left-0 
         flex flex-col-reverse md:flex-row   w-full h-auto items-center 
         
        shadow-2xl shadow-slate-500/90 overflow-auto border-x-4 "
      >
        <div className="w-3/4 sm:w-2/3 md:w-[50rem]  p-4  mx-auto md:ml-6 ">
          <h3 className="text-xs xs:text-xl text-white  font-Canada  ">
            Hi I'm <strong>Mohd Afjal</strong> , a
            <strong> web developer</strong> and a student living and studying in
            Bikaner , Rajasthan . I study at Engineering College of Bikaner ,
            focusing mainly on web development , <strong>MERN Stack</strong> to
            be more specific .
          </h3>
        </div>
        <div className="p-4 grid justify-items-center  md:mx-auto ">
          <img
            src={logo}
            alt=""
            className="w-1/3 sm:w-[18rem]  shadow-2xl shadow-gray-400/50 rounded-full border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
