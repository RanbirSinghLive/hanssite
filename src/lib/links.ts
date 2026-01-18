export interface Link {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
}

export const links: Link[] = [
  {
    id: 'spotify',
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/5irjcE0RKuU5mZlpJcCWYA',
    icon: 'Music',
    color: '#1DB954',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/@HansMannMu5IC',
    icon: 'Youtube',
    color: '#FF0000',
  },
  {
    id: 'apple-music',
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/hans-mann/315485771',
    icon: 'Music2',
    color: '#FA243C',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/mannhans/',
    icon: 'Instagram',
    color: '#E4405F',
  },
];
