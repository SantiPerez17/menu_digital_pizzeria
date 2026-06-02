# 🍕 Menú Digital — Pizzería Artesanal

Menú digital interactivo para una pizzería artesanal italiana. Landing page mobile-first con panel de administración integrado para gestionar el contenido sin conocimientos técnicos.

> Proyecto desarrollado como parte de mi portfolio freelance, basado en un brief real de cliente.

---

## Demo

🔗 [Ver demo en vivo](#) *(próximamente)*  
🛠️ [Sanity Studio — Panel Admin](#) *(próximamente)*

---

## Capturas

<!-- Agregar capturas mobile cuando el proyecto esté deployado -->

| Vista menú | Panel admin |
|------------|-------------|
| *proximamente* | *proximamente* |

---

## Características

- **Una sola página** — experiencia fluida sin navegación compleja
- **Mobile-first** — optimizado para teléfonos desde 375px
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
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Nombre del restaurante
│   │   ├── MenuSection.tsx   # Sección por categoría
│   │   ├── MenuItem.tsx      # Item individual (nombre, ingredientes, precio)
│   │   └── CallButton.tsx    # Botón flotante de llamada
│   ├── lib/
│   │   └── sanity.ts         # Cliente Sanity + queries GROQ
│   ├── types/
│   │   └── index.ts          # Tipos TypeScript
│   ├── App.tsx
│   └── main.tsx
└── sanity/
    ├── schemas/
    │   ├── category.ts
    │   ├── pizza.ts
    │   └── siteConfig.ts
    └── sanity.config.ts
```

---

## Correr en local

### Requisitos

- Node.js 18+
- Cuenta en [Sanity.io](https://sanity.io) (free tier)

### Instalación

```bash
# Clonar el repo
git clone https://github.com/tuusuario/menu-pizzeria
cd menu-pizzeria

# Instalar dependencias del frontend
npm install

# Instalar dependencias de Sanity
cd sanity && npm install && cd ..
```

### Variables de entorno

Crear un archivo `.env.local` en la raíz:

```env
VITE_SANITY_PROJECT_ID=tu_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
VITE_PHONE_NUMBER=+54XXXXXXXXXX
```

### Correr el proyecto

```bash
# Frontend (http://localhost:5173)
npm run dev

# Sanity Studio (http://localhost:3333)
cd sanity && npm run dev
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
- [x] Conexión con datos dinámicos
- [x] Botón flotante de llamada
- [ ] Animaciones de scroll
- [ ] Modo oscuro
- [ ] Soporte para múltiples idiomas

---

## Autor

**Tu nombre**  
Desarrollador web freelance — React · TypeScript · Python  
🔗 [tu-portfolio.com](#) · [LinkedIn](#) · [GitHub](#)

---

## Licencia

MIT
