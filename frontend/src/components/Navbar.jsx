import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container bg-blue-900 text-purple-500 h-11 text-2xl pl-5 min-w-full">
        <Link to="/">Workout Buddy</Link>
      </div>
    </header>
  );
};

export default Navbar;
