# Hans Mann - Artist Landing Page

A modern, responsive link tree-style landing page for Punjabi fusion artist Hans Mann, built with Next.js and deployed on Vercel.

## Features

- 🎨 **Color Theme**: Extracted from artist's image - deep blues, earthy tones, and dark accents
- 🎵 **Spotify Integration**: Embedded Spotify player widget
- 📱 **Responsive Design**: Mobile-first approach with smooth animations
- 🔗 **Social Links**: Quick access to Spotify, YouTube, Apple Music, and Instagram
- ⚡ **Performance**: Optimized with Next.js Image component and static generation
- 🌐 **Custom Domain Ready**: Configured for easy custom domain setup

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd hanssite
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
hanssite/
├── public/
│   └── images/
│       └── artist-hero.jpg          # Artist image (replace with high-res version)
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout with metadata
│   │   ├── page.tsx                  # Main landing page
│   │   └── globals.css               # Global styles and color theme
│   ├── components/
│   │   ├── Hero.tsx                  # Artist image and name section
│   │   ├── LinkButton.tsx            # Reusable social link button
│   │   ├── SpotifyEmbed.tsx          # Spotify player widget
│   │   └── Bio.tsx                   # Artist bio section
│   └── lib/
│       └── links.ts                 # Social media links configuration
├── next.config.js                    # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── vercel.json                       # Vercel deployment configuration
└── package.json                      # Dependencies and scripts
```

## Deployment to Vercel

### Automatic Deployment (Recommended)

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy" - your site will be live in minutes!

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Follow the prompts to complete deployment.

## Custom Domain Configuration

### Setting Up Custom Domain on Vercel

1. **In Vercel Dashboard**:
   - Go to your project settings
   - Navigate to "Domains" section
   - Click "Add Domain"
   - Enter your custom domain (e.g., `hansmann.com`)

2. **DNS Configuration**:
   - Vercel will provide DNS records to add to your domain registrar
   - Common records:
     - **A Record**: Point to Vercel's IP (if provided)
     - **CNAME Record**: Point to `cname.vercel-dns.com` (recommended)
     - **TXT Record**: For domain verification

3. **SSL/HTTPS**:
   - Vercel automatically provisions SSL certificates via Let's Encrypt
   - HTTPS will be enabled automatically once DNS propagates (can take up to 48 hours)

4. **Domain Verification**:
   - Follow Vercel's instructions to verify domain ownership
   - Once verified, your site will be accessible via custom domain

### Domain Registrar Instructions

The exact steps depend on your domain registrar (GoDaddy, Namecheap, Google Domains, etc.), but generally:

1. Log into your domain registrar
2. Navigate to DNS management
3. Add the DNS records provided by Vercel
4. Wait for DNS propagation (usually 1-24 hours)

## Updating Content

### Replace Artist Image

1. Replace `public/images/artist-hero.jpg` with your high-resolution image
2. The image will automatically be optimized by Next.js
3. Recommended: Use a square or near-square image for best results

### Update Social Links

Edit `src/lib/links.ts` to update or add social media links:

```typescript
export const links: Link[] = [
  {
    id: 'spotify',
    name: 'Spotify',
    url: 'https://your-spotify-url',
    icon: 'Music',
    color: '#1DB954',
  },
  // Add more links...
];
```

### Update Bio

Edit `src/components/Bio.tsx` to update the artist biography.

### Update Metadata

Edit `src/app/layout.tsx` to update SEO metadata, title, and description.

## Color Theme

The color palette is extracted from the artist's image and defined in `src/app/globals.css`:

- **Primary Blues**: Deep sky blue tones (#1e3a5f to #4a90e2)
- **Earthy Tones**: Muted greens, golden-browns, straw yellows
- **Dark Accents**: Dark greys from mountain tones
- **Accent Colors**: Clothing-inspired browns and denim blues

To customize colors, edit the CSS variables in `globals.css` and update `tailwind.config.ts`.

## Spotify Integration

The Spotify embed uses the Spotify Embed Widget (iframe) - no API key required. The artist ID is configured in `src/components/SpotifyEmbed.tsx`:

```typescript
const spotifyArtistId = '5irjcE0RKuU5mZlpJcCWYA';
```

To change the embedded content (playlist, album, etc.), modify the embed URL in the component.

## Performance Optimization

- Images are automatically optimized using Next.js Image component
- Static generation for fast page loads
- CSS is automatically minified and optimized
- Fonts are optimized with system font stack

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Build Errors

If you encounter build errors:
1. Delete `node_modules` and `.next` folder
2. Run `npm install` again
3. Run `npm run build`

### Image Not Loading

- Ensure the image is in `public/images/` directory
- Check the file name matches exactly (case-sensitive)
- Verify the image format is supported (JPG, PNG, WebP)

### Spotify Embed Not Showing

- Check if the Spotify artist ID is correct
- Ensure the iframe is not blocked by browser extensions
- Verify the embed URL is accessible

## Future Enhancements

- [ ] Replace placeholder image with high-resolution version
- [ ] Add music player with multiple tracks
- [ ] Add newsletter signup form
- [ ] Add tour dates section
- [ ] Add analytics integration (Google Analytics, etc.)
- [ ] Add dark/light mode toggle
- [ ] Add animation on scroll

## License

© 2025 Hans Mann. All rights reserved.

## Support

For issues or questions, please contact the development team or open an issue in the repository.
