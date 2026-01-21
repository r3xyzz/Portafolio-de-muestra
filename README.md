# Portafolio de muestra

## Requisitos
- Node.js 18+ (incluye npm)

## Comandos útiles
```powershell
# 1) Instalar dependencias
npm.cmd install

# 2) Compilar TypeScript -> genera js/app.js
npx.cmd tsc

# 3) Servir estático (opcional, con npx serve)
npx.cmd serve html
```

## Publicar en GitHub Pages
1. Asegurarme de que `js/app.js` esté generado (`npx.cmd tsc`).
2. Sube el repo (`git add`, `git commit`, `git push`).
3. En GitHub, activa Pages con la rama `Master` (o `main`) y la carpeta `/html` como raíz.
4. La URL pública mostrará el sitio estático; no requiere compilación adicional.

> Nota: `node_modules/` está ignorado por `.gitignore`; no se sube al repositorio.