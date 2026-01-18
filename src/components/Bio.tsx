'use client';

export default function Bio() {
  console.log('[Bio] Rendering artist bio section');
  
  const bioText = `Born in Chandigarh, India, and raised in Rexdale, Toronto, Hans' musical journey is as rich and dynamic as his cultural heritage. Now based in Calgary, Alberta, Hans' passion for sound ignited in high school when he first ventured into music production. His relentless pursuit of musical mastery led him to explore an array of instruments—from the piano and harmonium in Indian classical music to the Tumbi—shaping his distinctive and versatile style.`;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 mb-8">
      <div className="bg-mountain-dark/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-earth-straw/20 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-earth-straw">
          About
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-earth-straw/90 text-center">
          {bioText}
        </p>
        <p className="text-base md:text-lg leading-relaxed text-earth-straw/90 text-center mt-4">
          At just 16, Hans produced his debut album, embarking on a transformative journey to India where he collaborated with iconic artists like Karamjit Anmol, Meet Malkit, and Miss Pooja. With his unique fusion of traditional influences and Western production, Hans continues to captivate audiences around the world.
        </p>
      </div>
    </div>
  );
}
