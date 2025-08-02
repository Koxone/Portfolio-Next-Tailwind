import React from 'react';
import ProjectCard from '../../Cards/ProjectCard/ProjectCard';

function ProjectsSection() {
  return (
    <div id='projects' className="flex w-full flex-col">
      <div>
        <h2 className="mb-2 text-center text-4xl font-bold text-[#c2c6da]">
          Projects
        </h2>
        <div className="mx-auto mb-10 h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"></div>
      </div>
      <div className="mb-6 flex flex-col gap-10 lg:flex-row">
        <ProjectCard projectKey="fws" />
        <ProjectCard projectKey="sacbe" />
        <ProjectCard projectKey="couponGenerator" />
      </div>
      <button className="hover:flash hidden w-fit cursor-pointer self-center rounded-[9999px] bg-white px-2 py-1.5 font-medium text-black transition-all duration-300 ease-in-out hover:bg-orange-400/80 hover:text-white lg:block">
        View More
      </button>
    </div>
  );
}

export default ProjectsSection;
