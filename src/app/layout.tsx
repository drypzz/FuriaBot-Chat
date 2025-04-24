import type { Metadata, Viewport } from "next";

import { Container } from '@mui/material'

import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#00bcd4",
  initialScale: 1,
  maximumScale: 1,
  width: "device-width",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://furiabotchat.vercel.app"),
  title: "FuriaBot - Chat",
  applicationName: "FuriaBot - Chat",
  description: "Olá, eu sou o FuriaBot, um bot de chat desenvolvido para ajudar você a saber mais sobre a FURIA Esports",
  creator: "DRYPZZ",
  authors: [{ name: "DRYPZZ DEV", url: "https://drypzz.netlify.app" }],
  generator: "NextJS",
  keywords: ["DRYPZZ", "DEV", "bot", "chat", "tecnologias", "desenvolvimento", "web", "mobile", "front-end", "back-end", "fullstack", "programação", "programador", "desenvolvedor", "webdev", "webdeveloper", "webdesign"],
  twitter: {
    site: "@drypzz",
    card: "summary_large_image",
    images: "/logo.png",
  },
  openGraph: {
    title: "FuriaBot - Chat",
    description: "Olá, eu sou o FuriaBot, um bot de chat desenvolvido para ajudar você a saber mais sobre a FURIA Esports",
    siteName: "FuriaBot - Chat",
    type: "website",
    url: "https://furiabotchat.vercel.app",
    images: [{ url: "/logo.png" }],
    countryName: "Brazil",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Container maxWidth="md" sx={{ py: 4 }}>
          {children}
        </Container>
      </body>
    </html>
  );
}
