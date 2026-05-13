import HomePage from '../pageobjects/HomePage.js';
import LoginPage from '../pageobjects/LoginPage.js';

describe('Autenticação', () => {
  it('deve autenticar e exibir a tela inicial', async () => {
    const screen = await $('~home_screen');
    await screen.waitForDisplayed({ timeout: 30000 });
    expect(await screen.isDisplayed()).toBe(true);
  });

  it('não deve exibir a tela de login após autenticação', async () => {
    expect(await LoginPage.isDisplayed()).toBe(false);
  });
});
