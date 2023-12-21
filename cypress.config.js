const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  projectId: "92ipf",

  e2e: {
    /**
     * Setting up node events for custom tasks.
     */
    setupNodeEvents(on, config) {
      on('task', {
        /**
         * Custom task to write content to a file.
         * 'filename': Name of the file to write.
         * 'content': Content to be written into the file.
         */
        writeToFile({ filename, content }) {
          const dirPath = path.join(__dirname, '..', 'cypress');
          const filePath = path.join(dirPath, filename);

          /**
           * Check if the directory exists.
           * If it does not exist, create the directory.
           */
          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
          }

          // Write the content to the specified file.
          fs.writeFileSync(filePath, content, 'utf8');
          return null;
        }
      });

      return config;
    },

    /**
     * Configuring automatic retries for tests.
     */
    retries: {
      runMode: 4, // Number of retries in command line mode.
      openMode: 0 // Number of retries in interactive mode.
    },

    /**
     * Timeout settings
     */
    defaultCommandTimeout: 10000,
    requestTimeout: 5000,
    responseTimeout: 5000,

    /**
     * Screencast settings
     */
    screenshotOnRunFailure: true,
    video: true,
  },
});
