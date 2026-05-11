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
