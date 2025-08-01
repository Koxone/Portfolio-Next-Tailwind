'use client';

import React, { useRef, useState } from 'react';

function ContactSection() {
  const inputRef = useRef(null);
  const [buttonText, setButtonText] = useState('Copy');

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => {
          setButtonText('Copied!');
          setTimeout(() => setButtonText('Copy'), 2000);
        })
        .catch((err) => {
          console.error('Error al copiar: ', err);
          setButtonText('Error');
          setTimeout(() => setButtonText('Copy'), 2000);
        });
    }
  };

  return (
    <form id="footer" className="mx-auto w-full max-w-[300px] sm:max-w-[300px]">
      <div className="mb-8">
        <h2 className="mb-2 text-center text-4xl font-bold text-[#c2c6da]">
          Contact
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"></div>
      </div>
      <label
        htmlFor="clipboard"
        className="sr-only mb-2 text-sm font-medium text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          readOnly
          value="admin@koxland.net"
          type="text"
          id="clipboard"
          className="block w-full rounded-lg border border-orange-400 bg-gray-700 p-4 ps-10 text-sm text-orange-500 placeholder-orange-400 focus:border-orange-400 focus:ring-orange-400"
          placeholder="admin@koxland.net"
          required
        />
        <button
          type="button"
          onClick={handleCopy}
          className="absolute end-2.5 bottom-2.5 cursor-pointer rounded-lg bg-orange-400 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:outline-none"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default ContactSection;
