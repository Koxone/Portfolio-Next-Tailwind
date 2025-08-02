import React from 'react';

function ProjectImage({ src, url }) {
  return (
    <div className="relative h-72 overflow-hidden">
      {/* Imagen */}
      <img
        alt="Project Image"
        src={src}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-110"
      />

      {/* Contenedor del botón */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <a
          href={url}
          className="flex items-center gap-3 rounded-2xl border border-orange-400 bg-purple-900/90 px-8 py-4 shadow-lg transition-colors duration-200 group-hover:border-orange-300 hover:bg-purple-950/90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="orange"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
          >
            <polygon points="6 3 20 12 6 21 6 3" />
          </svg>

          <span className="font-semibold text-gray-200">View Project</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="orange"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ProjectImage;
