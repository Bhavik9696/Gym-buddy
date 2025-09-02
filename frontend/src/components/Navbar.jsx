import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container bg-blue-900 text-white h-11 text-l  min-w-full pt-2 flex gap-10 pl-12">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "text-orange-500" : "text-white";
          }}
        >
          Workout Buddy
        </NavLink>
        <NavLink
          to="/workoutform"
          className={({ isActive }) => {
            return isActive ? "text-orange-500" : "text-white";
            console.log(isActive);
          }}
        >
          Add the Workout
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
