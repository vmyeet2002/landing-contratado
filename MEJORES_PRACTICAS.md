# 🎯 Mejores Prácticas - DS/COACH Landing Page

## ✅ Durante el Desarrollo

### 1. Mantén Hot Reload Activo
```bash
npm run dev
# Los cambios se aplican automáticamente
```

### 2. Edita un Componente a la Vez
- Evita cambios masivos
- Verifica cambios en tiempo real
- Rollback es fácil si algo sale mal

### 3. Respeta la Estructura
```
Nunca hagas:
- Cambios directamente en index.html
- Ediciones en node_modules/
- Eliminación de archivos de config

Siempre haz:
- Cambios en src/components/
- Ediciones en tailwind.config.js para estilos
- Usa Git para versioning
```

### 4. Usa el Sistema de Diseño
```javascript
// ✅ BIEN - Usa clases Tailwind existentes
<button className="bg-cta-gradient text-on-primary px-10 py-5 rounded-lg">
  Click aquí
</button>

// ❌ MAL - Usa colores arbitrarios
<button style={{ backgroundColor: '#abc123' }}>
  Click aquí
</button>
```

---

## 🎨 Personalización Segura

### Cambiar Colores (forma segura)
```javascript
// tailwind.config.js
colors: {
  primary: "#ff8f6f",        // Tu color principal
  surface: "#0e0e0e",         // Tu fondo
  // ... resto de colores
}
```

### Cambiar Tipografía
```javascript
// tailwind.config.js
fontFamily: {
  headline: ["Tu Fuente"],
  body: ["Tu Fuente Body"],
  label: ["Tu Fuente Labels"]
}
```

### Agregar Nuevo Componente
```javascript
// 1. Crear src/components/MiSeccion.jsx
export default function MiSeccion() {
  return (
    <section className="py-24">
      {/* Tu contenido */}
    </section>
  )
}

// 2. Importar en App.jsx
import MiSeccion from './components/MiSeccion'

// 3. Agregar en JSX
<App>
  {/* ... */}
  <MiSeccion />
  {/* ... */}
</App>
```

---

## 📱 Responsive Design

### Breakpoints Tailwind
```javascript
// Mobile first
<div className="text-sm md:text-lg lg:text-xl">
  // sm:    >= 640px
  // md:    >= 768px
  // lg:    >= 1024px
  // xl:    >= 1280px
  // 2xl:   >= 1536px
</div>
```

### Testear Responsive
```bash
1. npm run dev
2. Abre DevTools (F12)
3. Toggle device toolbar (Ctrl+Shift+M)
4. Prueba en Mobile, Tablet, Desktop
```

---

## 🔍 Debugging

### Consola del Navegador
```javascript
// Abre DevTools > Console
// Cualquier error de React aparecerá aquí
```

### Vite Speed Insights
```bash
npm run build
npm run preview
# Verifica velocidad de carga
```

### Testing Visual
```bash
npm run dev
# Navega por la página
# Busca:
  - Espacios rotos
  - Textos sin estilo
  - Imágenes mal cargadas
  - Hovers no funcionando
```

---

## 🚀 Antes de Deploy

### Checklist Pre-Deploy

- [ ] Cambiar imágenes de ejemplo por las reales
- [ ] Actualizar todos los textos
- [ ] Probar todos los links
- [ ] Probar en móvil (sin DevTools)
- [ ] Cambiar título del sitio en index.html
- [ ] Configurar favicon
- [ ] Revisar colores finales
- [ ] Probar form submissions (si existen)
- [ ] Revisar performance (npm run build)
- [ ] Probar en múltiples navegadores

### Build Checklist
```bash
# 1. Verifica no hay errores
npm run lint

# 2. Crea el build
npm run build

# 3. Verifica el output
npm run preview

# 4. Abre dist/index.html en navegador
# ¿Se ve igual que en dev?

# Si sí → ¡Listo para deploy!
```

---

## 📊 Performance

### Mantener Bundle Size Bajo
```javascript
// ✅ BIEN - Importa solo lo necesario
import { useState } from 'react'

// ❌ MAL - Importa el archivo completo
import * as React from 'react'
```

### Lazy Loading (Futuro)
```javascript
import { lazy, Suspense } from 'react'

const HeavyComponent = lazy(() => import('./HeavyComponent'))

// Uso:
<Suspense fallback={<div>Cargando...</div>}>
  <HeavyComponent />
</Suspense>
```

### Optimizar Imágenes
```javascript
// ✅ Usa WebP si es posible
// ✅ Comprime con TinyPNG, ImageOptim
// ✅ Usa srcset para responsive images
// ❌ Evita imágenes muy grandes
```

---

## 🔐 Seguridad

### Variables Sensibles
```javascript
// .env (nunca commit)
VITE_API_KEY=tu_clave_secreta

// Acceso:
const apiKey = import.meta.env.VITE_API_KEY
```

### Inyección XSS
```javascript
// ✅ BIEN - React escapa automáticamente
<p>{userInput}</p>

// ❌ MAL - Evita dangerouslySetInnerHTML
<p dangerouslySetInnerHTML={{__html: userInput}} />
```

---

## 🧪 Testing (Futuro)

### Estructura para agregar tests
```
src/
├── components/
│   ├── Header.jsx
│   └── Header.test.jsx      // Tests
└── __tests__/               // Tests globales
```

### Librerías Recomendadas
- Vitest (testing rápido con Vite)
- React Testing Library (testing de componentes)

---

## 📚 Recursos Útiles

### Documentación Oficial
- [React Docs](https://react.dev/)
- [Vite Docs](https://vite.dev/)
- [Tailwind Docs](https://tailwindcss.com/)
- [Google Fonts](https://fonts.google.com/)
- [Material Icons](https://fonts.google.com/icons)

### Herramientas
- [Color Picker](https://www.google.com/search?q=color+picker)
- [Responsive Design Checker](https://responsivedesignchecker.com/)
- [GTmetrix (Performance)](https://gtmetrix.com/)
- [WebPageTest](https://webpagetest.org/)

### Inspiración
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)
- [Awwwards](https://www.awwwards.com/)

---

## 🤔 Problemas Comunes

### Tailwind no aplica estilos
```bash
# Solución:
1. Reinicia npm run dev
2. Verifica que tailwind.config.js existe
3. Verifica que index.css importa @tailwind
4. Limpia browser cache (Ctrl+Shift+R)
```

### Imágenes no cargan
```javascript
// Verifica:
1. Ruta es correcta (URLs de Google funcionan)
2. Permisos CORS
3. URL no tiene espacios
4. Extensión es válida (.jpg, .png, .webp)
```

### Cambios no se ven
```bash
# Solución:
1. npm run dev (reinicia server)
2. Hard refresh (Ctrl+Shift+R)
3. Cierra DevTools
4. Limpia dist/ (npm run build nuevamente)
```

---

## 🎓 Próximos Pasos para Aprender

1. **Agregar interactividad**
   - Formularios con validación
   - Modales interactivos
   - Menú hamburguesa en móvil

2. **Backend Integration**
   - API calls con fetch
   - Guardar emails en base de datos
   - Procesamiento de pagos

3. **Analytics**
   - Google Analytics
   - Seguimiento de conversiones
   - Heatmaps

4. **SEO Avanzado**
   - Open Graph meta tags
   - XML Sitemap
   - Robots.txt
   - Schema.org markup

---

**¡Sigue estos principios y tu proyecto crecerá de forma escalable y mantenible!** 🚀
