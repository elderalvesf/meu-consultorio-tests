import HomePage from '../pageobjects/HomePage.js';

describe('Home', () => {
  it('deve exibir a tela home após login', async () => {
    const displayed = await HomePage.isDisplayed();
    expect(displayed).toBe(true);
  });

  it('deve exibir o card de estatísticas de pacientes', async () => {
    const card = await HomePage.cardStatPacientes;
    expect(await card.isDisplayed()).toBe(true);
  });

  it('deve exibir o card de consultas de hoje', async () => {
    const card = await HomePage.cardStatConsultasHoje;
    expect(await card.isDisplayed()).toBe(true);
  });

  it('deve navegar para pacientes ao tocar no card', async () => {
    await HomePage.tapCardPacientes();
    const pacientesScreen = await $('~pacientes_screen');
    expect(await pacientesScreen.isDisplayed()).toBe(true);
    await driver.back();
  });

  it('deve navegar para agenda ao tocar no card de consultas', async () => {
    await HomePage.tapCardConsultasHoje();
    const agendaScreen = await $('~agenda_screen');
    expect(await agendaScreen.isDisplayed()).toBe(true);
    await driver.back();
  });
});
