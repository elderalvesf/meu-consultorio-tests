import AgendaPage from '../pageobjects/AgendaPage.js';
import NavigationHelper from '../pageobjects/NavigationHelper.js';

describe('Agenda', () => {
  beforeEach(async () => {
    await NavigationHelper.goToAgenda();
  });

  it('deve exibir a tela de agenda', async () => {
    expect(await AgendaPage.isDisplayed()).toBe(true);
  });

  it('deve exibir a timeline da agenda', async () => {
    const timeline = await AgendaPage.timelineContainer;
    expect(await timeline.isDisplayed()).toBe(true);
  });

  it('deve exibir o FAB principal da agenda', async () => {
    const fab = await AgendaPage.fabAgenda;
    expect(await fab.isDisplayed()).toBe(true);
  });

  it('deve expandir o FAB e exibir opções de novo agendamento e tratamento', async () => {
    await AgendaPage.expandFab();
    expect(await (await AgendaPage.fabNovoAgendamento).isDisplayed()).toBe(true);
    expect(await (await AgendaPage.fabNovoTratamento).isDisplayed()).toBe(true);
    await AgendaPage.expandFab();
  });

  it('deve abrir formulário de novo agendamento ao tocar no FAB', async () => {
    await AgendaPage.tapNovoAgendamento();
    await driver.back();
  });

  it('deve abrir formulário de novo tratamento ao tocar no FAB', async () => {
    await AgendaPage.tapNovoTratamento();
    await driver.back();
  });

  it('deve exibir o botão de seleção de data', async () => {
    const btnData = await AgendaPage.btnSelecionarData;
    expect(await btnData.isDisplayed()).toBe(true);
  });
});
