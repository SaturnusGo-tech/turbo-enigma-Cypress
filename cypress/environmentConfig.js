/**
 * Returns the URL associated with a given environment.
 * This function maps environment names (like 'qa', 'uat', 'demo') to their respective URLs.
 *
 * @param {string} env - The name of the environment ('qa', 'uat', 'demo').
 * @returns {string} The URL associated with the specified environment.
 * @throws Will throw an error if an unknown environment is passed.
 */
function getEnvironmentUrl(env) {
    switch (env) {
        case 'qa':
            // URL for the Quality Assurance environment
            return "https://qa-opus.omniapartners.com/";
        case 'uat':
            // URL for the User Acceptance Testing environment
            return "https://uat-opus.omniapartners.com/";
        case 'demo':
            // URL for the Demo environment
            return "https://omnia-demo-storefront.paas.govirto.com/";
        default:
            // Throws an error if the environment is not recognized
            throw new Error(`Unknown environment: ${env}`);
    }
}

module.exports = { getEnvironmentUrl };
