import { defineConfig } from 'vite'
import { resolve } from "path";

import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build' && process.env.NODE_ENV === 'production';

  return {
    plugins: [
      react(),
      dts({ insertTypesEntry: true })
    ],
    test: {
      globals: true,
      environment: "jsdom",
      passWithNoTests: true,
      testTimeout: 30000
    },
    build: {
      minify: isProduction ? "esbuild" : false,
      sourcemap: isProduction ? false : true,
      emptyOutDir: true,
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, 'src/index.ts'),
        name: "AbcServices",
        // the proper extensions will be added
        fileName: "abc-services-lib",
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
      }
    }
  };
});

