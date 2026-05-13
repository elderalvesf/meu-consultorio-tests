import PacientesPage from '../pageobjects/PacientesPage.js';
import NavigationHelper from '../pageobjects/NavigationHelper.js';

describe('Pacientes', () => {
  beforeEach(async () => {
    await NavigationHelper.goToPatients();
  });

  it('deve exibir a lista de pacientes', async () => {
    expect(await PacientesPage.isDisplayed()).toBe(true);
  });

  it('deve cadastrar um novo paciente', async () => {
    const uniqueName = `Paciente Teste ${Date.now()}`;
    const countAntes = await PacientesPage.getPacienteCount();
    await PacientesPage.cadastrarPaciente(uniqueName, '(11) 99999-0000');
    await driver.waitUntil(async () => {
      const count = await PacientesPage.getPacienteCount();
      return count > countAntes;
    }, { timeout: 15000, interval: 1000 });
    const countDepois = await PacientesPage.getPacienteCount();
    expect(countDepois).toBeGreaterThan(countAntes);
  });

  it('deve pesquisar paciente', async () => {
    await PacientesPage.pesquisar('Paciente');
    expect(await PacientesPage.isDisplayed()).toBe(true);
  });

  it('deve abrir detalhes do paciente', async () => {
    await PacientesPage.abrirPrimeiroPaciente();
    expect(await PacientesPage.isDetailDisplayed()).toBe(true);
  });

  it('deve voltar da tela de detalhes', async () => {
    await PacientesPage.abrirPrimeiroPaciente();
    await PacientesPage.voltarDaDetalhe();
    expect(await PacientesPage.isDisplayed()).toBe(true);
  });
});
