class NavigationHelper {
  async waitForApp() {
    // If on a non-top-level screen (no bottom nav), press back to return
    for (let i = 0; i < 4; i++) {
      try {
        const el = await $('~nav_home');
        if (await el.isDisplayed()) return;
      } catch {}
      await driver.back();
      await driver.pause(1500);
    }
    await driver.waitUntil(async () => {
      try {
        const el = await $('~nav_home');
        return await el.isDisplayed();
      } catch { return false; }
    }, { timeout: 20000, interval: 500 });
  }

  async goToHome() {
    await this.waitForApp();
    const el = await $('~nav_home');
    await el.click();
    await driver.waitUntil(async () => {
      try { return await (await $('~card_stat_pacientes')).isDisplayed(); } catch { return false; }
    }, { timeout: 30000, interval: 500 });
  }

  async goToAgenda() {
    await this.waitForApp();
    const el = await $('~nav_appointments');
    await el.click();
    await driver.waitUntil(async () => {
      try { return await (await $('~agenda_screen')).isDisplayed(); } catch { return false; }
    }, { timeout: 15000, interval: 500 });
  }

  async goToPatients() {
    await this.waitForApp();
    const el = await $('~nav_patients');
    await el.click();
    await driver.waitUntil(async () => {
      try { return await (await $('~pacientes_screen')).isDisplayed(); } catch { return false; }
    }, { timeout: 15000, interval: 500 });
  }

  async goToFinanceiro() {
    await this.waitForApp();
    const el = await $('~nav_financial');
    await el.click();
  }
}

export default new NavigationHelper();
