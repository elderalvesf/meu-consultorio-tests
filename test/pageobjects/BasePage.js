export default class BasePage {
  async waitForElement(selector, timeout = 10000) {
    const el = await $(selector);
    await el.waitForDisplayed({ timeout });
    return el;
  }

  async tap(selector) {
    const el = await this.waitForElement(selector);
    await el.click();
  }

  async typeText(selector, text) {
    const el = await this.waitForElement(selector);
    await el.clearValue();
    await el.setValue(text);
  }

  async getText(selector) {
    const el = await this.waitForElement(selector);
    return el.getText();
  }

  async isDisplayed(selector) {
    try {
      const el = await $(selector);
      return el.isDisplayed();
    } catch {
      return false;
    }
  }

  async hideKeyboard() {
    try {
      await driver.hideKeyboard();
    } catch {
      // keyboard may not be visible
    }
  }
}
