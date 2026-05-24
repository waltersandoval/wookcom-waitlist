import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Wookcom | Diagnostico e implementacion IA en 7 dias",
  description:
    "Diagnostica tu negocio y aplica IA con una primera solucion util, segura y conectada a tus procesos.",
  openGraph: {
    title: "Wookcom | Diagnostica tu negocio y aplica IA con criterio",
    description:
      "Cupos fundadores para creadores, freelancers y negocios que quieren diagnostico, criterio e implementacion IA.",
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
      <body>{children}</body>
    </html>
  );
}
