import React from "react";
import bg3 from "./bg3.jpg";
import logo2 from "./logo2.png";

const About = () => {
  return (
    <div
      id="about"
      className="absolute  top-[6rem]  md:top-[10rem] left-0 text-white bg- w-full h-[180rem] bg-fixed mb-60 "
      style={{ backgroundImage: `url(${bg3})` }}
    >
      <div
        className="  h-auto overflow-auto md:mb-[6rem] md:top-2   
         shadow-2xl shadow-gray-700/80 flex flex-col-reverse md:flex-row  items-center"
      >
        <div className="md:w-1/2 w-auto p-4  mx-auto md:ml-6 text-sm md:text-base ">
          <h1 className="ms:text-3xl text-lg grid justify-items-center md:mb-6 mb-2 ">
            About Me
          </h1>
          <h2 className="lg:mb-4 mb-2 lg:tracking-wide">
            Hello World! I'm <strong>Mohd Afjal </strong>, a Front End + Back
            End = <strong>Full Stack Developer </strong>
            from Rajasthan , India.
          </h2>
          <p className="lg:mb-4 mb-2 lg:tracking-wide lg:leading-relaxed">
            I enjoy solving complex problems and turning them into simple and
            beautiful websites. I also love the logic and structure part of
            coding and always strive to write elegant and efficient code.I'm a
            student at Engineering College Of Bikaner, Rajasthan. Youtube and
            Google taught me how to write code from scratch starting from HTML
            which made be enter into web developer field , then i learnt CSS
            enough to design the websites i want ( but now for designing part i
            prefer <strong>TailwindCSS</strong> )and then completed the frontend
            part with JavaScript. I excel in <strong>ReactJs</strong> which is a
            library of Javascript. I'm pretty good at making REST APIs using
            <strong> MERN Stack </strong>.
          </p>
          <p className="lg:tracking-wide">
            I'm excited to make the leap and continue refining my skills with
            the <strong>right company</strong>. Drop me a message in Contact
            section or you can contact me on any online Social platform.
          </p>
        </div>
        <div className="p-2 md:py-6 grid justify-items-center  md:mx-auto">
          <img src={logo2} alt="" className="w-1/3 sm:w-[18rem]  " />
        </div>
      </div>
    </div>
  );
};

export default About;
