'use client';
import { useState, useEffect } from 'react';

export default function MatrixText({
  text = 'Frontend Engineer',
  className = '',
  totalDuration = 3000, // total duration in ms
  flickerDuration = 100, // flicker time per letter
}) {
  const [letters, setLetters] = useState(
    text.split('').map((char) => ({
      originalChar: char,
      currentChar: char,
      isAnimating: false,
    }))
  );

  useEffect(() => {
    const nonSpaceIndices = letters
      .map((l, idx) => (l.originalChar !== ' ' ? idx : null))
      .filter((idx) => idx !== null);

    const letterInterval = totalDuration / nonSpaceIndices.length;
    let current = 0;

    const animate = () => {
      if (current >= nonSpaceIndices.length) return;

      const idx = nonSpaceIndices[current];

      // Flicker once
      setLetters((prev) => {
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          currentChar: Math.random() > 0.5 ? '1' : '0',
          isAnimating: true,
        };
        return updated;
      });

      setTimeout(() => {
        setLetters((prev) => {
          const updated = [...prev];
          updated[idx] = {
            ...updated[idx],
            currentChar: updated[idx].originalChar,
            isAnimating: false,
          };
          return updated;
        });

        current++;
        setTimeout(animate, letterInterval - flickerDuration);
      }, flickerDuration);
    };

    const timer = setTimeout(animate, 100);
    return () => clearTimeout(timer);
  }, [letters.length, totalDuration, flickerDuration]);

  return (
    <div
      className={`-mb-2 bg-gradient-to-r from-[#F76927] to-[#Fdfa29] bg-clip-text text-center font-mono text-xl font-semibold whitespace-pre-wrap text-transparent sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl ${className}`}
    >
      {letters.map((letter, idx) => (
        <span
          key={idx}
          style={{
            color: letter.isAnimating ? '#00ff00' : '',
            textShadow: letter.isAnimating ? '0 0 8px #00ff00' : '',
            transition: 'color 0.1s, text-shadow 0.1s',
          }}
        >
          {letter.currentChar}
        </span>
      ))}
    </div>
  );
}
