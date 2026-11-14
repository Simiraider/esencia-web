# Alfajores Esencia · Sitio de pedidos

Sitio web de tres pasos para elegir alfajores y enviar el pedido por WhatsApp.
Pasar a código el diseño de Figma `EsenciaWebsite.pdf`.

## Stack

- Vite + React + TypeScript
- Tailwind CSS (paleta y tipografías de la marca en `tailwind.config.js`)
- React Router (`/`, `/pedido`, `/whatsapp`)
- Sin backend: el pedido vive en el navegador (sessionStorage) y se envía por WhatsApp.
  Al cerrar la pestaña se reinicia, así no quedan cantidades de una compra anterior.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy en Vercel

El proyecto se detecta como Vite automáticamente. `vercel.json` incluye las
rewrites necesarias para que `/pedido` y `/whatsapp` funcionen al recargar.

## Número de WhatsApp

El número por defecto está en `src/config.ts`. Para cambiarlo sin tocar código,
definí la variable de entorno `VITE_WHATSAPP_NUMBER` (con código de país y sin
signos, por ejemplo `5491164721342`) en Vercel o en un archivo `.env.local`.

Si la variable queda vacía, la página de WhatsApp muestra el estado "falta
configurar el número" con el envío deshabilitado.

## Precios

Los precios por unidad se cargan en `src/data/varieties.ts` (campo `price`).
Mientras estén en `null`, la página muestra "Precio a confirmar" y no calcula
el total estimado. No hace falta tocar el resto del código.

## Contenido

- Variedades, textos y fotos: `src/data/varieties.ts`
- Fotos optimizadas en `public/img` (WebP). Los originales en PNG quedaron en
  `assets-originales/`, fuera del build.
- Los mini alfajores se venden por 3 unidades: el contador suma de a 3.
