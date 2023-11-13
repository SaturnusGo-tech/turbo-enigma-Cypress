const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "fei7tm",
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
});
