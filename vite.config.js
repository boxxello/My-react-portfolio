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
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
                '.jsx': 'jsx'
            },
        },
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
    },
    server: {
        port: 3000,
        host: true,
    },
    assetsInclude: ['**/*.pdf']
});