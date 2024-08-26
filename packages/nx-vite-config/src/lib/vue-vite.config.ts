/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

console.log('vite.config.ts', process.env)

export interface IVueViteConfig {
  appName: string;
}

export const defineVueViteConfig = (config: IVueViteConfig) => {
  return defineConfig({
    root: `${process.env['PWD']}`,
    cacheDir: `../../../../node_modules/.vite/apps/${config.appName}`,

    server: {
      port: 4200,
      host: 'localhost',
    },

    preview: {
      port: 4300,
      host: 'localhost',
    },

    plugins: [ vue(), nxViteTsPaths() ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    build: {
      outDir: `../../../../dist/apps/${config.appName}`,
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },

    test: {
      watch: false,
      globals: true,
      environment: 'jsdom',
      include: [ 'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}' ],

      reporters: [ 'default' ],
      coverage: {
        reportsDirectory: `../../../../coverage/apps/${config.appName}`,
        provider: 'v8',
      },
    },
  })
};
