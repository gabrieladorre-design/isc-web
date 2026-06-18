# ISC Racing Team — Web Oficial

Plataforma web oficial del **ISC Racing Team**, la asociación de Motorsport de la
Universidad Pontificia Comillas (ICAI). El sitio reúne las dos divisiones del
equipo —**Formula Student** (ISC FS Racing Team) y **MotoStudent** (ISC MS Racing
Team)— con un diseño corporativo orientado a la captación de talento de ingeniería
y de patrocinadores B2B.

Desarrollado como parte de un Trabajo Fin de Grado (TFG), con énfasis en una
arquitectura limpia, código mantenible y rendimiento.

## Tecnologías

- **React 19** (Hooks: `useState`, `useEffect`, `useRef`)
- **Vite 7** como entorno de desarrollo y compilación
- **React Router 7** (`react-router-dom`) para el enrutado
- **SCSS / Sass** con sistema de variables de marca (`src/styles/_variables.scss`)
- **React-Leaflet** para los mapas de competición
- `IntersectionObserver` (API nativa) para las animaciones de aparición al hacer scroll
- Despliegue continuo en **Vercel** desde GitHub

## Arquitectura

El proyecto evita la duplicación de código entre Coche y Moto mediante un patrón de
**componente compartido + wrappers finos**, con `src/data/` como **fuente única de
datos** (a modo de CMS estático editable por perfiles no técnicos).

```
src/
├── assets/            Imágenes, vídeos, logos, dossiers y newsletters
├── components/
│   ├── data-display/  Componentes compartidos (Home, Garaje, Sponsors, Competición, Icon…)
│   └── layout/        Navbar, Footer, ScrollToTop
├── data/              Fuente única de datos (coches, motos, historia, sponsors, equipo…)
├── features/
│   ├── formula/       Páginas específicas de Formula Student
│   ├── moto/          Páginas específicas de MotoStudent
│   └── landing/       Pantalla de aterrizaje (bifurcación Coche / Moto)
└── styles/            Variables globales y estilos base
```

El alias `@` apunta a `src/` (configurado en `vite.config.js` y `jsconfig.json`),
evitando rutas relativas frágiles.

## Puesta en marcha

Requisitos: Node.js 18+ y npm.

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción
npm run build

# Previsualizar el build
npm run preview

# Linter
npm run lint
```

## Gestión de contenido

El contenido editable (textos, fotos, vídeos, dossiers y newsletters) está
centralizado en `src/data/` y `src/assets/`. Para la guía dirigida al equipo de
Marketing y Comunicación, consultar `README_PARA_EL_EQUIPO.md`.

---

© ISC Racing Team · Universidad Pontificia Comillas (ICAI) · Madrid
