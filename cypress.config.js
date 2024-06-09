const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl:"https://app-staging.securecompliance.us/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges:false,
    defaultCommandTimeout:30000,
    video:true,
    chromeWebSecurity:false
  },
});
