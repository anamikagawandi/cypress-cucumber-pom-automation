const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: true,
  env: {
    url: "https://adactin.capstonesystemdev.com.au/login",
    username: "",
    password: ""
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/e2e/**/**/*.feature",
    video: false,
    allureResultsPath: "cypress/allure-results",
    tmsPrefix: "https://url-to-bug-tracking-system/task-",
    issuePrefix: "https://url-to-tms/tests/caseId-",
    // reporter: "mocha-allure-reporter",
    // reporterOptions: {
    //   reportDir: "cypress/report",
    //   charts: true,
    //   reportPageTitle: "My Test Suite",
    //   embeddedScreenshots: true,
    //   inlineAssets: true,
    // },
  },
});
