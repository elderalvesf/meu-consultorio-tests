class NavigationHelper {
  async waitForApp() {
    await driver.waitUntil(async () => {
      try {
        const el = await $('~nav_home');
        return await el.isDisplayed();
      } catch {
        return false;
      }
    }, { timeout: 30000, interval: 1000 });
  }

  async goToHome() {
    await this.waitForApp();
    const el = await $('~nav_home');
    await el.click();
    await driver.waitUntil(async () => {
      try { return await (await $('~home_screen')).isDisplayed(); } catch { return false; }
    }, { timeout: 10000, interval: 500 });
  }

  async goToAgenda() {
    await this.waitForApp();
    const el = await $('~nav_appointments');
    await el.click();
    await driver.waitUntil(async () => {
      try { return await (await $('~agenda_screen')).isDisplayed(); } catch { return false; }
    }, { timeout: 10000, interval: 500 });
  }

  async goToPatients() {
    await this.waitForApp();
    const el = await $('~nav_patients');
    await el.click();
    await driver.waitUntil(async () => {
      try { return await (await $('~pacientes_screen')).isDisplayed(); } catch { return false; }
    }, { timeout: 10000, interval: 500 });
  }

  async goToFinanceiro() {
    await this.waitForApp();
    const el = await $('~nav_financial');
    await el.click();
  }
}

export default new NavigationHelper();
