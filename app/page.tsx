const solutionTypes = [
  "Diagnostico",
  "Sistema operativo",
  "Automatizacion",
  "Dashboard",
  "Procesos",
  "Formacion",
  "Memoria del negocio",
  "Guias operativas",
  "Documentacion",
  "Mini software",
  "Ventas",
  "Contenido"
];

const processSteps = [
  {
    title: "Entendemos tu negocio",
    text: "Revisamos como trabajas hoy: entregas, administracion, marketing y ventas. Sin jerga tecnica."
  },
  {
    title: "Elegimos que conviene",
    text: "Decidimos si realmente necesitas IA, una automatizacion simple, ordenar procesos o simplemente formacion."
  },
  {
    title: "Lo dejamos funcionando",
    text: "Probamos con algo de tu dia a dia, te explicamos como usarlo y dejas claro el siguiente paso."
  }
];

const benefits = [
  ["Primero diagnosticamos", "No llegamos a venderte tecnologia. Primero entendemos tu negocio y detectamos que esta fallando."],
  ["Un problema a la vez", "Elegimos un solo caso concreto para resolver. Nada de querer automatizar todo de golpe."],
  ["Te decimos la verdad", "Si no necesitas IA todavia, te lo decimos. A veces lo que hace falta es orden, formacion o un proceso mas claro."],
  ["Todo queda escrito", "Cada entrega incluye instrucciones, reglas, pruebas y un manual para que cualquiera lo entienda."],
  ["Sin riesgos innecesarios", "No conectamos datos sensibles ni hacemos cambios sin tu aprobacion. Seguridad desde el dia uno."],
  ["Preparado para crecer", "Si funciona, podemos escalar. Si no, sabes exactamente que ajustar."]
];

const deliverables = [
  { icon: "monitoring", text: "Diagnostico completo de como funciona tu negocio hoy" },
  { icon: "explore", text: "Donde hay oportunidades faciles que no has visto" },
  { icon: "lightbulb", text: "Que necesitas hacer, explicado paso a paso y sin palabras raras" },
  { icon: "rocket_launch", text: "Algo concreto que ya puedes usar y probar desde el dia uno" },
  { icon: "psychology", text: "Toda la logica y decisiones del negocio guardadas, no en la cabeza de alguien" },
  { icon: "security", text: "Reglas basicas para proteger tu informacion sin complicaciones" },
  { icon: "fact_check", text: "Una prueba con una tarea real tuya para asegurarnos que funciona" },
  { icon: "menu_book", text: "Un manual simple para que cualquiera de tu equipo lo entienda" },
  { icon: "sync", text: "Te explicamos como funciona todo y como seguir mejorando" }
];

const proofCards = [
  ["01", "Diagnostico", "Entendemos tu operacion antes de proponer cualquier cambio. Sin diagnosticos genericos."],
  ["02", "Solucion", "Construimos una primera version util, con memoria de tu negocio y limites claros."],
  ["03", "Prueba", "Ejecutamos una tarea real tuya para verificar que funciona y ajustamos lo que haga falta."],
  ["04", "Futuro", "Lo que funciona se convierte en proceso repetible. Lo que no, se descarta sin culpa."]
];

const faqs = [
  [
    "Esto es solo para empresas grandes?",
    "No. Wookcom esta pensado para creadores, freelancers, duenos de negocio y fundadores no tecnicos."
  ],
  [
    "Que pasa si mi negocio no necesita tecnologia todavia?",
    "Te lo decimos claro y te damos la recomendacion que realmente aplica: ordenar procesos, formacion o una solucion mas simple."
  ],
  [
    "Cuanto tarda la primera entrega?",
    "El plan Starter son 7 dias para un caso concreto, con prueba incluida."
  ],
  [
    "Necesito saber de tecnologia?",
    "No. Todo se entrega explicado, con manual y listo para usar con supervision simple."
  ],
  [
    "Van a conectar mis datos o cuentas?",
    "Solo si el caso lo justifica y con tu aprobacion explicita. La prioridad es mantener tu negocio seguro."
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
            <h1>Diagnosticamos tu negocio y te dejamos una primera solucion funcionando.</h1>
            <p className="lead">
              Sin diagnosticos genericos ni promesas de automatizacion total. Revisamos
              como trabajas hoy, detectamos que se puede mejorar y construimos la primera
              solucion que realmente te sirve.
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
              <span>Entrega</span>
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
          <p className="eyebrow">Nuestra forma de trabajar</p>
          <h2>No empezamos con tecnologia. Empezamos entendiendo tu negocio.</h2>
        </div>
      </section>

      <section className="section" id="proceso">
        <div className="sectionInner">
          <div className="sectionHeader centered">
            <p className="eyebrow">Como funciona</p>
            <h2>Un proceso claro para saber donde aplicar IA y que construir primero.</h2>
            <p>
              Empezamos entendiendo tu negocio, elegimos un caso de uso y dejamos
              una primera solucion probada con una tarea real.
            </p>
          </div>

          <div className="journeyGrid">
            {processSteps.map((step, index) => (
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
              El cliente no compra tecnologia. Compra claridad, orden y una primera
              solucion que pueda usar sin volverse experto. Si conviene un sistema con
              IA, lo construimos. Si no, decimos que hacer en su lugar.
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
            <h2>Como te ayuda Wookcom.</h2>
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
              <div className="deliverable" key={item.text}>
                <span className="material-symbols-outlined">{item.icon}</span>
                {item.text}
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
            <h2>Una primera solucion clara, probada y documentada.</h2>
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
