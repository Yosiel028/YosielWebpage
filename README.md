# 🕹️ Portafolio 3D & Digital Art — Yosiel Armando Sandate

> Portafolio web interactivo en **React 19**, **Three.js** (@react-three/fiber), **Tailwind CSS v4** y estética **Vintage 90s Editorial**, preparado para ser alojado directamente en **GitHub Pages**.

---

## ✨ Características Principales

- 🕹️ **Visor 3D Interactivo en Tiempo Real (Three.js / WebGL)**:
  - Consola portátil Nintendo Game Boy (1989).
  - Ordenador clásico Macintosh de los años 90 con pantalla CRT y teclado mecánico.
  - Botella de perfume de lujo Flowerbomb (Viktor & Rolf) con refracción y cáusticas.
  - Modos de visualización: **Texturizado**, **Clay Render** (arcilla de escultor) y **Wireframe** (topología / edge flow).
  - Controles de iluminación de estudio y rotación 360° con OrbitControls.
- 📺 **Efectos Retro Vintage Auténticos**:
  - Filtro CRT con scanlines y viñeteado analógico (activable/desactivable en la barra superior).
  - Síntesis de sonido retro integrada (clicks mecánicos y beeps de 8 bits con Web Audio API, sin archivos pesados).
  - Tipografía editorial estilo revistas de los años 90 (*DM Serif Display*, *Space Mono*, *Plus Jakarta Sans*).
- 🖼️ **Galería & Catálogo de Obras**:
  - Filtro interactivo por categorías (Modelado 3D, Game Art para Unreal Engine, Animación 2D/3D, Carteles Vintage).
  - Modal de inspección con desglose técnico (polycounts, mapas 4K, pipelines).
- 📜 **Sección Especial de Pósters Vintage**:
  - Homenaje a la publicidad impresa de 1989 y la nostalgia de los 90s con desglose de paletas cromáticas.
- 💼 **Dossier de Trayectoria & Habilidades**:
  - Animador y modelador 3D en **Oniric Mob**.
  - Licenciatura en Artes y Diseño de Videojuegos en **UNIAT** (2022 - 2026).
  - Competencias en ZBrush, Substance 3D Painter, Unreal Engine 5 y Toon Boom Harmony.
  - Ubicación dual: **Houston, TX** y **San Luis Potosí, MX**.
- ✉️ **Estación de Contacto & Despacho de Mensajes**:
  - Copiado rápido de email (`yosiel.armando.sandate@gmail.com`) con retroalimentación instantánea.
  - Enlaces a LinkedIn verificado y Linktree.

---

## 🚀 Cómo Subir y Publicar en GitHub Pages

El sitio de este repositorio se publica en [https://yosiel028.github.io/YosielWebpage/](https://yosiel028.github.io/YosielWebpage/) mediante GitHub Actions. En **Settings** > **Pages**, selecciona **GitHub Actions** como fuente de publicación.

Este proyecto ya viene preconfigurado con:
1. `base: './'` en `vite.config.js` para que los recursos se carguen sin errores en cualquier subdirectorio de GitHub.
2. Un flujo de trabajo automático en `.github/workflows/deploy.yml`.

### Paso 1: Crear un nuevo repositorio en GitHub
1. Entra a tu cuenta en [github.com/new](https://github.com/new).
2. Ponle nombre al repositorio (por ejemplo `portfolio-yosiel` o `yosiel-3d-portfolio`).
3. Déjalo en **Público** y **NO marques** "Initialize with README".
4. Haz clic en **Create repository**.

### Paso 2: Subir tu código desde la terminal
Abre una terminal en esta carpeta (`PaginaWebYosiel`) y ejecuta los siguientes comandos:

```bash
git init
git add .
git commit -m "feat: portfolio vintage 3D de Yosiel Armando Sandate"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

*(Reemplaza `TU_USUARIO` y `TU_REPOSITORIO` con tus datos de GitHub)*

---

### Paso 3: Activar GitHub Pages (Solo 1 vez en GitHub)

Tienes **dos opciones** muy sencillas para que la web quede online:

#### Opción A (Recomendada: GitHub Actions Automático):
1. En tu repositorio de GitHub, ve a la pestaña **Settings** > **Pages** (en el menú izquierdo).
2. En la sección **Build and deployment** > **Source**, selecciona:
   👉 **GitHub Actions**
3. ¡Listo! Cada vez que hagas `git push`, GitHub construirá y desplegará la página automáticamente. En 1-2 minutos verás tu enlace público: `https://TU_USUARIO.github.io/TU_REPOSITORIO/`.

#### Opción B (Con el comando npm deploy):
También puedes usar el script incluido de `gh-pages`:

```bash
npm run deploy
```

Luego en **Settings** > **Pages**, selecciona la rama `gh-pages` y carpeta `/root`.

---

## 🛠️ Desarrollo Local

Para probar o hacer modificaciones en tu computadora:

```bash
# Iniciar servidor de desarrollo en vivo:
npm run dev

# Generar versión de producción (carpeta /dist):
npm run build

# Probar la versión de producción en local:
npm run preview
```

---

## 📁 Estructura del Proyecto

```text
PaginaWebYosiel/
├── .github/workflows/deploy.yml   # Despliegue automático a GitHub Pages
├── public/
│   └── images/                    # Imágenes de perfil, posters y proyectos
├── src/
│   ├── assets/                    # Texturas y assets
│   ├── components/
│   │   ├── Retro3DCanvas.jsx      # Visor 3D Three.js (Gameboy, Mac, Perfume)
│   │   ├── Navbar.jsx             # Barra vintage con toggles CRT y audio
│   │   ├── Hero.jsx               # Portada estilo cartel editorial noventero
│   │   ├── Gallery.jsx            # Proyectos 3D/2D con modal de inspección
│   │   ├── VintageAdLookbook.jsx  # Galería especial de posters 90s
│   │   ├── ExperienceEducation.jsx# Oniric Mob y UNIAT
│   │   ├── SkillsMatrix.jsx       # ZBrush, Substance, UE5, Toon Boom
│   │   ├── ContactSection.jsx     # Telegrama y formulario de contacto
│   │   └── Footer.jsx             # Sello de licencia estilo Nintendo 1989
│   ├── utils/
│   │   └── audio.js               # Sintetizador de sonido Web Audio API
│   ├── App.jsx                    # Componente raíz
│   ├── index.css                  # Estilos Tailwind v4, Scanlines y grano
│   └── main.jsx                   # Entrada principal de React
├── package.json                   # Dependencias y scripts
└── vite.config.js                 # Configuración de Vite con ruta relativa
```

---

## 🎨 Créditos y Autoría
- **Artista & Modelador 3D**: Yosiel Armando Sandate
- **Ubicación**: Houston, Texas / San Luis Potosí, México
- **Especialidad**: 3D & 2D Art, Escultura Digital, Animación y Videojuegos Indie
