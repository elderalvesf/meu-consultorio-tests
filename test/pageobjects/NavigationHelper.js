class NavigationHelper {
  async waitForApp() {
    await $('~home_screen').waitForDisplayed({ timeout: 30000 });
  }

  async goToHome() {
    await this.waitForApp();
    const el = await $('~nav_home');
    await el.waitForDisplayed({ timeout: 5000 });
    await el.click();
    await $('~home_screen').waitForDisplayed({ timeout: 10000 });
  }

  async goToAgenda() {
    await this.waitForApp();
    const el = await $('~nav_appointments');
    await el.waitForDisplayed({ timeout: 5000 });
    await el.click();
    await $('~agenda_screen').waitForDisplayed({ timeout: 10000 });
  }

  async goToPatients() {
    await this.waitForApp();
    const el = await $('~nav_patients');
    await el.waitForDisplayed({ timeout: 5000 });
    await el.click();
    await $('~pacientes_screen').waitForDisplayed({ timeout: 10000 });
  }

  async goToFinanceiro() {
    await this.waitForApp();
    const el = await $('~nav_financial');
    await el.waitForDisplayed({ timeout: 5000 });
    await el.click();
  }
}

export default new NavigationHelper();
