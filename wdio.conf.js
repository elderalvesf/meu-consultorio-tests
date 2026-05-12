export const config = {
  runner: 'local',
  port: 4723,

  specs: ['./test/specs/**/*.spec.js'],
  exclude: [],

  maxInstances: 1,

  capabilities: [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': process.env.DEVICE_NAME || 'emulator-5554',
      'appium:platformVersion': process.env.ANDROID_VERSION || '14',
      'appium:appPackage': 'com.meuconsultorio',
      'appium:appActivity': 'com.meuconsultorio.MainActivity',
      'appium:app': process.env.APK_PATH || './apk/app-debug.apk',
      'appium:autoGrantPermissions': true,
      'appium:newCommandTimeout': 300,
      'appium:noReset': true,
    },
  ],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  before: async function () {
    const email = process.env.TEST_EMAIL;
    const password = process.env.TEST_PASSWORD;

    if (!email || !password) {
      console.error('[before] TEST_EMAIL or TEST_PASSWORD not set — skipping login');
      return;
    }

    try {
      const isLoginVisible = await $('~login_screen')
        .waitForDisplayed({ timeout: 15000 })
        .then(() => true)
        .catch(() => false);

      if (!isLoginVisible) {
        console.log('[before] Already authenticated');
        return;
      }

      console.log('[before] Login screen found, logging in as', email);

      const emailField = await $('~campo_email');
      await emailField.waitForDisplayed({ timeout: 5000 });
      await emailField.click();
      await driver.execute('mobile: type', { text: email });

      const passField = await $('~campo_senha');
      await passField.click();
      await driver.execute('mobile: type', { text: password });

      await driver.hideKeyboard().catch(() => {});

      await $('~btn_entrar').click();
      await $('~home_screen').waitForDisplayed({ timeout: 30000 });
      console.log('[before] Login successful');
    } catch (e) {
      console.error('[before] Login failed:', e.message);
    }
  },

  reporters: [
    'spec',
    [
      'junit',
      {
        outputDir: './reports',
        outputFileFormat: (options) => `results-${options.cid}.xml`,
      },
    ],
  ],
};
