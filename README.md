# 🚀 Landing Page - Smart Finance

<div align="center">

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![i18next](https://img.shields.io/badge/i18next-4267B2?style=for-the-badge&logo=i18next&logoColor=white)](https://www.i18next.com)

**Landing page para aplicación de control financiero con integración SUNAT (Perú)**

</div>

---

## 📋 Descripción

Landing page moderna y responsiva para **Smart Finance**, una aplicación móvil de gestión financiera diseñada para el mercado peruano. El proyecto cuenta con integración de internacionalización (español/inglés) y animaciones fluidas.

### ✨ Características

- 🌐 **Internacionalización**: Español e Inglés (i18next)
- 🎨 **Diseño Moderno**: Dark theme con acentos en cyan/blue
- 📱 **Responsive**: Mobile-first design
- ✨ **Animaciones**: Transiciones fluidas con Framer Motion
- ♿ **Accesible**: following WCAG guidelines

---

## 🛠️ Tech Stack

| Tecnología | Propósito |
|------------|-----------|
| **Vite** | Build tool y dev server |
| **React 19** | UI Framework |
| **TypeScript** | Tipado estático |
| **Tailwind CSS** | Estilos utilitarios |
| **Framer Motion** | Animaciones |
| **i18next** | Internacionalización |
| **Lucide React** | Iconos |

---

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── animation-context/  # Contexto de animaciones
│   ├── animations/        # Componentes de animación
│   ├── FadeIn.tsx
│   ├── FadeOnScroll.tsx
│   ├── Footer.tsx
│   ├── LoadingOverlay.tsx
│   ├── Navbar.tsx
│   ├── ParallaxHero.tsx
│   ├── ScaleIn.tsx
│   ├── ScrollReveal.tsx
│   ├── StaggerContainer.tsx
│   └── StaggerItem.tsx
├── hooks/               # Custom hooks
│   ├── useParallax.ts
│   └── useSmoothScroll.ts
├── i18n/                # Internacionalización
│   ├── index.ts
│   ├── es.json
│   └── en.json
├── sections/            # Secciones de la landing
│   ├── AppPreviewSection.tsx
│   ├── BenefitsSection.tsx
│   ├── BrandsCarouselSection.tsx
│   ├── ComparisonSection.tsx
│   ├── ContactSection.tsx
│   ├── CtaSection.tsx
│   ├── DownloadSection.tsx
│   ├── FaqSection.tsx
│   ├── FeaturesSection.tsx
│   ├── StatsSection.tsx
│   └── TestimonialsSection.tsx
├── App.tsx              # Componente principal
├── main.tsx             # Entry point
└── index.css            # Estilos globales
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/DonMichi26/LandingPage.git

# Entrar al directorio
cd LandingPage

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev
```

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Iniciar servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Previsualizar build |
| `npm run lint` | Verificar código con ESLint |
| `npx tsc --noEmit` | Verificar tipos TypeScript |

---

## 🏗️ Principios SOLID Aplicados

Este proyecto fue refactorizado siguiendo los principios SOLID:

| Principio | Implementación |
|-----------|----------------|
| **S** (Single Responsibility) | Componentes separados en archivos individuales |
| **O** (Open/Closed) | Hooks reutilizables (`useSmoothScroll`) |
| **L** (Liskov Substitution) | Interfaces genéricas para animaciones |
| **I** (Interface Segregation) | Tipos específicos para cada componente |
| **D** (Dependency Inversion) | `AnimationContext` para abstraer Framer Motion |

---

## 🌐 Roadmap Futuro

### Fase 1: Estabilización
- [ ] Optimizar performance
- [ ] Completar tests unitarios
- [ ]Mejorar accessibility score

### Fase 2: Expansión
- [ ] Agregar más idiomas (Portugués)
- [ ] Implementar Dark/Light mode
- [ ] Agregar analytics

### Fase 3: Backend
- [ ] API REST con Node.js
- [ ] Base de datos (PostgreSQL)
- [ ] Integración SUNAT

### Fase 4: Mobile
- [ ] App React Native
- [ ] PWA support

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor lee [AGENTS.md](./AGENTS.md) para entender las guías de código del proyecto.

```bash
# Crear branch para feature
git checkout -b feature/nueva-caracteristica

# Hacer commit
git commit -m 'feat: agregar nueva característica'

# Push
git push origin feature/nueva-caracteristica
```

---

## 📄 Licencia

MIT License - ver [LICENSE](./LICENSE) para detalles.

---

## 📧 Contacto

Desarrollado por **DonMichi26**

- 🌐 Web: [sitio en construcción]
- 📧 Email: soporte@cajahuanca.com

---

<div align="center">

⭐️ Si te gusta este proyecto, no olvides dar una estrella!

</div>