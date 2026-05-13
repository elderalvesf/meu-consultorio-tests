import BasePage from './BasePage.js';

class PacientesPage extends BasePage {
  get screen() {
    return $('~pacientes_screen');
  }

  get fabButton() {
    return $('~fab_novo_paciente');
  }

  get searchField() {
    return $('~campo_busca_paciente');
  }

  get listaPacientes() {
    return $$('~card_paciente');
  }

  // Formulário de cadastro
  get campNome() {
    return $('~campo_nome_paciente');
  }

  get campTelefone() {
    return $('~campo_telefone_paciente');
  }

  get btnSalvar() {
    return $('~btn_salvar_paciente');
  }

  async isDisplayed() {
    return super.isDisplayed('~pacientes_screen');
  }

  async tapNovoPaciente() {
    await this.tap('~fab_novo_paciente');
  }

  async buscarPaciente(nome) {
    await this.typeText('~campo_busca_paciente', nome);
  }

  async cadastrarPaciente(nome, telefone) {
    await this.tapNovoPaciente();
    await this.typeText('~campo_nome_paciente', nome);
    await this.typeText('~campo_telefone_paciente', telefone);
    await this.hideKeyboard();
    await this.tap('~btn_salvar_paciente');
    await $('~pacientes_screen').waitForDisplayed({ timeout: 10000 });
  }

  async getPacienteCount() {
    const lista = await this.listaPacientes;
    return lista.length;
  }
}

export default new PacientesPage();
