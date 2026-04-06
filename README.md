# 🎯 DS/COACH - Landing Page Moderna

Una landing page **premium, moderna y totalmente funcional** para DS/COACH: El acelerador de carrera en Data Science.

## ✨ Lo que hemos hecho

### ✅ Estructurado con React + Vite
- Proyecto completamente configurado y listo para usar
- Componentes modulares y reutilizables
- Fast Refresh (HMR) para desarrollo ágil

### ✅ Diseño Sistema "Obsidian Monolith"
- Colores premium (negro profundo + naranja vibrante)
- Tipografía profesional (Space Grotesk, Manrope, Inter)
- Efectos visuales modernos (glassmorphism, gradientes, animaciones)

### ✅ Completamente Responsive
- Optimizado para móvil, tablet y desktop
- Diseño fluido con Tailwind CSS

### ✅ Todas las Secciones
1. **Header** - Navbar fija con logo
2. **Hero** - Propuesta principal con gráficos SVG
3. **Problemas** - Pain points + costo de inacción
4. **Sistema de 8 Módulos** - Grid interactivo
5. **Autor** - Isaac González con bio y stats
6. **Casos de Éxito** - 3 testimonios con avatares
7. **Oferta** - Pricing, features y CTA
8. **Footer** - Links y copyright

---

## 🚀 Cómo Usar

### 1️⃣ Instalar Dependencias (si no lo hiciste)
```bash
cd ds-coach
npm install
```

### 2️⃣ Iniciar Servidor de Desarrollo
```bash
npm run dev
```

Abre: **http://localhost:5173/**

### 3️⃣ Compilar para Producción
```bash
npm run build
```

Genera carpeta `dist/` lista para deploy.

---

## 📦 Qué Incluye

| Herramienta | Versión | Uso |
|---|---|---|
| **React** | 18+ | Framework UI |
| **Vite** | 8+ | Build tool ultrarrápido |
| **Tailwind CSS** | Latest | Estilos utility-first |
| **PostCSS** | Latest | Procesamiento CSS |

---

## 🎨 Personalización Rápida

### Cambiar Colores
Edita `tailwind.config.js`:
```javascript
colors: {
  primary: "#tu-color",        // Botones, accents
  surface: "#tu-fondo",         // Fondo general
  // Más en el archivo...
}
```

### Cambiar Textos
Cada componente en `src/components/` es editable:
```javascript
<h2 className="text-4xl font-headline font-bold">
  Tu texto aquí
</h2>
```

### Reemplazar Imágenes
Busca `https://lh3.googleusercontent.com/` en los componentes y reemplaza con tus URLs.

### Agregar Nueva Sección
1. Crea `src/components/MiSeccion.jsx`
2. Importa en `App.jsx`
3. Agrega al JSX principal

---

## 📱 Estructura de Carpetas

```
ds-coach/
├── src/
│   ├── components/           # Componentes por sección
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProblemSection.jsx
│   │   ├── SystemSection.jsx
│   │   ├── AuthorSection.jsx
│   │   ├── SocialProof.jsx
│   │   ├── OfferSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx              # Componente raíz
│   ├── index.css            # Estilos Tailwind globales
│   └── main.jsx             # Punto de entrada React
├── tailwind.config.js       # Config colores/tipografía
├── postcss.config.js        # Config PostCSS
├── vite.config.js           # Config Vite
├── index.html               # HTML principal
└── package.json             # Dependencias
```

---

## 🎯 Próximos Pasos

- [ ] Conectar formulario de contacto
- [ ] Integrar con Stripe/PayPal
- [ ] Agregar analytics (Google Analytics)
- [ ] Implementar dark mode toggle (opcional)
- [ ] SEO optimization avanzada
- [ ] Hosting en Vercel/Netlify

---

## 🚀 Deploy Rápido

### **Vercel (Recomendado - Gratuito)**
```bash
npm i -g vercel
vercel
```

### **Netlify**
```bash
npm run build
# Arrastra carpeta 'dist/' a https://netlify.com
```

### **GitHub Pages**
```bash
npm run build
# Sube contenido de 'dist/' a gh-pages
```

---

## 💡 Tips de Desarrollo

✨ **Hot Reload**: Cambios se ven al instante
✨ **Modular**: Cada sección es un componente independiente
✨ **Escalable**: Fácil agregar más secciones
✨ **Optimizado**: Vite es ultrarrápido para dev y build

---

## 📞 Soporte

¿Necesitas ayuda? Revisa:
- [Documentación Vite](https://vite.dev/)
- [Documentación React](https://react.dev/)
- [Documentación Tailwind](https://tailwindcss.com/)

---

**¡Listo para llevar tu carrera en Data al siguiente nivel! 🚀**

© 2024 OBSIDIAN DATA SCIENCE. All rights reserved.
