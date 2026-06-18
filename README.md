# ISC Racing Team — Web Oficial

Plataforma web oficial del **ISC Racing Team**, la asociación de Motorsport de la
Universidad Pontificia Comillas (ICAI). El sitio reúne las dos divisiones del
equipo —**Formula Student** (ISC FS Racing Team) y **MotoStudent** (ISC MS Racing
Team)— con un diseño corporativo orientado a la captación de talento de ingeniería
y de patrocinadores B2B.

Desarrollado como parte de un Trabajo Fin de Grado (TFG), con énfasis en una
arquitectura limpia, código mantenible y rendimiento.

> Este documento es la **guía maestra** del proyecto. Está dividido en dos partes:
> la **Parte I** (técnica) para quien desarrolla y despliega, y la **Parte II**
> (operativa) para el equipo de Marketing y Comunicación que actualiza contenido
> sin programar.

---

# Parte I · Guía técnica (desarrollo y despliegue)

## Tecnologías

- **React 19** (Hooks: `useState`, `useEffect`, `useRef`)
- **Vite 7** como entorno de desarrollo y compilación
- **React Router 7** (`react-router-dom`) para el enrutado
- **SCSS / Sass** con sistema de variables de marca (`src/styles/_variables.scss`)
- **React-Leaflet** para los mapas de competición
- `IntersectionObserver` (API nativa) para las animaciones de aparición al hacer scroll
- Gestor de paquetes **npm**; despliegue continuo en **Vercel** desde GitHub

## Puesta en marcha

Requisitos: Node.js 18+ y npm.

```bash
npm install      # Instalar dependencias
npm run dev      # Servidor de desarrollo (http://localhost:5173)
npm run build    # Build de producción
npm run preview  # Previsualizar el build
npm run lint     # Linter
```

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
│   ├── formula/       Datos específicos del coche (coches.js)
│   └── moto/          Datos específicos de la moto (motos.js)
├── features/
│   ├── formula/       Páginas específicas de Formula Student
│   ├── moto/          Páginas específicas de MotoStudent
│   └── landing/       Pantalla de aterrizaje (bifurcación Coche / Moto)
└── styles/            Variables globales y estilos base
```

El alias `@` apunta a `src/` (configurado en `vite.config.js` y `jsconfig.json`),
evitando rutas relativas frágiles.

### Convenciones clave

- **Paleta** (`src/styles/_variables.scss`): `$ib-main-green` (#00402A, verde
  corporativo del Navbar y CTAs), `$ib-sec-green` (#00A443), `$isc-yellow`
  (#FFB81C), `$isc-grey` (#5B5B5B). Tipografía global: **Inter**.
- **Iconografía**: SVGs minimalistas centralizados en
  `src/components/data-display/Icon.jsx` (sin emojis en la interfaz).
- **Datos compartidos** (`sponsors.js`, `team.js`, `articles.js`, `history.js`,
  `competitions.js`) en la raíz de `src/data/`; los específicos por disciplina en
  `src/data/formula/` y `src/data/moto/`.

### Notas de estado

- La portada de la Moto ya utiliza **material real local** (no URLs remotas).
- El Garaje de la Moto lista **4 prototipos** (IM-01 a IM-04), acorde con las
  ediciones bienales de MotoStudent (2018, 2020, 2022, 2024).
- Las newsletters viven en `src/assets/articulos/coche/` y
  `src/assets/articulos/moto/` (PDF + portada `.png`), y se renderizan en orden
  cronológico descendente.

---

# Parte II · Guía operativa (equipo de Marketing y Comunicación)

Esta parte está pensada para **personas que NO programan**. Permite cambiar textos,
fotos, vídeos y documentos **sin tocar el "esqueleto" de la web y sin romper nada**.

> Todo el código vive en `Codigo/isc-web/`. Cuando aquí se diga `src/...`, se refiere
> a `Codigo/isc-web/src/...`.

## 1. Cómo está organizado (en sencillo)

La web tiene **dos mundos**: **Coche** (Formula Student) y **Moto** (MotoStudent).
Casi todo el contenido vive en `src`, que funciona como un armario con cajones:

| Cajón (carpeta) | ¿Qué guarda? | ¿Lo tocarás? |
|---|---|---|
| **`src/data`** | Los **textos y listas** (specs del coche, equipo, patrocinadores…). | Sí, mucho |
| **`src/assets`** | Las **fotos, vídeos, logos y PDFs**. | Sí |
| `src/components` y `src/features` | El esqueleto y diseño de la web. | No (programación) |
| `src/styles` | Colores y tipografías. | No |

**Regla de oro:** trabajas en **`data`** y **`assets`**. Los demás cajones, ni los abras.

Dentro de `src/assets` el material se organiza por tipo:

| Carpeta | ¿Qué guarda? |
|---|---|
| `fotos-y-videos/HomeCoche/` | Portada, vídeo y galería del **coche**. |
| `fotos-y-videos/HomeMoto/` | Portada, vídeo y galería de la **moto**. |
| `fotos-y-videos/Landing/` | Las dos fotos de la página de entrada (`coche.jpg`, `moto.png`). |
| `Dossier_ISC/` | Los **PDFs descargables** (dossiers de patrocinio, FS y MS). |
| `articulos/coche/` y `articulos/moto/` | Portadas (`.png`) y PDFs de las newsletters. |
| `logos/` y `logospatros/` | Logos del equipo y de los patrocinadores. |
| `redes/` | Iconos de redes sociales. |

## 2. Cinco reglas que evitan el 99 % de los problemas

1. **Haz una copia de seguridad** del archivo antes de tocarlo.
2. **Para reemplazar una foto/PDF, dale el MISMO nombre exacto** que el antiguo
   (incluida la extensión y las mayúsculas).
3. **Nada de espacios, acentos ni "ñ"** en nombres de archivos nuevos: usa guiones
   (`coche-vista-lateral.jpg`).
4. **Respeta las extensiones** (`.jpg`, `.png`, `.mp4`, `.pdf`).
5. **Guarda y avisa.** Hasta que la persona técnica "sube" los cambios, no se ven en internet.

## 3. Cambiar un TEXTO

Los textos están en `src/data`, en archivos `.js` (listas fáciles de leer).

1. Abre el archivo (p. ej. `src/data/formula/coches.js` para el coche, o
   `src/data/moto/motos.js` para la moto).
2. Busca el texto **entre comillas** y cambia **solo lo de dentro**:

   ```js
   description: "Nuestro monoplaza eléctrico de 2026, más ligero y potente.",
   ```

3. Guarda (Ctrl/Cmd + S).

**Nunca** borres las comillas `" "`, ni la coma `,` final, ni la etiqueta de la
izquierda (`description:`, `name:`…). Si tu texto lleva comillas dentro, avisa a la
persona técnica.

## 4. Cambiar o añadir FOTOS

**Reemplazar (lo más seguro):** ve a la carpeta correspondiente, fíjate en el nombre
exacto de la foto a sustituir y dale a la nueva **ese mismo nombre**. Ejemplos:

- Portada y galería del coche → `src/assets/fotos-y-videos/HomeCoche/`
  (galería en `imagenes-deslizantes-home/`).
- Portada y galería de la moto → `src/assets/fotos-y-videos/HomeMoto/`.
- Fotos de la página de entrada → `src/assets/fotos-y-videos/Landing/`
  (`coche.jpg`, `moto.png`).

**Añadir una foto nueva** (p. ej. a una galería) requiere un pequeño paso de código:
copia la foto con un nombre en minúsculas y sin acentos, y **avisa a la persona técnica**.

Recomendaciones: `.jpg` para fotos, `.png` solo si necesitas transparencia; buena
resolución pero sin excederse (evita archivos de 15–20 MB); proporciones parecidas
dentro de un mismo bloque.

## 5. Cambiar o añadir VÍDEOS

Igual que las fotos, con cuidado por el peso. El vídeo de portada del coche es
`src/assets/fotos-y-videos/HomeCoche/HomeVideoCoche.mp4` y el de la moto
`src/assets/fotos-y-videos/HomeMoto/HomeVideoMoto.mp4`. Usa **`.mp4`**, reemplaza con
el **mismo nombre** y **comprime** antes de subir (ideal < 10–15 MB; HandBrake va bien).

## 6. Cambiar o añadir PDFs (dossiers)

Viven en `src/assets/Dossier_ISC/`:

- `Dossier_ISC_Formula_Student_ES.pdf` / `_EN.pdf`
- `Dossier_ISC_MotoStudent_ES.pdf` / `_EN.pdf`

Para actualizar uno, dale a tu PDF nuevo **el mismo nombre exacto** y sustitúyelo.
Para añadir uno nuevo, súbelo con nombre claro sin espacios y avisa a la persona técnica.

## 7. Tabla resumen "¿dónde toco para…?"

| Quiero cambiar… | Voy a… | Cómo |
|---|---|---|
| Texto / spec del coche | `src/data/formula/coches.js` | Editar lo de **dentro de las comillas** |
| Texto / spec de la moto | `src/data/moto/motos.js` | Igual |
| Lista de patrocinadores | `src/data/sponsors.js` | Añadir/editar entradas |
| Miembros del equipo | `src/data/team.js` | Añadir/editar entradas |
| Newsletters | `src/data/articles.js` (+ archivos en `assets/articulos/…`) | Añadir entrada y avisar |
| Portada/vídeo del coche | `src/assets/fotos-y-videos/HomeCoche/` | Reemplazar con **mismo nombre** |
| Portada/vídeo de la moto | `src/assets/fotos-y-videos/HomeMoto/` | Reemplazar con **mismo nombre** |
| Fotos de la página de entrada | `src/assets/fotos-y-videos/Landing/` | Reemplazar `coche.jpg` / `moto.png` |
| Dossier descargable | `src/assets/Dossier_ISC/` | Reemplazar con **mismo nombre** |

## 8. Si algo sale mal (sin pánico)

- **No veo mi cambio:** ¿guardaste? ¿se subieron los cambios? Puede tardar unos minutos.
- **Foto rota:** casi siempre el **nombre o la extensión** no coincide (un espacio,
  `.JPG` en vez de `.jpg`). Que sea **idéntico** al original.
- **La web deja de cargar tras editar texto:** seguramente borraste una **comilla** o
  una **coma**. Deshaz (Ctrl/Cmd + Z) o vuelve a tu copia de seguridad.
- **Dudas:** mejor preguntar a la persona técnica que arriesgarse. Cambiar fotos y
  textos es seguro; tocar el esqueleto, no.

---

© ISC Racing Team · Universidad Pontificia Comillas (ICAI) · Madrid
