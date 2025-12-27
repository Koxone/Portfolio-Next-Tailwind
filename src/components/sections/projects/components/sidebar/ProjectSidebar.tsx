import ProjectLinksCard from './components/ProjectLinksCard';
import TechStackCard from './components/TechStackCard';

export default function ProjectSidebar({ technologies, url, urlGit }) {
  return (
    <div className="space-y-8">
      <TechStackCard technologies={technologies} />
      <ProjectLinksCard url={url} urlGit={urlGit} />
    </div>
  );
}
