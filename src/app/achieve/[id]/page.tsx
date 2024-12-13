'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import achieve from '@/data/achieve';
import Toolbar from '@/components/Toolbar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
interface achievewrap {
  achievement: achieve;
}

export default function AchievementDetails() {
  const { id } = useParams();
  const [achievement, setAchievement] = useState<achieve | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;

    const fetchAchievement = async () => {
      try {
        const response = await fetch(`/api/achieve/${id}`);
        const data = await response.json();

        if (response.ok) {
          setAchievement(data.achievement);
        } else {
          setError(data.error || 'Achievement not found.');
        }
      } catch (err) {
        setError('An unexpected error occurred.');
      }
    };

    fetchAchievement();
  }, [id]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!achievement) {
    return <div>Loading...</div>;
  }

  return (
<div className="flex relative flex-col scrollbar-thin">
  <Toolbar />
  <div className="bg-navy w-full h-auto flex justify-center items-center mt-10 inset-0 md:px-40 p-20">
    <div className="flex lg:flex-row flex-col w-full gap-20">
      {/* Left Section with Text */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <h1 className="text-lavendar font-sans lg:text-6xl text-3xl font-bold">
          {achievement.title}
        </h1>
        <h1 className="text-xl text-lightslategray font-sans font-bold">
          {achievement.date} - {achievement.place}
        </h1>
        <h1 className="text-xl text-lightslategray font-sans text-justify">
          {achievement.description}
        </h1>
      </div>

      {/* Right Section with Image */}
      <div className="flex justify-center items-center w-full lg:w-1/2">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={`../${achievement.pictures[1]}`}
          alt="Achievement Image"
        />
      </div>
    </div>
  </div>

  <div className="bg-navy w-full h-screen flex flex-col md:px-40 p-20">
  <h1 className="text-2xl text-aquamarine font-sans mb-4">Glimpses</h1>
  <Carousel className="relative w-full">
    <CarouselContent className="flex gap-4">
      {achievement.pictures.map((ele, index) => (
        <CarouselItem
          key={index}
          className="flex-shrink-0  md:basis-1/2  lg:w-1/2 flex justify-center items-center"
        >
          <img
            className="object-cover bg-black min-w-[500px]  h-64 lg:h-96 rounded-2xl border-2 border-lavendar hover:border-aquamarine cursor-pointer"
            src={`../${ele}`}
            alt={`Achievement ${index}`}
          />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white" />
    <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white" />
  </Carousel>
</div>

</div>

  );
}
