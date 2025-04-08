# Mi Portfolio Personal

Este es mi portfolio personal construido con React y Vite, diseñado para ser desplegado como una aplicación web estática.

## Características

- Construido con React y Vite
- Diseño responsive con Material-UI
- Animaciones suaves con Framer Motion
- Enrutamiento con React Router
- Listo para despliegue estático
- Optimizado para SEO

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/portfolio-vite.git
   cd portfolio-vite
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173/portfolio-vite`

## Construcción para Producción

Para construir el sitio para producción:

```bash
npm run build
```

Esto generará una versión optimizada del sitio en la carpeta `dist`.

## Despliegue

### GitHub Pages

1. Actualiza la opción `base` en `vite.config.js` con el nombre de tu repositorio.
2. Construye el proyecto:
   ```bash
   npm run build
   ```
3. Despliega la carpeta `dist` en la rama `gh-pages`:
   ```bash
   git add dist -f
   git commit -m "Deploy"
   git subtree push --prefix dist origin gh-pages
   ```

### Otros Servicios de Hosting

La carpeta `dist` generada está lista para ser desplegada en cualquier servicio de hosting estático como Netlify, Vercel, o un servidor propio.

## Personalización

- Modifica los componentes en `src/components`
- Actualiza las páginas en `src/pages`
- Ajusta el tema en `src/App.jsx`
- Agrega tus propias imágenes en `public`

## Licencia

MIT 