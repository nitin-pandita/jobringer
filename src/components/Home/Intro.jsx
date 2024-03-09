import React from "react";

const Intro = () => {
  return (
    <div className="flex justify-center items-center text-center w-full border h-[100vh] relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img
        className="absolute w-full h-full object-cover hidden md:block opacity-30"
        src="/public/img/women.png"
        alt="women images"
      />
      <div className="absolute w-full flex gap-4 justify-center items-center flex-col top-40">
        <h1 className="text-white text-4xl md:text-5xl uppercase font-bold">
          Award Winning Agency
        </h1>
        <p className="md:text-sm w-1/2 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a nemo,
          eius, asperiores, fugiat nisi laborum alias placeat quia tempora iusto
          impedit porro.
        </p>
        <button className="px-2 py-2 border-2 border-white w-30 md:w-36 rounded-full hover:bg-white hover:text-yellow-500">
          Get Yours
        </button>
      </div>
    </div>
  );
};

export default Intro;
