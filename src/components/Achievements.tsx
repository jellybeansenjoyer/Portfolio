"use client";

import achievements from "@/constants/achievements";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const Achievements = () => {
    const router = useRouter();

  const handleNavigation = (id: string) => {
    router.push(`/achieve/${id}`);
  };

  return (
    <div className="bg-navy relative w-full h-auto  justify-center items-center content-center inset-0 md:px-40 p-20">
      <div className="flex gap-5 items-center">
        <h1 className="text-aquamarine text-xl md:text-2xl font-sans">
          {`03.   `}
          <span className="font-bold text-lavendar text-2xl md:text-3xl font-sans">
            Achievements
          </span>
        </h1>
        <div className="bg-gray-700 h-0.5 w-64 md:w-96" />
        
      </div>
      <div className="mt-6 ">
            <h1 className="font-sans text-lavendar">Hackathons, Competitions and Projects that I participated and Won.</h1>
            <h1 className="font-sans  mt-2 text-aquamarine cursor-pointer">View All</h1>
      </div>
      <Carousel
  className=" mt-10 mx-auto lg:flex hidden"
>
  <CarouselContent className="basis-1/2 flex">
    {achievements.map((ele, index) => (
      <CarouselItem onClick={()=>{handleNavigation(ele.id.toString())}}  key={ele.id} className="flex justify-center items-center">
        <div className={`flex justify-between items-center  `}>
          <img
            className="object-cover w-[600px] rounded-2xl border-2 border-lavendar hover:border-aquamarine cursor-pointer " // Ensures full image view
            src={`${ele.pictures[0]}`}
            alt={`Achievement ${index}`}
          />
          <div className="group bg-lightnavy rounded-2xl mt-36 -ml-36 p-10 shadow-2xl max-w-96">
          <h1 className="group-hover:text-aquamarine cursor-pointer text-lavendar font-sans text-2xl font-bold mb-2 ">{ele.title}</h1>
          <h1 className="group-hover:text-aquamarine cursor-pointer text-lightslategray mt-2 mb-2 font-sans text-justify text-xl">{ele.date+" - "+ele.place}</h1>
            <h1 className="group-hover:text-aquamarine cursor-pointer text-lightslategray font-sans text-justify">{ele.description}</h1>
          </div>
        </div>
      </CarouselItem>
      
    ))}
  </CarouselContent>
  <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
  <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
</Carousel>
<div className="mt-6 gap-4 flex flex-col h-auto">
{achievements.map((ele, index) => (
    <div key={ele.id} className="flex flex-col gap-4  items-center" onClick={()=>{handleNavigation(ele.id.toString())}}>
    <div className="flex-col items-center p-4 rounded-xl lg:hidden bg-lightnavy border-2 border-lavendar hover:border-aquamarine gap-5">
        <img
            className="object-contain rounded-2xl  cursor-pointer " // Ensures full image view
            src={`${ele.pictures[0]}`}
            alt={`Achievement ${index}`}
          />
    <div className="group bg-lightnavy rounded-2xl mt-2">
          <h1 className="group-hover:text-aquamarine cursor-pointer text-lavendar font-sans text-2xl font-bold mb-2 ">{ele.title}</h1>
          <h1 className="group-hover:text-aquamarine cursor-pointer text-aquamarine font-sans text-justify text-xl mt-2">{ele.date+" - "+ele.place}</h1>
            <h1 className="group-hover:text-aquamarine cursor-pointer text-lavendar font-sans text-justify">{ele.description}</h1>
          </div>
          </div>
          </div>))}
          </div>
    </div>
  );
};

export default Achievements;
