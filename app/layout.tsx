import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIClub · Tu comunidad de inteligencia artificial en Chile",
  description: "Tu comunidad estudiantil para aprender y conectar alrededor de la inteligencia artificial en Chile",
  keywords: [
    'AIClub',
    'AIClub Chile',
    'Inteligencia Artificial Chile', 
    'IA Chile', 
    'Inteligencia Artificial UC', 
    'IA UC'
  ],
  openGraph: {
    title: 'AIClub',
    description: 'Tu comunidad estudiantil para aprender y conectar alrededor de la inteligencia artificial en Chile',
    url: 'https://aiclub.cl',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-instrument-sans text-night">
        {children}
      </body>
    </html>
  );
}
