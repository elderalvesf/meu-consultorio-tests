import BasePage from './BasePage.js';

class TreatmentFormPage extends BasePage {
  get screen() {
    return $('~tratamento_form_screen');
  }

  get campoPaciente() {
    return $('~campo_paciente_tratamento');
  }

  get campoProcedimento() {
    return $('~campo_procedimento_tratamento');
  }

  get campoDente() {
    return $('~campo_dente');
  }

  get campoValor() {
    return $('~campo_valor_tratamento');
  }

  get campoCusto() {
    return $('~campo_custo_tratamento');
  }

  get campoData() {
    return $('~campo_data_tratamento');
  }

  get campoHorario() {
    return $('~campo_horario_tratamento');
  }

  get campoStatus() {
    return $('~campo_status_tratamento');
  }

  get campoDescricao() {
    return $('~campo_descricao_tratamento');
  }

  get btnSalvar() {
    return $('~btn_salvar_tratamento');
  }

  async isDisplayed() {
    return super.isDisplayed('~tratamento_form_screen');
  }

  async salvar() {
    await this.tap('~btn_salvar_tratamento');
  }
}

export default new TreatmentFormPage();
