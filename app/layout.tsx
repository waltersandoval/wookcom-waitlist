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
      <body>{children}</body>
    </html>
  );
}
