import React from 'react';
import MainTitleContainer from './MainTitleContainer';
import Avatar from '../Avatar/Avatar';
import AboutMeSection from '../Sections/AboutMe/AboutMeSection';
import SocialLinks from '../Sections/Social/SocialLinks';

function HomeContainer() {
  return (
    <div id="home" className="grid w-full grid-rows-[auto_auto_1fr] justify-center gap-4">
      <MainTitleContainer />
      <div className="gap- grid grid-cols-1 justify-evenly">
        <SocialLinks />
        <div className="flex w-full max-w-[850px] flex-col items-center justify-center sm:grid md:flex md:flex-row md:gap-10 lg:justify-self-center">
          <Avatar />
          <AboutMeSection />
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
