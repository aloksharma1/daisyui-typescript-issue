import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

export default {
  mode:'jit',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}','./index.html','./src/index.ts'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["corporate","light", "dark", "dracula","aqua"],
    darkTheme: "dark", 
    base: true, 
    styled: true, 
    utils: true, 
    rtl: false, 
    logs: true, 
    prefix:""
  },
} satisfies Config

