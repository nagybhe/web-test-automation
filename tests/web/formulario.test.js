const { test, expect } = require('@playwright/test');

test.describe('Validação de Formulários', () => {

  test('Formulário não pode ser enviado vazio', async ({ page }) => {
    await page.goto('https://seusistema.com/formulario');

    await page.click('button[type="submit"]');

    await expect(page.locator('.error-message')).toHaveText('Todos os campos são obrigatórios');
  });

  test('Validação de e-mail inválido', async ({ page }) => {
    await page.goto('https://seusistema.com/formulario');

    await page.fill('#nome', 'Usuário Teste');
    await page.fill('#email', 'email_invalido');
    await page.click('button[type="submit"]');

    await expect(page.locator('#email-error')).toHaveText('Digite um e-mail válido');
  });

  test('Formulário enviado com sucesso', async ({ page }) => {
    await page.goto('https://seusistema.com/formulario');

    await page.fill('#nome', 'Usuário Teste');
    await page.fill('#email', 'usuario@teste.com');
    await page.fill('#mensagem', 'Teste de mensagem válida');
    await page.click('button[type="submit"]');

    await expect(page.locator('.success-message')).toHaveText('Formulário enviado com sucesso!');
  });

});
