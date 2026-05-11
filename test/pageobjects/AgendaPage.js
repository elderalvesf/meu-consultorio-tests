import BasePage from './BasePage.js';

class AgendaPage extends BasePage {
  get screen() {
    return $('~agenda_screen');
  }

  get fabAgenda() {
    return $('~fab_agenda');
  }

  get fabNovoAgendamento() {
    return $('~fab_novo_agendamento');
  }

  get fabNovoTratamento() {
    return $('~fab_novo_tratamento');
  }

  get btnSelecionarData() {
    return $('~Selecionar data');
  }

  get timelineContainer() {
    return $('~timeline_agenda');
  }

  get btnViewDia() {
    return $('~Dia');
  }

  get btnViewSemana() {
    return $('~Semana');
  }

  async isDisplayed() {
    return super.isDisplayed('~agenda_screen');
  }

  async expandFab() {
    await this.tap('~fab_agenda');
  }

  async tapNovoAgendamento() {
    await this.expandFab();
    await this.tap('~fab_novo_agendamento');
  }

  async tapNovoTratamento() {
    await this.expandFab();
    await this.tap('~fab_novo_tratamento');
  }

  async getAgendamentosVisiveis() {
    return $$('~card_agendamento');
  }

  async getTratamentosVisiveis() {
    return $$('~card_tratamento');
  }
}

export default new AgendaPage();
