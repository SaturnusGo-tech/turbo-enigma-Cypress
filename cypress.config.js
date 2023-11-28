const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "fei7tm",
  e2e: {
    setupNodeEvents(on, config) {

      return config;
    },
  },
});
