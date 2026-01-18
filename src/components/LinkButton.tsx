'use client';

import { Link } from '@/lib/links';
import { Music, Music2, Youtube, Instagram } from 'lucide-react';
import { useMemo } from 'react';

interface LinkButtonProps {
  link: Link;
}

const iconMap: Record<string, typeof Music> = {
  Music: Music,
  Youtube: Youtube,
  Instagram: Instagram,
  Music2: Music2,
};

export default function LinkButton({ link }: LinkButtonProps) {
  console.log(`[LinkButton] Rendering link button for ${link.name}`);
  
  const Icon = useMemo(() => {
    return iconMap[link.icon] || Music;
  }, [link.icon]);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full max-w-md mx-auto flex items-center justify-center gap-3 px-6 py-4 bg-mountain-dark/80 backdrop-blur-sm border-2 border-earth-straw/20 rounded-xl transition-all duration-300 hover:border-earth-straw/60 hover:bg-mountain-dark hover:scale-105 hover:shadow-lg hover:shadow-sky-blue/20"
    >
      <Icon 
        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
        style={{ color: link.color }}
      />
      <span className="text-lg font-semibold text-earth-straw group-hover:text-white transition-colors duration-300">
        {link.name}
      </span>
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ backgroundColor: link.color }}
      />
    </a>
  );
}
