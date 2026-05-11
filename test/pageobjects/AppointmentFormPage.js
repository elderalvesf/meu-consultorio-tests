import BasePage from './BasePage.js';

class AppointmentFormPage extends BasePage {
  get screen() {
    return $('~agendamento_form_screen');
  }

  get campoPaciente() {
    return $('~campo_paciente_agendamento');
  }

  get campoProcedimento() {
    return $('~campo_procedimento_agendamento');
  }

  get campoData() {
    return $('~campo_data_agendamento');
  }

  get campoHorario() {
    return $('~campo_horario_agendamento');
  }

  get campoStatus() {
    return $('~campo_status_agendamento');
  }

  get campoDuracao() {
    return $('~campo_duracao_agendamento');
  }

  get campoValor() {
    return $('~campo_valor_agendamento');
  }

  get campoObservacoes() {
    return $('~campo_observacoes_agendamento');
  }

  get switchConsultaPaga() {
    return $('~switch_consulta_paga');
  }

  get switchGoogleCalendar() {
    return $('~switch_google_calendar');
  }

  get btnSalvar() {
    return $('~btn_salvar_agendamento');
  }

  async isDisplayed() {
    return super.isDisplayed('~agendamento_form_screen');
  }

  async salvar() {
    await this.tap('~btn_salvar_agendamento');
  }
}

export default new AppointmentFormPage();
