import React from 'react';

function Logo({ title, font, src, size }) {
  return (
    <div className="flex items-center gap-3">
      <img
        className={`w-[${size}px] sm:max-w-auto`}
        src={src}
        alt="blue feather icon"
      />
      <p className={`whitespace-nowrap font-[${font}] text-center text-4xl`}>
        {title}
      </p>
    </div>
  );
}

export default Logo;
