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
    base: '/', // Ensure this points to the correct base


    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
                '.jsx': 'jsx'
            },
        },
        include: ['react-pdf']
    },
    server: {
        port: 3000,
        open: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
        extensions: ['.js', '.jsx', '.json']
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                manualChunks: {
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