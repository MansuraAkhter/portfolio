// components/ParticlesBackground.jsx
'use client';

import { useMemo } from 'react';
import Particles, { ParticlesProvider, useParticlesProvider } from '@tsparticles/react';
import { initEngine } from './particlesEngine';

const sphereImage = (highlight, base, shadow) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><defs><radialGradient id="g" cx="35%" cy="30%" r="65%"><stop offset="0%" stop-color="${highlight}"/><stop offset="55%" stop-color="${base}"/><stop offset="100%" stop-color="${shadow}"/></radialGradient></defs><circle cx="50" cy="50" r="48" fill="url(#g)"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const SPHERE_IMAGES = [
  { src: sphereImage('#8de8b8', '#1a7a4f', '#04140d'), width: 100, height: 100 },
  { src: sphereImage('#7be0ab', '#10633f', '#03110b'), width: 100, height: 100 },
  { src: sphereImage('#63d59a', '#0b3d2e', '#020c08'), width: 100, height: 100 },
];

function ParticlesLayer({ options }) {
  const { loaded } = useParticlesProvider();

  if (!loaded) return null;

  return <Particles id="tsparticles-particles" options={options} />;
}

export default function BackgroundParticles() {
  const options = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: { value: '#050d0a' } },
      fpsLimit: 60,
      particles: {
        number: {
          value: 40,
          density: { enable: true, area: 900 },
        },
        shape: {
          type: 'image',
          options: {
            image: SPHERE_IMAGES,
          },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
          animation: { enable: true, speed: 0.4, sync: false },
        },
        size: {
          value: { min: 6, max: 40 },
        },
        move: {
          enable: true,
          speed: { min: 0.4, max: 1.2 },
          direction: 'none',
          random: true,
          straight: false,
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