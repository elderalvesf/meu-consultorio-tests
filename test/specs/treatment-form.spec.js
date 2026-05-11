import AgendaPage from '../pageobjects/AgendaPage.js';
import TreatmentFormPage from '../pageobjects/TreatmentFormPage.js';

describe('Formulário de Tratamento', () => {
  beforeEach(async () => {
    await AgendaPage.tapNovoTratamento();
  });

  afterEach(async () => {
    await driver.back();
  });

  it('deve exibir a tela do formulário de tratamento', async () => {
    expect(await TreatmentFormPage.isDisplayed()).toBe(true);
  });

  it('deve exibir todos os campos obrigatórios', async () => {
    expect(await (await TreatmentFormPage.campoPaciente).isDisplayed()).toBe(true);
    expect(await (await TreatmentFormPage.campoProcedimento).isDisplayed()).toBe(true);
    expect(await (await TreatmentFormPage.campoData).isDisplayed()).toBe(true);
  });

  it('deve exibir campos de valor e custo', async () => {
    expect(await (await TreatmentFormPage.campoValor).isDisplayed()).toBe(true);
    expect(await (await TreatmentFormPage.campoCusto).isDisplayed()).toBe(true);
  });

  it('deve exibir campo de dente', async () => {
    expect(await (await TreatmentFormPage.campoDente).isDisplayed()).toBe(true);
  });

  it('deve exibir o botão de salvar', async () => {
    expect(await (await TreatmentFormPage.btnSalvar).isDisplayed()).toBe(true);
  });
});
