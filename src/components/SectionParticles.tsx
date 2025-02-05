import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

interface SectionParticlesProps {
  variant?: 'light' | 'dark';
  type?: 'default' | 'connect' | 'bubbles';
}

export const SectionParticles: React.FC<SectionParticlesProps> = ({ 
  variant = 'light',
  type = 'default'
}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const getParticlesConfig = () => {
    const baseConfig = {
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      detectRetina: true,
    };

    const configs = {
      default: {
        ...baseConfig,
        particles: {
          color: {
            value: variant === 'light' ? '#6366f1' : '#ffffff',
          },
          links: {
            color: variant === 'light' ? '#6366f1' : '#ffffff',
            distance: 150,
            enable: true,
            opacity: variant === 'light' ? 0.2 : 0.4,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: variant === 'light' ? 0.2 : 0.4,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
      },
      connect: {
        ...baseConfig,
        particles: {
          color: {
            value: variant === 'light' ? '#6366f1' : '#ffffff',
          },
          links: {
            color: variant === 'light' ? '#6366f1' : '#ffffff',
            distance: 200,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'out',
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: ['circle', 'triangle', 'square'],
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      },
      bubbles: {
        ...baseConfig,
        particles: {
          color: {
            value: variant === 'light' ? '#6366f1' : '#ffffff',
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 0.3,
              sync: false,
            },
            value: { min: 0.1, max: 0.5 },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
        },
      },
    };

    return configs[type];
  };

  return (
    <Particles
      id={`particles-${Math.random()}`}
      init={particlesInit}
      options={getParticlesConfig()}
      className="absolute inset-0 -z-10"
    />
  );
};