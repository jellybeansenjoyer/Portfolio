"use client";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experience from "@/constants/experience";
import ellucian from './ellucian.jpg'
const Experience = () => {

  return (
    <div className="bg-navy relative w-full  h-auto flex-col justify-center items-center content-center inset-0 md:px-40 p-20">
      <div className="flex gap-5 items-center">
        <h1 className="text-aquamarine text-xl md:text-2xl font-sans">
          {`01.   `}
          <span className="font-bold text-lavendar text-2xl md:text-3xl font-sans">
            Experience
          </span>
        </h1>
        <div className="bg-gray-700 h-0.5 w-64 md:w-96" />
       </div>
       <div className="mt-6 ml-6">
       <h1 className="mb-10 text-lavendar text-lg font-sans">Listed Below are my Professional Experiences that I have gathered over the years.</h1> 
        <VerticalTimeline className="mt-10">
        {experience?.map((ele,index)=>(
            <VerticalTimelineElement key={index}
          className="vertical-timeline-element--work rounded-lg"
          contentStyle={{ background: "#13274F", color: "#CCD6F6" }}
          contentArrowStyle={{ borderRight: "7px solid #CCD6F6" }}
          date={ele.duration}
          icon= {<img className="rounded-full border-2 border-aquamarine bg-white" src={ele.icon}></img>}
        >
          <h3 className="text-2xl font-sans font-bold ">{ele.title}</h3>
          <h3 className="text-lg font-sans  ">{ele.role}</h3>
          <h3 className="text-lg font-sans  ">{ele.based}</h3>
          <div className="gap-1 flex  flex-wrap">
          {ele.skills.map((skill,index2)=>(
            <p key={index2} className="text-xl border rounded-lg border-aquamarine px-3 py-2 bg-transparent item-center text-center">
                {skill}
            </p>
          ))}
          </div>
          
        </VerticalTimelineElement>
        
        ))}
        
      </VerticalTimeline>
      </div>
    
        
    </div>
  );
};

export default Experience;
