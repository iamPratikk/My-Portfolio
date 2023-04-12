import React from "react";
import image from "./Assets/coolImg.webp";
import bulb from './Assets/bulb.svg'

const Body = () => {
  return (
    <div className="flex">
      <div>
        <img className="my-16 ml-32 p-3" src={image} />
      </div>
      <div className="w-2/5">
        <div>
          <h1 className="mt-28 pt-12 pb-6 text-7xl font-montserrat font-bold">
            Turning Vision into Reality with code and design.
          </h1>
        </div>
        <div>
          <h1 className="text-lg font-montserrat font-normal " >
            As a skilled Front-End developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </h1>
        </div>
        <div>
            <button className="my-8 py-2 rounded-lg bg-black text-white text-lg w-32 font-bold" >Resume</button>
            {/* <a>Contact</a> */}
        </div>
      </div>
      <div>
        <img src={bulb} />
      </div>
    </div>
  );
};

export default Body;
