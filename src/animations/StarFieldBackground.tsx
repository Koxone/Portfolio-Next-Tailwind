'use client';
import { useState, useEffect, useRef } from 'react';

type Star = {
  id: number;
  size: number;
  color: string;
  top: string;
  left: string;
  isFalling: boolean;
  duration: string;
  delay: string;
};

type StarFieldBackgroundProps = {
  count?: number;
  fallPercentage?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
};

function generateStars(
  count: number,
  fallPercentage: number,
  colors: string[],
  minSize: number,
  maxSize: number
): Star[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * (maxSize - minSize) + minSize,
    color: colors[Math.floor(Math.random() * colors.length)],
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
    isFalling: Math.random() < fallPercentage,
    duration: (6 + Math.random() * 10).toFixed(2),
    delay: (Math.random() * 5).toFixed(2),
  }));
}

export default function StarFieldBackground({
  count = 100,
  fallPercentage = 0.3,
  colors = ['#ffffff', '#ffd700', '#87ceeb'],
  minSize = 2,
  maxSize = 4,
}: StarFieldBackgroundProps) {
  const [stars, setStars] = useState<Star[]>([]);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Defer to next tick to avoid synchronous setState warning
    const timeoutId = setTimeout(() => {
      setStars(generateStars(count, fallPercentage, colors, minSize, maxSize));
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [count, fallPercentage, colors, minSize, maxSize]);

  if (stars.length === 0) return null;

  return (
    <>
      <style>{`
        @keyframes star-blink {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.5); }
        }
        @keyframes star-fall {
          0% { transform: translateY(0) translateX(0); opacity: 0.8; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh) translateX(5vw); opacity: 0; }
        }
      `}</style>
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: star.top,
              left: star.left,
              backgroundColor: star.color,
              boxShadow: `0 0 ${star.size * 4}px ${star.color}`,
              opacity: 0.9,
              animation: `${star.isFalling ? 'star-fall' : 'star-blink'} ${star.duration}s ${
                star.isFalling ? 'linear' : 'ease-in-out'
              } infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
