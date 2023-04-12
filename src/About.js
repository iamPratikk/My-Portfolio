import React from "react";
import Frame from "./Frame";


const About = () => {
  return (
    <div>
      <div className="flex justify-center my-24 m-10">
        <h1 className="text-8xl font-montserrat font-bold">
          Passion Fuels Purpose!
        </h1>
      </div>
      <div className="m-10 ml-14 flex">
        <div className="w-[28rem] h-[33rem]  m-5">
          <h1 className=" pt-0 p-3 text-lg font-bold font-mono text-gray-500 ">
            BIOGRAPHY
          </h1>
          <div className="p-3">
            <p className=" font-montserrat font-medium">
              Hi, I'm <span className="font-bold">Pratik</span> ,a web developer
              and UI/UX designer with a passion for creating beautiful,
              functional, and user-centered digital experiences. With 1.5 years of
              experience in the field. I am always looking for new and
              innovative ways to bring my clients' visions to life.
            </p>
          </div>
          <div className="p-3">
            <p className=" font-montserrat font-medium">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
          </div>
          <div className="p-3">
            <p className="font-medium font-montserrat">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
        </div>
        <div className="flex relative justify-center w-96 m-5 ">
          <div className="absolute top-2 left-[8px] rounded-3xl w-96 h-[450px] bg-black z-5 border-2 border-black"></div>
          <div className="flex bg-white justify-center relative  items-center rounded-xl z-2 w-96 h-[28rem]  border-2 border-black">
            <div className="w-80 bg-black h-[24rem] rounded-xl border-2 border-black"></div>
          </div>
        </div>
        <div className="flex flex-col items-end w-80 h-[33rem]m-5">
          <div className=" mt-5 mx-9">
            <h1 className="text-7xl font-bold">04+</h1>
            <h1 className="font-montserrat text-xl font-medium text-gray-600">
              Satisfied Clients
            </h1>
          </div>
          <div className="my-14 ">
            <h1 className="text-7xl font-bold">10+</h1>
            <h1 className="font-montserrat text-xl font-medium text-gray-600">
              Projects Completed
            </h1>
          </div>
          <div className="mt-0 my-14">
            <h1 className="text-7xl font-bold">1.5</h1>
            <h1 className="font-montserrat text-xl font-medium text-gray-600">
              Years Of Experience
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
