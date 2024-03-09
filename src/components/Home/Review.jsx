import React from "react";

const Review = ({ author, image }) => {
  return (
    <div className="flex flex-wrap gap-4 w-[30%]">
      <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="flex flex-col w-[50%]">
        <p>Good Organization i really loved working in it</p>
        <h3 className="font-bold text-black">{author}</h3>
      </div>
    </div>
  );
};

export default Review;
