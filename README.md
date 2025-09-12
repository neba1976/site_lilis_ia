# Lili's Inkwell - IA

![Project Status](https://img.shields.io/badge/status-in_development-orange.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![CI](https://github.com/neba1976/site_lilis_ia/actions/workflows/ci.yml/badge.svg)

## Descripción

Lili's Inkwell - IA es una aplicación web moderna construida como un monorepo utilizando TurboRepo, diseñada para ofrecer una interfaz de chat con inteligencia artificial. La aplicación cuenta con soporte multi-idioma, un sidebar colapsable y una API de chat de ejemplo. Su arquitectura modular facilita el desarrollo y mantenimiento de diferentes componentes y servicios.

## Características

- **Interfaz de Chat AI:** Interfaz de usuario interactiva para interactuar con modelos de IA (actualmente con una API de eco de ejemplo).
- **Monorepo con TurboRepo:** Gestión eficiente de múltiples paquetes y aplicaciones con TurboRepo para builds rápidos y caching.
- **Soporte Multi-idioma (i18n):** Implementación de internacionalización para una experiencia de usuario global.
- **Sidebar Colapsable:** Un menú lateral dinámico que se expande y colapsa, adaptándose a diferentes tamaños de pantalla.
- **Temas (Claro/Oscuro):** Soporte para alternar entre modos de visualización claro y oscuro.
- **Tecnologías Modernas:** Construido con Next.js, React, TypeScript y Tailwind CSS para una experiencia de desarrollo robusta y escalable.

## Mejoras Recientes

- **Internacionalización (i18n) Mejorada:**
  - Corrección de errores de importación y tipado en los componentes relacionados con i18n y en el paquete `@repo/i18n`.
  - Las funciones de traducción y formateo ahora manejan correctamente las claves anidadas.
  - Eliminación de advertencias de ESLint y errores de TypeScript en el `I18nProvider`.
- **Navegación Fluida:**
  - El `LangSwitcher` utiliza `router.push()` de Next.js para una navegación del lado del cliente más suave.
- **Sidebar Adaptativo y Optimizado:**
  - Comportamiento responsivo y control de visibilidad del botón de colapsar/expandir.

## Tecnologías Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (v15.5.2)
- **Librería UI:** [React](https://react.dev/) (v19.1.1)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (v5.9.2)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [Preline UI](https://preline.co/)
- **Gestor de Paquetes:** [pnpm](https://pnpm.io/) (v10.15.0)
- **Monorepo Tool:** [TurboRepo](https://turbo.build/) (v2.5.6)
- **Linter:** [ESLint](https://eslint.org/) (v9.34.0) con `@typescript-eslint` (v8.41.0)
- **Formateador:** [Prettier](https://prettier.io/)

## Primeros Pasos

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior) y [pnpm](https://pnpm.io/installation).

### Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/neba1976/site_lilis_ia.git
   cd site_lilis_ia
   ```

2. **Instalar dependencias:**

   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno:**

   ```bash
   cp .env.example .env
   cp .env apps/web/.env
   # Si tienes una API key para la IA, agrégala a .env
   ```

### Ejecución Local

Para iniciar el servidor de desarrollo:

```bash
pnpm dev
# La aplicación web estará disponible en http://localhost:3000/es (o el idioma configurado)
```

### Construcción (Build)

Para construir la aplicación para producción:

```bash
pnpm build
```

### Linting y Formateo

Para verificar la calidad del código y el formato:

```bash
pnpm lint
pnpm format
```

### Verificación de Tipos

Para ejecutar la verificación de tipos de TypeScript:

```bash
pnpm typecheck
```

## Estructura del Proyecto

```bash
site_lilis_v3_12_2/
├── apps/
│   ├── api/    # Aplicación de la API (ej. para el chat AI)
│   └── web/    # Aplicación web principal (Next.js)
├── packages/
│   ├── ai/         # Lógica relacionada con IA
│   ├── auth/       # Lógica de autenticación
│   ├── connectors/ # Conectores a servicios externos
│   ├── contracts/  # Contratos y definiciones de tipos compartidos
│   ├── core/       # Lógica de negocio central
│   ├── db/         # Configuración y utilidades de base de datos
│   ├── i18n/       # Configuración y utilidades de internacionalización
│   ├── testing/    # Utilidades para pruebas
│   └── ui/         # Componentes de UI compartidos
├── .env            # Variables de entorno globales
├── .github/        # Configuraciones de GitHub (ej. GitHub Actions workflows)
├── .turbo/         # Caché de TurboRepo
├── .gitignore      # Archivos y directorios ignorados por Git
├── .prettierrc     # Configuración de Prettier para formateo de código
├── eslint.config.js # Configuración de ESLint (nuevo formato)
├── package.json    # Configuración del monorepo y scripts
├── pnpm-lock.yaml  # Lockfile de pnpm
├── pnpm-workspace.yaml # Definición del workspace de pnpm
├── tsconfig.base.json # Configuración base de TypeScript
├── turbo.json      # Configuración de TurboRepo
└── README.md       # Documentación del proyecto
```

## Repositorio GitHub

Este proyecto está alojado en GitHub en la siguiente dirección:

[https://github.com/neba1976/site_lilis_ia.git](https://github.com/neba1976/site_lilis_ia.git)

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un _issue_ o un _pull request_ para cualquier mejora o corrección de errores.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

**Versiones Anteriores:**

- **v3.12.2:** Corrección de la configuración de PostCSS para Next.js.
- **v3.12.1:** Actualización de dependencias a las últimas versiones estables (Next 15.5.2, React 19.1.1, Preline 3.2.3, TypeScript 5.9.2, ESLint 9.34.0, @typescript-eslint 8.41.0, PostCSS 8.5.6, Autoprefixer 10.4.21). Actualizado `packageManager` a pnpm@10.15.0.
- **v3.12:** Implementación inicial del sidebar (ChatGPT/Gemini), componente de Toggle, i18n ligera.
