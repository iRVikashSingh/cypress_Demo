const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    // implement node event listeners here

    specPattern:
      "C:/Users/user/OneDrive/Documents/sdet/evaluation/cypress/support/Integration/ebay.js",
  },
});
