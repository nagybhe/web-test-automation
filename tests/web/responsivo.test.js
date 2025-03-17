const { test, expect } = require('@playwright/test');

const viewports = [
  { width: 1280, height: 720, name: 'Desktop' },
  { width: 768, height: 1024, name: 'Tablet' },
  { width: 375, height: 667, name: 'Mobile' },
];

viewports.forEach(({ width, height, name }) => {
  test(`Verificar layout responsivo em ${name}`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    await page.goto('https://seusistema.com');

    await page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });

    expect(await page.locator('header').isVisible()).toBeTruthy();
  });
});
