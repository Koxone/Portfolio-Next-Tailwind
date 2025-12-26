import ExperienceContainer from '@/components/Containers/ExperienceContainer';
import HomeContainer from '@/components/Containers/HomeContainer';
import Contributions from '@/components/Github/Calendar';
import GitHubCalendar from '@/components/Github/GitHubCalendar';
import ContactSection from '@/components/Sections/Contact/ContactSection';
import ProjectsSection from '@/components/Sections/Projects/ProjectsSection';
import StackSection from '@/components/Sections/StackSection';

export default function Home() {
  return (
    <main className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-14 justify-self-center p-10 pt-5 md:gap-16">
      <HomeContainer />
      <ExperienceContainer />
      <StackSection />
      <ProjectsSection />
      {/* <GitHubCalendar /> */}
      <Contributions />
      <ContactSection />
    </main>
  );
}
