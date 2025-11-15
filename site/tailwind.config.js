/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // MotherDuck 品牌色
        watermelon: {
          DEFAULT: '#FF7169',
          hover: '#E6665E',
        },
        sky: {
          DEFAULT: '#6FC2FF',
          hover: '#5CAEE6',
        },
        garden: {
          DEFAULT: '#16AA98',
          hover: '#139989',
        },
        sun: '#FFDE02',

        // 中性色
        neutral: {
          900: '#383838',
          700: '#595959',
          300: '#B9B9B9',
          100: '#F3F3F3',
        },

        // 语义色
        md: {
          white: '#FFFFFF',
          success: '#16AA98',
          warning: '#FFDE02',
          error: '#FF7169',
          info: '#6FC2FF',
        },
      },

      fontFamily: {
        sans: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
        mono: [
          'Aeonik Mono',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },

      fontSize: {
        'hero': ['64px', { lineHeight: '1.2' }],
        'h1': ['48px', { lineHeight: '1.35' }],
        'h2': ['36px', { lineHeight: '1.35' }],
        'h3': ['24px', { lineHeight: '1.35' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'small': ['14px', { lineHeight: '1.6' }],
        'tiny': ['12px', { lineHeight: '1.6' }],
      },

      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },

      borderRadius: {
        'none': '0',
      },

      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 20px rgba(0, 0, 0, 0.15)',
        'xl': '0 20px 40px rgba(0, 0, 0, 0.2)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 20px rgba(0, 0, 0, 0.15)',
      },

      maxWidth: {
        'container': '1280px',
      },

      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '400ms',
      },

      transitionTimingFunction: {
        'ease-default': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF7169 0%, #FFDE02 100%)',
        'gradient-sky': 'linear-gradient(135deg, #6FC2FF 0%, #16AA98 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(255, 113, 105, 0.1) 0%, rgba(255, 222, 2, 0.1) 100%)',
      },

      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'shake': 'shake 0.25s ease-in-out',
        'shimmer': 'shimmer 2s infinite linear',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },

      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#383838',
            '--tw-prose-headings': '#383838',
            '--tw-prose-links': '#6FC2FF',
            '--tw-prose-bold': '#383838',
            '--tw-prose-code': '#6FC2FF',
            '--tw-prose-quotes': '#595959',
            maxWidth: 'none',

            a: {
              color: '#6FC2FF',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: '#5CAEE6',
              },
            },

            code: {
              color: '#6FC2FF',
              backgroundColor: '#F3F3F3',
              padding: '0.2rem 0.4rem',
              borderRadius: '4px',
              fontWeight: '600',
              fontSize: '0.9em',
            },

            'code::before': {
              content: '""',
            },

            'code::after': {
              content: '""',
            },

            pre: {
              backgroundColor: '#F3F3F3',
              border: '1px solid #B9B9B9',
              borderRadius: '8px',
              padding: '1.5rem',
            },

            h1: {
              color: '#383838',
              fontWeight: '700',
              fontSize: '48px',
              lineHeight: '1.35',
            },

            h2: {
              color: '#383838',
              fontWeight: '700',
              fontSize: '36px',
              lineHeight: '1.35',
              borderBottom: '2px solid #FF7169',
              paddingBottom: '0.5rem',
              marginTop: '2em',
              marginBottom: '1em',
            },

            h3: {
              color: '#383838',
              fontWeight: '600',
              fontSize: '24px',
              lineHeight: '1.35',
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },

            blockquote: {
              borderLeftColor: '#6FC2FF',
              borderLeftWidth: '4px',
              color: '#595959',
              fontStyle: 'normal',
              backgroundColor: 'rgba(111, 194, 255, 0.05)',
              padding: '1rem 1.5rem',
              borderRadius: '8px',
            },

            ul: {
              listStyleType: 'none',
              paddingLeft: '1.5rem',
            },

            'ul > li': {
              position: 'relative',
              paddingLeft: '0.5rem',
            },

            'ul > li::before': {
              content: '"•"',
              position: 'absolute',
              left: '-1rem',
              color: '#FF7169',
              fontWeight: 'bold',
            },

            strong: {
              color: '#383838',
              fontWeight: '600',
            },

            table: {
              borderCollapse: 'collapse',
              width: '100%',
            },

            'thead th': {
              backgroundColor: '#F3F3F3',
              borderBottom: '2px solid #FF7169',
              padding: '0.75rem 1rem',
              textAlign: 'left',
              fontWeight: '600',
            },

            'tbody td': {
              borderBottom: '1px solid #B9B9B9',
              padding: '0.75rem 1rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
