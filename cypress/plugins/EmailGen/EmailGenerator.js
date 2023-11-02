/**
 * Utility to generate unique email addresses.
 */
class EmailGenerator {
  /**
   * Generates a unique email address using the current timestamp.
   * @param {string} baseName - Base name for the email address.
   * @param {string} domain - Domain for the email address. Default is 'randommail.com'.
   * @returns {string} - Unique email address.
   */
  static generateUniqueEmail(baseName = 'mercury.rucks', domain = 'randommail.com') {
    const timestamp = new Date().getTime();
    return `${baseName}.${timestamp}@${domain}`;
  }
}

export default EmailGenerator;
