// components/ParticlesBackground.jsx
'use client';

import { useMemo } from 'react';
import Particles, { ParticlesProvider, useParticlesProvider } from '@tsparticles/react';
import { initEngine } from './particlesEngine';

const sphereImage = (highlight, base, shadow) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><defs><radialGradient id="g" cx="35%" cy="30%" r="65%"><stop offset="0%" stop-color="${highlight}"/><stop offset="55%" stop-color="${base}"/><stop offset="100%" stop-color="${shadow}"/></radialGradient></defs><circle cx="50" cy="50" r="48" fill="url(#g)"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};


function ParticlesLayer({ options }) {
  const { loaded } = useParticlesProvider();

  if (!loaded) return null;

  return <Particles id="tsparticles-stars" options={options} />;
}

export default function BackgroundStars() {
  const options = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      particles: {
        number: { value: 1000 },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: { min: 0.1, max: 0.5 } },
        size: { value: { min: 0.5, max: 1.5 } },
        move: {
          enable: true,
          speed: 0.15,
          direction: 'none',
          outModes: { default: 'out' },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <ParticlesProvider init={initEngine}>
      <ParticlesLayer options={options} />
    </ParticlesProvider>
  );
}