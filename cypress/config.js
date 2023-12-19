const fs = require('fs');
const path = require('path');

/**
 * Reads and returns the configuration for a specified environment.
 * The function loads a JSON file containing configurations for different environments,
 * parses it, and returns the configuration for the requested environment.
 *
 * @param {string} env - The environment name for which to get the configuration.
 * @returns {Object} The configuration object for the specified environment.
 */
function getConfig(env) {
    // Constructing the path to the JSON file containing the environments configuration
    const configPath = path.join(__dirname, 'environments.json');

    // Reading the JSON file synchronously
    const configFile = fs.readFileSync(configPath);

    // Parsing the JSON file to get an object representing all environments
    const environments = JSON.parse(configFile);

    // Returning the specific environment's configuration
    return environments[env];
}

module.exports = getConfig;
