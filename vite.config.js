import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//configuración de Vite para el proyecto Ares React
export default defineConfig({
  base: '/proyectoReact/',
  plugins: [react()],
})
