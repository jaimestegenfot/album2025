# Nuestro Album 2026 ❤️

Una página hermosa para compartir fotos y videos especiales juntos.

## 🚀 Características

- ✨ Diseño romántico y moderno
- 📸 Galería de fotos con vista ampliada
- 🎥 Galería de videos con reproductor
- 📱 Totalmente responsive
- 🎨 Animaciones suaves y gradientes hermosos
- 💖 Temática romántica con corazones y colores cálidos

## 📦 Instalación

```bash
npm install
```

## 🎯 Uso

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Cómo agregar tus fotos y videos

### Agregar Fotos

Edita el archivo `src/app/page.tsx` y modifica el array `examplePhotos`:

```typescript
const examplePhotos = [
  {
    id: 1,
    src: "/fotos/foto1.jpg", // Ruta a tu foto
    alt: "Descripción de la foto",
    date: "Enero 2025",
  },
  // Agrega más fotos aquí...
];
```

**Opciones para las fotos:**
1. Coloca tus fotos en la carpeta `public/fotos/` y usa rutas como `/fotos/foto1.jpg`
2. Usa URLs de servicios como Imgur, Google Photos (compartido), etc.
3. Usa servicios de almacenamiento en la nube

### Agregar Videos

Edita el archivo `src/app/page.tsx` y modifica el array `exampleVideos`:

```typescript
const exampleVideos = [
  {
    id: 1,
    src: "/videos/video1.mp4", // Ruta a tu video
    thumbnail: "/fotos/thumbnail1.jpg", // Imagen de vista previa (opcional)
    title: "Título del video",
    date: "Enero 2025",
  },
  // Agrega más videos aquí...
];
```

**Opciones para los videos:**
1. Coloca tus videos en la carpeta `public/videos/` y usa rutas como `/videos/video1.mp4`
2. Usa URLs de YouTube (con formato embed) o Vimeo
3. Usa servicios de almacenamiento en la nube

## 🎨 Personalización

### Cambiar colores

Edita `tailwind.config.ts` para cambiar los colores del tema. Los colores actuales usan tonos rosas y rojos (`pink-500`, `red-500`).

### Cambiar textos

Edita `src/app/page.tsx` para cambiar los textos principales como:
- Título principal: "Nuestro Album"
- Subtítulo: "Recuerdos especiales juntos"
- Títulos de secciones: "Nuestras Fotos", "Nuestros Videos"

## 📁 Estructura del Proyecto

```
album2025/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout principal
│   │   ├── page.tsx         # Página principal
│   │   └── globals.css      # Estilos globales
│   └── components/
│       ├── PhotoGallery.tsx # Componente de galería de fotos
│       └── VideoGallery.tsx # Componente de galería de videos
├── public/                  # Archivos estáticos (fotos, videos)
│   ├── fotos/              # Coloca tus fotos aquí
│   └── videos/             # Coloca tus videos aquí
└── package.json
```

## 💡 Tips

- Para mejores resultados, usa fotos con buena resolución
- Los videos deben estar en formatos compatibles con navegadores (MP4 recomendado)
- Puedes agregar tantas fotos y videos como quieras
- Las fotos se muestran en un grid responsivo que se adapta al tamaño de pantalla

## 🛠️ Tecnologías

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4

¡Disfruta compartiendo tus recuerdos especiales! 💕
