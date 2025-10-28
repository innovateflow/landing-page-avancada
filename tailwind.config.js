/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Cores oficiais do Nuxt - Com foco na cor principal #020618
        primary: {
          50: '#f8f9fb',   // Muito claro baseado em #020618
          100: '#f1f3f6',  // Claro
          200: '#e3e7ed',  // Claro médio
          300: '#c7d0db',  // Médio claro
          400: '#9fadc4',  // Médio
          500: '#4a5568',  // Médio escuro
          600: '#2d3748',  // Escuro médio
          700: '#1a202c',  // Escuro
          800: '#0a0f1a',  // Muito escuro (variação de #020618)
          900: '#020618',  // COR PRINCIPAL - Azul escuro oficial do Nuxt
          950: '#010411',  // Extremamente escuro (mais escuro que a principal)
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#00DC82', // Cor secundária do Nuxt
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        // Cores do gradiente oficial do Nuxt
        'nuxt-dark': '#020618',      // Azul escuro principal
        'nuxt-slate': '#0f172a',     // Azul ardósia
        'nuxt-gray': '#1e293b',      // Cinza azulado
        'nuxt-teal': '#164e63',      // Verde-azulado
        'nuxt-emerald': '#0f2a1d',   // Verde escuro
        'nuxt-green': '#134e4a',     // Verde intermediário
        // Cores neutras personalizadas
        dark: '#020618',
        light: '#ffffff',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        }
      },
      // Fontes - Public Sans como no site oficial do Nuxt
      fontFamily: {
        sans: ['"Public Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Public Sans"', 'sans-serif'],
        body: ['"Public Sans"', 'sans-serif'],
      },
      // Gradientes baseados no site oficial do Nuxt
      backgroundImage: {
        // Gradiente hero principal - cores exatas #020618 → #00DC82
        'gradient-hero-main': 'linear-gradient(135deg, #020618 0%, #00DC82 100%)',
        'gradient-hero-complex': 'linear-gradient(135deg, #020618 0%, #0f172a 30%, #1e293b 50%, #164e63 70%, #00DC82 100%)',
        // Gradiente principal - igual ao site oficial do Nuxt
        'gradient-nuxt-official': 'linear-gradient(135deg, #020618 0%, #0f172a 25%, #1e293b 50%, #0f2a1d 75%, #134e4a 100%)',
        'gradient-hero': 'linear-gradient(135deg, #020618 0%, #0f172a 20%, #1e293b 40%, #164e63 60%, #0f2a1d 80%, #00DC82 100%)',
        'gradient-primary': 'linear-gradient(135deg, #020618 0%, #0f172a 30%, #1e293b 60%, #164e63 100%)',
        'gradient-primary-reverse': 'linear-gradient(135deg, #164e63 0%, #1e293b 40%, #0f172a 70%, #020618 100%)',
        'gradient-dark-teal': 'linear-gradient(135deg, #020618 0%, #0f172a 25%, #134e4a 50%, #0d9488 100%)',
        'gradient-deep-ocean': 'linear-gradient(135deg, #020618 0%, #1e293b 30%, #164e63 60%, #0f2a1d 100%)',
        'gradient-subtle-nuxt': 'linear-gradient(135deg, rgba(2, 6, 24, 0.95) 0%, rgba(15, 23, 42, 0.8) 30%, rgba(30, 41, 59, 0.6) 60%, rgba(22, 78, 99, 0.4) 100%)',
        'gradient-accent': 'linear-gradient(135deg, #020618 0%, #1e293b 25%, #00DC82 100%)',
        'gradient-card': 'linear-gradient(135deg, #020618 0%, #0f172a 50%, #1e293b 100%)',
        'gradient-button': 'linear-gradient(135deg, #00DC82 0%, #10b981 50%, #059669 100%)',
      },
      // Animações para gradientes
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [],
}

