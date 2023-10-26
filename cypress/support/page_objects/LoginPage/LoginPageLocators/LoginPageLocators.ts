// Interface for LoginPage locators
interface ILoginPageLocators {
  EMAIL_INPUT: string;
  PASSWORD_INPUT: string;
  LOGIN_BUTTON: string;
  ERROR_MESSAGE: string;
}

// This object contains locators for elements on the Login Page.
export const LoginPageLocators: ILoginPageLocators = {
  // Input field for email during login
  EMAIL_INPUT: 'input[placeholder="Enter your email address"]',

  // Input field for password during login
  PASSWORD_INPUT: 'input[placeholder="Enter your password"]',

  // Button to submit the login form
  LOGIN_BUTTON: '//span[text()="Log in"]/ancestor::button',

  // Locator for an error message during login failure
  ERROR_MESSAGE: '//div[contains(@class, "error-class") and text()="Invalid login credentials"]'
};
