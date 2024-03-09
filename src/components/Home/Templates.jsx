import React from "react";

const Templates = () => {
  return (
    <div className="bg-[#161C2E]">
      <div className="flex justify-between ">
        <div className="w-[60%]">
          <img
            className="w-full h-full object-cover "
            src="/img/watch.png"
            alt=""
          />
        </div>
        <div className="bg-[#161C2E] w-[60%] flex gap-4 justify-center items-center px-32 ">
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-400">Featured</h4>
            <h1 className="uppercase font-bold text-3xl">Watch Application</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              <br /> <br />
              Dolores Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores atque eos!
            </p>
            <button className="px-4 py-3 border border-white">
              View All Products
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="bg-[#161C2E] w-[60%] flex gap-4 justify-center items-center px-32 ">
          <div className="flex flex-col gap-4 p-4">
            <h4 className="text-gray-400">About</h4>
            <h1 className="uppercase font-bold text-3xl">Meet the Team</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              <br /> <br />
              Dolores Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores atque eos!
            </p>
            <button className="px-4 py-3 border border-white">Members</button>
          </div>
        </div>
        <div className="w-[60%]">
          <img
            className="w-full h-full object-cover "
            src="/img/team.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="w-[60%]">
          <img
            className="w-full h-full object-cover "
            src="/img/design.jpg"
            alt=""
          />
        </div>
        <div className="bg-[#161C2E] w-[60%] flex gap-4 justify-center items-center px-32">
          <div className="flex flex-col gap-4 p-4">
            <h4 className="text-gray-400">Our Vision</h4>
            <h1 className="uppercase font-bold text-3xl">What we Do</h1>
            <ul className="flex flex-wrap w-[8  0%] gap-10 ml-5">
              <li className="text-lg">Designing</li>
              <li className="text-lg">Collaboration</li>
              <li className="text-lg">Meetings</li>
              <li className="text-lg">Future Planning</li>
            </ul>
            <button className="px-4 py-3 border border-white">Members</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
