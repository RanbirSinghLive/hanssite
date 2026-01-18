'use client';

import Hero from '@/components/Hero';
import LinkButton from '@/components/LinkButton';
import SpotifyEmbed from '@/components/SpotifyEmbed';
import Bio from '@/components/Bio';
import { links } from '@/lib/links';

export default function Home() {
  console.log('[Home] Rendering main landing page');
  
  return (
    <main className="min-h-screen flex flex-col items-center py-8 md:py-12 px-4">
      {/* Hero Section */}
      <Hero />
      
      {/* Spotify Embed Section */}
      <SpotifyEmbed />
      
      {/* Social Links Section */}
      <section className="w-full max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-earth-straw">
          Connect
        </h2>
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <LinkButton key={link.id} link={link} />
          ))}
        </div>
      </section>
      
      {/* Bio Section */}
      <Bio />
      
      {/* Footer */}
      <footer className="w-full max-w-4xl mx-auto mt-8 mb-4 px-4 text-center">
        <p className="text-sm text-earth-straw/60">
          © {new Date().getFullYear()} Hans Mann. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
