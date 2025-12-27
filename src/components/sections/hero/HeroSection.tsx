import AboutMe from './components/about/AboutMe';
import Avatar from './components/avatar/Avatar';
import MainTitleContainer from './components/main-title/MainTitleContainer';
import SocialLinks from './components/social-links/SocialLinks';

export default function HeroSection() {
  return (
    <div>
      <MainTitleContainer />
      <SocialLinks />
      <div className="flex w-full max-w-4xl flex-col items-center justify-center sm:grid md:flex md:flex-row md:gap-10 lg:justify-self-center">
        <Avatar />
        <AboutMe />
      </div>
    </div>
  );
}
