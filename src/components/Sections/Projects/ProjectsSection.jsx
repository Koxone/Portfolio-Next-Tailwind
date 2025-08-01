import React from 'react';
import ProjectCard from '../../Cards/ProjectCard';
import Logo from './Components/Logo';

function ProjectsSection() {
  return (
    <div className="flex w-full flex-col gap-4">
      <ProjectCard
        title="FitWorld Shop"
        text="Modern, responsive e-commerce storefront built with Next.js, Tailwind CSS, and Shopify Storefront API. Features clean UI, advanced product browsing, customer reviews with images, wishlist via Firebase, and scalable PWA support with offline use and iOS 'Add to Home Screen' install."
        url="https://ecommerce.koxland.dev/"
        development={true}
      >
        <Logo src="fws.png" font="Space_Grotesk" />
      </ProjectCard>

      <ProjectCard
        title="Sacbe Tours"
        text="A modern, responsive web application built with React and Tailwind CSS for booking tours in Mexico and around the world. It features real-time tour availability, dynamic pricing, and a seamless booking flow powered by a custom API, providing users with a clean, intuitive experience across all devices."
        url="https://tours.koxland.dev/"
        development={true}
      >
        <Logo src="sacbe.svg" font="Space_Grotesk" size="500" />
      </ProjectCard>

      <ProjectCard
        title="Sacbe Coupon Generator"
        text="A responsive React and Tailwind-based web app that displays promotional coupons from an external API. Users can view offers by region, access detailed coupon information, and generate passes compatible with Apple Wallet and Google Wallet through dynamic endpoint integration."
        url="https://coupons.koxland.dev/"
      >
        <Logo src="sacbe.svg" font="Space_Grotesk" />
      </ProjectCard>

      <ProjectCard
        title="TicTacToe Game"
        text="A classic turn-based game built with React, Tailwind CSS, and Framer Motion, featuring smooth animations, user turn tracking, and a clean responsive UI. Designed for fun and fast matches with modern frontend technologies. Fully PWA-ready, including offline support and iOS 'Add to Home Screen' installation for an app-like experience."
        url="https://tictactoe.koxland.dev/"
      >
        <Logo src="tictactoe" />
      </ProjectCard>

      <ProjectCard
        title="Component Library"
        text="A React and Tailwind component library featuring live previews, ready-to-use code snippets, and a growing collection of animated UI elements. Browse, preview, and copy components easily to accelerate building beautiful, responsive interfaces for your projects."
        url="https://components.koxland.dev/"
        development={true}
      >
        <Logo src="library" font="Space_Grotesk" />
      </ProjectCard>

      <ProjectCard
        title="Tetris Game"
        text="A Tetris game built with Vanilla JavaScript and Tailwind CSS, featuring real-time keyboard controls, smooth piece movement, line-clearing mechanics, score and timer tracking, sound effects, and a retro-inspired UI designed for fluid gameplay across desktop and mobile devices."
        url="https://tetris.koxland.dev/"
      >
        <Logo src="tetris" />
      </ProjectCard>
    </div>
  );
}

export default ProjectsSection;
