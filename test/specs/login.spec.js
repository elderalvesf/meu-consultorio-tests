import LoginPage from '../pageobjects/LoginPage.js';

describe('Login', () => {
  it('deve exibir a tela de login ao iniciar', async () => {
    const displayed = await LoginPage.isDisplayed();
    expect(displayed).toBe(true);
  });

  it('deve exibir os campos de email e senha', async () => {
    expect(await (await LoginPage.campoEmail).isDisplayed()).toBe(true);
    expect(await (await LoginPage.campaSenha).isDisplayed()).toBe(true);
  });

  it('deve exibir o botão de entrar', async () => {
    expect(await (await LoginPage.btnEntrar).isDisplayed()).toBe(true);
  });

  it('deve exibir o botão de entrar com Google', async () => {
    expect(await (await LoginPage.btnEntrarGoogle).isDisplayed()).toBe(true);
  });

  it('deve mostrar erro ao tentar entrar com credenciais inválidas', async () => {
    await LoginPage.login('invalido@teste.com', 'senhaerrada');
    // Aguarda mensagem de erro aparecer
    const errorMsg = await $('android=new UiSelector().textContains("inválid").instance(0)');
    await errorMsg.waitForDisplayed({ timeout: 5000 });
    expect(await errorMsg.isDisplayed()).toBe(true);
  });
});
