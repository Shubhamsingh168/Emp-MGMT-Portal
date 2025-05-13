import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Emp-MGMT-Portal/', // 👈 Add this line
});
