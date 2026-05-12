import PacientesPage from '../pageobjects/PacientesPage.js';
import NavigationHelper from '../pageobjects/NavigationHelper.js';

describe('Pacientes', () => {
  beforeEach(async () => {
    await NavigationHelper.goToPatients();
  });

  it('deve exibir a tela de pacientes', async () => {
    expect(await PacientesPage.isDisplayed()).toBe(true);
  });

  it('deve exibir o botão de novo paciente', async () => {
    const fab = await PacientesPage.fabButton;
    expect(await fab.isDisplayed()).toBe(true);
  });

  it('deve abrir formulário ao tocar em novo paciente', async () => {
    await PacientesPage.tapNovoPaciente();
    const campoNome = await PacientesPage.campNome;
    expect(await campoNome.isDisplayed()).toBe(true);
    await driver.back();
  });

  it('deve cadastrar um novo paciente', async () => {
    const countAntes = await PacientesPage.getPacienteCount();
    await PacientesPage.cadastrarPaciente('Paciente Teste', '(11) 99999-0000');
    const countDepois = await PacientesPage.getPacienteCount();
    expect(countDepois).toBeGreaterThan(countAntes);
  });

  it('deve encontrar paciente pelo campo de busca', async () => {
    await PacientesPage.buscarPaciente('Paciente Teste');
    const lista = await PacientesPage.listaPacientes;
    expect(lista.length).toBeGreaterThan(0);
  });
});
