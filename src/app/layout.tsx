import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hans Mann - Punjabi Fusion Music",
  description: "Official website of Hans Mann - Punjabi fusion artist, producer, and musician. Listen to latest releases on Spotify, Apple Music, and YouTube.",
  keywords: ["Hans Mann", "Punjabi music", "fusion music", "Bhangra", "Indian music", "Calgary artist"],
  authors: [{ name: "Hans Mann" }],
  openGraph: {
    title: "Hans Mann - Punjabi Fusion Music",
    description: "Official website of Hans Mann - Punjabi fusion artist, producer, and musician.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hans Mann - Punjabi Fusion Music",
    description: "Official website of Hans Mann - Punjabi fusion artist, producer, and musician.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
