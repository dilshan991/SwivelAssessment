const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  "viewportWidth": 1280,
  "viewportHeight": 720,
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/reports/mocha",
      "screenshotOnRunFailure": true,
      "quite": true,
      "overwrite": false,
      "html": false,
      "json": true
    }
  }
  ,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
