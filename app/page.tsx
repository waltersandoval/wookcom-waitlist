const solutionTypes = [
  "Diagnostico IA",
  "Sistemas internos",
  "Automatizaciones",
  "Dashboards",
  "Procesos",
  "Formacion",
  "Memoria del negocio",
  "Prompts operativos",
  "Documentacion",
  "Mini software",
  "Ventas",
  "Contenido"
];

const journey = [
  {
    title: "Diagnostica",
    text: "Revisamos delivery, administracion, marketing y ventas antes de proponer tecnologia."
  },
  {
    title: "Construye",
    text: "Elegimos una ruta: IA, automatizacion, formacion, proceso, dashboard o mini software."
  },
  {
    title: "Entrega",
    text: "Probamos con una tarea real, documentamos el uso y dejamos siguientes mejoras claras."
  }
];

const benefits = [
  ["Diagnostico primero", "No automatizamos a ciegas. Primero entendemos el negocio y sus cuellos de botella."],
  ["Una solucion a la vez", "Enfocamos el primer setup en un caso de uso visible, seguro y medible."],
  ["Criterio aplicado", "Te decimos si conviene IA, automatizacion, formacion, proceso o no implementar todavia."],
  ["Documentacion real", "Cada entrega queda con memoria, instrucciones, reglas, prueba y manual de uso."],
  ["Alcance seguro", "Sin accesos sensibles ni acciones externas sin revisar permisos y confirmacion humana."],
  ["Base escalable", "Si funciona, el siguiente paso puede ser continuidad, fase 2, comunidad o infraestructura."]
];

const deliverables = [
  "Diagnostico de 4 areas",
  "Mapa de oportunidades",
  "Decision de ruta",
  "Primera solucion funcional",
  "Memoria del negocio",
  "Reglas de seguridad",
  "Prueba con tarea real",
  "Manual de uso",
  "Handoff y mejoras"
];

const proofCards = [
  ["01", "Diagnostico", "Detectamos donde la IA crea valor sin romper ventas, entrega ni administracion."],
  ["02", "Sistema", "Convertimos el caso elegido en una solucion operativa con memoria y limites."],
  ["03", "Proceso", "El cliente recibe un flujo claro para pedir, revisar y repetir el trabajo."],
  ["04", "Continuidad", "Lo que funciona se convierte en plantillas, soporte, fase 2 o producto interno."]
];

const faqs = [
  [
    "Esto es una agencia de agentes IA?",
    "No. Wookcom es diagnostico e implementacion IA. Un agente puede ser una salida, pero no es el producto principal."
  ],
  [
    "Que pasa si mi negocio no necesita IA todavia?",
    "Se documenta la ruta correcta: proceso, formacion, orden interno o una implementacion mas pequena."
  ],
  [
    "Cuanto tarda la primera entrega?",
    "El Starter esta disenado para 7 dias con un caso de uso acotado y una tarea real de prueba."
  ],
  [
    "Necesito saber programar?",
    "No. La entrega incluye manual, entrenamiento y una solucion lista para operar con supervision humana."
  ],
  [
    "Pueden conectar herramientas o datos sensibles?",
    "Solo si el diagnostico lo justifica y con permisos claros. La V1 evita riesgos innecesarios."
  ]
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
            <a href="#proceso">Proceso</a>
            <a href="#incluye">Incluye</a>
            <a href="#precio">Precio</a>
            <a className="navCta" href="#formulario">Aplicar</a>
          </div>
        </nav>

        <div className="heroInner">
          <div className="heroTopline">
            <span>Wookcom Diagnostico IA Starter</span>
            <span>7 dias</span>
            <span>Cupos fundadores</span>
          </div>

          <div className="heroCopy">
            <p className="eyebrow">IA aplicada para negocios</p>
            <h1>Diagnostico, criterio e implementacion IA bajo un mismo techo.</h1>
            <p className="lead">
              Wookcom revisa tu operacion, detecta donde la IA puede generar valor real
              y construye una primera solucion util sin venderte automatizacion a ciegas.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#formulario">
                Reservar cupo fundador
              </a>
              <a className="button secondary" href="#precio">
                Ver precios
              </a>
            </div>
          </div>

          <aside className="heroCard" aria-label="Resumen Wookcom">
            <div className="cardHeader">
              <span>Diagnostico activo</span>
              <strong>01 / 04</strong>
            </div>
            <div className="scoreRing">
              <span>4</span>
              <small>areas</small>
            </div>
            <ul>
              <li>Delivery y cumplimiento</li>
              <li>Administracion</li>
              <li>Marketing</li>
              <li>Ventas</li>
            </ul>
            <div className="cardFooter">
              <span>Salida</span>
              <strong>Solucion V1 lista para probar</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="marquee" aria-label="Tipos de solucion">
        <div>
          {[...solutionTypes, ...solutionTypes].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="sectionInner">
          <p className="eyebrow">La forma correcta</p>
          <h2>Primero entendemos el negocio. Despues decidimos si necesita IA.</h2>
        </div>
      </section>

      <section className="section" id="proceso">
        <div className="sectionInner">
          <div className="sectionHeader centered">
            <p className="eyebrow">El viaje del cliente</p>
            <h2>Simple por fuera. Riguroso por dentro.</h2>
            <p>
              Un proceso productizado para que cada cliente pase por diagnostico,
              construccion y entrega sin improvisar.
            </p>
          </div>

          <div className="journeyGrid">
            {journey.map((step, index) => (
              <article className="journeyCard" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section darkBand">
        <div className="sectionInner split">
          <div>
            <p className="eyebrow">Modelo Wookcom</p>
            <h2>No es un curso. No es un bot. No es una agencia de automatizaciones.</h2>
          </div>
          <div className="bodyText lightText">
            <p>
              El cliente compra claridad, criterio y una primera implementacion que pueda
              usar. Si el diagnostico dice que conviene un agente, se construye. Si no,
              se entrega la ruta correcta.
            </p>
            <p>
              El objetivo es que Wookcom se perciba como un estudio de implementacion IA:
              profesional, limitado por calidad y enfocado en resultados reales.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="incluye">
        <div className="sectionInner">
          <div className="sectionHeader">
            <p className="eyebrow">Beneficios</p>
            <h2>Lo que cambia cuando Wookcom entra al negocio.</h2>
          </div>

          <div className="benefitGrid">
            {benefits.map(([title, text]) => (
              <article className="benefit" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="sectionInner">
          <div className="sectionHeader centered">
            <p className="eyebrow">Entregables</p>
            <h2>Todo lo necesario para que la solucion no dependa de memoria verbal.</h2>
          </div>

          <div className="deliverableGrid">
            {deliverables.map((item) => (
              <div className="deliverable" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionInner proofGrid">
          {proofCards.map(([number, title, text]) => (
            <article className="proofCard" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pricing" id="precio">
        <div className="sectionInner pricingShell">
          <div className="pricingCopy">
            <p className="eyebrow">Precio fundador</p>
            <h2>Una primera solucion. Un proceso claro. Cero humo.</h2>
            <p>
              Empezamos con cupos limitados para validar casos reales, crear evidencia
              y convertir cada entrega en un sistema repetible.
            </p>
          </div>

          <div className="priceStack">
            <article className="priceCard compact">
              <p className="plan">Reserva</p>
              <h3>USD 29</h3>
              <p>Diagnostico inicial, revision de fit y prioridad para entrar al setup.</p>
            </article>
            <article className="priceCard highlighted">
              <div className="priceBadge">Recomendado</div>
              <p className="plan">Setup Starter</p>
              <h3>USD 297</h3>
              <p>Diagnostico de 4 areas, una solucion inicial, prueba real, manual y 7 dias de soporte.</p>
              <a className="button primary full" href="#formulario">
                Aplicar al Starter
              </a>
            </article>
            <article className="priceCard compact">
              <p className="plan">Continuidad</p>
              <h3>USD 49/mes</h3>
              <p>Soporte ligero, mejoras, plantillas y sesiones de implementacion.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="sectionInner">
          <div className="sectionHeader centered">
            <p className="eyebrow">FAQ</p>
            <h2>Preguntas antes de aplicar.</h2>
          </div>
          <div className="faqList">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section formSection" id="formulario">
        <div className="sectionInner formGrid">
          <div>
            <p className="eyebrow">Aplicacion</p>
            <h2>Veamos si Wookcom es buen fit para tu negocio.</h2>
            <p className="bodyText">
              Cuéntame qué quieres mejorar. Si hay fit, hacemos diagnostico,
              reservamos el cupo fundador y pasamos al setup Starter.
            </p>
            <div className="trustBox">
              <strong>Alcance seguro desde el inicio</strong>
              <p>
                No conectamos accesos sensibles ni automatizamos procesos criticos sin
                revisar permisos, limites y confirmacion humana.
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
            <input type="hidden" name="source" value="wookcom-designjoy-v1" />
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
