const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "fei7tm",
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);

      on('task', {
        writeToFile({ filename, content }) {
          const fs = require('fs');
          fs.writeFileSync(filename, content, 'utf8');
          return null;
        }
      });

      return config;
    },
  },
});
