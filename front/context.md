# Menú Digital Pizzería — Context Frontend

## Stack

- **React + TypeScript** (Vite)
- **Tailwind CSS**
- **@sanity/client** para consumir la API
- **Vercel** para deploy

---

## Variables de entorno

```env
VITE_SANITY_PROJECT_ID=xxxx
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
VITE_PHONE_NUMBER=+54XXXXXXXXXX
```

---

## Estructura de carpetas

```
src/
├── components/
│   ├── Header.tsx          # Nombre del restaurante, info básica
│   ├── MenuSection.tsx     # Una sección por categoría
│   ├── MenuItem.tsx        # Item individual: nombre, ingredientes, precio
│   └── CallButton.tsx      # Botón flotante fijo abajo
├── lib/
│   └── sanity.ts           # Cliente Sanity configurado + queries GROQ
├── types/
│   └── index.ts            # Tipos TypeScript compartidos
├── App.tsx                 # Fetch de datos, composición general
└── main.tsx
```

---

## Tipos TypeScript

```ts
// types/index.ts

export interface SiteConfig {
  restaurantName: string
  phoneNumber: string
  address: string
  openingHours: string
}

export interface MenuItem {
  name: string
  description: string
  ingredients: string[]
  price: number
}

export interface MenuCategory {
  name: string
  items: MenuItem[]
}
```

---

## Cliente Sanity y queries GROQ

```ts
// lib/sanity.ts
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
  useCdn: true, // importante para performance
})

// Traer categorías con sus items ordenados
export const menuQuery = `
  *[_type == "category"] | order(order asc) {
    name,
    "items": *[_type == "pizza" && references(^._id) && available == true] | order(order asc) {
      name,
      description,
      ingredients,
      price
    }
  }
`

// Config general del sitio
export const siteConfigQuery = `
  *[_type == "siteConfig"][0] {
    restaurantName,
    phoneNumber,
    address,
    openingHours
  }
`
```

---

## Comportamiento de cada componente

### `App.tsx`
- Hace fetch de `siteConfig` y `menuQuery` al montar
- Maneja loading state y errores
- Pasa datos a los componentes hijos

### `Header.tsx`
- Recibe `SiteConfig`
- Muestra nombre del restaurante, dirección y horarios
- Diseño simple, tipográfico

### `MenuSection.tsx`
- Recibe una `MenuCategory`
- Renderiza el título de la categoría
- Mapea y renderiza un `MenuItem` por cada item

### `MenuItem.tsx`
- Recibe un `MenuItem`
- Muestra: nombre (destacado), ingredientes (secundario), precio (alineado a la derecha)
- Sin imágenes

### `CallButton.tsx`
- Botón `fixed` en `bottom-0`, ancho completo o pill centrado
- `href={tel:phoneNumber}`
- Siempre visible al hacer scroll
- Texto: "📞 Llamar para pedir"

---

## Criterios de diseño

- **Mobile-first**: base en 375px, sin romper en desktop
- **Sin imágenes**: tipografía como protagonista
- **Fuentes**: serif elegante para nombres de platos, sans-serif para precios/descripciones
- **Paleta**: usar variables CSS (`--color-primary`, etc.) para facilitar el theming por cliente
- **Performance**: `useCdn: true` en Sanity, fuentes con `font-display: swap`
- **Accesibilidad**: `aria-label` en el botón de llamada, contraste adecuado

---

## Fases del frontend

### Fase 1 — Setup
- [ ] `npm create vite@latest` con template React + TypeScript
- [ ] Instalar y configurar Tailwind CSS
- [ ] Instalar `@sanity/client`
- [ ] Crear `.env.local` con las variables
- [ ] Configurar `lib/sanity.ts`

### Fase 2 — Componentes base
- [ ] `types/index.ts` con los tipos
- [ ] `CallButton.tsx` — botón flotante
- [ ] `MenuItem.tsx` — item individual
- [ ] `MenuSection.tsx` — sección por categoría
- [ ] `Header.tsx` — cabecera del restaurante

### Fase 3 — Integración con datos
- [ ] Fetch en `App.tsx` de siteConfig y menu
- [ ] Loading state (skeleton o spinner simple)
- [ ] Error state
- [ ] Renderizado dinámico completo

### Fase 4 — Pulido
- [ ] Revisar en 375px, 390px, 414px
- [ ] Revisar en desktop (que no rompa)
- [ ] Ajustes tipográficos y espaciado
- [ ] Accesibilidad básica

### Fase 5 — Deploy
- [ ] Push a GitHub
- [ ] Conectar repo en Vercel
- [ ] Agregar variables de entorno en Vercel
- [ ] Verificar que el deploy funcione

---

## Notas

- El dev está aprendiendo Tailwind en este proyecto: preferir clases de Tailwind sobre CSS custom siempre que sea posible
- Usar Claude Code para generar componentes y ajustar de a poco
- El backend (Sanity) está en un contexto separado: `context-backend.md`