import React from "react";
import { FaFacebook, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="text-white bg-[#F4BD00] h-auto w-full flex  gap-5 justify-between p-5">
      <div className="w-[30%]">
        <h1 className="text-black">About Us</h1>
        <p className="py-4 ">
          The company is well suited with new technology and i able to deliver
          notable results
        </p>
      </div>
      <div>
        <h1 className="text-black">Email Us</h1>
        <p className="py-4">mr.nitinpandita@gmail.com</p>
        <p>+91 9149593035</p>
      </div>
      <div>
        <h1 className="text-black">Location</h1>
        <p>Mumbai</p>
      </div>
      <div>
        <h1 className="text-black">Socials</h1>
        <div className="flex gap-4">
          <FaXTwitter color="black" />
          <FaFacebook color="black" />
          <FaLinkedinIn color="black" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
