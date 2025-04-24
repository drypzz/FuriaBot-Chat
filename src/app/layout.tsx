import type { Metadata } from "next";

import { Container } from '@mui/material'

import "./globals.css";

export const metadata: Metadata = {
  title: "FuriaBot - Chatbot",
  description: "Um chatbot para a FURIA",
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
