# Portafolio de muestra

Portafolio web personal desarrollado con TypeScript, HTML5 y CSS3.

## 🚀 Desarrollo

### Estructura del proyecto
- `index.html` - Archivo HTML principal
- `ts/app.ts` - Código TypeScript
- `js/app.js` - JavaScript compilado
- `css/style.css` - Estilos
- `demo/` - Capturas de proyectos
- `photo/` - Foto personal
- `doc/` - Documentos (CV)

### Scripts disponibles

```bash
# Compilar TypeScript
npm run build

# Compilar TypeScript en modo watch
npm run watch

# Servidor local
npm run serve
```

### Flujo de trabajo

1. **Edita `index.html`** para cambios en HTML
2. **Edita `ts/app.ts`** para cambios en JavaScript
3. **Edita `css/style.css`** para cambios en estilos
4. Después de editar TS, ejecuta:
   ```bash
   npm run build
   ```
5. O usa modo watch para auto-compilar:
   ```bash
   npm run watch
   ```

## 📦 Deploy en GitHub Pages

1. Asegúrate de que todos los cambios estén compilados
2. Commit y push:
   ```bash
   git add -A
   git commit -m "Update portfolio"
   git push origin Master
   ```
3. En GitHub → Settings → Pages:
   - Source: Deploy from a branch
   - Branch: Master
   - Folder: / (root)

## 🎨 Características

- ✅ TypeScript para código tipado
- ✅ Diseño responsive
- ✅ Carrusel de imágenes en modal
- ✅ Animaciones suaves
- ✅ Fondo topográfico generado
- ✅ Proyectos con demos interactivos

