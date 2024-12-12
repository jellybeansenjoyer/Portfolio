"use client";

import Image from "next/image";

const About = () => {
    const skills = [
        "Javascript (ES6+)",
        "ReactJs",
        "Next.js",
        "Node.js",
        "Kotlin-Android",
        "React-Native",
    ]
  return (
    <div className="bg-navy relative w-full lg:h-lvh h-auto  justify-center items-center content-center inset-0 md:px-40 p-20">
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
            always keen to work on working on new technologies. I started my
            journey as an Android Developer and gained a lot of experience in
            the domain. I extended my work on Websites as well later and Cross
            platform development.
          </div>
          <div className="text-lightslategray text-xl font-sans text-justify mt-5">
            Fast Forward to today, I've had the privilege of working at an
            esteemed organization, <span className="text-aquamarine">Ellucian</span>{" "}
            which is a top leader in Education. My main focus is to build
            Scalable, Highly Performant Applications.
          </div>
          <div className="text-lightslategray text-xl font-sans text-justify mt-5">
           Here are few technologies I've been working with recently:
          </div>
          <ul className="grid grid-cols-2 list-disc list-inside">
            {skills.map((ele,index)=>(
                <li className="text-lightslategray marker:text-blue-50">{ele}</li>
            ))}
          </ul>
        </div>
        <div className="relative mt-10 lg:mt-0 group w-96 h-96 cursor-pointer">
          <Image
            alt="Raghav Kashyap"
            width={384}
            height={384}
            src="/raghav2.jpg"
            className="rounded-lg object-cover"
          />
          <div className="absolute inset-y-0 inset-x-0 bg-aquamarine opacity-50 group-hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
