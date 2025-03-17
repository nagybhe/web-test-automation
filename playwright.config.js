import { defineConfig } from '@playwright/test'; 

export default defineConfig({
  use: {
    headless: false, // Defina como true para rodar sem interface gráfica
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://seusistema.com',
    screenshot: 'on', // Captura screenshots automaticamente
    video: 'on', // Grava vídeos dos testes
    trace: 'on', // Gera logs detalhados
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
  reporter: [['html', { outputFolder: 'test-results' }]], // Gera relatório em HTML
});
