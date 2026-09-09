// src/i18n/dictionaries/en.jsx
// ───────────────────────────────────────────────────────────────────────────
// DICTIONARY — ENGLISH
//
// This file mirrors es.jsx key by key. If you add a text to es.jsx, add the
// same key here with its English translation, otherwise the website will fall
// back to the Spanish text for that key.
// ───────────────────────────────────────────────────────────────────────────

export const en = {
  /* ═══════════════════════════════════════════════════════════════════════
     SHARED TEXTS (buttons, accessibility, repeated elements)
     ═══════════════════════════════════════════════════════════════════════ */
  common: {
    language: "Language",
    changeLanguage: "Change language",
    openMenu: "Open menu",
    scrollTop: "Back to top",
    close: "Close",
    previous: "Previous",
    next: "Next",
    enlargeImage: "Enlarge image",
    zoomedImageAlt: "Enlarged image",
    galleryPhotoAlt: "ISC team photograph",
  },

  /* ═══════════════════════════════════════════════════════════════════════
     LANDING PAGE (choose Car or Motorbike)
     ═══════════════════════════════════════════════════════════════════════ */
  landing: {
    tagline: (
      <>
        Engineering, passion and speed.
        <br />
        Choose your discipline.
      </>
    ),
  },

  /* ═══════════════════════════════════════════════════════════════════════
     FOOTER
     ═══════════════════════════════════════════════════════════════════════ */
  footer: {
    taglineFormula: "ICAI Formula Student Team",
    taglineMoto: "ICAI Moto Student Team",
    university: "ICAI · Universidad Pontificia Comillas",
    contact: "Contact Us",
  },

  /* ═══════════════════════════════════════════════════════════════════════
     HOME (Car and Motorbike)
     ═══════════════════════════════════════════════════════════════════════ */
  home: {
    whoTitle: "WHO WE ARE",
    missionTitle: "OUR MISSION",
    visionTitle: "OUR VISION",
    galleryTitle: "OUR PASSION IN PICTURES",
    presentationVideoTitle: "Presentation video",
    slideAlt: "Gallery image",

    formula: {
      heroSubtitle: "INNOVATION. SPEED. FUTURE.",
      btnTeam: "MEET THE TEAM",
      btnSponsor: "SPONSOR US",
      whoParagraphs: (
        <>
          <p className="intro-text">
            We are more than <strong>80 students</strong> from Universidad Pontificia Comillas (ICAI).
            A multidisciplinary team of mechanical and electronic engineers together with management profiles (Business Administration), united by one passion: winning on track and leading technological innovation.
          </p>
          <p>
            We design and build our Formula Student car entirely from scratch. We are betting on the future with a high-performance <strong>100% electric</strong> powertrain, an ultra-light chassis and a cutting-edge aerodynamic package.
          </p>
        </>
      ),
      highlight1: "100% Electric Vehicle",
      highlight2: "Built in-house at ICAI",
      highlight3: "International Competition",
      cadAlt: "IFS-08, the current ISC Racing Team car",
      mission: (
        <p>
          To train the engineers of the future by confronting them with real challenges.
          We nurture talent, teamwork and technical excellence
          through the most demanding motorsport competition at university level.
        </p>
      ),
      vision: (
        <p>
          To establish ourselves as a leading team in <strong>Formula Student Europe</strong>.
          To design ever more efficient vehicles and compete at the highest level on the most iconic circuits: Montmeló, Hockenheim and Varano.
        </p>
      ),
      ctaTitle: "DO YOU WANT TO BE PART OF THE STORY?",
      ctaText: "Whether you are a student looking for a challenge or a company looking for innovation.",
      ctaStudent: "JOIN AS A STUDENT",
      ctaCompany: "PARTNER AS A COMPANY",
    },

    moto: {
      heroSubtitle: "COMMITMENT. TALENT. PASSION.",
      btnTeam: "OUR TEAM",
      btnSponsor: "SPONSOR US",
      whoParagraphs: (
        <>
          <p className="intro-text">
            The <strong>ISC MS Racing Team</strong> is the MotoStudent team of Universidad Pontificia Comillas.
          </p>
          <p>
            It is made up of <strong>20 students</strong>, mostly from the ICAI School of Engineering, along with members from ICADE. Our main goal is clear: to conceive, design, build and compete at the highest level with a 100% electric motorbike.
          </p>
        </>
      ),
      highlight1: "100% Electric Motorbike",
      highlight2: "Built in-house at ICAI",
      highlight3: "International Competition",
      cadAlt: "CAD model of the motorbike",
      mission: (
        <p>
          To train the engineers of the future by confronting them with real challenges from the automotive sector.
          We nurture talent, teamwork and technical excellence
          through the most demanding university motorcycling competition in the world.
        </p>
      ),
      vision: (
        <p>
          To establish ourselves as a leading team in the <strong>MotoStudent</strong> paddock.
          To design ever more efficient electric prototypes and compete at the highest level.
        </p>
      ),
      ctaTitle: "DO YOU WANT TO BE PART OF THE PROJECT?",
      ctaText: "Whether you are a student looking for a challenge or a company betting on innovation on two wheels.",
      ctaStudent: "JOIN AS A STUDENT",
      ctaCompany: "PARTNER AS A COMPANY",
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     THE GARAGE (vehicle grid)
     ═══════════════════════════════════════════════════════════════════════ */
  garage: {
    title: "THE GARAGE",
    formula: {
      subtitle: "Pure engineering in numbers. Explore our technical history from the very beginning to the current prototype.",
      itemNoun: "Single-seater",
      ctaPrefix: "LEARN MORE ABOUT THE",
    },
    moto: {
      subtitle: "Pure engineering on two wheels. Explore the technical evolution of our electric prototypes.",
      itemNoun: "Prototype",
      ctaPrefix: "LEARN MORE ABOUT THE",
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     VEHICLE DETAIL PAGE
     ═══════════════════════════════════════════════════════════════════════ */
  detail: {
    back: "Back to the Garage",
    specsTitle: "TECHNICAL SPECIFICATIONS",
    competitionsTitle: "COMPETITION HISTORY",
    videoTitle: "THE PROTOTYPE IN ACTION",
    noCompetitions: "There is no competition data recorded for this model.",
    notFoundCar: "Single-seater not found.",
    notFoundMoto: "Prototype not found.",
    specs: {
      powertrain: "Powertrain",
      weight: "Total Weight",
      chassis: "Chassis",
      acceleration: "0-100 km/h",
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     OUR EVOLUTION (timeline)
     ═══════════════════════════════════════════════════════════════════════ */
  history: {
    title: "Our Evolution",
    continues: "The story continues",
    futureSeason: "2026 SEASON",
    futureTag: "IN DEVELOPMENT",
    teamAlt: "Team",
    formula: {
      subtitle: "Competing among the European elite since 2017.",
      vehicleAlt: "Car",
      vehicleLabel: "Single-seater",
      futureTitle: "Autonomous Innovation",
      futureBody: (
        <p>
          ISC Racing Team is leading the way towards <strong>Autonomous Mobility</strong>.
          For 2026 we are focusing our efforts on implementing the first
          <em> driverless</em> systems within Formula Student in Madrid, preparing our
          engineers for the most demanding technological challenges of the future.
        </p>
      ),
    },
    moto: {
      subtitle: "Accelerating towards the future in MotoStudent.",
      vehicleAlt: "Motorbike",
      vehicleLabel: "Prototype",
      futureTitle: "The Next Generation",
      futureBody: (
        <p>
          The team is currently designing the <strong>IM-06</strong>.
          Our goal for the next edition at MotorLand Aragón is to implement real-time telemetry and drastically reduce the overall weight in order to fight for an international podium.
        </p>
      ),
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     OUR TEAM (org chart)
     ═══════════════════════════════════════════════════════════════════════ */
  team: {
    title: "Our Team",
    formula: {
      subtitle: "Driven by design, united by speed.",
      stats: [
        { target: 1, label: "Team Leader" },
        { target: 4, label: "Technical Directors" },
        { target: 15, label: "Heads & Co-Leads" },
        { target: 83, label: "Engineers" },
      ],
      description: (
        <>
          <p>ISC FS Racing Team is currently made up of 83 students.</p>
          <p>Organisationally, it is led by a <strong>Team Leader</strong>, responsible for defining the overall strategy and the goals of the season on the technical, financial and communication fronts.</p>
          <p>The <strong>Technical Directors</strong> reflect our drive for specialisation by area. They oversee the detailed verification of every technical aspect as well as the progress of each department.</p>
          <p>The <strong>Department Heads</strong> develop a specific area of the car and lead a team of engineers to carry out all of those tasks.</p>
        </>
      ),
    },
    moto: {
      subtitle: "Driven by innovation, united by speed on two wheels.",
      stats: [
        { target: 1, label: "Team Leader" },
        { target: 2, label: "Directors" },
        { target: 2, label: "Department Heads" },
        { target: 13, label: "Engineers" },
      ],
      description: (
        <>
          <p>The <strong>ISC MS Racing Team</strong> division is currently made up of 20 students from the ICAI and ICADE schools.</p>
          <p>Organisationally, it is led by a <strong>Team Leader</strong>, responsible for defining the overall strategy and the goals for MotorLand Aragón on the technical, financial and communication fronts.</p>
          <p>The <strong>Technical Directors</strong> reflect our drive for specialisation by area. They oversee the detailed verification of every technical aspect of the electric motorbike.</p>
          <p>The <strong>Department Heads</strong> develop a specific area of the prototype and lead a team of engineers to carry out all of those tasks.</p>
        </>
      ),
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     COMPETITION AND RESULTS (map + honours)
     ═══════════════════════════════════════════════════════════════════════ */
  competitions: {
    title: "Competition and Results",
    resultsTitle: "Our Track Record",
    revealHint: "See details",
    formula: {
      subtitle: "The arena where engineering is put to the test against the clock.",
      mapTitle: "European Tour Map",
      legendIsc: "ISC Participation",
      legendOther: "Official FS Events",
      highlightLabel: "ISC milestone:",
      futureGoalLabel: "Next goal",
      /* Highlighted block above the track record (car section only). */
      bestSeason: {
        tag: "2025 / 2026 SEASON",
        title: "The best season in our history",
        text: "The IFS-08 has taken the ISC Racing Team further than ever. We made our debut at Formula Student Austria, at the Red Bull Ring, and for the first time in our history completed every dynamic event — skidpad, acceleration, autocross and endurance — at two different international competitions. We also ran the Driverless project in testing for the first time.",
        stats: [
          { value: "2", label: "International competitions completed" },
          { value: "222 kg", label: "Car weight" },
          { value: "Driverless", label: "First implementation in testing" },
        ],
      },
    },
    moto: {
      subtitle: "The arena where electric engineering is put to the test on two wheels.",
      mapTitle: "Competition Map",
      legendIsc: "ISC Main Venue",
      legendOther: "Circuits Under Review",
      highlightLabel: "ISC Moto milestone:",
      futureGoalLabel: "Next goal / Test",
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     NEWSLETTERS / NEWS
     (Section temporarily hidden from the menu — see src/data/navigation.js)
     ═══════════════════════════════════════════════════════════════════════ */
  articles: {
    title: "Newsletters",
    readPdf: "READ PDF",
    viewerTitle: "PDF viewer",
    coverAlt: "Newsletter",
    formula: {
      subtitle: "All the news, progress and features from the team, season after season.",
    },
    moto: {
      subtitle: "Follow the development of our electric prototype month by month.",
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     SPONSORS (listing by tier)
     ═══════════════════════════════════════════════════════════════════════ */
  sponsors: {
    title: "Our Sponsors",
    button: "SPONSOR US",
    ctaTitle: "Would you like to see your brand here?",
    formula: {
      introText: (
        <>
          The <strong>ISC Racing Team</strong> project is a reality thanks to the
          support of leading companies that believe in young talent and
          innovation.
          <br />
          <br />
          Their technical and financial collaboration allows us to design, build and
          compete at the highest international level.
          <br />
          <strong>Thank you for being with us through every corner!</strong>
        </>
      ),
      ctaText: "Join our team and drive innovation forward.",
    },
    moto: {
      introText: (
        <>
          The <strong>ISC MS Racing Team</strong> project is a reality thanks to
          the support of leading companies that believe in young talent and
          innovation on two wheels.
          <br />
          <br />
          Their technical and financial collaboration allows us to design, build and
          compete with our electric prototype at MotorLand Aragón.
          <br />
          <strong>Thank you for being with us through every corner!</strong>
        </>
      ),
      ctaText: "Join our team and drive electric innovation forward.",
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     BECOME A SPONSOR (commercial page)
     ═══════════════════════════════════════════════════════════════════════ */
  sponsorUs: {
    title: "Become a Sponsor",
    headerCta: "I want to collaborate",
    tiersTitle: "Sponsorship Categories",
    emailButton: "CONTACT US BY EMAIL",
    formula: {
      headerSubtitle: "Partner with ISC Racing Team and invest in innovation, engineering and university talent.",
      valueProps: [
        { value: "+80", label: "Engineers on the team" },
        { value: "100%", label: "Electric single-seater" },
        { value: "ICAI · ICADE", label: "Multidisciplinary talent" },
        { value: "Europe", label: "International competition" },
      ],
      pitchTitle: "Your brand at the heart of the engineering of the future",
      pitchText: "Every season, dozens of engineers take your brand to the most demanding circuits in Europe, in front of thousands of professionals from the automotive, energy and technology sectors. Partnering with ISC Racing Team means investing in high-value visibility, in real R&D and in the next generation of talent your company will want to hire.",
      introTitle: "A strategic partnership with measurable returns",
      introParagraphs: (
        <>
          <p>
            ISC Racing Team is looking for corporate partners who share a long-term vision built on technological innovation and talent development. More than a sponsorship, we propose a strategic collaboration with defined objectives and quantifiable results.
          </p>
          <p>
            We set up technical and corporate agreements in which your company contributes financial or technical resources and the team returns tangible value: brand presence in a high-performance environment, direct access to future engineers and association with a project of academic excellence.
          </p>
          <p>
            Formula Student is the largest international university engineering competition. Its reach across the industrial and technology sectors makes the team an ideal communication platform for companies wishing to strengthen their brand positioning in motorsport and mobility.
          </p>
        </>
      ),
      benefits: [
        { label: "Brand visibility", text: "Your logo on the car, on team kit and at events, in front of a technical, specialised audience." },
        { label: "Access to talent", text: "Direct contact with engineering students from ICAI and ICADE for your recruitment and internship programmes." },
        { label: "Innovation and R&D", text: "Association with the development of cutting-edge electric and autonomous technology." },
        { label: "Corporate responsibility", text: "Investment in the training of future professionals and in university excellence." },
        { label: "Positioning", text: "Ongoing exposure across our campaigns, social media and press appearances." },
      ],
      tiers: [
        {
          name: "TITLE SPONSOR",
          premium: true,
          items: [
            "Maximum, priority visibility on the car and official team kit.",
            "Exclusive branding opportunities and vehicle customisation.",
            "Priority access to talent (CV Book) and to private team events.",
            "Premium exposure across all our campaigns and social media.",
          ],
        },
        {
          name: "MAIN SPONSOR",
          items: [
            "High visibility in key areas of the car and team kit.",
            "Direct contact with our engineers and access to the team's talent.",
            "Prominent participation in our events and exhibitions.",
            "Constant presence across our corporate communication channels.",
          ],
        },
        {
          name: "OFFICIAL SPONSOR",
          items: [
            "Representative brand presence on the car and team kit.",
            "Invitation to key events and on-track team exhibitions.",
            "Regular exposure on our social media and digital platforms.",
          ],
          note: "*Software and tooling sponsorship falls within this category depending on the scope of the collaboration.",
        },
        {
          name: "ASSOCIATE SPONSOR",
          items: [
            "Brand visibility on the team's competition assets.",
            "Mentions and presence in our communication campaigns.",
          ],
        },
      ],
      ctaTitle: "Let's build a partnership worthy of your brand",
      ctaText: "Get in touch with our Alliances department to arrange a meeting and design together a sponsorship agreement tailored to your objectives.",
    },
    moto: {
      headerSubtitle: "Partner with the MotoStudent division of ISC Racing Team and invest in electric mobility and engineering talent.",
      valueProps: [
        { value: "20", label: "Engineers on the team" },
        { value: "100%", label: "Electric prototype" },
        { value: "ICAI · ICADE", label: "Multidisciplinary talent" },
        { value: "MotorLand", label: "International competition" },
      ],
      pitchTitle: "Take your brand to the forefront of electric mobility",
      pitchText: "Our electric prototype competes at MotorLand Aragón in front of the two-wheel, energy and engineering sectors. Sponsoring the MotoStudent division of ISC Racing Team means associating your company with innovation in electric propulsion and connecting directly with the talent that will design the mobility of the future.",
      introTitle: "A strategic partnership with measurable returns",
      introParagraphs: (
        <>
          <p>
            The MotoStudent division of ISC Racing Team is looking for corporate partners committed to electric mobility and the development of university talent. We propose a strategic collaboration with defined objectives and quantifiable results, not a simple sponsorship.
          </p>
          <p>
            We set up technical and corporate agreements in which your company contributes financial or technical resources and the team returns tangible value: international brand presence, direct access to highly qualified engineers from ICAI and ICADE, and association with an electric innovation project.
          </p>
          <p>
            MotoStudent is an international competition held at the MotorLand Aragón circuit. Its high-level technological environment makes it an ideal platform for your brand to strengthen its positioning in the two-wheel mobility sector.
          </p>
        </>
      ),
      benefits: [
        { label: "Brand visibility", text: "Your logo on the prototype, on team kit and at events, in front of a technical, specialised audience." },
        { label: "Access to talent", text: "Direct contact with engineering students from ICAI and ICADE for your recruitment and internship programmes." },
        { label: "Electric innovation", text: "Association with the development of electric propulsion technology and battery management." },
        { label: "Corporate responsibility", text: "Investment in the training of future professionals and in university excellence." },
        { label: "Positioning", text: "Ongoing exposure across our campaigns, social media and press appearances." },
      ],
      tiers: [
        {
          name: "TITLE SPONSOR",
          premium: true,
          items: [
            "Maximum, priority visibility on the fairing and official team kit.",
            "Exclusive branding opportunities and prototype customisation.",
            "Priority access to talent (CV Book) and to private team events.",
            "Premium exposure across all our campaigns and social media.",
          ],
        },
        {
          name: "MAIN SPONSOR",
          items: [
            "High visibility in key areas of the prototype and team kit.",
            "Direct contact with our engineers and access to the team's talent.",
            "Prominent participation in our events and exhibitions.",
            "Constant presence across our corporate communication channels.",
          ],
        },
        {
          name: "OFFICIAL SPONSOR",
          items: [
            "Representative brand presence on the prototype and team kit.",
            "Invitation to key events and on-track team exhibitions.",
            "Regular exposure on our social media and digital platforms.",
          ],
          note: "*Software and technical component sponsorship falls within this category depending on the scope of the collaboration.",
        },
        {
          name: "ASSOCIATE SPONSOR",
          items: [
            "Brand visibility on the team's competition assets.",
            "Mentions and presence in our communication campaigns.",
          ],
        },
      ],
      ctaTitle: "Let's build a partnership worthy of your brand",
      ctaText: "Get in touch with our Alliances department to arrange a meeting and design a sponsorship agreement tailored to your company's objectives.",
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     RECRUITMENT / JOIN US
     ═══════════════════════════════════════════════════════════════════════ */
  joinUs: {
    formTitle: "Application Form",
    fallbackQuestion: "Having trouble viewing the form?",
    openNewTab: "OPEN IN A NEW TAB",
    closedTitle: "Applications are temporarily closed",
    closedSub: (
      <>
        We are preparing the next recruitment round. When applications reopen we
        will announce it <strong>right here</strong> and on our social media
        channels. Follow us so you don't miss the opening.
      </>
    ),
    followUs: "Follow us to find out first",
    whatWeLookFor: "What are we looking for?",
    departments: "Our Departments",
    formula: {
      headerTitle: "JOIN THE CHALLENGE",
      headerSubtitle: "We are looking for curious minds, passionate about motorsport and eager to learn by working as a team.",
      formIntro: "Fill in the official form to start your application process with us.",
      iframeTitle: "ISC Recruitment Form",
      closedText: "We do not currently have any open recruitment process for the team.",
      info: (
        <>
          <h2>What are we looking for?</h2>
          <p>
            The <strong>ISC FS Racing Team</strong> is made up of more than 80 undergraduate and master's students. We look for young, multidisciplinary talent from every school of the university (<strong>ICAI</strong>, <strong>ICADE</strong> and <strong>CIHS</strong>):
          </p>

          <ul style={{ marginBottom: "1.5rem" }}>
            <li><strong>ICAI:</strong> Industrial Technologies Engineering, Telecommunications Engineering, Mathematical Engineering and Artificial Intelligence, and their respective master's degrees.</li>
            <li><strong>ICADE:</strong> Business Administration and Management, Business Analytics, Law, and all of their dual-degree programmes.</li>
            <li><strong>CIHS (Human and Social Sciences):</strong> Global Communication, International Relations, Translation, and other strategic profiles that bring great value to the team's corporate management and communication.</li>
          </ul>

          <p>
            Joining the project means living a unique experience, taking on responsibilities in an environment close to the professional world, and innovating first-hand in <strong>electric and autonomous mobility</strong>.
          </p>

          <h3>Our Departments</h3>
          <ul>
            <li><strong>Mechanical:</strong> Chassis &amp; Structural, Braking &amp; Steering, Suspension &amp; Dynamics, Aero &amp; Cooling.</li>
            <li><strong>Electrical (Batteries and Powertrain):</strong> Battery pack design, BMS management, electric motor, transmission and cooling.</li>
            <li><strong>Electronics:</strong> Control Electronics, Electronic Subsystems, Telemetry, Integration.</li>
            <li><strong>Driverless:</strong> Software development, algorithms, perception and real-world implementation.</li>
            <li><strong>Management &amp; Statics:</strong> Operations, Alliances, Media &amp; Marketing, Business Plan, Cost Report, Engineering Design.</li>
          </ul>
        </>
      ),
    },
    moto: {
      headerTitle: "JOIN MOTOSTUDENT",
      headerSubtitle: "We are looking for curious minds, passionate about motorcycling and ready to design the future of two wheels.",
      formIntro: "Fill in the form to start your application process with the MotoStudent team.",
      iframeTitle: "ISC Moto Recruitment Form",
      closedText: "We do not currently have any open recruitment process for the motorbike team.",
      info: (
        <>
          <h2>What are we looking for?</h2>
          <p>
            The <strong>ISC MS Racing Team</strong> is made up of a selected group of 20 undergraduate and master's students. We look for multidisciplinary talent coming mainly from <strong>ICAI</strong> and <strong>ICADE</strong>:
          </p>

          <ul style={{ marginBottom: "1.5rem" }}>
            <li><strong>ICAI:</strong> Mechanical, Electrical, Telecommunications and Industrial Technologies Engineering, and their respective master's degrees.</li>
            <li><strong>ICADE:</strong> Business Administration and Management, Business Analytics and dual-degree programmes.</li>
          </ul>

          <p>
            Joining the project means taking on the responsibility of conceiving a real prototype from scratch, innovating in the demanding field of <strong>electric mobility on two wheels</strong> to compete at MotorLand.
          </p>

          <h3>Our Departments</h3>
          <ul>
            <li><strong>Structure and Chassis:</strong> Multitubular frame design, swingarm optimisation, suspension, brakes and steering.</li>
            <li><strong>Powertrain:</strong> Electric motor integration, transmission, thermal cooling and power calculation.</li>
            <li><strong>Electronics and Batteries:</strong> Battery pack design, BMS management, wiring, telemetry and sensors.</li>
            <li><strong>Management:</strong> Sponsor acquisition, logistics operations, corporate Business Plan and Media &amp; Marketing.</li>
          </ul>
        </>
      ),
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     CONTACT
     ═══════════════════════════════════════════════════════════════════════ */
  contact: {
    title: "Contact Us",
    directContact: "Direct Contact",
    phoneLabel: "Phone (WhatsApp/Calls):",
    emailLabel: "Email:",
    sitesTitle: "Our Locations",
    workshopTitle: "Workshop & Garage (Technical Work)",
    institutionalTitle: "Institutional Headquarters (ICAI)",
    dossierTitle: "Sponsorship Dossier",
    versionEs: "SPANISH VERSION",
    versionEn: "ENGLISH VERSION",
    followTitle: "Follow us",
    mapWorkshopHeading: "Workshop Location (Boadilla)",
    mapIcaiHeading: "ICAI Location (Madrid)",
    faqTitle: "Frequently Asked Questions",
    formula: {
      headerSubtitle: "Do you have a question or a proposal? We are here to listen.",
      dossierText: "Download our official dossier with all the information about the season and our collaboration options.",
      mapWorkshopTitle: "Workshop map",
      mapIcaiTitle: "ICAI map",
      faqs: [
        {
          q: "How can I join the team?",
          a: <>Recruitment usually opens in September and January. Visit the <a href="/recruitment">Recruitment</a> section to check whether applications are open.</>,
        },
        {
          q: "Are you looking for sponsors?",
          a: <>Always! If you represent a company interested in supporting young talent, download our <strong>Dossier</strong> or give us a call.</>,
        },
        {
          q: "Do you organise visits?",
          a: "Yes, we hold occasional open days. We announce the dates on our Instagram.",
        },
      ],
    },
    moto: {
      headerSubtitle: "Do you have a question or a proposal for MotoStudent? We are here to listen.",
      dossierText: "Download our official dossier with all the technical information about the prototype and our collaboration options.",
      mapWorkshopTitle: "Moto workshop map",
      mapIcaiTitle: "ICAI moto map",
      faqs: [
        {
          q: "How can I join the team?",
          a: <>Recruitment usually opens in September and January. Visit the <a href="/moto/recruitment">Recruitment</a> section to check whether applications are open.</>,
        },
        {
          q: "Are you looking for sponsors?",
          a: <>Always! If you represent a company interested in supporting electric innovation on two wheels, download our <strong>Dossier</strong> or give us a call.</>,
        },
        {
          q: "Do you organise visits?",
          a: "Yes, we hold occasional open days at our workshop. We announce the dates on our Instagram.",
        },
      ],
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════
     THE COMPETITION ("Formula Student" and "MotoStudent" pages)
     ═══════════════════════════════════════════════════════════════════════ */
  disciplines: {
    staticTitle: "Static Events",
    dynamicTitle: "Dynamic Events",
    formula: {
      title: "Formula Student",
      description: "Formula Student is the most prestigious automotive engineering competition at university level. Teams from all over the world design, build and race their own single-seaters, facing challenges that assess not only speed but engineering excellence.",
      staticSubtitle: "These events assess the team's ability to justify the design, manage resources and sell the project.",
      staticCards: [
        { title: "Engineering Design", text: "Analysis of the technical rationale behind every part, validating the design with real data." },
        { title: "Cost & Manufacturing", text: "Detailed breakdown of the cost of every component and optimisation of manufacturing processes." },
        { title: "Business Plan", text: "Presentation of a viable business model to investors in order to commercialise the prototype." },
      ],
      dynamicSubtitle: "The car proves its real performance on track.",
      dynamicCards: [
        { title: "Acceleration", text: "75 metres in a straight line from a standing start." },
        { title: "Skidpad", text: "Figure-of-eight course to measure lateral acceleration." },
        { title: "Autocross", text: "Timed qualifying lap." },
        { title: "Endurance", text: "22 km of endurance and reliability." },
        { title: "Efficiency", text: "Energy consumption during the Endurance event." },
      ],
      stats: [
        { end: 16, label: "EDITIONS" },
        { end: 1650, label: "TEAM MEMBERS" },
        { end: 250, label: "VOLUNTEERS" },
      ],
      videoTitle: "Formula Student video",
      galleryStaticAlt: "ISC Formula Student",
      galleryDynamicAlt: "ISC Formula Student on track",
    },
    moto: {
      title: "MotoStudent",
      description: "MotoStudent is the most challenging international motorcycling competition at university level. Teams from all over the world design, build and test racing prototypes. We compete in the 100% Electric category.",
      staticSubtitle: "These events assess the viability of the project as if we were a real company in the two-wheel sector.",
      staticCards: [
        { title: "Engineering Design", text: "Thorough assessment of the structural design, electric powertrain and technical decisions behind the motorbike." },
        { title: "Innovation", text: "Analysis of the most cutting-edge and unique technological solutions developed by the team to make a difference." },
        { title: "Business Plan", text: "Presentation of a viable business model for the series production and commercialisation of the prototype." },
      ],
      dynamicSubtitle: "The prototype proves its performance on the MotorLand asphalt.",
      dynamicCards: [
        { title: "Brake Test", text: "Critical braking test to certify safety before going out on track." },
        { title: "Acceleration", text: "Maximum acceleration in a straight line to measure electric power delivery." },
        { title: "Gymkhana", text: "Agility course that tests the handling of the bike and the skill of the rider." },
        { title: "Qualifying", text: "Timed session to set the starting grid for the final event." },
        { title: "Main Race", text: "The headline event: a real wheel-to-wheel race against the other universities." },
      ],
      stats: [
        { end: 7, label: "EDITIONS" },
        { end: 80, label: "UNIVERSITIES" },
        { end: 20, label: "COUNTRIES" },
      ],
      videoTitle: "MotoStudent video",
      galleryStaticAlt: "ISC MotoStudent",
      galleryDynamicAlt: "ISC MotoStudent on track",
    },
  },
};

export default en;
