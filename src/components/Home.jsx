import React from "react";
import Intro from "./Home/Intro";
import Slogan from "./Home/Slogan";
import Templates from "./Home/Templates";
import Testimonial from "./Home/Testimonial";
const Home = () => {
  return (
    <div className="w-auto h-auto">
      <Intro />
      <Slogan />
      <Templates />
      <Testimonial />
    </div>
  );
};

export default Home;
