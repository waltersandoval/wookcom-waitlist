const useCases = [
  {
    title: "Contenido",
    text: "Ideas, guiones, calendario, reutilizacion de notas y consistencia de marca."
  },
  {
    title: "Investigacion",
    text: "Competidores, tendencias, resumenes de fuentes y oportunidades de mercado."
  },
  {
    title: "Ventas ligeras",
    text: "Mensajes, seguimiento, objeciones y preparacion de conversaciones."
  },
  {
    title: "Documentacion",
    text: "Ordenar audios, videos, procesos, notas y conocimiento del negocio."
  }
];

const deliverables = [
  "Diagnostico del negocio en 4 areas",
  "Seleccion de un caso de uso con valor visible",
  "Decision de ruta: IA, automatizacion, formacion o proceso",
  "Implementacion del primer sistema util",
  "Base de conocimiento inicial",
  "Reglas de seguridad y limites",
  "Prueba con una tarea real",
  "Manual breve de uso",
  "7 dias de soporte ligero"
];

const steps = [
  ["Diagnostico", "Revisamos delivery, administracion, marketing y ventas antes de proponer IA."],
  ["Ruta", "Decidimos si conviene IA, automatizacion, formacion, consultoria o proceso manual."],
  ["Diseno", "Definimos la solucion correcta: sistema IA, automatizacion, formacion o proceso."],
  ["Setup", "Configuramos documentos, instrucciones, prompts, procedimientos o flujos."],
  ["Prueba real", "Ejecutamos una tarea concreta y ajustamos el sistema."],
  ["Entrenamiento", "Te dejamos usando la solucion con manual breve y siguientes pasos."]
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav" aria-label="Principal">
          <a className="brand" href="#inicio" aria-label="Wookcom inicio">
            <img src="/brand/wookcom-logo.png" alt="Wookcom" />
          </a>
          <div className="navLinks">
            <a href="#incluye">Incluye</a>
            <a href="#precio">Precio</a>
            <a className="navCta" href="#formulario">Aplicar</a>
          </div>
        </nav>
        <div className="blueRibbon">Empieza con una sesion de valoracion.</div>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Diagnostico + setup fundador</p>
            <h1>
              Diagnostica tu negocio y aplica <span>IA con criterio</span>
              <br />
              en 7 dias
            </h1>
            <p className="lead">
              Wookcom revisa tu operacion, detecta donde la IA puede generar valor real
              y construye la primera solucion util: sistema, automatizacion, formacion o proceso.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#formulario">
                Reservar mi cupo fundador
              </a>
              <a className="button secondary" href="#incluye">
                Ver que incluye
              </a>
            </div>
            <p className="microcopy">
              Primero entendemos tu operacion; luego decidimos que conviene automatizar.
            </p>
          </div>

          <aside className="operatorPanel" aria-label="Resumen del diagnostico IA">
            <div className="terminalTop">
              <span />
              <span />
              <span />
            </div>
            <div className="operatorBody">
              <p className="panelLabel">Diagnostico IA Starter</p>
              <h2>Diagnostico + ruta + implementacion</h2>
              <ul>
                <li>Revision de 4 areas</li>
                <li>Contexto real del negocio</li>
                <li>Solucion segun necesidad</li>
                <li>Limites y riesgos claros</li>
                <li>Prueba con tarea real</li>
              </ul>
              <div className="statusRow">
                <span>Entrega</span>
                <strong>7 dias</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section problem">
        <div className="sectionInner split">
          <div>
            <p className="eyebrow">El problema</p>
            <h2>Usar IA no es lo mismo que tener un sistema</h2>
          </div>
          <div className="bodyText">
            <p>
              Ya puedes pedirle cosas a ChatGPT, Gemini o Claude. El problema es que
              cada conversacion empieza casi desde cero: no recuerda tu negocio, no
              sigue tus reglas y no esta conectada a tus procesos reales.
            </p>
            <p>
              Automatizar sin diagnostico tambien puede crear cuellos de botella en
              ventas, marketing, administracion o entrega. Primero hay que entender el sistema.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="incluye">
        <div className="sectionInner">
          <div className="sectionHeader">
            <p className="eyebrow">La solucion</p>
            <h2>Diagnostico primero. Implementacion despues.</h2>
            <p>
              No es un curso ni un pack de prompts. Es consultoria aplicada y setup inicial
              para elegir la solucion correcta antes de automatizar de mas.
            </p>
          </div>

          <div className="featureGrid">
            {deliverables.map((item, index) => (
              <div className="feature" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="sectionInner">
          <div className="sectionHeader">
            <p className="eyebrow">Casos de uso</p>
            <h2>Elige un primer caso con valor visible</h2>
          </div>
          <div className="useCaseGrid">
            {useCases.map((useCase) => (
              <article className="useCase" key={useCase.title}>
                <h3>{useCase.title}</h3>
                <p>{useCase.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionInner">
          <div className="sectionHeader">
            <p className="eyebrow">Proceso</p>
            <h2>Como funciona</h2>
          </div>
          <div className="timeline">
            {steps.map(([title, text], index) => (
              <div className="step" key={title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing" id="precio">
        <div className="sectionInner">
          <div className="sectionHeader">
            <p className="eyebrow">Precio fundador</p>
            <h2>Cupos limitados para validar con casos reales</h2>
          </div>
          <div className="pricingGrid">
            <article className="priceCard">
              <p className="plan">Reserva</p>
              <h3>USD 29</h3>
              <p>Diagnostico de 4 areas y prioridad para entrar al setup Starter.</p>
            </article>
            <article className="priceCard highlighted">
              <p className="plan">Setup Starter</p>
              <h3>USD 297</h3>
              <p>Diagnostico, 1 solucion inicial, entrenamiento y 7 dias de soporte.</p>
            </article>
            <article className="priceCard">
              <p className="plan">Continuidad</p>
              <h3>USD 49/mes</h3>
              <p>Soporte ligero, plantillas, mejoras y sesiones grupales.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section formSection" id="formulario">
        <div className="sectionInner formGrid">
          <div>
            <p className="eyebrow">Aplicacion</p>
            <h2>Reserva tu diagnostico fundador</h2>
            <p className="bodyText">
              Cuéntame qué quieres mejorar en tu negocio. Si hay buen fit, hacemos diagnostico,
              reservamos el cupo fundador y pasamos al setup Starter.
            </p>
            <div className="trustBox">
              <strong>Alcance seguro desde el inicio</strong>
              <p>
                No conectamos accesos sensibles sin revisar permisos, limites y
                confirmacion humana.
              </p>
            </div>
          </div>

          <form className="leadForm" action="/api/leads" method="post">
            <label>
              Nombre
              <input name="name" type="text" required placeholder="Tu nombre" />
            </label>
            <label>
              Email o WhatsApp
              <input name="contact" type="text" required placeholder="tu@email.com o WhatsApp" />
            </label>
            <label>
              Tipo de negocio
              <select name="businessType" required defaultValue="">
                <option value="" disabled>
                  Selecciona una opcion
                </option>
                <option>Creador o marca personal</option>
                <option>Freelancer</option>
                <option>Agencia pequena</option>
                <option>Negocio local</option>
                <option>Fundador no tecnico</option>
                <option>Otro</option>
              </select>
            </label>
            <label>
              Que quieres mejorar con IA o automatizacion
              <textarea
                name="desiredOperator"
                required
                rows={4}
                placeholder="Ej. contenido, investigacion, ventas, documentacion o procesos internos"
              />
            </label>
            <label>
              Que herramientas de IA usas hoy
              <input name="currentTools" type="text" placeholder="ChatGPT, Gemini, Claude..." />
            </label>
            <label>
              Principal miedo o duda
              <textarea
                name="mainConcern"
                rows={3}
                placeholder="Ej. seguridad, precio, no saber usarlo, accesos..."
              />
            </label>
            <input type="hidden" name="source" value="wookcom-waitlist-v1" />
            <button className="button primary full" type="submit">
              Solicitar diagnostico fundador
            </button>
            <p className="formNote">
              Responderemos con el siguiente paso para validar fit y reservar cupo.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
