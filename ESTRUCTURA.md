# 📊 Estructura del Proyecto DS/COACH

## 🏗️ Arquitectura Visual

```
┌─────────────────────────────────────────────────────┐
│                    NAVEGADOR                         │
│              http://localhost:5173                   │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
        ┌──────────────────────────┐
        │       index.html          │
        │   (Punto de entrada)      │
        └──────────────┬────────────┘
                       │
                       ▼
        ┌──────────────────────────┐
        │      src/main.jsx         │
        │   (Bootstrap React)       │
        └──────────────┬────────────┘
                       │
                       ▼
        ┌──────────────────────────┐
        │       App.jsx             │
        │  (Componente principal)   │
        └──────────────┬────────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
   ┌─────────┐              ┌─────────────────┐
   │ Header  │              │ Hero Section    │
   └─────────┘              └─────────────────┘
        │                             │
        ├─ Logo                       ├─ Título principal
        ├─ Navbar                     ├─ SVG gráfico
        └─ Gradiente                 ├─ Avatares
                                     └─ CTA botón
```

## 📁 Árbol de Carpetas

```
ds-coach/
│
├── 📄 index.html                    # HTML base (punto de entrada)
├── 📄 package.json                  # Dependencias y scripts
├── 📄 package-lock.json            # Lock file de npm
├── 📄 README.md                     # Documentación principal
├── 📄 QUICKSTART.md                # Guía rápida
├── 📄 ESTRUCTURA.md                # Este archivo
├── 📄 .env.example                 # Variables de entorno (ejemplo)
├── 📄 .gitignore                   # Archivos a ignorar en git
│
├── 🔧 vite.config.js               # Config de Vite
├── 🔧 tailwind.config.js           # Config de Tailwind (colores, fuentes)
├── 🔧 postcss.config.js            # Config de PostCSS
├── 🔧 eslint.config.js             # Reglas de ESLint
│
├── 📁 src/                         # Código fuente
│   │
│   ├── 📄 main.jsx                 # Punto de entrada React
│   ├── 📄 App.jsx                  # Componente principal
│   ├── 📄 index.css                # Estilos globales + Tailwind
│   │
│   ├── 📁 components/              # Componentes por sección
│   │   ├── Header.jsx              # Navegación superior
│   │   ├── Hero.jsx                # Sección hero
│   │   ├── ProblemSection.jsx      # Problemas identificados
│   │   ├── SystemSection.jsx       # Sistema de 8 módulos
│   │   ├── AuthorSection.jsx       # Bio del autor
│   │   ├── SocialProof.jsx         # Testimonios
│   │   ├── OfferSection.jsx        # Pricing y CTA
│   │   └── Footer.jsx              # Pie de página
│   │
│   ├── 📁 assets/                  # Imágenes y recursos estáticos
│   │   ├── react.svg
│   │   ├── vite.svg
│   │   └── hero.png
│   │
│   └── 📁 styles/                  # (opcional) Estilos adicionales
│
├── 📁 public/                       # Archivos públicos estáticos
│   └── favicon.svg
│
├── 📁 dist/                         # (generado) Build de producción
│   ├── index.html
│   ├── assets/
│   │   ├── main-XXXXX.js
│   │   └── style-XXXXX.css
│   └── ...
│
└── 📁 node_modules/                 # (generado) Dependencias
    ├── react/
    ├── react-dom/
    ├── vite/
    ├── tailwindcss/
    └── ... (156 packages)
```

## 🔄 Flujo de Datos

```
Usuario carga http://localhost:5173/
    │
    ├─→ Vite sirve index.html
    │
    ├─→ Se carga React (react.js, react-dom.js)
    │
    ├─→ Se ejecuta main.jsx que renderiza <App/>
    │
    ├─→ App.jsx importa todos los componentes:
    │   ├─ Header
    │   ├─ Hero
    │   ├─ ProblemSection
    │   ├─ SystemSection
    │   ├─ AuthorSection
    │   ├─ SocialProof
    │   ├─ OfferSection
    │   └─ Footer
    │
    ├─→ Se aplican estilos de index.css (Tailwind)
    │
    └─→ Se renderiza la página completa con todos los componentes
```

## 🎨 Flujo de Estilos

```
index.css (imports)
    │
    ├─ @tailwind base          ─→ Estilos base de Tailwind
    ├─ @tailwind components    ─→ Componentes predefinidos
    ├─ @tailwind utilities     ─→ Clases utility (80% del CSS)
    │
    └─ Estilos personalizados:
       ├─ .glass-panel         ─→ Efecto glassmorphism
       ├─ .text-gradient       ─→ Gradiente de texto
       ├─ .bg-cta-gradient     ─→ Gradiente de botones
       └─ Material Icons       ─→ Fuentes de Google
```

## 📦 Sistema de Componentes

### Header Component
```jsx
<Header />
│
├─ Navbar fija con logo
├─ Gradiente divisor
└─ Backdrop blur
```

### Hero Component
```jsx
<Hero />
│
├─ Titling con text-gradient
├─ Descripción
├─ CTA button
├─ Social proof (avatares)
└─ SVG Line Graph animado
```

### ProblemSection Component
```jsx
<ProblemSection />
│
├─ Problemas (pain points)
└─ Card de costo (error styling)
```

### SystemSection Component
```jsx
<SystemSection />
│
├─ Título y descripción
└─ Grid 4x2 de módulos
   ├─ Cada módulo tiene icon, título, descripción
   └─ Hover effects
```

### AuthorSection Component
```jsx
<AuthorSection />
│
├─ Imagen del autor
├─ Card flotante de experiencia
└─ Bio y estadísticas
```

### SocialProof Component
```jsx
<SocialProof />
│
├─ Casos de éxito (3 testimonios)
│  ├─ Avatar
│  ├─ Nombre y rol
│  └─ Cita
```

### OfferSection Component
```jsx
<OfferSection />
│
├─ Título y descripción
├─ Pricing con descuento
├─ Features checklist
├─ CTA button
└─ Trust indicators
```

### Footer Component
```jsx
<Footer />
│
├─ Branding
├─ Navigation links
└─ Copyright
```

## 🎯 Paleta de Colores Utilizada

| Nombre | Código | Uso |
|--------|--------|-----|
| primary | #ff8f6f | Botones, accents, highlights |
| surface | #0e0e0e | Fondo principal (negro profundo) |
| surface-container | #1a1a1a | Contenedores secundarios |
| surface-bright | #2c2c2c | Hover states |
| on-surface | #ffffff | Texto principal |
| on-surface-variant | #adaaaa | Texto secundario |
| error | #ff716c | Alertas, warnings |
| outline-variant | #484847 | Bordes sutiles, divisores |

## 🔤 Tipografía Utilizada

| Familia | Uso | Fuente |
|---------|-----|--------|
| Headline | Títulos, H1-H4 | Space Grotesk |
| Body | Párrafos, texto largo | Manrope |
| Label | Tags, labels, micro-copy | Inter |

## 🚀 Build Process

```
npm run build
    │
    ├─ Vite analiza el código
    ├─ Minifica y optimiza
    ├─ Genera chunks optimizados
    ├─ Procesa CSS con PostCSS + Tailwind
    ├─ Procesa imágenes
    │
    └─ Genera carpeta dist/
       ├─ index.html (optimizado)
       ├─ assets/
       │  ├─ main-HASH.js (minificado)
       │  └─ style-HASH.css (optimizado)
       └─ (otros assets)
```

## 📊 Estadísticas del Proyecto

```
Total de archivos React:    8 componentes
Total de líneas de código:  ~1,500 líneas
Dependencias principales:   React 19, Vite 8, Tailwind 4
Tamaño bundle (minificado): ~50-70 KB
Tiempo de carga (dev):      < 1 segundo
Tiempo de build (prod):     ~3-5 segundos
```

## 🔗 Relaciones Entre Componentes

```
App.jsx (raíz)
│
├─ Header (independiente)
│
├─ Hero (independiente)
│   └─ Usa Material Icons para avatares
│
├─ ProblemSection (independiente)
│   └─ Usa Material Icons para iconos de problemas
│
├─ SystemSection (independiente)
│   └─ Usa Material Icons para módulos
│
├─ AuthorSection (independiente)
│   └─ Card flotante con experiencia
│
├─ SocialProof (independiente)
│   └─ Testimonios con avatares
│
├─ OfferSection (independiente)
│   └─ Material Icons para features
│
└─ Footer (independiente)
```

---

**Nota**: Todos los componentes son independientes y pueden ser reutilizados o reordenados en App.jsx sin afectar a los demás.
