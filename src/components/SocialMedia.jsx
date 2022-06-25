import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

const socialMedia = () => {
  return (
    <div className="absolute sm:top-[160rem] top-[150rem]   text-white w-full ">
      <div className="grid justify-items-center sm:space-y-4 space-y-3">
        <div className="ms:text-4xl text-lg ">Lets connect</div>
        <ul className="flex ms:space-x-8 ms:text-4xl text-xl space-x-4">
          <li>
            <ExternalLink href="https://www.facebook.com/mohammadafzal.khan.5492">
              <i className="fa-brands fa-facebook-f shadow-gray-700  shadow-lg"></i>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.instagram.com/afjal_qureshi7/">
              <i className="fa-brands fa-instagram shadow-gray-700 shadow-lg"></i>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://twitter.com/afjal07071998">
              <i className="fa-brands fa-twitter shadow-gray-700 shadow-lg"></i>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.linkedin.com/in/mohd-afjal-9772941b8/">
              <i className="fa-brands fa-linkedin-in shadow-gray-700 shadow-lg "></i>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://github.com/mohdafjal2004">
              <i className="devicon-github-original shadow-gray-700 shadow-lg rounded-full"></i>
            </ExternalLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default socialMedia;
