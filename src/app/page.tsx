import ContactSection from '@/components/sections/contact/ContactSection';
import ExperienceSection from '@/components/sections/experience/ExperienceSection';
import ContributionsSection from '@/components/sections/github/GithubContributions';
import HeroSection from '@/components/sections/hero/HeroSection';
import ProjectsSection from '@/components/sections/projects/ProjectsSection';
import StackSection from '@/components/sections/stack/StackSection';

export default function HomePage() {
  return (
    <main className="flex w-full max-w-300 flex-col items-center justify-center gap-14 justify-self-center p-10 pt-5 md:gap-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Stack Section */}
      <StackSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Github Contributions Section */}
      <ContributionsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
