'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const HorizonHeroClient = dynamic(
  () => import('./horizon-hero-client'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-screen bg-black flex items-center justify-center text-white font-bold text-xl">
        Loading 3D Experience...
      </div>
    )
  }
);

export const Component = () => {
  return <HorizonHeroClient />;
};
