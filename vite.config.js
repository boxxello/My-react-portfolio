import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
    plugins: [
        react(),
        nodePolyfills({
            globals: {
                Buffer: true,
                global: true,
                process: true,
            },
        }),
    ],
    esbuild: {
        loader: 'jsx',
        include: /\.[jt]sx?$/,
        exclude: /node_modules/
    },
    base: '/',
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
                '.jsx': 'jsx'
            },
            define: {
                global: 'globalThis',
            },
        },
        include: ['react-pdf'],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.js', '.jsx', '.json']
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-pdf': ['react-pdf'],
                    'pdfjs-dist': ['pdfjs-dist'],
                },
            },
        },
    },
    server: {
        port: 3000,
        host: true,
    },
    assetsInclude: ['**/*.pdf', '**/*.worker.js', "**/*.worker.min.mjs"]
});