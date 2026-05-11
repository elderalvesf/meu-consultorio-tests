import BasePage from './BasePage.js';

class LoginPage extends BasePage {
  get screen() {
    return $('~login_screen');
  }

  get campoEmail() {
    return $('~campo_email');
  }

  get campaSenha() {
    return $('~campo_senha');
  }

  get btnEntrar() {
    return $('~btn_entrar');
  }

  get btnEntrarGoogle() {
    return $('~btn_entrar_google');
  }

  async isDisplayed() {
    return super.isDisplayed('~login_screen');
  }

  async login(email, senha) {
    await this.typeText('~campo_email', email);
    await this.typeText('~campo_senha', senha);
    await this.hideKeyboard();
    await this.tap('~btn_entrar');
  }
}

export default new LoginPage();
