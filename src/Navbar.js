import React from "react";
import facebook from "./Assets/facebook.png";
import insta from "./Assets/instagram.png";
import linkedin from "./Assets/linkedin.png";
import pint from "./Assets/pinterest.png";
import location from "./Assets/location.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-50 items-center flex justify-between  h-24">
      <div className="ml-32">
        <ul className="flex ">
          <Link to="/">
            <li className="mx-5 text-lg font-montserrat font-medium">Home</li>
          </Link>
          <Link to="/about">
            <li className="mx-5 text-lg font-montserrat font-medium ">About</li>
          </Link>
          <Link to="/projects">
            <li className="mx-5 text-lg font-montserrat font-medium ">Projects</li>
          </Link>
          <Link to="/articles">
            <li className="mx-5 text-lg font-montserrat font-medium ">Articles</li>
          </Link>
        </ul>
      </div>
      <div className="mr-28">
        <ul className="flex">
          <img className="w-8 h-8 mx-3" src={pint} />
          <img className="w-8 h-8 mx-3" src={location} />
          <img className="w-8 h-8 mx-3" src={facebook} />
          <img className="w-8 h-8 mx-3" src={insta} />
          <img className="w-8 h-8 mx-3" src={linkedin} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
