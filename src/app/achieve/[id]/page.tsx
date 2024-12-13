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
} from "@/components/ui/carousel";

interface achievewrap {
  achievement: achieve;
}

export default function AchievementDetails() {
  const { id } = useParams();
  const [achievement, setAchievement] = useState<achieve | null>(null);
  const [error, setError] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

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

  const openModal = (image: string) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!achievement) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
            <div
              className="flex justify-center items-center w-full lg:w-1/2 cursor-pointer group"
              onClick={() => openModal(`../${achievement.pictures[1]}`)}
            >
              <img
                className="object-cover w-full h-full rounded-lg group-hover:scale-110 transition-transform duration-300"
                src={`../${achievement.pictures[1]}`}
                alt="Achievement Image"
              />
            </div>
          </div>
        </div>

        <div className="bg-navy w-full h-auto flex flex-col md:px-40 p-20">
          <h1 className="text-2xl text-aquamarine font-sans mb-4 font-bold">
            Glimpses
          </h1>
          <div className="md:grid flex flex-col lg:grid-cols-3 grid-cols-2 gap-2">
            {achievement.pictures.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer group"
                onClick={() => openModal(`../${item}`)}
              >
                <img
                  className="object-cover w-[600px] h-80 rounded-lg group-hover:scale-110 transition-transform duration-300"
                  src={`../${item}`}
                  alt={`Achievement Glimpse ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Full-Screen Image */}
      {isModalOpen && modalImage && (
        <div className="fixed inset-0 bg-transparent flex justify-center items-center z-50">
          <div
            className="absolute inset-0 z-40 bg-black/80 cursor-pointer"
            onClick={closeModal}
          ></div>
          <div className="relative z-50">
            <img
              className="rounded-lg object-contain max-h-screen max-w-screen"
              src={modalImage}
              alt="Full Image"
            />
            <button
              className="absolute top-4 right-4 bg-transparent text-red-500 p-2 rounded-lg"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
