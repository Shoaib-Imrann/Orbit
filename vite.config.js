import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const org = process.env.VITE_SENTRY_ORG || '';
const dsn = process.env.VITE_SENTRY_DSN || '';

const shouldIncludeSentry = org && dsn;

export default defineConfig({
  plugins: [
    react(),
    ...(shouldIncludeSentry ? [sentryVitePlugin({
      org: org,
      project: "javascript-react" // Change this to your actual project name
    })] : []), // Only include Sentry plugin if org and dsn are available
  ],
  build: {
    sourcemap: true
  }
});
