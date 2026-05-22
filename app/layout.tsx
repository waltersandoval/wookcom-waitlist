import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Wookcom | Operador IA en 7 dias",
  description:
    "Monta tu primer operador IA con memoria de tu negocio, flujos utiles y reglas de seguridad.",
  openGraph: {
    title: "Wookcom | Monta tu primer operador IA en 7 dias",
    description:
      "Cupos fundadores para creadores, freelancers y negocios que quieren convertir IA suelta en un sistema de trabajo.",
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
