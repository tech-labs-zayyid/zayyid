import React from 'react';

export const FloatingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute animate-float-${i % 3} opacity-10 ${
            i % 2 === 0 ? 'bg-indigo-500' : 'bg-purple-500'
          }`}
          style={{
            width: `${Math.random() * 40 + 10}px`,
            height: `${Math.random() * 40 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '30%' : '0',
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};