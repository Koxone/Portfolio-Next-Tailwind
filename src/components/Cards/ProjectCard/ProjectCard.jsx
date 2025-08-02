'use client';

import React from 'react';
import FeatureBadge from './Components/FeatureBadge';
import StateBadge from './Components/StateBadge';
import ProjectImage from './Components/ProjectImage';
import CardHeader from './Components/CardHeader';
import ProjectText from './Components/ProjectText';
import Technologies from './Components/Technologies';
import Activity from './Components/Activity';
import data from './Data/data.json';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ projectKey }) {
  const { t } = useTranslation();
  const project = data.projects[projectKey];

  if (!project) return null;

  return (
    <div className="group relative max-w-[360px]">
      <div className="from-card/80 via-card/60 to-card/40 hover:shadow-primary/10 group-hover:bg-card/90 relative h-full cursor-pointer overflow-hidden rounded-xl border border-orange-400/50 bg-gradient-to-br shadow backdrop-blur-xl transition-all duration-500 ease-in-out hover:scale-[1.02] hover:border-orange-400 hover:shadow-2xl hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]">
        <span className="animate-spark absolute z-20 hidden h-2 w-2 rounded-full opacity-100 group-hover:block hover:bg-orange-400"></span>

        <div className="from-primary/5 to-accent/5 absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {/* Featured Badge */}
        <FeatureBadge featured={project.featured} />

        {/* Completed Badge */}
        <StateBadge completed={project.completed} />

        {/* Image Section */}
        <ProjectImage
          src={project.image}
          url={project.url}
          urlGit={project.urlGit}
        />

        {/* Card Content */}
        <div className="space-y-6 p-6 text-white">
          {/* Header */}
          <CardHeader date={t(project.date)} tags={project.tags} />

          {/* Project Text */}
          <ProjectText
            title={t(project.titleKey)}
            description={t(project.descriptionKey)}
          />

          {/* Technologies */}
          <Technologies technologies={project.technologies} />

          {/* Activity */}
          <Activity active={project.active} updated={t(project.updated)} />
        </div>
      </div>
    </div>
  );
}
