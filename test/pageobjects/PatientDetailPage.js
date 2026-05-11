import BasePage from './BasePage.js';

class PatientDetailPage extends BasePage {
  get screen() {
    return $('~paciente_detalhe_screen');
  }

  get tabProntuario() {
    return $('~tab_prontuario');
  }

  get tabTratamentos() {
    return $('~tab_tratamentos');
  }

  get btnNovaConsulta() {
    return $('~btn_nova_consulta_paciente');
  }

  get btnNovoTratamento() {
    return $('~btn_novo_tratamento_paciente');
  }

  async isDisplayed() {
    return super.isDisplayed('~paciente_detalhe_screen');
  }

  async abrirTabTratamentos() {
    await this.tap('~tab_tratamentos');
  }

  async abrirTabProntuario() {
    await this.tap('~tab_prontuario');
  }

  async getConsultasProntuario() {
    return $$('~card_consulta_prontuario');
  }

  async getTratamentos() {
    return $$('~card_tratamento_paciente');
  }
}

export default new PatientDetailPage();
