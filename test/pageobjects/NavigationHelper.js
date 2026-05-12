class NavigationHelper {
  async goToHome() {
    const el = await $('~nav_home');
    await el.waitForDisplayed({ timeout: 5000 });
    await el.click();
  }

  async goToAgenda() {
    const el = await $('~nav_appointments');
    await el.waitForDisplayed({ timeout: 5000 });
    await el.click();
  }

  async goToPatients() {
    const el = await $('~nav_patients');
    await el.waitForDisplayed({ timeout: 5000 });
    await el.click();
  }

  async goToFinanceiro() {
    const el = await $('~nav_financial');
    await el.waitForDisplayed({ timeout: 5000 });
    await el.click();
  }
}

export default new NavigationHelper();
