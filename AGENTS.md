# AGENTS.md - Landing Page Proyecto

## Descripción del Proyecto

Landing page para app de control financiero con integración SUNAT (Perú).
Stack: **Vite + React + TypeScript + Tailwind CSS + i18next**

---

# Guía OpenCode + Skills

## 1. ¿Qué es OpenCode?

OpenCode es un agente de IA de código abierto que:
- Lee y analiza tu código automáticamente
- Detecta qué skill usar según la tarea en curso
- Ejecuta acciones en tu nombre (con permisos)

### ¿Qué son las Skills?

Las **skills** son conjuntos de instrucciones especializadas que OpenCode carga cuando:
- Detectan un archivo coincidente (ej: `vite.config.ts` → skill `vite`)
- Encuentran keywords en tu mensaje (ej: "optimizar SEO", "mejorar accesibilidad")
- Les referencias explícitamente

Cada skill contiene:
- `SKILL.md` - Definición principal y documentación
- `references/` - Documentación adicional específica
- `rules/` - Reglas y patrones específicos (algunas skills)

---

## 2. Estructura de Skills del Proyecto

```
.agents/
├── groups/                                  # Skills activas del proyecto
│   ├── frontend/                           # UI, estilos, React (5 skills)
│   │   ├── accessibility/                  # WCAG 2.2, ARIA, navegación
│   │   ├── frontend-design/                # UI/UX de alta calidad
│   │   ├── tailwind-css-patterns/         # Estilos responsive, layout
│   │   ├── vercel-composition-patterns/  # Compound components
│   │   └── vercel-react-best-practices/    # Performance React
│   ├── build/                              # Build tools (1 skill)
│   │   └── vite/                          # Vite config, chunks, SSR
│   ├── types/                             # Typescript (1 skill)
│   │   └── typescript-advanced-types/      # Generics, utility types
│   └── utils/                             # Utilidades (2 skills)
│       ├── seo/                           # SEO, Core Web Vitals
│       └── theme-factory/               # Temas para artefactos
│
└── skills-backup/                         # Skills no usadas (respaldadas)
    ├── nodejs-best-practices/            # No aplica (sin backend)
    └── nodejs-backend-patterns/          # No aplica (sin backend)
```

---

## 3. Catálogo de Skills por Grupo

### 📁 Grupo: FRONTEND (5 skills)

| Skill | Descripción | Keywords para activar |
|-------|-------------|---------------------|
| **tailwind-css-patterns** | Estilos Tailwind responsive, layout, flexbox, grid, animaciones | "estilos", "Tailwind", "responsive", "mobile-first", "dark mode" |
| **vercel-react-best-practices** | Performance React: memo, useDeferredValue, Suspense, streaming | "performance", "optimizar React", "memo", "render" |
| **vercel-composition-patterns** | Compound components, render props, context providers | "componente compuesto", "React patterns", "API reusable" |
| **accessibility** | WCAG 2.2, ARIA, screen readers, keyboard navigation | "accesibilidad", "WCAG", "a11y", "ARIA", "keyboard" |
| **frontend-design** | UI/UX alta calidad, diseño moderno, animaciones | "diseño UI", "interfaz", "UX", "UI moderna" |

### 📁 Grupo: BUILD (1 skill)

| Skill | Descripción | Keywords para activar |
|-------|-------------|---------------------|
| **vite** | Config Vite, plugins, chunks, optimización, SSR, Rolldown | "Vite", "build", "vite.config", "optimizar bundle", "chunk" |

### 📁 Grupo: TYPES (1 skill)

| Skill | Descripción | Keywords para activar |
|-------|-------------|---------------------|
| **typescript-advanced-types** | Generics, conditional types, mapped types, utility types | "TypeScript", "types", "generics", "utility types" |

### 📁 Grupo: UTILS (2 skills)

| Skill | Descripción | Keywords para activar |
|-------|-------------|---------------------|
| **seo** | Meta tags, sitemap, structured data, Core Web Vitals, Lighthouse | "SEO", "meta tags", "buscadores", "sitemap" |
| **theme-factory** | Temas para artefactos (slides, docs, HTML landing pages) | "tema", "colors", "diseño", "tema personalizado" |

---

## 4. Cómo Usar las Skills

### Carga Automática

OpenCode detecta automáticamente según el contexto:

| Escenario | Skill Auto-cargada |
|-----------|-----------------|
| Editar `vite.config.ts` | `vite` |
| Trabajar con estilos Tailwind | `tailwind-css-patterns` |
| Mejorar SEO | `seo` |
| Añadir accesibilidad | `accessibility` |
| Optimizar rendimiento React | `vercel-react-best-practices` |

### Referencia Explícita

Puedes invocar una skill específicamente:

```
> "Usa la skill vite para configurar chunks de terceros"
> "Aplica tailwind-css-patterns para hacer el navbar responsive"
> "Empieza con la skill seo para optimizar la landing"
```

### Por Grupo

```
> "Necesito help con una skill de frontend"
> "Usa la skill build para optimizar el bundle"
```

---

## 5. Ejemplos Prácticos

### Ejemplo 1: Configurar Build con Vite
```bash
# OpenCode detecta automáticamente por vite.config.ts
# O referencia explícitamente:
> "Usa la skill vite para configurar chunks y optimizar el build"
```
→ OpenCode carga `vite` → aplica configuración de chunks, code splitting

### Ejemplo 2: Estilos con Tailwind
```bash
# Por keywords - OpenCode detecta automáticamente:
> "Haz el navbar responsive con mobile-first"
```
→ OpenCode carga `tailwind-css-patterns` → aplica clases responsive

### Ejemplo 3: Mejorar SEO
```bash
# Por keywords:
> "optimiza el SEO de la landing page"
```
→ OpenCode carga `seo` → aplica meta tags, structured data, sitemap

### Ejemplo 4: Accesibilidad WCAG
```bash
# Por keywords:
> "mejora la accesibilidad WCAG de la página"
```
→ OpenCode carga `accessibility` → audit y correcciones ARIA

### Ejemplo 5: Diseño UI
```bash
# Por keywords:
> "crea una UI moderna y profesional"
```
→ OpenCode carga `frontend-design` → aplica patrones de diseño

---

## 6. Comandos de Inspección

```bash
# Ver todas las skills disponibles
ls -la .agents/groups/*/

# Ver estructura de un grupo
ls -la .agents/groups/frontend/

# Ver skill específica (lectura rápida)
cat .agents/groups/build/vite/SKILL.md

# Buscar en una skill
grep -r "pattern" .agents/groups/frontend/tailwind-css-patterns/

# Ver referencias de una skill
ls .agents/groups/seo/references/
```

---

## 7. Flujo de Trabajo Recomendado

| Fase | Skill Principal | Skills Secundarias |
|------|--------------|------------------|
| Setup inicial | `vite` | - |
| UI y estilos | `tailwind-css-patterns` | `frontend-design` |
| Componentes React | `vercel-react-best-practices` | `vercel-composition-patterns` |
| SEO | `seo` | `accessibility` |
| Optimización final | `vite` | `vercel-react-best-practices` |

---

## 8. Notas Importantes

- Las skills se cargan **automáticamente** según el contexto del proyecto
- No necesitas especificar siempre la skill - OpenCode detecta la más relevante
- Cada skill tiene documentación adicional en subcarpetas (`references/`, `rules/`)
- Skills en `skills-backup/` NO se usan en este proyecto (son para backend)
- Algunas skills tienen **allowed-tools** espec��ficos definidos en su SKILL.md

---

## 9. Comandos del Proyecto

### Desarrollo
```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build       # Build de producción
npm run preview     # Previsualizar build
```

### Lint y TypeCheck
```bash
npm run lint        # Ejecutar ESLint
npx tsc --noEmit  # Verificar TypeScript
```

---

## 10. Estructura del Proyecto (Código)

```
src/
├── App.tsx              # Componente principal
├── main.tsx            # Entry point
├── index.css           # Tailwind (import "tailwindcss")
├── i18n/
│   ├── index.ts      # Configuración i18next
│   ├── es.json     # Traducciones español
│   └── en.json     # Traducciones inglés
├── assets/
│   └── images/    # Imágenes (pendiente: optimización)
├── components/
│   ├── layout/   # Navbar, Footer, LoadingOverlay
│   ├── ui/       # ParallaxHero, Image (futuro)
│   └── sections/ # 11 secciones de la landing
├── hooks/
│   ├── useSmoothScroll.ts
│   └── useParallax.ts
```

---

## Errores Comunes a Evitar

- No usar `index.css` para estilos que no sean Tailwind
- No importar `i18n` en cada componente, solo en App.tsx
- No hardcodear textos - siempre usar `t()` de i18next
- No olvidar `key` en mapeos de arrays
- No mezclar skills de groups distinto al trabajo actual