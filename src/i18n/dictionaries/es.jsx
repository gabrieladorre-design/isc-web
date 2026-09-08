// src/i18n/dictionaries/es.jsx
// ───────────────────────────────────────────────────────────────────────────
// DICCIONARIO — ESPAÑOL
//
// Aquí vive TODO el texto en español que se ve en la web. Para cambiar una
// palabra de la web, cámbiala aquí (y su equivalente en en.jsx).
//
// Los textos se piden desde los componentes con t("ruta.con.puntos"),
// por ejemplo: t("home.whoTitle") → "QUIÉNES SOMOS".
//
// Algunos textos llevan formato (negritas, saltos de línea, enlaces) y por eso
// se guardan como JSX en lugar de como texto plano. Es correcto y funciona igual.
// ───────────────────────────────────────────────────────────────────────────

export const es = {
  /* ═══════════════════════════════════════════════════════════════════════
     TEXTOS COMUNES (botones, accesibilidad, elementos repetidos)
     ═══════════════════════════════════════════════════════════════════════ */
  common: {
    language: "Idioma",
    changeLanguage: "Cambiar idioma",
    openMenu: "Abrir menú",
    scrollTop: "Volver arriba",
    close: "Cerrar",
    previous: "Anterior",
    next: "Siguiente",
    enlargeImage: "Ampliar imagen",
    zoomedImageAlt: "Ampliación",
    galleryPhotoAlt: "Fotografía del equipo ISC",
  },

  /* ═══════════════════════════════════════════════════════════════════════
     PÁGINA DE ENTRADA (elegir Coche o Moto)
     ═══════════════════════════════════════════════════════════════════════ */
  landing: {
    tagline: (
      <>
        Ingeniería, pasión y velocidad.
        <br />
        Elige tu disciplina.
      </>
    ),
  },

  /* ═══════════════════════════════════════════════════════════════════════
     PIE DE PÁGINA
     ═══════════════════════════════════════════════════════════════════════ */
  footer: {
    taglineFormula: "ICAI Formula Student Team",
    taglineMoto: "ICAI Moto Student Team",
    university: "ICAI · Universidad Pontificia Comillas",
    contact: "Contacta con nosotros",
  },

  /* ═══════════════════════════════════════════════════════════════════════
     INICIO (Home de Coche y de Moto)
     ═══════════════════════════════════════════════════════════════════════ */
  home: {
    whoTitle: "QUIÉNES SOMOS",
    missionTitle: "NUESTRA MISIÓN",
    visionTitle: "NUESTRA VISIÓN",
    galleryTitle: "NUESTRA PASIÓN EN IMÁGENES",
    presentationVideoTitle: "Vídeo de presentación",
    slideAlt: "Imagen de la galería",

    formula: {
      heroSubtitle: "INNOVACIÓN. VELOCIDAD. FUTURO.",
      btnTeam: "CONOCE AL EQUIPO",
      btnSponsor: "PATROCÍNANOS",
      whoParagraphs: (
        <>
          <p className="intro-text">
            Somos más de <strong>80 estudiantes</strong> de la Universidad Pontificia Comillas (ICAI).
            Un equipo multidisciplinar de ingenieros mecánicos, electrónicos y perfiles de gestión (ADE) unidos por una pasión: ganar en la pista y liderar la innovación tecnológica.
          </p>
          <p>
            Diseñamos y fabricamos desde cero nuestro monoplaza para la Formula Student. Apostamos por el futuro desarrollando un sistema de propulsión <strong>100% Eléctrico</strong> de alto rendimiento, un chasis ultraligero y un paquete aerodinámico de vanguardia.
          </p>
        </>
      ),
      highlight1: "Vehículo 100% Eléctrico",
      highlight2: "Fabricación propia en ICAI",
      highlight3: "Competición Internacional",
      cadAlt: "IFS-08, el monoplaza actual del ISC Racing Team",
      mission: (
        <p>
          Formar a los ingenieros del futuro enfrentándolos a desafíos reales.
          Fomentamos el talento, el trabajo en equipo y la excelencia técnica
          a través de la competición automovilística más exigente a nivel universitario.
        </p>
      ),
      vision: (
        <p>
          Consolidarnos como un equipo referente en <strong>Formula Student Europe</strong>.
          Diseñar vehículos cada vez más eficientes y competir al más alto nivel en los circuitos más emblemáticos: Montmeló, Hockenheim y Varano.
        </p>
      ),
      ctaTitle: "¿QUIERES FORMAR PARTE DE LA HISTORIA?",
      ctaText: "Tanto si eres estudiante buscando un reto, como si eres una empresa buscando innovación.",
      ctaStudent: "ÚNETE COMO ALUMNO",
      ctaCompany: "COLABORA COMO EMPRESA",
    },

    moto: {
      heroSubtitle: "COMPROMISO. TALENTO. PASIÓN.",
      btnTeam: "NUESTRO EQUIPO",
      btnSponsor: "PATROCÍNANOS",
      whoParagraphs: (
        <>
          <p className="intro-text">
            El <strong>ISC MS Racing Team</strong> es el equipo de MotoStudent de la Universidad Pontificia Comillas.
          </p>
          <p>
            Está formado por <strong>20 estudiantes</strong>, mayoritariamente de la Escuela de Ingeniería ICAI, contando también con miembros de ICADE. Nuestro objetivo principal es claro: concebir, diseñar, fabricar y competir al más alto nivel con una motocicleta 100% eléctrica.
          </p>
        </>
      ),
      highlight1: "Motocicleta 100% Eléctrica",
      highlight2: "Fabricación propia en ICAI",
      highlight3: "Competición Internacional",
      cadAlt: "Modelo CAD de la motocicleta",
      mission: (
        <p>
          Formar a los ingenieros del futuro enfrentándolos a desafíos reales del sector de la automoción.
          Fomentamos el talento, el trabajo en equipo y la excelencia técnica
          a través de la competición universitaria de motociclismo más exigente del mundo.
        </p>
      ),
      vision: (
        <p>
          Consolidarnos como un equipo referente en el paddock de <strong>MotoStudent</strong>.
          Diseñar prototipos eléctricos cada vez más eficientes y competir al más alto nivel.
        </p>
      ),
      ctaTitle: "¿QUIERES FORMAR PARTE DEL PROYECTO?",
      ctaText: "Tanto si eres estudiante buscando un reto, como si eres una empresa apostando por la innovación en dos ruedas.",
      ctaStudent: "ÚNETE COMO ALUMNO",
      ctaCompany: "COLABORA COMO EMPRESA",
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     EL GARAJE (cuadrícula de vehículos)
     ═══════════════════════════════════════════════════════════════════════ */
  garage: {
    title: "EL GARAJE",
    formula: {
      subtitle: "Pura ingeniería en números. Explora nuestra historia técnica desde los orígenes hasta el prototipo actual.",
      itemNoun: "Monoplaza",
      ctaPrefix: "SABER MÁS DEL",
    },
    moto: {
      subtitle: "Pura ingeniería sobre dos ruedas. Explora la evolución técnica de nuestros prototipos eléctricos.",
      itemNoun: "Prototipo",
      ctaPrefix: "SABER MÁS DE LA",
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     FICHA DE UN VEHÍCULO (detalle del coche / de la moto)
     ═══════════════════════════════════════════════════════════════════════ */
  detail: {
    back: "Volver al Garaje",
    specsTitle: "ESPECIFICACIONES TÉCNICAS",
    competitionsTitle: "HISTORIAL DE COMPETICIÓN",
    videoTitle: "EL PROTOTIPO EN ACCIÓN",
    noCompetitions: "No hay datos de competición registrados para este modelo.",
    notFoundCar: "Monoplaza no encontrado.",
    notFoundMoto: "Prototipo no encontrado.",
    specs: {
      powertrain: "Powertrain",
      weight: "Peso Total",
      chassis: "Chasis",
      acceleration: "0-100 km/h",
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     NUESTRA EVOLUCIÓN (línea del tiempo)
     ═══════════════════════════════════════════════════════════════════════ */
  history: {
    title: "Nuestra Evolución",
    futureSeason: "TEMPORADA 2026",
    futureTag: "EN DESARROLLO",
    teamAlt: "Equipo",
    formula: {
      subtitle: "Compitiendo en la élite europea desde 2017.",
      vehicleAlt: "Coche",
      vehicleLabel: "Monoplaza",
      futureTitle: "Innovación Autónoma",
      futureBody: (
        <p>
          El ISC Racing Team lidera el camino hacia la <strong>Movilidad Autónoma</strong>.
          Para 2026, estamos centrando nuestros esfuerzos en la implementación de los primeros
          sistemas <em>driverless</em> dentro de Formula Student en Madrid, preparando a nuestros
          ingenieros para los desafíos tecnológicos más exigentes del futuro.
        </p>
      ),
    },
    moto: {
      subtitle: "Acelerando hacia el futuro en MotoStudent.",
      vehicleAlt: "Moto",
      vehicleLabel: "Prototipo",
      futureTitle: "La Siguiente Generación",
      futureBody: (
        <p>
          El equipo está inmerso en el diseño del <strong>IM-06</strong>.
          Nuestro objetivo para la próxima edición en MotorLand Aragón es implementar telemetría en tiempo real y reducir drásticamente el peso del conjunto para competir por el podio internacional.
        </p>
      ),
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     NUESTRO EQUIPO (organigrama)
     ═══════════════════════════════════════════════════════════════════════ */
  team: {
    title: "Nuestro Equipo",
    formula: {
      subtitle: "Impulsados por el diseño, unidos por la velocidad.",
      stats: [
        { target: 1, label: "Team Leader" },
        { target: 5, label: "Directores Técnicos" },
        { target: 12, label: "Jefes de Departamento" },
        { target: 83, label: "Ingenieros" },
      ],
      description: (
        <>
          <p>Actualmente, el ISC FS Racing Team está formado por 83 estudiantes.</p>
          <p>A nivel organizativo, cuenta con un <strong>Team Leader</strong>, encargado de definir la estrategia general y los objetivos de la temporada, tanto a nivel técnico, como financiero o de comunicación.</p>
          <p>La figura de los <strong>Directores Técnicos</strong> refleja la búsqueda de la especialización por áreas. Destacan la verificación al detalle de todos los aspectos técnicos como la supervisión del progreso de cada departamento.</p>
          <p>Los <strong>Jefes de Departamento</strong> se encargan del desarrollo de una parcela específica del monoplaza y cuentan con un equipo de ingenieros para llevar todas esas tareas a cabo.</p>
        </>
      ),
    },
    moto: {
      subtitle: "Impulsados por la innovación, unidos por la velocidad en dos ruedas.",
      stats: [
        { target: 1, label: "Team Leader" },
        { target: 2, label: "Directores" },
        { target: 2, label: "Jefes de Departamento" },
        { target: 13, label: "Ingenieros" },
      ],
      description: (
        <>
          <p>Actualmente, la división <strong>ISC MS Racing Team</strong> está formada por 20 estudiantes de las escuelas de ICAI e ICADE.</p>
          <p>A nivel organizativo, cuenta con un <strong>Team Leader</strong>, encargado de definir la estrategia general y los objetivos en MotorLand Aragón, tanto a nivel técnico, como financiero y de comunicación.</p>
          <p>La figura de los <strong>Directores Técnicos</strong> refleja la búsqueda de la especialización por áreas. Destacan la verificación al detalle de todos los aspectos técnicos de la motocicleta eléctrica.</p>
          <p>Los <strong>Jefes de Departamento</strong> se encargan del desarrollo de una parcela específica del prototipo y cuentan con un equipo de ingenieros para llevar todas esas tareas a cabo.</p>
        </>
      ),
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     COMPETICIÓN Y RESULTADOS (mapa + palmarés)
     ═══════════════════════════════════════════════════════════════════════ */
  competitions: {
    title: "Competición y Resultados",
    resultsTitle: "Nuestro Palmarés Histórico",
    revealHint: "Ver detalle",
    formula: {
      subtitle: "El terreno donde la ingeniería se pone a prueba contra el cronómetro.",
      mapTitle: "Mapa del Tour Europeo",
      legendIsc: "Participación ISC",
      legendOther: "Eventos Oficiales FS",
      highlightLabel: "Hito ISC:",
      futureGoalLabel: "Próximo objetivo",
      /* Bloque destacado sobre el palmarés (solo en la sección de coche). */
      bestSeason: {
        tag: "TEMPORADA 2025 / 2026",
        title: "La mejor temporada de nuestra historia",
        text: "El IFS-08 ha llevado al ISC Racing Team más lejos que nunca. La octava generación del monoplaza consolida el paquete aerodinámico estrenado con el IFS-07 y firma nuestros mejores registros hasta la fecha, cerrando la temporada más completa desde que el equipo empezó a competir en 2017.",
        stats: [
          { value: "IFS-08", label: "El monoplaza más rápido y ligero" },
          { value: "222 kg", label: "Peso del monoplaza" },
          { value: "3,2 s", label: "0-100 km/h" },
        ],
      },
    },
    moto: {
      subtitle: "El terreno donde la ingeniería eléctrica se pone a prueba sobre dos ruedas.",
      mapTitle: "Mapa de Competición",
      legendIsc: "Sede Principal ISC",
      legendOther: "Circuitos en Evaluación",
      highlightLabel: "Hito ISC Moto:",
      futureGoalLabel: "Próximo objetivo / Test",
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     NEWSLETTERS / ACTUALIDAD
     (Sección oculta temporalmente del menú — ver src/data/navigation.js)
     ═══════════════════════════════════════════════════════════════════════ */
  articles: {
    title: "Newsletters",
    readPdf: "LEER PDF",
    viewerTitle: "Visor PDF",
    coverAlt: "Newsletter",
    formula: {
      subtitle: "Toda la actualidad, avances y reportajes del equipo temporada a temporada.",
    },
    moto: {
      subtitle: "Sigue el desarrollo de nuestro prototipo eléctrico mes a mes.",
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     PATROCINADORES (listado por niveles)
     ═══════════════════════════════════════════════════════════════════════ */
  sponsors: {
    title: "Nuestros Patrocinadores",
    button: "PATROCÍNANOS",
    ctaTitle: "¿Quieres ver tu marca aquí?",
    formula: {
      introText: (
        <>
          El proyecto <strong>ISC Racing Team</strong> es una realidad gracias al
          apoyo de empresas líderes que apuestan por el talento joven y la
          innovación.
          <br />
          <br />
          Su colaboración técnica y económica nos permite diseñar, fabricar y
          competir al más alto nivel internacional.
          <br />
          <strong>¡Gracias por acompañarnos en cada curva!</strong>
        </>
      ),
      ctaText: "Únete a nuestro equipo e impulsa la innovación.",
    },
    moto: {
      introText: (
        <>
          El proyecto <strong>ISC MS Racing Team</strong> es una realidad gracias
          al apoyo de empresas líderes que apuestan por el talento joven y la
          innovación sobre dos ruedas.
          <br />
          <br />
          Su colaboración técnica y económica nos permite diseñar, fabricar y
          competir con nuestro prototipo eléctrico en MotorLand Aragón.
          <br />
          <strong>¡Gracias por acompañarnos en cada curva!</strong>
        </>
      ),
      ctaText: "Únete a nuestro equipo e impulsa la innovación eléctrica.",
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     CONVIÉRTASE EN PATROCINADOR (página comercial)
     ═══════════════════════════════════════════════════════════════════════ */
  sponsorUs: {
    title: "Conviértase en Patrocinador",
    headerCta: "Quiero colaborar",
    tiersTitle: "Categorías de Patrocinio",
    emailButton: "CONTACTAR POR EMAIL",
    formula: {
      headerSubtitle: "Asóciese con el ISC Racing Team e invierta en innovación, ingeniería y talento universitario.",
      valueProps: [
        { value: "+80", label: "Ingenieros en el equipo" },
        { value: "100%", label: "Monoplaza eléctrico" },
        { value: "ICAI · ICADE", label: "Talento multidisciplinar" },
        { value: "Europa", label: "Competición internacional" },
      ],
      pitchTitle: "Su marca, en el corazón de la ingeniería del futuro",
      pitchText: "Cada temporada, decenas de ingenieros llevan su marca a los circuitos más exigentes de Europa ante miles de profesionales del sector de la automoción, la energía y la tecnología. Asociarse con el ISC Racing Team es invertir en visibilidad de alto valor, en I+D real y en la próxima generación de talento que su empresa querrá contratar.",
      introTitle: "Una alianza estratégica con retorno medible",
      introParagraphs: (
        <>
          <p>
            El ISC Racing Team busca socios corporativos que compartan una visión a largo plazo basada en la innovación tecnológica y el desarrollo del talento. Más que un patrocinio, proponemos una colaboración estratégica con objetivos definidos y resultados cuantificables.
          </p>
          <p>
            Establecemos acuerdos técnico-corporativos en los que su empresa aporta recursos económicos o técnicos y el equipo retorna valor tangible: presencia de marca en un entorno de alto rendimiento, acceso directo a futuros ingenieros y asociación con un proyecto de excelencia académica.
          </p>
          <p>
            Formula Student es la mayor competición internacional de ingeniería universitaria. Su proyección en el sector industrial y tecnológico convierte al equipo en una plataforma de comunicación idónea para compañías que deseen reforzar su posicionamiento de marca en el ámbito del motorsport y la movilidad.
          </p>
        </>
      ),
      benefits: [
        { label: "Visibilidad de marca", text: "Presencia de su logotipo en el monoplaza, equipamiento y eventos ante un público técnico y especializado." },
        { label: "Acceso a talento", text: "Contacto directo con ingenieros en formación de ICAI e ICADE para sus procesos de selección y prácticas." },
        { label: "Innovación e I+D", text: "Asociación con el desarrollo de tecnología eléctrica y autónoma de vanguardia." },
        { label: "Responsabilidad corporativa", text: "Inversión en la formación de futuros profesionales y en la excelencia universitaria." },
        { label: "Posicionamiento", text: "Difusión continua en nuestras campañas, redes sociales y apariciones en medios." },
      ],
      tiers: [
        {
          name: "TITLE SPONSOR",
          premium: true,
          items: [
            "Visibilidad máxima y prioritaria en el monoplaza y equipamiento oficial.",
            "Oportunidades exclusivas de branding y personalización del vehículo.",
            "Acceso prioritario al talento (CV Book) y a eventos privados del equipo.",
            "Difusión premium en todas nuestras campañas y redes sociales.",
          ],
        },
        {
          name: "MAIN SPONSOR",
          items: [
            "Alta visibilidad en puntos clave del monoplaza y equipamiento.",
            "Contacto directo con nuestros ingenieros y acceso al talento del equipo.",
            "Participación destacada en nuestros eventos y exhibiciones.",
            "Presencia constante en nuestros canales de comunicación corporativa.",
          ],
        },
        {
          name: "OFFICIAL SPONSOR",
          items: [
            "Presencia de marca representativa en el monoplaza y equipamiento.",
            "Invitación a eventos clave y exhibiciones del equipo en pista.",
            "Difusión regular en nuestras redes sociales y plataformas digitales.",
          ],
          note: "*El patrocinio de software y herramientas se incluye en esta categoría según su alcance de colaboración.",
        },
        {
          name: "ASSOCIATE SPONSOR",
          items: [
            "Visibilidad de marca en los activos de competición del equipo.",
            "Menciones y presencia en nuestras campañas de comunicación.",
          ],
        },
      ],
      ctaTitle: "Construyamos una colaboración a la altura de su marca",
      ctaText: "Contacte con nuestro departamento de Alianzas para concertar una reunión y diseñar juntos un acuerdo de patrocinio adaptado a sus objetivos.",
    },
    moto: {
      headerSubtitle: "Asóciese con la división MotoStudent del ISC Racing Team e invierta en movilidad eléctrica y talento de ingeniería.",
      valueProps: [
        { value: "20", label: "Ingenieros en el equipo" },
        { value: "100%", label: "Prototipo eléctrico" },
        { value: "ICAI · ICADE", label: "Talento multidisciplinar" },
        { value: "MotorLand", label: "Competición internacional" },
      ],
      pitchTitle: "Lleve su marca a la vanguardia de la movilidad eléctrica",
      pitchText: "Nuestro prototipo eléctrico compite en MotorLand Aragón ante el sector de las dos ruedas, la energía y la ingeniería. Patrocinar a la división MotoStudent del ISC Racing Team es asociar su empresa a la innovación en propulsión eléctrica y conectar directamente con el talento que diseñará la movilidad del futuro.",
      introTitle: "Una alianza estratégica con retorno medible",
      introParagraphs: (
        <>
          <p>
            La división MotoStudent del ISC Racing Team busca socios corporativos comprometidos con la movilidad eléctrica y el desarrollo del talento universitario. Proponemos una colaboración estratégica con objetivos definidos y resultados cuantificables, no un simple patrocinio.
          </p>
          <p>
            Establecemos acuerdos técnico-corporativos en los que su empresa aporta recursos económicos o técnicos y el equipo retorna valor tangible: presencia de marca internacional, acceso directo a ingenieros altamente cualificados de ICAI e ICADE y asociación con un proyecto de innovación eléctrica.
          </p>
          <p>
            MotoStudent es una competición internacional disputada en el circuito de MotorLand Aragón. Su entorno tecnológico de alto nivel la convierte en una plataforma idónea para que su marca refuerce su posicionamiento en el sector de la movilidad de dos ruedas.
          </p>
        </>
      ),
      benefits: [
        { label: "Visibilidad de marca", text: "Presencia de su logotipo en el prototipo, equipamiento y eventos ante un público técnico y especializado." },
        { label: "Acceso a talento", text: "Contacto directo con ingenieros en formación de ICAI e ICADE para sus procesos de selección y prácticas." },
        { label: "Innovación eléctrica", text: "Asociación con el desarrollo de tecnología de propulsión eléctrica y gestión de baterías." },
        { label: "Responsabilidad corporativa", text: "Inversión en la formación de futuros profesionales y en la excelencia universitaria." },
        { label: "Posicionamiento", text: "Difusión continua en nuestras campañas, redes sociales y apariciones en medios." },
      ],
      tiers: [
        {
          name: "TITLE SPONSOR",
          premium: true,
          items: [
            "Visibilidad máxima y prioritaria en el carenado y equipamiento oficial.",
            "Oportunidades exclusivas de branding y personalización del prototipo.",
            "Acceso prioritario al talento (CV Book) y a eventos privados del equipo.",
            "Difusión premium en todas nuestras campañas y redes sociales.",
          ],
        },
        {
          name: "MAIN SPONSOR",
          items: [
            "Alta visibilidad en puntos clave del prototipo y equipamiento.",
            "Contacto directo con nuestros ingenieros y acceso al talento del equipo.",
            "Participación destacada en nuestros eventos y exhibiciones.",
            "Presencia constante en nuestros canales de comunicación corporativa.",
          ],
        },
        {
          name: "OFFICIAL SPONSOR",
          items: [
            "Presencia de marca representativa en el prototipo y equipamiento.",
            "Invitación a eventos clave y exhibiciones del equipo en pista.",
            "Difusión regular en nuestras redes sociales y plataformas digitales.",
          ],
          note: "*El patrocinio de software y componentes técnicos se incluye en esta categoría según su alcance de colaboración.",
        },
        {
          name: "ASSOCIATE SPONSOR",
          items: [
            "Visibilidad de marca en los activos de competición del equipo.",
            "Menciones y presencia en nuestras campañas de comunicación.",
          ],
        },
      ],
      ctaTitle: "Construyamos una colaboración a la altura de su marca",
      ctaText: "Contacte con nuestro departamento de Alianzas para concertar una reunión y diseñar un acuerdo de patrocinio adaptado a los objetivos de su empresa.",
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     RECRUITMENT / ÚNETE
     ═══════════════════════════════════════════════════════════════════════ */
  joinUs: {
    formTitle: "Formulario de Inscripción",
    fallbackQuestion: "¿No puedes visualizar bien el formulario?",
    openNewTab: "ABRIR EN UNA PESTAÑA NUEVA",
    closedTitle: "Proceso de selección cerrado temporalmente",
    closedSub: (
      <>
        Estamos preparando la próxima convocatoria. Cuando reabramos las
        candidaturas lo anunciaremos <strong>aquí mismo</strong> y en
        nuestras redes sociales. Te invitamos a seguirnos para no perderte
        la apertura.
      </>
    ),
    followUs: "Síguenos para enterarte",
    whatWeLookFor: "¿Qué buscamos?",
    departments: "Nuestros Departamentos",
    formula: {
      headerTitle: "ÚNETE AL DESAFÍO",
      headerSubtitle: "Buscamos mentes inquietas, apasionadas por el motorsport y con ganas de aprender trabajando en equipo.",
      formIntro: "Completa el formulario oficial para iniciar tu proceso de selección con nosotros.",
      iframeTitle: "Formulario Recruitment ISC",
      closedText: "Actualmente no tenemos ningún proceso de selección abierto para el equipo.",
      info: (
        <>
          <h2>¿Qué buscamos?</h2>
          <p>
            El <strong>ISC FS Racing Team</strong> está formado por más de 80 estudiantes de grado y máster. Buscamos talento joven y multidisciplinar procedente de todas las facultades de la universidad (<strong>ICAI</strong>, <strong>ICADE</strong> y <strong>CIHS</strong>):
          </p>

          <ul style={{ marginBottom: "1.5rem" }}>
            <li><strong>ICAI:</strong> Ingeniería en Tecnologías Industriales, Ingeniería de Telecomunicación, Ingeniería Matemática e Inteligencia Artificial, y sus respectivos másteres.</li>
            <li><strong>ICADE:</strong> Administración y Dirección de Empresas (ADE), Business Analytics, Derecho, y todos sus programas de dobles grados.</li>
            <li><strong>CIHS (Ciencias Humanas y Sociales):</strong> Comunicación Global, Relaciones Internacionales, Traducción, y otros perfiles estratégicos que aportan un gran valor a la gestión corporativa y comunicación del equipo.</li>
          </ul>

          <p>
            Entrar al proyecto supone vivir una experiencia única, asumiendo responsabilidades en un entorno similar al mundo laboral, e innovando de primera mano en <strong>movilidad eléctrica y autónoma</strong>.
          </p>

          <h3>Nuestros Departamentos</h3>
          <ul>
            <li><strong>Mecánica:</strong> Chassis &amp; Structural, Braking &amp; Steering, Suspension &amp; Dynamics, Aero &amp; Cooling.</li>
            <li><strong>Eléctrica (Batteries y Powertrain):</strong> Diseño del pack de baterías, gestión del BMS, motor eléctrico, transmisión y refrigeración.</li>
            <li><strong>Electrónica:</strong> Control Electronics, Electronic Subsystems, Telemetry, Integration.</li>
            <li><strong>Driverless:</strong> Desarrollo de software, algoritmos, percepción e implementación en el mundo real.</li>
            <li><strong>Management &amp; Statics:</strong> Operations, Alliances, Media &amp; Marketing, Business Plan, Cost Report, Engineering Design.</li>
          </ul>
        </>
      ),
    },
    moto: {
      headerTitle: "ÚNETE A MOTOSTUDENT",
      headerSubtitle: "Buscamos mentes inquietas, apasionadas por el motociclismo y listas para diseñar el futuro de las dos ruedas.",
      formIntro: "Completa el formulario para iniciar tu proceso de selección con el equipo de MotoStudent.",
      iframeTitle: "Formulario Recruitment ISC Moto",
      closedText: "Actualmente no tenemos ningún proceso de selección abierto para el equipo de motos.",
      info: (
        <>
          <h2>¿Qué buscamos?</h2>
          <p>
            El <strong>ISC MS Racing Team</strong> está formado por una selección de 20 estudiantes de grado y máster. Buscamos talento multidisciplinar procedente principalmente de <strong>ICAI</strong> e <strong>ICADE</strong>:
          </p>

          <ul style={{ marginBottom: "1.5rem" }}>
            <li><strong>ICAI:</strong> Ingeniería Mecánica, Eléctrica, Telecomunicaciones, Tecnologías Industriales y sus respectivos másteres.</li>
            <li><strong>ICADE:</strong> Administración y Dirección de Empresas (ADE), Business Analytics y programas de dobles grados.</li>
          </ul>

          <p>
            Entrar al proyecto supone asumir la responsabilidad de concebir desde cero un prototipo real, innovando en el exigente campo de la <strong>movilidad eléctrica sobre dos ruedas</strong> para competir en MotorLand.
          </p>

          <h3>Nuestros Departamentos</h3>
          <ul>
            <li><strong>Estructura y Parte Ciclo:</strong> Diseño del chasis multitubular, optimización del basculante, suspensión, frenos y dirección.</li>
            <li><strong>Powertrain:</strong> Integración del motor eléctrico, transmisión, refrigeración térmica y cálculo de potencia.</li>
            <li><strong>Electrónica y Baterías:</strong> Diseño del pack de baterías, gestión del BMS, cableado, telemetría y sensores.</li>
            <li><strong>Management:</strong> Búsqueda de patrocinadores, operaciones logísticas, Business Plan corporativo y Media &amp; Marketing.</li>
          </ul>
        </>
      ),
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     CONTACTO
     ═══════════════════════════════════════════════════════════════════════ */
  contact: {
    title: "Contacta con Nosotros",
    directContact: "Contacto Directo",
    phoneLabel: "Teléfono (WhatsApp/Llamadas):",
    emailLabel: "Correo Electrónico:",
    sitesTitle: "Nuestras Sedes",
    workshopTitle: "Taller & Garage (Trabajo Técnico)",
    institutionalTitle: "Sede Institucional (ICAI)",
    dossierTitle: "Dossier de Patrocinio",
    versionEs: "VERSIÓN ESPAÑOL",
    versionEn: "ENGLISH VERSION",
    followTitle: "Síguenos",
    mapWorkshopHeading: "Ubicación Taller (Boadilla)",
    mapIcaiHeading: "Ubicación ICAI (Madrid)",
    faqTitle: "Preguntas Frecuentes",
    formula: {
      headerSubtitle: "¿Tienes alguna duda o propuesta? Estamos aquí para escucharte.",
      dossierText: "Descarga nuestro dossier oficial con toda la información de la temporada y opciones de colaboración.",
      mapWorkshopTitle: "Mapa Taller",
      mapIcaiTitle: "Mapa ICAI",
      faqs: [
        {
          q: "¿Cómo puedo unirme al equipo?",
          a: <>El proceso de selección suele abrirse en septiembre y enero. Visita la sección <a href="/recruitment">Recruitment</a> para ver si el plazo está abierto.</>,
        },
        {
          q: "¿Buscáis patrocinadores?",
          a: <>¡Siempre! Si representas a una empresa interesada en apoyar el talento joven, descarga nuestro <strong>Dossier</strong> o llámanos.</>,
        },
        {
          q: "¿Organizan visitas?",
          a: "Sí, organizamos jornadas de puertas abiertas puntuales. Anunciamos las fechas en nuestro Instagram.",
        },
      ],
    },
    moto: {
      headerSubtitle: "¿Tienes alguna duda o propuesta para MotoStudent? Estamos aquí para escucharte.",
      dossierText: "Descarga nuestro dossier oficial con toda la información técnica del prototipo y opciones de colaboración.",
      mapWorkshopTitle: "Mapa Taller Moto",
      mapIcaiTitle: "Mapa ICAI Moto",
      faqs: [
        {
          q: "¿Cómo puedo unirme al equipo?",
          a: <>El proceso de selección suele abrirse en septiembre y enero. Visita la sección <a href="/moto/recruitment">Recruitment</a> para ver si el plazo está abierto.</>,
        },
        {
          q: "¿Buscáis patrocinadores?",
          a: <>¡Siempre! Si representas a una empresa interesada en apoyar la innovación eléctrica en dos ruedas, descarga nuestro <strong>Dossier</strong> o llámanos.</>,
        },
        {
          q: "¿Organizan visitas?",
          a: "Sí, organizamos jornadas de puertas abiertas puntuales en nuestro taller. Anunciamos las fechas en nuestro Instagram.",
        },
      ],
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     LA COMPETICIÓN (páginas "Formula Student" y "MotoStudent")
     ═══════════════════════════════════════════════════════════════════════ */
  disciplines: {
    staticTitle: "Pruebas Estáticas",
    dynamicTitle: "Pruebas Dinámicas",
    formula: {
      title: "Formula Student",
      description: "Formula Student es la competición de ingeniería automovilística más prestigiosa a nivel universitario. Equipos de todo el mundo diseñan, construyen y compiten con sus propios monoplazas, enfrentándose a desafíos que evalúan no solo la velocidad, sino la excelencia en ingeniería.",
      staticSubtitle: "Se evalúa la capacidad del equipo para justificar el diseño, gestionar recursos y vender el proyecto.",
      staticCards: [
        { title: "Engineering Design", text: "Análisis de la justificación técnica detrás de cada pieza, validando el diseño con datos reales." },
        { title: "Cost & Manufacturing", text: "Desglose detallado del coste de cada componente y optimización de procesos de fabricación." },
        { title: "Business Plan", text: "Presentación de un modelo de negocio viable ante inversores para comercializar el prototipo." },
      ],
      dynamicSubtitle: "El monoplaza demuestra su rendimiento real en pista.",
      dynamicCards: [
        { title: "Acceleration", text: "75 metros en línea recta desde parado." },
        { title: "Skidpad", text: "Circuito en 8 para medir aceleración lateral." },
        { title: "Autocross", text: "Vuelta cronometrada para calificar." },
        { title: "Endurance", text: "22 km de resistencia y fiabilidad." },
        { title: "Efficiency", text: "Consumo energético durante el Endurance." },
      ],
      stats: [
        { end: 16, label: "EDICIONES" },
        { end: 1650, label: "MIEMBROS DE EQUIPO" },
        { end: 250, label: "VOLUNTARIOS" },
      ],
      videoTitle: "Vídeo de Formula Student",
      galleryStaticAlt: "ISC Formula Student",
      galleryDynamicAlt: "ISC Formula Student en pista",
    },
    moto: {
      title: "MotoStudent",
      description: "MotoStudent es la competición internacional de motociclismo más desafiante a nivel universitario. Equipos de todo el mundo diseñan, fabrican y ponen a prueba prototipos de competición. Nosotros competimos en la categoría 100% Eléctrica.",
      staticSubtitle: "Se evalúa la viabilidad del proyecto como si fuéramos una empresa real del sector de las dos ruedas.",
      staticCards: [
        { title: "Engineering Design", text: "Evaluación exhaustiva del diseño estructural, tren de potencia eléctrico y decisiones técnicas de la motocicleta." },
        { title: "Innovation", text: "Análisis de las soluciones tecnológicas más vanguardistas y únicas desarrolladas por el equipo para marcar la diferencia." },
        { title: "Business Plan", text: "Presentación de un modelo de negocio viable para la fabricación en serie y comercialización del prototipo." },
      ],
      dynamicSubtitle: "El prototipo demuestra su rendimiento en el asfalto de MotorLand.",
      dynamicCards: [
        { title: "Brake Test", text: "Prueba de frenada crítica para certificar la seguridad antes de salir a pista." },
        { title: "Acceleration", text: "Aceleración máxima en línea recta para medir la entrega de potencia eléctrica." },
        { title: "Gymkhana", text: "Circuito de agilidad que pone a prueba la manejabilidad y la destreza del piloto." },
        { title: "Qualifying", text: "Clasificación cronometrada para definir la parrilla de salida del evento final." },
        { title: "Main Race", text: "El evento estrella: una carrera real rueda a rueda contra el resto de universidades." },
      ],
      stats: [
        { end: 7, label: "EDICIONES" },
        { end: 80, label: "UNIVERSIDADES" },
        { end: 20, label: "PAÍSES" },
      ],
      videoTitle: "Vídeo de MotoStudent",
      galleryStaticAlt: "ISC MotoStudent",
      galleryDynamicAlt: "ISC MotoStudent en pista",
    },
  },
};

export default es;
