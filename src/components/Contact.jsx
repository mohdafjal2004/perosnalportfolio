import React, { useState } from "react";
import SocialMedia from "./SocialMedia";
import axios from "axios";

const Contact = () => {
  const [contact, setContact] = useState({
    firstname: "",
    lastName: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const [result, setResult] = useState();

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post("/send", { ...contact })
      .then((response) => {
        setResult(response.data);
        setContact({ firstname: "", lastName: "", email: "", message: "" });
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Something went wrong. Try again later",
        });
      });
  };

  return (
    <>
      <div>
        <div
          id="contact"
          className="absolute top-[130rem] md:top-[130rem] text-white   
         md:flex-col  w-full  h-auto  grid justify-items-center sm:space-y-4 space-y-2"
        >
          <h1 className="mb-4  sm:text-3xl   ms:text-4xl text-lg">Lets talk</h1>

          <ul className="md:flex-col space-y-3 mx-auto relative  w-2/3 text-black ">
            <li>
              <input
                type="text"
                placeholder="First Name"
                value={contact.firstname}
                name="firstname"
                className="w-full  rounded-md sm:py-3 sm:px-6 px-3 py-1 text-sm sm:text-base "
                onChange={onChange}
              />
            </li>
            
            <li>
              <input
                type="text"
                placeholder="Last Name"
                value={contact.lastName}
                name="lastName"
                className="w-full rounded-md sm:py-3 sm:px-6 px-3 py-1 text-sm sm:text-base "
                onChange={onChange}
              />
            </li>
            <li>
              <input
                type="email"
                placeholder="Email Address"
                value={contact.email}
                name="email"
                className="w-full rounded-md sm:py-3 sm:px-6 px-3 py-1 text-sm sm:text-base"
                onChange={onChange}
              />
            </li>
            <li>
              <textarea
                type="text"
                placeholder="Message..."
                value={contact.message}
                name="message"
                className="w-full rounded-md  sm:px-6 sm:py-3 px-3 py-1 text-sm sm:text-base"
                onChange={onChange}
              />
            </li>
            <li>
              <button
                onClick={sendEmail}
                className="bg-white text-black  grid justify-items-center  
            relative  md:ml-0   w-full rounded-md sm:py-3 sm:px-6   py-1 text-sm sm:text-base"
              >
                Send
              </button>
            </li>
          </ul>
        </div>
        <SocialMedia />
      </div>
    </>
  );
};

export default Contact;
