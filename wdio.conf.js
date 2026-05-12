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
    try {
      await $('~login_screen').waitForDisplayed({ timeout: 15000 });
      await $('~campo_email').setValue(process.env.TEST_EMAIL || '');
      await driver.hideKeyboard();
      await $('~campo_senha').setValue(process.env.TEST_PASSWORD || '');
      await driver.hideKeyboard();
      await $('~btn_entrar').click();
      await $('~home_screen').waitForDisplayed({ timeout: 30000 });
    } catch {
      // Already authenticated or login screen not present
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
