const { test, expect } = require('@playwright/test');

test.describe('Testes de Login', () => {
  
  test('Login com sucesso', async ({ page }) => {
    await page.goto('https://seusistema.com/login'); // URL do sistema

    await page.fill('#email', 'usuario@teste.com'); // Preenche e-mail
    await page.fill('#password', 'senha123'); // Preenche senha
    await page.click('button[type="submit"]'); // Clica no botão de login

    await expect(page).toHaveURL('https://seusistema.com/dashboard'); // Verifica se redirecionou
  });

  test('Login com senha errada', async ({ page }) => {
    await page.goto('https://seusistema.com/login');

    await page.fill('#email', 'usuario@teste.com');
    await page.fill('#password', 'senhaErrada');
    await page.click('button[type="submit"]');

    await expect(page.locator('.error-message')).toHaveText('Credenciais inválidas');
  });

});
