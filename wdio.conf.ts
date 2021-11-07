export const config: WebdriverIO.Config = {
    specs: [
        './features/**/*.feature'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        "goog:chromeOptions": {
            args: ["--disable-gpu", "--no-sandbox", "--disable-dev-shm-usage"]
        }
    }],
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://www.booking.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./step-definitions/*.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
}
