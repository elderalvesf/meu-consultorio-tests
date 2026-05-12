import HomePage from '../pageobjects/HomePage.js';
import LoginPage from '../pageobjects/LoginPage.js';

describe('Autenticação', () => {
  it('deve autenticar e exibir a tela inicial', async () => {
    expect(await HomePage.isDisplayed()).toBe(true);
  });

  it('não deve exibir a tela de login após autenticação', async () => {
    expect(await LoginPage.isDisplayed()).toBe(false);
  });
});
