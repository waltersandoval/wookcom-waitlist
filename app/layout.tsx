import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Wookcom | Diagnostico e implementacion IA para negocios",
  description:
    "Diagnostico, criterio e implementacion IA para negocios que quieren aplicar tecnologia sin automatizar a ciegas.",
  openGraph: {
    title: "Wookcom | Diagnostico, criterio e implementacion IA",
    description:
      "Cupos fundadores para negocios que quieren una primera solucion IA util, segura y documentada.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400..500,0,0"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
