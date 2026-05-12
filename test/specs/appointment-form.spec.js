import AgendaPage from '../pageobjects/AgendaPage.js';
import AppointmentFormPage from '../pageobjects/AppointmentFormPage.js';
import NavigationHelper from '../pageobjects/NavigationHelper.js';

describe('Formulário de Agendamento', () => {
  beforeEach(async () => {
    await NavigationHelper.goToAgenda();
    await AgendaPage.tapNovoAgendamento();
  });

  afterEach(async () => {
    await driver.back();
  });

  it('deve exibir a tela do formulário de agendamento', async () => {
    expect(await AppointmentFormPage.isDisplayed()).toBe(true);
  });

  it('deve exibir todos os campos obrigatórios', async () => {
    expect(await (await AppointmentFormPage.campoPaciente).isDisplayed()).toBe(true);
    expect(await (await AppointmentFormPage.campoProcedimento).isDisplayed()).toBe(true);
    expect(await (await AppointmentFormPage.campoData).isDisplayed()).toBe(true);
    expect(await (await AppointmentFormPage.campoHorario).isDisplayed()).toBe(true);
  });

  it('deve exibir campos de duração e valor', async () => {
    expect(await (await AppointmentFormPage.campoDuracao).isDisplayed()).toBe(true);
    expect(await (await AppointmentFormPage.campoValor).isDisplayed()).toBe(true);
  });

  it('deve exibir o botão de salvar', async () => {
    expect(await (await AppointmentFormPage.btnSalvar).isDisplayed()).toBe(true);
  });

  it('deve exibir o switch de consulta paga', async () => {
    expect(await (await AppointmentFormPage.switchConsultaPaga).isDisplayed()).toBe(true);
  });

  it('deve exibir o switch de Google Calendar', async () => {
    const switchGcal = await AppointmentFormPage.switchGoogleCalendar;
    expect(await switchGcal.isDisplayed()).toBe(true);
  });
});
