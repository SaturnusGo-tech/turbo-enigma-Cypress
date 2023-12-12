const fs = require('fs');
const path = require('path');

/**
 * Retrieve the configuration for a given environment.
 * @param {string} env - The environment name (e.g., 'qa', 'uat', 'demo').
 * @returns {Object} The configuration object for the specified environment.
 */
function getConfig(env) {
    // Define the path to the configuration file
    const configPath = path.join(__dirname, 'environments.json');
    // Read the configuration file
    const configFile = fs.readFileSync(configPath);
    // Parse and return the environment-specific configuration
    const environments = JSON.parse(configFile);

    return environments[env];
}

// Determine the current environment using the CYPRESS_ENV environment variable, defaulting to 'qa'
const currentEnvironment = process.env.CYPRESS_ENV || 'qa';
// Retrieve the configuration for the current environment
const config = getConfig(currentEnvironment);

// If the configuration for the current environment is not found, log an error and exit
if (!config) {
    console.error(`Environment not found: ${currentEnvironment}`);
    process.exit(1);
}

// Export the configuration for use in Cypress tests
module.exports = config;
