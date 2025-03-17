const { test, expect } = require('@playwright/test');

test.describe('Fluxo de Compra', () => {

  test('Adicionar produto ao carrinho', async ({ page }) => {
    await page.goto('https://seusistema.com/produto/123');

    await page.click('button#add-to-cart');
    await page.goto('https://seusistema.com/carrinho');

    await expect(page.locator('.cart-item')).toHaveText('Produto 123');
  });

  test('Finalizar compra com sucesso', async ({ page }) => {
    await page.goto('https://seusistema.com/carrinho');

    await page.click('button#checkout');
    await page.fill('#nome', 'Usuário Teste');
    await page.fill('#cartao', '4111111111111111');
    await page.fill('#validade', '12/26');
    await page.fill('#cvv', '123');
    await page.click('button#pagar');

    await expect(page.locator('.success-message')).toHaveText('Compra realizada com sucesso!');
  });

});
