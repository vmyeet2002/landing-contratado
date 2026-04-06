# ⚡ Inicio Rápido DS/COACH

## En 3 pasos, tu landing page está corriendo:

### 1. Abre la terminal en la carpeta `ds-coach`
```bash
cd ds-coach
```

### 2. Instala dependencias (primera vez solamente)
```bash
npm install
```

### 3. Inicia el servidor
```bash
npm run dev
```

### 4. ¡Abre tu navegador!
```
http://localhost:5173/
```

---

## 🔧 Comandos Útiles

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run preview` | Vista previa del build |

---

## 🎨 Editar Contenido

### Cambiar textos
Edita cualquier componente en `src/components/`

**Ejemplo - Cambiar título hero:**
```javascript
// En src/components/Hero.jsx
<h1 className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] tracking-tighter text-on-background">
  Tu nuevo título aquí
</h1>
```

### Cambiar colores
Edita `tailwind.config.js`:
```javascript
colors: {
  primary: "#tu-color",
}
```

### Cambiar imágenes
Busca las URLs en los componentes y reemplaza con las tuyas.

---

## ✨ Mantener el Hot Reload

Cuando guardas archivos, los cambios se ven automáticamente. ¡No necesitas recargar!

---

## 🚀 Siguiente Paso: Deploy

Una vez listo para publicar:

```bash
npm run build
```

Sube la carpeta `dist/` a:
- **Vercel** (recomendado, gratuito)
- **Netlify**
- **GitHub Pages**
- Tu servidor web

---

**¡Ya está! Ahora edita y crea tu landing page perfecta.** 🎉
