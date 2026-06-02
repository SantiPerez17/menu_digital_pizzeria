# 🍕 Menú Digital — La Bufala Nera

Menú digital interactivo para una pizzería artesanal italiana. Landing page mobile-first con panel de administración integrado para gestionar el contenido sin conocimientos técnicos.

> Proyecto desarrollado como parte de mi portfolio freelance, basado en un brief real de cliente.

---

## Demo

🔗 [Ver demo en vivo](https://menu-digital-pizzeria.vercel.app/)
🛠️ [Sanity Studio — Panel Admin](https://menu-pizzeria.sanity.studio/)

---

## Capturas

| Modo oscuro | Modo claro |
|-------------|------------|
| ![Dark mode](./docs/dark.png) | ![Light mode](./docs/light.png) |

---

## Características

- **Una sola página** — experiencia fluida sin navegación compleja
- **Mobile-first** — optimizado para teléfonos desde 375px
- **Dark/light automático** — respeta la preferencia del sistema del usuario
- **Tipografía como protagonista** — sin imágenes, foco en legibilidad
- **Carga ultra rápida** — sin backend propio, datos desde CDN de Sanity
- **Botón flotante de llamada** — acción directa desde cualquier punto del menú
- **Panel de administración** — gestión de pizzas, categorías e ingredientes desde el celular
- **Contenido dinámico** — cualquier cambio en Sanity se refleja en tiempo real

---

## Stack

| Tecnología | Uso |
|------------|-----|
| React + TypeScript | Frontend |
| Tailwind CSS | Estilos |
| Sanity | CMS + API + Panel admin |
| GROQ | Queries al CMS |
| Vite | Bundler |
| Vercel | Deploy |

---

## Estructura del proyecto

```
├── front/
│   └── src/
│       ├── components/
│       │   ├── Header.tsx        # Hero con nombre del restaurante
│       │   ├── Historia.tsx      # Sección colapsable con historia
│       │   ├── MenuSection.tsx   # Sección por categoría
│       │   ├── MenuItem.tsx      # Item: nombre, ingredientes, precio
│       │   ├── CallButton.tsx    # Botón flotante de llamada
│       │   └── Footer.tsx        # Redes sociales
│       ├── lib/
│       │   └── sanity.ts         # Cliente Sanity + queries GROQ
│       ├── types/
│       │   └── index.ts          # SiteConfig, MenuItem, MenuCategory
│       └── App.tsx
└── sanity/menu-pizzeria/          # Sanity Studio
    └── schemas/
        ├── category.ts
        ├── pizza.ts
        └── siteConfig.ts
```

---

## Correr en local

### Requisitos

- Node.js 18+
- Cuenta en [Sanity.io](https://sanity.io) (free tier)

### Instalación

```bash
# Clonar el repo
git clone https://github.com/SantiPerez17/menu_digital_pizzeria
cd menu_digital_pizzeria

# Instalar dependencias del frontend
cd front && npm install

# Instalar dependencias de Sanity
cd ../sanity/menu-pizzeria && npm install
```

### Variables de entorno

Crear `front/.env.local`:

```env
VITE_SANITY_PROJECT_ID=xxxxxxxx
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2026-01-01
VITE_PHONE_NUMBER=+54XXXXXXXXXX
```

### Correr el proyecto

```bash
# Frontend (http://localhost:5173)
cd front && npm run dev

# Sanity Studio (http://localhost:3333)
cd sanity/menu-pizzeria && npm run dev
```

---

## Decisiones técnicas

**¿Por qué Sanity?**
El cliente necesitaba un panel de administración simple, usable desde el celular, sin depender de un desarrollador para actualizar el menú. Sanity Studio cumple exactamente eso: es una interfaz visual lista para usar, sin costo en el free tier, y con una API CDN que hace la carga muy rápida.

**¿Por qué sin imágenes?**
El brief del cliente pedía un diseño tipográfico, limpio y enfocado en la lectura rápida. Además, eliminar imágenes mejora significativamente la performance en redes móviles lentas.

**¿Por qué Vercel?**
Deploy gratuito, integración directa con GitHub (CI/CD automático), y permite conectar dominios propios sin costo adicional.

---

## Roadmap

- [x] Setup del proyecto
- [x] Schemas de Sanity
- [x] UI base mobile-first
- [x] Dark/light mode automático
- [x] Conexión con datos dinámicos
- [x] Botón flotante de llamada
- [x] Deploy en Vercel + Sanity Studio
- [ ] Animaciones de scroll
- [ ] Soporte para múltiples idiomas

---

## Autor

**Santiago Perez**

🔗 [GitHub](https://github.com/SantiPerez17)

---

## Licencia

MIT