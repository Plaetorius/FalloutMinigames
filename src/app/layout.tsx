import type { Metadata } from "next";
import { PlayerProvider } from "@/context/PlayerContext";
import "@/styles/border.css"
import "@/styles/text.css"
import "@/styles/font.css"
import "./globals.css";

export const metadata: Metadata = {
  title: "Fallout Minigames",
  description: "Fallout Minigames (not affiliated).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <PlayerProvider>
          {children}
        </PlayerProvider>
      </body>
    </html>
  );
}
