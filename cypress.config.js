const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1360,
  viewportHeight: 1080,

  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});
