'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import proj from '@/data/proj';
import Toolbar from '@/components/Toolbar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AchievementDetails() {
  const { id } = useParams();
  const [project, setProject] = useState<proj | null>(null);
  const [error, setError] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/proj/${id}`);
        const data = await response.json();

        if (response.ok) {
          setProject(data.project);
        } else {
          setError(data.error || 'Project not found.');
        }
      } catch (err) {
        setError('An unexpected error occurred.'+err);
      }
    };

    fetchProject();
  }, [id]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!project) {
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
              {project.title}
            </h1>
            <h1 className="text-xl text-lightslategray font-sans font-bold">
              {project.date}
            </h1>
            <h1 className="text-xl text-lightslategray font-sans text-justify">
              {project.description}
            </h1>
            <a href={project.git}>
            <h1 className='text-xl text-aquamarine font-sans hover:underline text-justify'>Check Repository</h1>
            </a>
          </div>
        </div>
      </div>

      {project.photo.length > 0 && (
       <div className="bg-navy w-full h-auto flex flex-col md:px-40 p-20">
       <h1 className="text-2xl text-aquamarine font-sans mb-4 font-bold">Glimpses</h1>
       <div className="md:grid flex flex-col lg:grid-cols-3 grid-cols-2 gap-4">
         {project.photo.map((item, index) => (
           <img
             key={index}
             className="object-cover w-full h-[300px] max-w-[500px] rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out hover:z-10"
             src={`../${item}`}
             alt="Project Image"
             onClick={() => setSelectedPhoto(`../${item}`)}
           />
         ))}
       </div>
     </div>
     
      )}

      {selectedPhoto && (
        <div className="fixed inset-0 bg-transparent/80 flex justify-center items-center z-50">
          <img
            className="max-w-[90%] max-h-[90%] rounded-lg"
            src={selectedPhoto}
            alt="Full Screen View"
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl font-bold p-2 rounded-full bg-gray-800 hover:bg-gray-700"
            onClick={() => setSelectedPhoto(null)}
          >
            ✕
          </button>
        </div>
      )}

      {project.video.length > 0 && (
        <div className="bg-navy w-full h-auto flex flex-col md:px-40 p-20">
          <h1 className="text-2xl text-aquamarine font-sans mt-8">Videos</h1>
          <Carousel className="relative w-full">
            <CarouselContent className="flex gap-4">
              {project.video.map((video, index) => (
                <CarouselItem
                  key={index}
                  className="flex-shrink-0 w-full sm:w-full lg:w-1/2 flex justify-center items-center"
                >
                  <video
                    controls
                    className="object-fill rounded-2xl border-2 border-lavendar hover:border-aquamarine cursor-pointer"
                    src={`/${video}`}
                  >
                    Your browser does not support the video tag.
                  </video>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white" />
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white" />
          </Carousel>
        </div>
      )}
    </div>
  );
}
