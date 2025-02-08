import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
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
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'logo.svg', 'robots.txt'],
            manifest: {
                name: 'Boxxo Portfolio',
                short_name: 'Boxxo',
                description: 'Boxxo\'s Personal Portfolio',
                theme_color: '#4FD1C5',
                background_color: '#1A202C',
                display: 'standalone',
                icons: [
                    {
                        src: 'logo.svg',
                        sizes: '512x512',
                        type: 'image/svg+xml',
                        purpose: 'any maskable'
                    },
                    {
                        src: 'favicon-32x32.png',
                        sizes: '32x32',
                        type: 'image/png'
                    },
                    {
                        src: 'favicon-16x16.png',
                        sizes: '16x16',
                        type: 'image/png'
                    }
                ]
            }
        })
    ],
    esbuild: {
        loader: 'jsx',
        include: /\.[jt]sx?$/,
        exclude: /node_modules/
    },
    base: './',
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