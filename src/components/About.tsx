"use client";

import Image from "next/image";
import { useState } from "react";

const About = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const skills = [
    "Javascript (ES6+)",
    "ReactJs",
    "Next.js",
    "Node.js",
    "Kotlin-Android",
    "React-Native",
  ];

  return (
    <>
      {/* Main About Section */}
      <div className="bg-navy relative w-full lg:h-lvh h-auto justify-center items-center content-center inset-0 md:px-40 p-20">
        <div className="flex gap-5 items-center">
          <h1 className="text-aquamarine text-xl md:text-2xl font-sans">
            {`01.   `}
            <span className="font-bold text-lavendar text-2xl md:text-3xl font-sans">
              About Me
            </span>
          </h1>
          <div className="bg-gray-700 h-0.5 w-64 md:w-96" />
        </div>
        <div className="gap-36 lg:flex ">
          <div className="gap-2 flex flex-col lg:w-1/2">
            <div className="text-lightslategray text-xl font-sans text-justify mt-5">
              Hi! My name is{" "}
              <span className="text-aquamarine">Raghav Kashyap</span> and I am a
              tech-driven individual. My interests are working on{" "}
              <span className="text-aquamarine">Web</span> and{" "}
              <span className="text-aquamarine">Mobile</span> Projects and I am
              always keen to work on new technologies. I started my journey as
              an Android Developer and gained a lot of experience in the
              domain. I extended my work on Websites as well later and Cross
              platform development.
            </div>
            <div className="text-lightslategray text-xl font-sans text-justify mt-5">
              Fast Forward to today, I havve had the privilege of working at an
              esteemed organization,{" "}
              <span className="text-aquamarine">Ellucian</span> which is a top
              leader in Education. My main focus is to build Scalable, Highly
              Performant Applications.
            </div>
            <div className="text-lightslategray text-xl font-sans text-justify mt-5">
              Here are a few technologies I have been working with recently:
            </div>
            <ul className="grid grid-cols-2 list-disc list-inside">
              {skills.map((ele, index) => (
                <li
                  key={index}
                  className="text-lightslategray marker:text-blue-50"
                >
                  {ele}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="relative mt-10 lg:mt-0 group  cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <Image
              alt="Raghav Kashyap"
              width={384}
              height={384}
              src="/raghav2.jpg"
              className="rounded-lg w-[200px] h-[200px] md:h-[384px] md:w-[384px] object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            {/* <div className="absolute inset-0 bg-aquamarine opacity-50 group-hover:opacity-0 transition-opacity duration-300 rounded-lg"></div> */}
          </div>
        </div>
      </div>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-transparent flex justify-center items-center z-50">
          <div
            className="absolute inset-0 z-40 bg-black/80 cursor-pointer"
            onClick={() => setModalOpen(false)}
          ></div>
          <div className="relative z-50">
            <Image
              alt="Full Image"
              width={800}
              height={800}
              src="/raghav2.jpg"
              className="rounded-lg object-contain max-h-screen max-w-screen"
            />
            <button
              className="absolute top-4 right-4 bg-transparent text-red-600 p-2 rounded-lg"
              onClick={() => setModalOpen(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
