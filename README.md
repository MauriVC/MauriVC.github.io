# Portafolio — Carlos Mauricio Viveros Claure

Portafolio personal con estética de terminal: una sola página que resume mi perfil,
experiencia, proyectos, habilidades, formación y canales de contacto.

**Sitio en vivo:** https://maurivc.github.io/

## Stack

- **Vue 3** + TypeScript (`<script setup>`)
- **Vite**
- **Tailwind CSS v4**
- Directiva propia de animaciones al hacer scroll (`v-reveal`)
- Tema claro/oscuro persistido en `localStorage`

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/`.

## Build de producción

```bash
npm run build
npm run preview
```

El resultado se genera en `dist/`.

## Estructura

```
src/
  components/   Secciones y componentes de UI
  data/         Contenido del portafolio (perfil, proyectos, skills...)
  directives/   Directiva v-reveal
  style.css     Tokens de diseño y estilos globales
public/         CV, favicon, iconos locales
```

Todo el contenido editable vive en `src/data/portfolio.ts`.

## Despliegue

El sitio se publica en **GitHub Pages** mediante GitHub Actions
(`.github/workflows/deploy.yml`). Cada push a `main` compila y despliega
automáticamente en https://maurivc.github.io/.
