import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-[#FFC930] flex h-[10vh] justify-between items-center text-center p-6 w-full  text-sm  fixed z-10">
      <div>
        <h1 className="text-2xl">JOBRINDER</h1>
      </div>
      <div>
        <ul className="flex gap-8">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/news">News</Link>
          <Link to="/career">Career</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
