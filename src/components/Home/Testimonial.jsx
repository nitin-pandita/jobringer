import React from "react";
import Review from "./Review";
const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl p-3 mt-3 underline text-black">Testimonial</h1>

      <div className="h-[50vh] flex justify-center items-center p-3">
        <Review author="Riya" image="/img/profile1.png" />
        <Review author="Jyoti" image="/img/image2.png" />
      </div>
    </div>
  );
};

export default Testimonial;
