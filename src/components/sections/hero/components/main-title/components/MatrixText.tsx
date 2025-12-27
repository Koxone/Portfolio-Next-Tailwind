'use client';

import { useEffect, useState } from 'react';

// Props
type MatrixTextProps = {
  text?: string;
  className?: string;
  totalDuration?: number;
  flickerDuration?: number;
};

// Component
export default function MatrixText({
  text = ' Full-Stack Product Engineer',
  className = '',
  totalDuration = 3000,
  flickerDuration = 100,
}: MatrixTextProps) {
  // State
  const [letters, setLetters] = useState(() =>
    text.split('').map((char) => ({
      originalChar: char,
      currentChar: char,
      isAnimating: false,
    }))
  );

  // Reset letters when text changes
  useEffect(() => {
    setLetters(
      text.split('').map((char) => ({
        originalChar: char,
        currentChar: char,
        isAnimating: false,
      }))
    );
  }, [text]);

  // Animation
  useEffect(() => {
    const nonSpaceIndices = text
      .split('')
      .map((char, idx) => (char !== ' ' ? idx : null))
      .filter((idx): idx is number => idx !== null);

    if (!nonSpaceIndices.length) return;

    const letterInterval = totalDuration / nonSpaceIndices.length;
    let current = 0;

    const animate = () => {
      if (current >= nonSpaceIndices.length) return;

      const idx = nonSpaceIndices[current];

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
  }, [text, totalDuration, flickerDuration]);

  return (
    <div
      className={`-mb-2 bg-linear-to-r from-[#F76927] to-[#Fdfa29] bg-clip-text text-center font-mono text-xl font-semibold whitespace-pre-wrap text-transparent sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl ${className}`}
    >
      {letters.map((letter, idx) => (
        <span
          key={idx}
          style={{
            color: letter.isAnimating ? '#00ff00' : undefined,
            textShadow: letter.isAnimating ? '0 0 8px #00ff00' : undefined,
            transition: 'color 0.1s, text-shadow 0.1s',
          }}
        >
          {letter.currentChar}
        </span>
      ))}
    </div>
  );
}
