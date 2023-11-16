// Interface for LoginPage locators
interface ILoginPageLocators {
  EMAIL_INPUT: string;
  PASSWORD_INPUT: string;
  LOGIN_BUTTON: string;
  ERROR_MESSAGE: string;
}

/**
 * This object contains locators for elements on the Login Page.
 * Each locator corresponds to a specific element used during the login process.
 */
export const LoginPageLocators: ILoginPageLocators = {
  /**
   * CSS Selector for the email input field on the login page.
   * It targets the input field specifically designated for entering the user's email address.
   */
  EMAIL_INPUT: 'input[placeholder="Enter your email address"]',

  /**
   * CSS Selector for the password input field on the login page.
   * It targets the input field specifically designated for entering the user's password.
   */
  PASSWORD_INPUT: 'input[placeholder="Enter your password"]',

  /**
   * XPath locator for the login button.
   * This locator identifies the button used to submit the login form, typically labeled 'Log in'.
   */
  LOGIN_BUTTON: '//span[text()="Log in"]/ancestor::button',

  /**
   * XPath locator for an error message that appears during login failure.
   * Specifically targets a message element that displays 'Invalid login credentials'.
   */
  ERROR_MESSAGE: '//div[contains(@class, "error-class") and text()="Invalid login credentials"]'
};
