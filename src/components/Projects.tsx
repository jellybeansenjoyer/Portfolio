"use client";

import { faFolder } from "@fortawesome/free-solid-svg-icons";
import {  faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projects from "@/constants/projects";
import { useRouter } from "next/navigation";
const Projects = () => {
  const router = useRouter();
  const routeToProject = (id:string) => {
    router.push(`/proj/${id}`)
  }
 
  return (
    <div className="bg-navy relative w-full h-auto flex justify-center items-center px-20 py-20 md:px-40 ">
      <div className="w-full">
        {/* Header Section */}
        <div className="flex gap-5 items-center mb-8">
          <h1 className="text-aquamarine text-xl md:text-2xl font-sans">
            {`04. `}
            <span className="font-bold text-lavendar text-2xl md:text-3xl">
              Cool Things I have Made
            </span>
          </h1>
          <div className="bg-gray-700 h-0.5 flex-1" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={()=>{
                routeToProject(project.id.toString())
              }}
              className="group flex flex-col bg-lightnavy p-6 rounded-lg h-full   cursor-pointer"
            >
              {/* Header with Icons */}
              <div className="flex justify-between mb-4">
                <FontAwesomeIcon
                  icon={faFolder}
                  className="text-[#5FF5D3]"
                  size="lg"
                />
                <div className="flex gap-2">
               
                  <a href={project.git}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-gray-500 cursor-pointer"
                    size="sm"
                  />
                  </a>
                </div>
              </div>

              {/* Project Title */}
              <h2 className="text-2xl font-sans text-lavendar font-bold mb-2 group-hover:text-aquamarine">
                {project.title}
              </h2>

              {/* Project Description */}
              <p className="text-lg font-sans text-lightslategray flex-grow group-hover:text-aquamarine">
                {project.description}
              </p>

              {/* Skills Section */}
              <div className="mt-4 group-hover:text-aquamarine">
                <h3 className="text-lightslategray text-xl font-sans mb-1">
                  Skills:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-lightslategray text-lg bg-gray-800 px-2 py-1 rounded group-hover:text-aquamarine"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
