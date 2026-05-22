import Link from "next/link";

export default function Gracias() {
  return (
    <main className="thanksPage">
      <section className="thanksBox">
        <p className="eyebrow">Solicitud recibida</p>
        <h1>Gracias por aplicar</h1>
        <p>
          Ya recibimos tu informacion para el diagnostico fundador de Wookcom.
          El siguiente paso es revisar el caso de uso y confirmar si hay buen fit.
        </p>
        <Link className="button primary" href="/">
          Volver a la landing
        </Link>
      </section>
    </main>
  );
}
