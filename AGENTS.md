# AGENTS.md - Landing Page Proyecto

## Descripción del Proyecto
Landing page para app de control financiero con integración SUNAT (Perú).
Stack: **Vite + React + TypeScript + Tailwind CSS + i18next**

## Comandos

### Desarrollo
```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build       # Build de producción
npm run preview     # Previsualizar build
```

### Lint y TypeCheck
```bash
npm run lint        # Ejecutar ESLint
npx tsc --noEmit    # Verificar TypeScript
```

### Testing
```bash
npm run test        # Ejecutar tests (si están configurados)
npm run test:ui     # Tests con UI (si disponible)
```

## Estructura del Proyecto

```
src/
├── App.tsx           # Componente principal (todas las secciones)
├── main.tsx          # Entry point
├── index.css         # Tailwind (import "tailwindcss")
├── i18n/
│   ├── index.ts     # Configuración i18next
│   ├── es.json      # Traducciones español
│   └── en.json      # Traducciones inglés
└── components/      # (reservado para componentes separados)
sections/            # (reservado para secciones separadas)
```

## Code Style Guidelines

### Imports
- Orden: React → libs externas → componentes propios → tipos
- Ejemplo:
```tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import './i18n';
```

### Formateo
- Usar Prettier (configuración por defecto de Vite)
- 2 espacios para indentación
- Semicolons al final de statements
- Comillas simples para strings

### Tipos
- TypeScript strict mode habilitado
- Usar `interface` para objetos públicos
- Evitar `any`, usar `unknown` si es necesario

### Convenciones de Nombres
- **Componentes**: PascalCase (HeroSection, Navbar)
- **Funciones/Variables**: camelCase (scrollToSection, isMenuOpen)
- **Constantes**: UPPER_SNAKE_CASE
- **Archivos**: kebab-case (hero-section.tsx)

### Errores y Edge Cases
- Manejar estados de loading/error en componentes asíncronos
- Validar props de componentes con default values cuando sea necesario
- Usar try/catch solo cuando sea necesario (no-wrap todo)

### React Patterns
- Hooks al inicio del componente
- Extraer lógica reusable a custom hooks
- Componentes pequeños y focusing en una responsabilidad
- Usar functional components con arrow functions

### Tailwind CSS
- Usar colores de la paleta: slate-50/200/600/900, blue-500/600/800
- Clases utilitarias en orden: layout → sizing → spacing → visuals
- Mobile-first: clases base → luego md: para desktop

### Internacionalización (i18n)
- Keys en camelCase dentro de JSON
- Estructura anidada por sección
- Usar `t('path.to.key')` para traducciones
- No concatenar strings en keys

### Responsive
- Mobile first: diseñar para móvil, luego agregar breakpoints
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navbar con menú hamburguesa en móvil

### SEO y Accesibilidad
- Usar etiquetas semánticas (section, nav, footer)
- Textos alternativos en elementos visuales
- ARIA labels cuando sea necesario

## Notas para Futuros Desarrollos

1. **Logo**: Actualmente placeholder "TuLogo" - reemplazar con logo real
2. **Ilustración Hero**: SVG inline - podría替换 por imagen real
3. **Links**: Footer tiene links placeholder - actualizar con URLs reales
4. **CTA Buttons**: Por ahora solo estéticos - conectar con backend después

## Errores Comunes a Evitar

- No usar `index.css` para estilos que no sean Tailwind
- No importar `i18n` en cada componente, solo en App.tsx
- No hardcodear textos - siempre usar `t()` de i18next
- No olvidar `key` en mapeos de arrays