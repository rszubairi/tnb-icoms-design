/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gso: {
          green: '#23AF4E',
          'green-dark': '#1C8F3F',
          'green-light': '#2CC95A',
          'green-50': '#EEFBF2',
          'green-100': '#D5F5DE',
          blue: '#024A7A',
          'blue-dark': '#013A61',
          'blue-light': '#0560A0',
        },
        tnblue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#024A7A',
          800: '#013A61',
          900: '#012E4E',
          primary: '#024A7A',
          secondary: '#23AF4E',
          dark: '#1A2332',
          medium: '#243447',
          light: '#e1e1e1',
        },
        enterprise: {
          success: '#23AF4E',
          warning: '#f59e0b',
          error: '#ef4444',
          info: '#3b82f6',
          surface: '#ffffff',
          background: '#f8fafc',
          muted: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'enterprise-gradient': 'linear-gradient(135deg, #024A7A 0%, #013A61 100%)',
        'gso-gradient': 'linear-gradient(135deg, #23AF4E 0%, #1C8F3F 100%)',
        'gso-hero': 'linear-gradient(135deg, #024A7A 0%, #1A2332 50%, #012E4E 100%)',
        'glass-gradient': 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
      },
      boxShadow: {
        'enterprise': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'enterprise-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'gso': '0 4px 14px -3px rgba(35, 175, 78, 0.3)',
        'gso-lg': '0 10px 25px -5px rgba(35, 175, 78, 0.25)',
      }
    },
  },
  plugins: [],
}