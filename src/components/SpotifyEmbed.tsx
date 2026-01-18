'use client';

export default function SpotifyEmbed() {
  console.log('[SpotifyEmbed] Rendering Spotify embed widget');
  
  const spotifyArtistId = '5irjcE0RKuU5mZlpJcCWYA';
  const embedUrl = `https://open.spotify.com/embed/artist/${spotifyArtistId}?utm_source=generator&theme=0`;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 mb-8">
      <div className="bg-mountain-dark/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-earth-straw/20 shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-4 text-earth-straw">
          Listen on Spotify
        </h2>
        <div className="w-full">
          <iframe
            src={embedUrl}
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full rounded-lg"
          />
        </div>
        <p className="text-center mt-4 text-sm text-earth-straw/70">
          <a 
            href={`https://open.spotify.com/artist/${spotifyArtistId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-earth-straw transition-colors underline"
          >
            Open in Spotify
          </a>
        </p>
      </div>
    </div>
  );
}
