import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    esbuild: {
        loader: 'jsx',
        include: /\.[jt]sx?$/,
        exclude: /node_modules/
    },
    base: '/', 
    optimizeDeps: {
        include: ['react-pdf'],
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
                '.jsx': 'jsx'
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.js', '.jsx', '.json']
    },
    build: {
        commonjsOptions: {
            include: [/node_modules/],
        },
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-pdf': ['react-pdf'],
                    pdfjs: ['pdfjs-dist', 'react-pdf']
                }
            }
        }
    },
    // Add this section to handle PDF files
    assetsInclude: ['**/*.pdf'],
    // Handle client-side routing
    preview: {
        port: 3000
    }
});