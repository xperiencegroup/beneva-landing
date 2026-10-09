# Beneva Landing

Landing page de Beneva, desarrolladora inmobiliaria. Sitio multi-ruta (5 páginas) construido con **Vite + React 19**, estilizado con **Tailwind CSS v4**, con formularios de contacto que escriben a **Supabase** y tracking de eventos a **Google Analytics 4 (gtag)**.

Este sitio también sirve como proxy de **Misión de los Ángeles** (otro proyecto de la misma desarrolladora, repo/deploy separado) bajo la ruta `/misiondelosangeles`.

## Stack

- **Build tool:** Vite 8
- **Framework:** React 19 (con `babel-plugin-react-compiler`, el compilador de React está activo)
- **Enrutamiento:** `react-router` v8, `BrowserRouter`
- **Estilos:** Tailwind CSS v4 (`@tailwindcss/vite`, sin `tailwind.config.js` clásico — configuración por CSS)
- **Formularios:** `react-hook-form`
- **Carrusel:** `embla-carousel-react` + `embla-carousel-autoplay`
- **Backend de datos:** Supabase (`@supabase/supabase-js`), solo para guardar leads de formularios
- **Analytics:** Google Analytics 4 vía `window.gtag`, con wrapper propio en `src/analytics/`
- **Gestor de paquetes:** **pnpm** (usar siempre `pnpm`, no `npm`/`yarn`, para respetar el lockfile)
- **Deploy:** Vercel

## Requisitos previos

- Node.js (versión compatible con Vite 8 / React 19 — usar una LTS reciente)
- pnpm instalado globalmente

## Instalación

```bash
pnpm install
```

## Variables de entorno

Copiar `.env.example` a `.env` y llenar con las credenciales reales del proyecto de Supabase:

```dotenv
VITE_SUPABASE_URL="your-supabase-url"
VITE_SUPABASE_ANON_KEY="public-key"
```

> **TODO:** en `src/const/supabase.js` se encuentra la variable `PROJECT-ID` que se refiere al nombre de la tabla.

## Scripts

```bash
pnpm dev       # servidor de desarrollo
pnpm build     # build de producción
pnpm preview   # sirve el build de producción localmente
pnpm lint      # ESLint
```

## Estructura del proyecto

```
src/
├─ analytics/          # Tracking a GA4
│  ├─ track.js             # función track(event, params) → window.gtag
│  └─ track.constants.js   # catálogo central de nombres de eventos (TRACK)
│
├─ assets/             # fonts, íconos (svg/jsx), imágenes por sección
│
├─ components/         # Componentes reutilizables entre páginas
│  ├─ carousel/embla/gallery-carousel.jsx
│  └─ scroll-to-top.jsx    # resetea scroll en cada cambio de ruta
│
├─ const/
│  └─ supabase.js          # PROJECT_ID (nombre de tabla/identificador de proyecto en Supabase)
│
├─ hooks/
│  └─ useInView.js          # hook de IntersectionObserver para animaciones "reveal"
│
├─ layout/
│  ├─ layout.jsx            # <Outlet /> + Navbar + Footer, envuelve todas las rutas
│  └─ components/
│     ├─ navbar.jsx
│     └─ footer.jsx
│
├─ lib/
│  └─ supabase.js           # cliente de supabase-js inicializado con las env vars
│
├─ pages/              # Una carpeta por ruta, cada una con su propia carpeta components/
│  ├─ home/                 # "/"
│  ├─ quienes-somos/        # "/quienes-somos"
│  ├─ proyectos/            # "/proyectos"
│  ├─ desarrollemos-juntos/ # "/desarrollemos-juntos"
│  └─ contacto/             # "/contactanos"
│
├─ styles/fonts.css
├─ index.css
├─ main.jsx
└─ router.jsx           # definición de rutas con react-router
```

**Convención de páginas:** cada carpeta en `pages/` tiene un archivo raíz (ej. `home.jsx`) que compone las secciones de esa página, y una subcarpeta `components/` con una sección por archivo (hero, cta, formulario, etc.). Al editar una página, el archivo raíz es el punto de entrada para ver el orden de las secciones.

## Rutas

Definidas en `src/router.jsx` con `BrowserRouter`, todas dentro de un `<Layout />` compartido (navbar + footer fijos):

| Path                    | Página               | Componente                                            |
| ----------------------- | -------------------- | ----------------------------------------------------- |
| `/`                     | Home                 | `pages/home/home.jsx`                                 |
| `/quienes-somos`        | Quiénes somos        | `pages/quienes-somos/quienes-somos.jsx`               |
| `/proyectos`            | Proyectos            | `pages/proyectos/proyectos.jsx`                       |
| `/desarrollemos-juntos` | Desarrollemos juntos | `pages/desarrollemos-juntos/desarrollemos-juntos.jsx` |
| `/contactanos`          | Contacto             | `pages/contacto/contacto.jsx`                         |

`ScrollToTop` se monta a nivel raíz del router para resetear el scroll en cada navegación.

## Formularios y Supabase

Hay **4 formularios** en el sitio (Home "Más proyectos en camino", Desarrollemos Juntos, Contacto, y el formulario de Misión de los Ángeles, que vive en otro repo pero comparte la misma tabla):

- Todos escriben a la misma tabla de Supabase, identificada por la constante `PROJECT_ID` en `src/const/supabase.js` (valor actual: `"beneva_sitio"`).
- El cliente de Supabase se inicializa en `src/lib/supabase.js` usando `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.
- Esquema de la tabla (campos usados por los `insert`):

| Campo        | Tipo   | Opcional                                                                           |
| ------------ | ------ | ---------------------------------------------------------------------------------- |
| `name`       | `text` | No                                                                                 |
| `email`      | `text` | No                                                                                 |
| `phone`      | `text` | No                                                                                 |
| `message`    | `text` | Sí                                                                                 |
| `city`       | `text` | Sí                                                                                 |
| `interest`   | `text` | Sí                                                                                 |
| `experience` | `text` | Sí                                                                                 |
| `comments`   | `text` | Sí                                                                                 |
| `source`     | `text` | No — identifica de qué sitio vino (`"Beneva Landing"` / `"Mision de los Ángeles"`) |
| `page`       | `text` | No — identifica de qué página/sección vino el lead                                 |

## Analytics (GA4)

El tracking sigue una convención compartida con el proyecto hermano (Misión de los Ángeles):

- **`src/analytics/track.js`:** función `track(event, params)` que llama a `window.gtag("event", event, params)`. No hace nada si `gtag` no está definido (por ejemplo, en local sin el script de GA, o si un adblock lo bloquea).
- **`src/analytics/track.constants.js`:** objeto `TRACK`, organizado por capa/página (`layout`, `home`, `about`, `projects`, `develop`, `contact`), con un nombre de evento por interacción. Formato de nombre: `beneva:<seccion>:<elemento>:<accion>` (ej. `beneva:menu:item:click`).
- **Parámetros comunes:** `item_id` (qué elemento se tocó), `action` (para toggles, `"open"`/`"close"`), `error_type` / `error_message` (en errores de formulario).
- **Regla importante:** nunca se envían datos personales (nombre, correo, teléfono) como parámetros de evento a GA4. Los formularios solo registran el evento de envío/error, sin el contenido.
- Antes de agregar o modificar un evento, verificar en **GA4 DebugView** que el nombre (con los `:`) llegue correctamente; si GA4 lo rechaza, el formato cambia a guiones bajos (`_`) en lugar de `:`.

## Deploy

- Hosting: **Vercel**.
- `vercel.json` incluye _rewrites_ que exponen el sitio de **Misión de los Ángeles** (deploy independiente, otro repo) bajo la ruta `/misiondelosangeles` de este dominio, además del catch-all típico de SPA (`/(.*)` → `/`) para que `react-router` maneje el resto de las rutas del lado del cliente:

```json
{
  "rewrites": [
    {
      "source": "/misiondelosangeles",
      "destination": "https://mision-de-los-angeles.vercel.app/misiondelosangeles"
    },
    {
      "source": "/misiondelosangeles/:path*",
      "destination": "https://mision-de-los-angeles.vercel.app/misiondelosangeles/:path*"
    },
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## Notas y pendientes conocidos

- **Assets duplicados:** varias imágenes existen en `.jpg` y `.png` para el mismo nombre (ej. `cta-fondo.jpg` / `cta-fondo.png`, `patrimonio.jpg` / `patrimonio.png`). Antes de editar una sección, verificar cuál es el archivo realmente importado en el componente — probablemente uno de los dos es un remanente sin usar.
- **Íconos como `.jsx`:** algunos íconos (`sendIcon.jsx`, `whatsapp-icon.jsx`, `beneva-hero.jsx`, `beneva-slogan-custom.jsx`, `logo-main.jsx`) están implementados como componentes React en lugar de `.svg`, probablemente para animarlos o estilizarlos con props. Tenerlo en cuenta al reemplazar un ícono: no siempre basta con cambiar un `src`.
