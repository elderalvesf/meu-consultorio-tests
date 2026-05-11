import PacientesPage from '../pageobjects/PacientesPage.js';
import PatientDetailPage from '../pageobjects/PatientDetailPage.js';

describe('Detalhe do Paciente', () => {
  beforeEach(async () => {
    // Abre o primeiro paciente da lista
    const cards = await $$('~card_paciente');
    if (cards.length > 0) {
      await cards[0].click();
    }
  });

  afterEach(async () => {
    await driver.back();
  });

  it('deve exibir a tela de detalhe do paciente', async () => {
    expect(await PatientDetailPage.isDisplayed()).toBe(true);
  });

  it('deve exibir as abas de prontuário e tratamentos', async () => {
    expect(await (await PatientDetailPage.tabProntuario).isDisplayed()).toBe(true);
    expect(await (await PatientDetailPage.tabTratamentos).isDisplayed()).toBe(true);
  });

  it('deve exibir o botão de nova consulta na aba prontuário', async () => {
    await PatientDetailPage.abrirTabProntuario();
    expect(await (await PatientDetailPage.btnNovaConsulta).isDisplayed()).toBe(true);
  });

  it('deve exibir o botão de novo tratamento ao abrir a aba tratamentos', async () => {
    await PatientDetailPage.abrirTabTratamentos();
    expect(await (await PatientDetailPage.btnNovoTratamento).isDisplayed()).toBe(true);
  });
});
