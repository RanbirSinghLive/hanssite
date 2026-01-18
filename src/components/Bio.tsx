'use client';

export default function Bio() {
  console.log('[Bio] Rendering artist bio section');
  
  return (
    <div className="w-full max-w-3xl mx-auto px-4 mb-8">
      <div className="bg-mountain-dark/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-earth-straw/20 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-earth-straw">
          About
        </h2>
        <div className="space-y-4 text-base md:text-lg leading-relaxed text-earth-straw/90">
          <p>
            Born in Chandigarh, India, raised in Etobicoke, Toronto, and now based in Calgary, Hans Mann is a producer and multi-instrumentalist whose musical identity is shaped by an ability to listen across and fluently move between genres. Although trained in Indian classical music, Hans draws from everything he absorbs. His versatility as a listener and creator allows him to naturally merge diverse musical worlds into Punjabi music without losing its emotional core.
          </p>
          <p>
            Hans has collaborated with renowned Punjabi artists including Karamjit Anmol, Meet Malkit, and Miss Pooja, produced Deep Jandu's debut album Nach, and served as musical director, keyboardist, and band leader for Avalla Connection, performing on major Canadian stages such as Nathan Phillips Square and Yonge-Dundas Square (Desifest).
          </p>
          <p className="pt-4 border-t border-earth-straw/20">
            <span className="font-semibold text-earth-straw">Latest Release:</span> "Don't Let Go" is more than a song, it's a milestone. Born in the moments of 2025 Calgary Stampede, the idea for the track took shape amid that energy. Among the first Canadian Punjabi Country Pop records, the song bridges cultures and generations, blending lived experience with fearless creativity. Proudly made in Canada, the record features JUNO and CCMA award-winning musicians Spencer Cheyne, Brennan Wall, and Justin Kudding, whose performances bring authenticity, warmth, and craft to every note. Blending the storytelling soul and warmth of country with the vibrant rhythm and emotional depth of Punjabi pop, "Don't Let Go" fuses steel guitars and Nashville-inspired textures with Punjabi melody and spirit.
          </p>
        </div>
      </div>
    </div>
  );
}
