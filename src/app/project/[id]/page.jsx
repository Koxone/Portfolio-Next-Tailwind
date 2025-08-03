'use client';

import React from 'react';
import ProjectHeader from '../../../components/Headers/ProjectHeader';
import HeroSection from '../../../components/Sections/HeroSection/HeroSection';
import OverviewCard from '../../../components/Views/Projects/ProjectOverview/OverviewCard';
import FeaturesGrid from '../../../components/Views/Projects/KeyFeatures/FeaturesGrid';
import ProjectSidebar from '../../../components/Views/Projects/Sidebar/ProjectSidebar';
import data from '../../../components/Cards/ProjectCard/Data/data';
import { useTranslation } from 'react-i18next';

export default function ProjectPage({ params }) {
  const { id } = React.use(params);
  const { t } = useTranslation();

  const project = Object.values(data.projects).find((p) => p.id === id);

  if (!project) {
    return (
      <h1 className="mt-20 text-center text-2xl text-white">
        Proyecto no encontrado
      </h1>
    );
  }

  return (
    <div className="min-h-screen">
      <ProjectHeader />

      <HeroSection
        tags={project.tags}
        date={t(project.date)}
        titleKey={t(project.titleKey)}
        descriptionKey={t(project.descriptionKey)}
        technologies={project.technologies.length}
        status={t(project.status)}
        demo={project.url}
        code={project.urlGit}
        alt={project.titleKey}
        src={project.image}
        gallery={t('gallery')}
        slideshow={t('openGallery')}
        teamSize={project.teamSize}
        srcSlide={project.src}
      />

      <main className="container mx-auto max-w-[1200px] space-y-16 px-6 py-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <OverviewCard
              overview={t(project.overview)}
              tOverview={t('tOverview')}
            />
            <FeaturesGrid
              tFeatures={t(project.features)}
              projectFeatures={t(project.projectFeatures, {
                returnObjects: true,
              })}
            />
          </div>
          <ProjectSidebar
            technologies={project.technologies}
            url={project.url}
            urlGit={project.urlGit}
          />
        </div>
      </main>
    </div>
  );
}
