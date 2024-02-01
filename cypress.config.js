// Import required modules and functions
const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

// Exporting Cypress configuration
module.exports = defineConfig({
  projectId: "92iupf", // Unique project identifier

  e2e: {
    // Setup for Node events in Cypress
    setupNodeEvents(on, config) {

      // Defining a custom task for file operations
      on('task', {
        writeToFile({ filename, content }) {
          // Constructing the file path
          const filePath = path.join(__dirname, 'cypress', 'downloads', filename);

          // Checking if the directory exists, if not, create it
          if (!fs.existsSync(path.dirname(filePath))) {
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
          }

          // Filtering content to include only URLs starting with a specific string
          const filteredContent = content.split('\n')
            .filter(url => url.startsWith('https://uat-opus.omniapartners.com'))
            .join('\n');

          // Writing the filtered content to the file
          fs.writeFileSync(filePath, filteredContent, 'utf8');
          console.log(`File written: ${filePath}`);
          return null;
        },
      });

      // Return the modified configuration
      return config;
    },

    /**
     * Configuring automatic retries for tests. This helps to mitigate
     * the impact of flaky tests by retrying failed tests before marking them as failed.
     */
    retries: {
      runMode: 6, // Number of retries in command line mode (non-interactive mode).
      openMode: 0 // Number of retries in interactive mode (during cypress open).
    },

    /**
     * Global timeout settings for various Cypress commands.
     * These values determine how long Cypress will wait for commands to complete
     * before timing out.
     */
    defaultCommandTimeout: 10000, // Timeout for most Cypress commands
    requestTimeout: 5000,        // Timeout for cy.request() commands
    responseTimeout: 5000,       // Timeout for waiting on responses

    /**
     * Settings related to capturing screenshots and recording videos.
     * This helps in visual debugging and understanding test failures.
     */
    screenshotOnRunFailure: true, // Capture screenshot on test failure
    video: true,                  // Record video of the test run

    /**
     * Advanced reporter settings for better integration and reporting.
     * Mochawesome reporter provides detailed and visually appealing test reports.
     */
    reporter: 'mochawesome', // Specifying 'mochawesome' as the test reporter
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory to store reports
      overwrite: false,            // Avoid overwriting existing reports
      html: false,                 // Disable HTML report generation
      json: true                   // Enable JSON report generation
    }
  },
});
