'use client';

import Image from 'next/image';

export default function Hero() {
  console.log('[Hero] Rendering hero section with artist image and name');
  
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 shadow-2xl border-4 border-earth-straw/30">
        <Image
          src="/images/artist-hero.jpg"
          alt="Hans Mann"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 192px, 256px"
        />
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2 bg-gradient-to-r from-sky-blue via-earth-straw to-sky-light bg-clip-text text-transparent">
        Hans Mann
      </h1>
      <p className="text-lg md:text-xl text-earth-straw/90 font-medium">
        Music Producer
      </p>
    </div>
  );
}
