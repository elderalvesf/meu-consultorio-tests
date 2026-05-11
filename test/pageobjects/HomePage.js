import BasePage from './BasePage.js';

class HomePage extends BasePage {
  get screen() {
    return $('~home_screen');
  }

  get cardStatPacientes() {
    return $('~card_stat_pacientes');
  }

  get cardStatConsultasHoje() {
    return $('~card_stat_consultas_hoje');
  }

  async isDisplayed() {
    return super.isDisplayed('~home_screen');
  }

  async getConsultasHoje() {
    return $$('~card_consulta_hoje');
  }

  async tapCardPacientes() {
    await this.tap('~card_stat_pacientes');
  }

  async tapCardConsultasHoje() {
    await this.tap('~card_stat_consultas_hoje');
  }
}

export default new HomePage();
