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
  "Diagnostico del negocio y tareas repetitivas",
  "Seleccion de un caso de uso con valor visible",
  "Configuracion del operador IA",
  "Base de conocimiento inicial",
  "Plantillas de prompts y flujos",
  "Reglas de seguridad y limites",
  "Prueba con una tarea real",
  "Manual breve de uso",
  "Sesion de entrenamiento",
  "7 dias de soporte ligero"
];

const steps = [
  ["Diagnostico", "Entendemos tu negocio, tus tareas repetitivas y el resultado que quieres."],
  ["Diseno", "Definimos rol, memoria, permisos, limites y flujo principal."],
  ["Setup", "Configuramos documentos, instrucciones, prompts y procedimientos."],
  ["Prueba real", "Ejecutamos una tarea concreta y ajustamos el sistema."],
  ["Entrenamiento", "Te dejamos usando el operador con manual breve y siguientes pasos."]
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav" aria-label="Principal">
          <a className="brand" href="#inicio" aria-label="Wookcom inicio">
            <span className="brandMark">W</span>
            <span>Wookcom</span>
          </a>
          <div className="navLinks">
            <a href="#incluye">Incluye</a>
            <a href="#precio">Precio</a>
            <a href="#formulario">Aplicar</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Cupos fundadores en USD</p>
            <h1>Monta tu primer operador IA en 7 dias</h1>
            <p className="lead">
              Wookcom convierte tus herramientas de IA sueltas en un sistema de trabajo
              con memoria de tu negocio, flujos utiles y reglas de seguridad.
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
              Empezamos con un caso de uso concreto. Sin prometer automatizacion total.
            </p>
          </div>

          <aside className="operatorPanel" aria-label="Resumen del operador IA">
            <div className="terminalTop">
              <span />
              <span />
              <span />
            </div>
            <div className="operatorBody">
              <p className="panelLabel">Operador IA Starter</p>
              <h2>Memoria + flujos + seguridad</h2>
              <ul>
                <li>Contexto real del negocio</li>
                <li>Prompts reutilizables</li>
                <li>Limites de accion</li>
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
              Eso termina en respuestas inconsistentes, prompts regados, tareas
              duplicadas y la sensacion de que la IA podria ayudarte mas, pero todavia
              no sabes como aterrizarla.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="incluye">
        <div className="sectionInner">
          <div className="sectionHeader">
            <p className="eyebrow">La solucion</p>
            <h2>Un operador IA acotado, util y seguro</h2>
            <p>
              No es un curso ni un pack de prompts. Es un setup inicial para que la IA
              empiece a ayudarte con trabajo real.
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
              <p>Diagnostico inicial y prioridad para entrar al setup Starter.</p>
            </article>
            <article className="priceCard highlighted">
              <p className="plan">Setup Starter</p>
              <h3>USD 297</h3>
              <p>1 operador IA, 1 caso de uso principal, entrenamiento y 7 dias de soporte.</p>
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
              Cuéntame qué quieres que haga tu operador IA. Si hay buen fit, seguimos
              con el cupo fundador de USD 29 y el setup Starter.
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
              Que quieres que haga tu operador IA
              <textarea
                name="desiredOperator"
                required
                rows={4}
                placeholder="Ej. ayudarme con contenido, investigacion, ventas o documentacion"
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
