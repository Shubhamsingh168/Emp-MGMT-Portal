import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/emp-mgmt-portal/', // Important: Use your GitHub repo name here
});
