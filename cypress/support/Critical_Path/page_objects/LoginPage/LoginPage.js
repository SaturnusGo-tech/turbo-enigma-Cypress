import AuthLogin from '../../../../fixtures/navigation/AuthLogin';
import { LoginPageLocators } from './LoginPageLocators/LoginPageLocators';

const ERROR_MESSAGE_INVALID_LOGIN = 'Invalid login credentials';

class LoginPage {
  /**
   * Navigates to the home page using the defined authentication login procedure.
   * Logs the action of initiating a visit to the home page.
   */
  visit() {
    AuthLogin.visitHomePage();
    cy.log('Step: Initiated visit to Home Page');
  }

  /**
   * Fills any input field identified by the given locator with the specified value.
   * Clears the field before typing and ensures the value is correctly entered.
   * Logs the steps and completion of filling the field.
   *
   * @param {string} locator - The CSS selector or XPath for the input field.
   * @param {string} value - The value to type into the input field.
   */
  fillInputField(locator, value) {
    cy.log(`Step: Preparing to fill the field ${locator}`);
    cy.get(locator)
      .should('be.visible')
      .clear()
      .type(value)
      .should('have.value', value);

    cy.log(`Completed: Filled ${locator} field with ${value}`);
  }

  /**
   * Fills the email input field using the email locator from Locators.
   *
   * @param {string} email - The email address to be entered in the email field.
   */
  fillEmail(email) {
    this.fillInputField(LoginPageLocators.EMAIL_INPUT, email);
  }

  /**
   * Fills the password input field using the password locator from Locators.
   *
   * @param {string} password - The password to be entered in the password field.
   */
  fillPassword(password) {
    this.fillInputField(LoginPageLocators.PASSWORD_INPUT, password);
  }

  /**
   * Clicks the login button on the login page.
   * Ensures the button is visible and enabled before clicking.
   * Logs the action of clicking the login button.
   */
  clickLoginButton() {
    cy.log('Step: Clicking the Login Button');
    cy.xpath(LoginPageLocators.LOGIN_BUTTON)
      .should('be.visible')
      .should('be.enabled')
      .click();

    cy.log(`Completed: Clicked on Login Button with XPath ${LoginPageLocators.LOGIN_BUTTON}`);
  }

  /**
   * Checks for the absence of error messages on the login page.
   * Specifically checks that the error message does not contain the text for invalid login credentials.
   * Logs the result of the check.
   */
  checkNoErrorMessage() {
    cy.log('Step: Checking for the absence of error messages');
    cy.document().then((doc) => {
      const errorElement = doc.evaluate(
        LoginPageLocators.ERROR_MESSAGE,
        doc,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;

      if (errorElement) {
        expect(errorElement.textContent).to.not.contain(ERROR_MESSAGE_INVALID_LOGIN);
        cy.log('Warning: Found error message element, but it does not contain invalid login text');
      } else {
        cy.log('Completed: No error message element found, which is expected.');
      }
    });
  }
}

export default LoginPage;
