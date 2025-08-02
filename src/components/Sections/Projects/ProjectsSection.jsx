import React from 'react';
import ProjectCard from '../../Cards/ProjectCard/ProjectCard';

function ProjectsSection() {
  return (
    <div className="flex w-full flex-col gap-10">
      <div>
        <h2 className="mb-2 text-center text-4xl font-bold text-[#c2c6da]">
          Projects
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"></div>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <ProjectCard projectKey="fws" />
        <ProjectCard projectKey="sacbe" />
        <ProjectCard projectKey="couponGenerator" />
      </div>
    </div>
  );
}

export default ProjectsSection;
