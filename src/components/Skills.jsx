import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="absolute top-[49rem] md:left-[0rem] left-[-0rem] text-white grid justify-items-center w-full h-auto     space-y-14">
        <h1
          id="skills"
          className="ms:text-4xl text-lg shadow-lg nm:shadow-slate-500/90 p-5 w-auto grid justify-items-center"
        >
          My Skills
        </h1>
        <div className=" grid grid-cols-3 md:gap-8 gap-2 place-items-stretch h-auto  mx-6 md:mx-14  ">
          <div className="shadow-lg nm:shadow-slate-500/90 p-5  grid justify-items-center space-y-4 ">
            <i className="fa-brands fa-html5 md:text-6xl text-4xl"></i>
            <h2 className=" text-white ">HTML5</h2>
            <span className=" hidden ms:block ms:text-sm tracking-tight">
              A language which helped me in starting my web development journey
            </span>
          </div>
          <div className="shadow-lg nm:shadow-slate-500/90 p-5 grid justify-items-center space-y-4 ">
            <i className="fa-brands fa-css3-alt md:text-6xl text-4xl"></i>
            <h2 className="text-white">CSS3</h2>
            <span className=" hidden ms:block ms:text-sm ">
              Good enough to design a good website
            </span>
          </div>
          <div className="shadow-lg nm:shadow-slate-500/90 py-5 grid justify-items-center space-y-4">
            <i className="fa-brands fa-js-square md:text-6xl text-4xl"></i>
            <h2 className="text-white">JavaScript</h2>
            <span className=" hidden ms:block ms:text-sm tracking-tight">
              No I'm not perfect , but Yes i do enjoy working with javaScript
            </span>
          </div>
          <div className="shadow-lg nm:shadow-slate-500/90 md:p-5 p-5 grid justify-items-center space-y-4">
            <i className="fa-brands fa-react md:text-6xl text-4xl"></i>
            <h2 className="text-white">ReactJs</h2>
            <span className=" hidden ms:block ms:text-sm ">
              I chose it and loved it because of its reusable UI components
            </span>
          </div>
          <div className="shadow-lg nm:shadow-slate-500/90 p-5 grid justify-items-center space-y-4 ">
            <i className="fa-brands fa-node md:text-6xl text-4xl"></i>
            <h2 className="text-white">NodeJs</h2>
            <span className=" hidden ms:block ms:text-sm ">
              It lets me make entire full stack apps in javascript so im good
              with NodeJs
            </span>
          </div>
          <div className="shadow-lg nm:shadow-slate-500/90 p-5 grid justify-items-center space-y-4">
            <i className="devicon-express-original md:text-6xl text-4xl "></i>
            <h2 className="text-white tracking-tight">ExpressJs</h2>
            <span className=" hidden ms:block ms:text-sm ">
              A framework of NodeJs, I learnt it because it is easy to configure
              and customise.
            </span>
          </div>
          <div className="shadow-lg nm:shadow-slate-500/90 p-5 grid justify-items-center    space-y-4 ">
            <i className="devicon-bootstrap-plain md:text-6xl text-4xl"></i>
            <h2 className="text-white text-center">Bootstrap</h2>
            <span className=" hidden ms:block ms:text-sm ">
              It makes UI part really really easy to use and apply which saves a
              lot of time.
            </span>
          </div>
          <div className="shadow-lg nm:shadow-slate-500/90 p-5 grid justify-items-center space-y-4">
            <i className="devicon-tailwindcss-plain md:text-6xl text-4xl"></i>
            <h2 className="text-white">Tailwind CSS</h2>
            <span className=" hidden ms:block ms:text-sm ">
              My favourite CSS framework, which enables building complex
              responsive layouts freely.
            </span>
          </div>
          <div className="shadow-lg nm:shadow-slate-500/90 p-2 md:p-5 grid justify-items-center space-y-4">
            <i className="devicon-mongodb-plain  md:text-6xl text-4xl"></i>
            <h2 className="text-white ">MongoDB</h2>
            <span className=" hidden ms:block ms:text-sm ">
              I love working with MongoDB because of its flexibility , its
              performance and quick environment setup
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
