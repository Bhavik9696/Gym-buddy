import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container bg-blue-900 text-white h-11 text-2xl pl-5 min-w-full p-1">
        <Link to="/">Workout Buddy</Link>
      </div>
    </header>
  );
};

export default Navbar;
