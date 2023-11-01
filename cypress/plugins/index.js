const axios = require('axios'); // For making HTTP requests
const fs = require('fs-extra'); // For file system operations
const path = require('path'); // For handling file and directory paths
const Ajv = require("ajv"); // For JSON schema validation
require('dotenv').config(); // For environment variables

/**
 * @module Cypress Configuration
 * Contains custom tasks and lifecycle hooks for Cypress.
 */

module.exports = (on, config) => {
  // Pre-existing setup for environment variables
  config.env = config.env || {};
  config.env.username = process.env.OPUS_LOGIN;
  config.env.password = process.env.OPUS_PASSWORD;

  /**
   * @hook before:browser:launch
   * Hook to configure browser before launch.
   */
  on('before:browser:launch', (browser = {}, launchOptions) => {
    console.log('Launching browser:', browser.name);
    return launchOptions;
  });

  /**
   * @namespace CustomTasks
   * Custom tasks for Cypress.
   */
  on('task', {
    /**
     * @function logMessage
     * Logs a message to the console.
     * @param {string} message - The message to log.
     * @returns {null}
     */
    logMessage(message) {
      console.log('From task:', message);
      return null;
    },

    /**
     * @function isUrlAccessible
     * Checks if a URL is accessible.
     * @param {string} url - The URL to check.
     * @returns {boolean} - True if the URL is accessible, false otherwise.
     */
    async isUrlAccessible(url) {
      try {
        const response = await axios.head(url);
        console.log(`URL ${url} is accessible: ${response.status}`);
        return response.status === 200;
      } catch (error) {
        console.error(`URL ${url} is not accessible: ${error}`);
        return false;
      }
    },

    /**
     * @function validateJson
     * Validates a JSON object against a schema.
     * @param {object} json - The JSON to validate.
     * @param {object} schema - The JSON schema to validate against.
     * @returns {boolean} - True if the JSON is valid, false otherwise.
     */
    validateJson(json, schema) {
      const ajv = new Ajv();
      const validate = ajv.compile(schema);
      const valid = validate(json);
      console.log(`JSON validation result: ${valid}`);
      return valid;
    },

    /**
     * @function doesFileExist
     * Checks if a file or directory exists.
     * @param {string} filePath - The path of the file or directory.
     * @returns {boolean} - True if the file or directory exists, false otherwise.
     */
    doesFileExist(filePath) {
      const exists = fs.existsSync(filePath);
      console.log(`File ${filePath} exists: ${exists}`);
      return exists;
    },

    /**
     * @function saveLogs
     * Saves logs to a file.
     * @param {object} logs - The logs to save.
     * @param {string} logFilePath - The path where to save the logs.
     * @returns {null}
     */
    saveLogs(logs, logFilePath) {
      fs.writeFileSync(logFilePath, JSON.stringify(logs, null, 2));
      console.log(`Logs saved to ${logFilePath}`);
      return null;
    }
  });

  /**
   * @hook file:preprocessor
   * Hook to preprocess files.
   */
  on('file:preprocessor', (file) => {
    console.log('Preprocessing file:', file.filePath);
    return file;
  });

  on('task', {
    logMessage(message) {
      console.log('From task:', message);
      return null;
    },

    clearDirectory(folderName) {
      fs.emptyDirSync(path.join(__dirname, folderName));
      return null;
    },

    async executeSQL(query) {
      // Will be implement
      return null;
    },

    async generateTestData() {
      //  Will be implement
      return null;
    },

    async archiveResults() {
      //  Will be implement
      return null;
    },

    async sendNotification(message) {
      //  Will be implement
      return null;
    },

    async performSecurityAudit(url) {
      //  Will be implement
      return null;
    },

    async collectPerformanceMetrics(url) {
      //  Will be implement
      return null;
    },
  });

  // Return the modified config to Cypress
  return config;
};
