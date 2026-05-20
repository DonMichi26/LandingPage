# UI/UX Audit Report — Smart Finance Landing Page

> **Date:** 2026-05-20
> **Product:** Landing page para promoción de app móvil de control financiero con integración SUNAT
> **Stack:** Vite + React + TypeScript + Tailwind CSS + i18next + Framer Motion

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Anti-Patterns Verdict](#2-anti-patterns-verdict)
3. [Design Health Score](#3-design-health-score)
4. [Section-by-Section Review](#4-section-by-section-review)
5. [Detailed Findings by Severity](#5-detailed-findings-by-severity)
6. [Cognitive Load Assessment](#6-cognitive-load-assessment)
7. [Persona Red Flags](#7-persona-red-flags)
8. [Patterns & Systemic Issues](#8-patterns--systemic-issues)
9. [Positive Findings](#9-positive-findings)
10. [Prioritized Action Plan](#10-prioritized-action-plan)

---

## 1. Executive Summary

**Audit Health Score: 9/20 — Poor (major overhaul needed)**

The landing page has a strong visual foundation with good use of design tokens and smooth animations, but it suffers from critical interaction failures, significant code duplication, and inconsistent execution across sections. The most urgent issues are broken CTAs (the download buttons do nothing), missing content (testimonial photos), and dead code (~284 lines duplicated inside a single mega-section).

| Metric | Count |
|--------|-------|
| P0 (Blocking) | 4 |
| P1 (Major) | 7 |
| P2 (Minor) | 9 |
| P3 (Polish) | 6 |
| **Total** | **26** |

### Nielsen's Heuristics Score: **22/40** — Acceptable

---

## 2. Anti-Patterns Verdict

**Does this look AI-generated? Partially.** The page avoids many obvious tells — no gradient text, no glassmorphism abuse, no stock illustrations. However, several patterns betray an AI-assisted origin:

| Anti-Pattern | Status | Location |
|-------------|--------|----------|
| **Orbes + partículas + mouse glow duplicados** | ⚠️ Presente en 7/9 secciones | Hero, AppPreview, Features, Comparison, Download, Testimonials, Support |
| **Card grids idénticos** | ⚠️ Features y AppPreview usan bento grid muy similar | `FeaturesSection.tsx`, `AppPreviewSection.tsx` |
| **Placeholders evidentes** | 🔴 Imagen FAQ dice "Placeholder para ilustración" | `SupportSection.tsx:279` |
| **DangerouslySetInnerHTML** | 🔴 SVG inline sin sanitizar | `BrandsCarouselSection.tsx:70` |
| **Botones inline (sin clases reutilizables)** | ⚠️ `.btn-primary`/`.btn-secondary` existen pero no se usan | Support/Navbar construyen botones manualmente |
| **Gradient text** | ✅ Eliminado — reemplazado por accent color |
| **Glassmorphism** | ✅ Solo en `.glass`/`.glass-card`, no sobre usado |
| **AI color palette** | ✅ OKLCH con tokens semánticos |

---

## 3. Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No feedback en CTA de descarga (no hacen nada); form success sin aria-live |
| 2 | Match System / Real World | 3 | Copy en español natural, metáforas bancarias correctas |
| 3 | User Control and Freedom | 1 | StickyCTA sin hover en mobile no puede cerrarse ni entenderse |
| 4 | Consistency and Standards | 2 | 6 valores de padding distintos, 3 enfoques de fondo oscuro, botones sin patrón unificado |
| 5 | Error Prevention | 2 | Formulario sin validación en tiempo real, placeholders sin labels |
| 6 | Recognition Rather Than Recall | 3 | Secciones claras, iconos acompañan texto |
| 7 | Flexibility and Efficiency | 1 | Sin atajos, sin skip links funcionales (solo hay uno), sin búsqueda |
| 8 | Aesthetic and Minimalist Design | 3 | Visualmente atractivo pero sobrecargado de orbes/partículas |
| 9 | Error Recovery | 1 | Sin error boundary, sin manejo de error en carga de imágenes, sin retry en formulario |
| 10 | Help and Documentation | 2 | FAQ presente pero superficial (3 preguntas); sin onboarding, sin tooltips |
| **Total** | | **22/40** | **Acceptable** |

---

## 4. Section-by-Section Review

### 4.1 Navbar (`Navbar.tsx`)
- **Pro:** Skip-link presente, scroll-aware design, idioma toggle funcional
- **Contra:** CTA del menú móvil no hace nada (línea 214); sin focus trap cuando el menú está abierto; aria-labels duplican el texto visible sin añadir contexto

### 4.2 ParallaxHero (`ParallaxHero.tsx`)
- **Pro:** Gran impacto visual, jerarquía clara, staggered entrance bien ejecutado, stats cards integradas
- **Contra:** `hero.tagline` ausente de i18n (siempre muestra fallback); 20 partículas + orbes + mouse glow sobrecarga el fondo; "Smart Finance" hardcodeado parcialmente

### 4.3 AppPreviewSection (`AppPreviewSection.tsx`)
- **Pro:** Bento grid con 12 items, hover effects, contraste OK (oklch 94% bg)
- **Contra:** 5/12 títulos hardcodeados sin i18n; misma estructura bento que FeaturesSection; 60 partículas decorativas

### 4.4 FeaturesSection (`FeaturesSection.tsx`)
- **Pro:** Gradientes oscuros atractivos, variedad de tamaños de card (2×2, 1×2, 3×1)
- **Contra:** 120 partículas (la mayor cantidad); sección description hardcodeada sin i18n; 6 orbes + mouse glow

### 4.5 BenefitsSection (`BenefitsSection.tsx`)
- **Pro:** Diseño limpio, 4 cards simétricas
- **Contra:** Sin subtítulo (única sección sin párrafo descriptivo); solo tiene h2

### 4.6 ComparisonSection (`ComparisonSection.tsx`)
- **Pro:** Tabla responsiva, iconos por fila, hover states
- **Contra:** 80 partículas; "Método tradicional" vs "Nuestra app" — las celdas carecen de etiquetas aria para screen readers

### 4.7 BrandsCarouselSection (`BrandsCarouselSection.tsx`)
- **Pro:** Scroll animation infinita
- **Contra:** Logo real de Caja Huancayo sin permiso (riesgo legal); `dangerouslySetInnerHTML`; sin pause en hover (viola WCAG 2.2.2); posicionado entre Comparison y Download rompe el flujo narrativo

### 4.8 DownloadSection (`DownloadSection.tsx`)
- **Pro:** Phone mockup con animaciones, trust signals (free, no credit card), floating cards decorativas
- **Contra:** ❌ **CRÍTICO — Los botones de App Store y Play Store no tienen onClick handler, no hacen nada**; floating cards ocultas en mobile (`hidden md:block`); partículas + orbes + mouse glow

### 4.9 TestimonialsSection (`TestimonialsSection.tsx`)
- **Pro:** 3 testimonios con avatar, estrellas, hover glow
- **Contra:** ❌ **Imágenes de avatar no existen** (`/testimonials/user-1.jpg` etc.) — siempre se ve el fallback de inicial; h2 y párrafo dicen exactamente lo mismo ("Lo que dicen nuestros usuarios"); 30 partículas

### 4.10 SupportSection (`SupportSection.tsx`)
- **Pro:** FAQ accordion, formulario funcional con validación, CTA integrado, imagen de asesor
- **Contra:** ❌ **Mega-sección que duplica FaqSection + ContactSection + CtaSection** (~284 líneas de dead code); inputs sin `<label>` (WCAG 1.3.1); grid `grid-cols-6` sin fallback mobile rompe el layout; imagen Asesor.png oculta en error pero deja hueco vacío de 400px; 50 partículas + 10 orbes (el mayor número); CTA duplicado con el StickyCta

### 4.11 Footer (`Footer.tsx`)
- **Pro:** Diseño limpio, licencia visible, redes sociales
- **Contra:** Sin `useTranslation` — todo hardcodeado; email/phone distintos a los de i18n (`hola@smartfinance.pe` vs `soporte@tulogo.com`); no usa `t('footer.links.*')`

### 4.12 StickyCta (`StickyCta.tsx`)
- **Pro:** Aparece al scrollear, animación de expansión en hover
- **Contra:** ❌ **Texto oculto en mobile** (`max-w-0` + `group-hover:max-w-[160px]` no funciona en táctil); fallback keys no existen en i18n

---

## 5. Detailed Findings by Severity

### P0 — Blocking (fix immediately)

| # | Issue | Location | Impact | Fix |
|---|-------|----------|--------|-----|
| 1 | **Botones de descarga sin handler** | `DownloadSection.tsx:211-237` | El usuario no puede descargar la app — el CTA principal de la landing no funciona | Agregar `onClick` o `<a href>` con links reales a App Store / Play Store |
| 2 | **Navbar CTA móvil sin handler** | `Navbar.tsx:207-214` | Usuarios mobile tocan "Descargar gratis" y no pasa nada — pérdida de conversión | Agregar `onClick` que scrollee a `#download` o abra store |
| 3 | **Imágenes de testimonio no existen** | `TestimonialsSection.tsx:28`, `public/testimonials/` (vació) | 3 avatares siempre muestran fallback de inicial — aspecto poco profesional | Agregar imágenes reales o reemplazar con avatares generados (ui-avatars.com) |
| 4 | **BrandsCarousel usa logo real sin permiso** | `BrandsCarouselSection.tsx:5-24` | Riesgo legal/trademark por usar logo de Caja Huancayo sin autorización | Reemplazar con logos genéricos o conseguir permisos |

### P1 — Major (fix before release)

| # | Issue | Location | Standard | Fix |
|---|-------|----------|----------|-----|
| 5 | **Inputs sin `<label>`** | `SupportSection.tsx:322-351` | WCAG 1.3.1, 3.3.2 | Agregar `<label>` o `aria-label` a cada input |
| 6 | **3 componentes huérfanos (~284 líneas muertas)** | `ContactSection.tsx`, `CtaSection.tsx`, `FaqSection.tsx` | — | Eliminar dead code o integrarlos en App.tsx |
| 7 | **Hero tagline ausente de i18n** | `ParallaxHero.tsx:142`, `es.json`/`en.json` | — | Agregar `hero.tagline` a ambos archivos de traducción |
| 8 | **3 secciones oscuras consecutivas** | `App.tsx:56-66` (Brands → Testimonials → Support) | — | Insertar sección light entre ellas o redistribuir el orden |
| 9 | **StickyCTA sin texto en mobile** | `StickyCta.tsx:24` | WCAG (touch targets) | Usar `md:max-w-0 md:group-hover:max-w-[160px]` para preservar en desktop y mostrar siempre en mobile |
| 10 | **Form success/error sin `aria-live`** | `SupportSection.tsx:353-363` | WCAG 4.1.3 | Agregar `role="alert"` o `aria-live="polite"` a los mensajes de estado |
| 11 | **Section descriptions hardcodeadas sin i18n** | `FeaturesSection.tsx:212`, `TestimonialsSection.tsx:155-156`, etc. | — | Migrar ~40 textos a i18n |

### P2 — Minor

| # | Issue | Location | Fix |
|---|-------|----------|-----|
| 12 | **372 partículas decorativas duplicadas en 7 componentes** | Hero, AppPreview, Features, Comparison, Download, Testimonials, Support | Extraer a hook `useParticles(count)` |
| 13 | **Mouse listeners sin throttle en 6/7 secciones** | Idem (excepto DownloadSection) | Usar `requestAnimationFrame` o hook `useMousePosition(ref)` |
| 14 | **Orbes decorativos duplicados en 6 componentes** | Idem | Extraer a componente `GlowingOrbs` |
| 15 | **Paddings de sección inconsistentes (6 valores distintos)** | Todas las secciones | Unificar a 3 escalones: `py-16 md:py-20` / `py-20 md:py-28` / `py-20 md:py-32` |
| 16 | **`px-[1%]` frágil** | `SupportSection.tsx:289`, `ContactSection.tsx:15`, `CtaSection.tsx:26` | Cambiar a `px-4 sm:px-6 lg:px-8` |
| 17 | **grid-cols-6 sin fallback mobile** | `SupportSection.tsx:291` | Agregar `grid-cols-1 md:grid-cols-6` |
| 18 | **Imagen Asesor.png oculta en error deja hueco** | `SupportSection.tsx:294-303` | Usar `onError` para ocultar contenedor padre o mostrar placeholder |
| 19 | **LoadingOverlay hardcodea 1500ms** | `LoadingOverlay.tsx:21` | Usar evento de carga real (fonts, images) en lugar de timer fijo |
| 20 | **BenefitsSection sin subtítulo** | `BenefitsSection.tsx:14-18` | Agregar párrafo descriptivo |

### P3 — Polish

| # | Issue | Location | Fix |
|---|-------|----------|-----|
| 21 | **`font-display: swap` en html (invalido)** | `index.css:30` | Eliminar (Google Fonts ya lo incluye en la URL) |
| 22 | **Aria-labels vagos en Footer** | `Footer.tsx:107` | Cambiar `aria-label={id}` por "Síguenos en Twitter", etc. |
| 23 | **Aria-labels en Navbar duplican texto visible** | `Navbar.tsx:116` | Cambiar por "Ir a sección de Características", etc. |
| 24 | **Sin `role="progressbar"` en LoadingOverlay** | `LoadingOverlay.tsx:66-83` | Agregar `role="progressbar"` con `aria-valuenow` |
| 25 | **Focus trap ausente en menú móvil** | `Navbar.tsx:185-218` | Implementar focus trap con `useFocusTrap` |
| 26 | **`loading="lazy"` ausente en imágenes** | `TestimonialsSection.tsx:28`, `SupportSection.tsx:295` | Agregar `loading="lazy"` |

---

## 6. Cognitive Load Assessment

### 8-Item Checklist

| # | Check | Pass/Fail | Notes |
|---|-------|-----------|-------|
| 1 | Visible options per decision < 5 | ⚠️ | SupportSection tiene 3 CTAs compitiendo (FAQ accordion, formulario de contacto, CTA de descarga) |
| 2 | Progressive disclosure used | ❌ | No hay — todas las features se muestran de una vez |
| 3 | Chunking applied | ✅ | Secciones claramente separadas por tema |
| 4 | Consistent layout patterns | ⚠️ | 6 valores de padding distintos, botones sin patrón unificado |
| 5 | Familiar UI conventions | ✅ | Navbar, hero, cards, accordion — patrones estándar |
| 6 | Minimal distractions | ❌ | 372 partículas animadas + orbes + mouse glows en casi todas las secciones |
| 7 | Clear error messages | ❌ | Sin errores visibles (las interacciones rotas simplemente no responden) |
| 8 | Reduce short-term memory | ⚠️ | Testimonios sin fotos reales reducen credibilidad |

**Failure count: 3/8 — Moderate cognitive load**

### Decision Point Analysis

| Punto de decisión | Opciones visibles | Evaluación |
|-------------------|-------------------|------------|
| Hero | 2 botones (Descargar / Ver demo) | ✅ Bueno |
| Navbar | 4 items + 2 acciones (idioma, CTA) | ✅ Bueno |
| SupportSection | FAQ (3 items) + Formulario (3 campos) + CTA (2 botones) | ⚠️ 8 opciones en una sola vista |
| Footer | Contacto + Redes + Licencia + Copyright | ⚠️ 3 columnas + bloque de licencia |

---

## 7. Persona Red Flags

### María — Emprendedora primeriza (30, dueña de pequeña boutique)
> *Quiere llevar sus finanzas pero no sabe por dónde empezar*

| Red Flag | Location | Impact |
|----------|----------|--------|
| El hero dice "Tu banco inteligente" pero no explica QUÉ hace la app hasta la 3ra sección (Features) | `ParallaxHero.tsx:149` | María scrollea sin entender el valor |
| No hay sección de "cómo funciona" o onboarding visual | — | Abandona antes de llegar a Features |
| Los botones de descarga no funcionan | `DownloadSection.tsx:211-237` | Confía en la app, quiere descargar, no puede → frustración |
| "Disponible ahora" badge pero sin links reales | `DownloadSection.tsx:180` | Engañoso |

> **Riesgo de abandono:** Alto. No hay un "quick win" visual que muestre el valor en los primeros 3 segundos.

### Carlos — Contador de PYME (45, experto en SUNAT)
> *Quiere saber si la app reemplaza su flujo actual de trabajo*

| Red Flag | Location | Impact |
|----------|----------|--------|
| No hay sección de integraciones (dead code en i18n pero sin componente) | `es.json:203-224` | Carlos no sabe si funciona con su banco/software actual |
| Comparativa es genérica ("método tradicional" vs "nuestra app") sin benchmarks reales | `ComparisonSection.tsx` | No hay data concreta (horas ahorradas, % de error) |
| FAQ solo tiene 3 preguntas superficiales | `SupportSection.tsx:147-165` | No responde dudas técnicas (API SUNAT, formatos, legislación) |

> **Riesgo de abandono:** Medio-alto. Carlos necesita datos concretos que no están presentes.

### Lucía — Usuario mobile-first (22, universitaria)
> *Usa el celular para todo, espera experiencias táctiles pulidas*

| Red Flag | Location | Impact |
|----------|----------|--------|
| StickyCTA sin texto en mobile | `StickyCta.tsx:24` | No entiende el icono flotante |
| Menú móvil CTA roto | `Navbar.tsx:207-214` | Toca "Descargar gratis" y no pasa nada |
| 3 secciones oscuras consecutivas fatigan la vista en modo oscuro del sistema | `App.tsx:56-66` | Menos tiempo en página |
| Floating cards de DownloadSection ocultas en mobile | `DownloadSection.tsx:336,354` | Mobile recibe experiencia reducida |

> **Riesgo de abandono:** Medio. La página es visualmente atractiva pero tiene micro-fricciones que un usuario mobile-first nota inmediatamente.

---

## 8. Patterns & Systemic Issues

### 🔴 Orbes + Partículas + Mouse Glow: El patrón más duplicado

Cada sección con fondo oscuro replica exactamente la misma estructura:

```tsx
// ~7 veces, mismas ~80 líneas cada una
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {/* 5-12 divs de orbes con radial-gradient */}
  {/* Array.map de partículas */}
  {/* Div de mouse glow */}
</div>
```

**Costo total:** ~560 líneas de código duplicado, 372 nodos DOM extra, 7 event listeners de mousemove.

### 🔴 Fondo oscuro: 3 enfoques distintos

| Enfoque | Dónde | Problema |
|---------|-------|----------|
| `bg-[#050505]` | Hero | Hardcodeado |
| `bg-black` | Features, Comparison, Support | Clase Tailwind |
| `.section-dark` wrapper | App.tsx envuelve secciones | Agrega gradient encima |

### 🔴 Botones: Sin patrón unificado

- **CSS global:** `.btn-primary`, `.btn-secondary` definidos en `index.css:117-148`
- **Uso real:** Hero usa clases directamente, SupportSection construye inline, Navbar usa gradient inline
- **Consecuencia:** Cambiar el estilo de botones requiere editar 4+ ubicaciones

### 🔴 i18n: ~40 textos hardcodeados

Secciones con textos fuera de i18n: Hero, AppPreview, Features, Download, Testimonials, Support, Footer. La internacionalización está incompleta (~70% coverage).

---

## 9. Positive Findings

| ❇️ | Hallazgo | Detalle |
|-----|----------|---------|
| Tokens de color OKLCH | Uso consistente de `var(--color-*)` en casi todos los componentes. Sistema de colores semántico bien definido. |
| Skip-link de accesibilidad | Primer elemento del `<body>`, visible solo en focus, target correcto (`#main-content`). |
| Animaciones con transform/opacity | Uso exclusivo de `transform` y `opacity` para animaciones Framer Motion — evita layout thrashing. |
| Staggered entrance en Hero | 5 niveles de entrada escalonada con delays crecientes (100ms → 500ms). Bien ejecutado. |
| RAF throttling en DownloadSection | Única sección que usa `requestAnimationFrame` para throttlear el mousemove. Patrón a replicar. |
| `prefers-reduced-motion` soportado | Media query en `index.css:216-225` que desactiva animaciones cuando el usuario lo solicita. |
| Estructura de componentes clara | Separación en `ui/`, `sections/`, `layout/` con nombres descriptivos. |
| Fuente Figtree + Inter | Combinación moderna y limpia. Buena legibilidad en cuerpo y carácter en títulos. |
| Alternancia temática clara/oscura | El patrón general de secciones alternas es correcto (excepto por los 3 bloques oscuros al final). |
| Hover effects en cards | Escala + borde + icono en hover de AppPreview y Features. Micro-interacciones que mejoran la percepción de calidad. |

---

## 10. Prioritized Action Plan

### Fase 1: Fix Blockers (P0) — Inmediato

| # | Comando | Objetivo | Issues |
|---|---------|----------|--------|
| 1 | **`/harden`** | Reparar interacciones rotas | P0-1 (botones descarga), P0-2 (CTA móvil), P0-3 (imágenes testimonio) |
| 2 | **`/distill`** | Eliminar dead code y consolidar | P1-6 (3 componentes huérfanos), P2-15/16/17 (inconsistencias de layout) |

### Fase 2: UX & Accesibilidad (P1) — Antes del lanzamiento

| # | Comando | Objetivo | Issues |
|---|---------|----------|--------|
| 3 | **`/clarify`** | i18n completo + microcopy | P1-7 (hero tagline), P1-11 (textos hardcodeados) |
| 4 | **`/adapt`** | Responsive + contraste de secciones | P1-8 (3 secciones oscuras), P2-15/16/17 (breakpoints frágiles) |
| 5 | **`/harden`** (pass 2) | Formularios accesibles | P1-5 (labels), P1-10 (aria-live), P3-22/23/24 (ARIA) |

### Fase 3: Performance & Refactor (P2-P3) — Próximo sprint

| # | Comando | Objetivo | Issues |
|---|---------|----------|--------|
| 6 | **`/optimize`** | Partículas → hook compartido, orbes → componente, mouse → hook | P2-12, P2-13, P2-14 (sistema duplicado) |
| 7 | **`/polish`** | Aria, loading, focus trap, CSS inválido | P3-21 a P3-26 |

### Fase 4: Mejora continua

| # | Comando | Objetivo |
|---|---------|----------|
| 8 | **`/layout`** | Unificar sistema de espaciado y paddings |
| 9 | **`/typeset`** | Revisar jerarquía tipográfica completa |
| 10 | Re-run **`/audit`** | Verificar mejora del score |

---

## Appendix: File Map

| Archivo | Líneas | Rol |
|---------|--------|-----|
| `src/App.tsx` | 75 | Entry point, layout de secciones |
| `src/index.css` | 257 | Tokens, utilidades, animaciones |
| `src/components/ui/ParallaxHero.tsx` | 265 | Hero con stats integrados |
| `src/components/sections/AppPreviewSection.tsx` | 231 | Bento grid de preview |
| `src/components/sections/FeaturesSection.tsx` | 287 | Cards de funcionalidades |
| `src/components/sections/BenefitsSection.tsx` | 40 | Cards de beneficios (light) |
| `src/components/sections/ComparisonSection.tsx` | 164 | Tabla comparativa |
| `src/components/sections/BrandsCarouselSection.tsx` | 88 | Carrusel de logos (⚠️ riesgo legal) |
| `src/components/sections/DownloadSection.tsx` | 371 | CTA de descarga + mockup |
| `src/components/sections/TestimonialsSection.tsx` | 208 | Testimonios (⚠️ imágenes faltan) |
| `src/components/sections/SupportSection.tsx` | 439 | FAQ + Contacto + CTA (mega-sección) |
| `src/components/sections/ContactSection.tsx` | 81 | 💀 Dead code (duplicado en Support) |
| `src/components/sections/CtaSection.tsx` | 82 | 💀 Dead code |
| `src/components/sections/FaqSection.tsx` | 122 | 💀 Dead code |
| `src/components/layout/Navbar.tsx` | 221 | Navegación |
| `src/components/layout/Footer.tsx` | 150 | Footer sin i18n |
| `src/components/layout/LoadingOverlay.tsx` | 194 | Splash screen |
| `src/components/StickyCta.tsx` | 29 | CTA flotante |
| `src/i18n/es.json` | 240 | Traducciones español (70% usado) |
| `src/i18n/en.json` | 240 | Traducciones inglés |
| `src/utils/theme.ts` | 15 | 💀 Dead code (no importado) |
