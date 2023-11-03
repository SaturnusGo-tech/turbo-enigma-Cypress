import AuthLogin from '../../../../fixtures/navigation/AuthLogin';
import { LoginPageLocators } from './LoginPageLocators/LoginPageLocators';

const ERROR_MESSAGE_INVALID_LOGIN = 'Invalid login credentials';

class LoginPage {
  // Navigate to the Home Page
 visit() {
  // Visit the home page and log the activity
  AuthLogin.visitHomePage();
  cy.log('Step: Initiated visit to Home Page');
 }


  // Generic function to fill any input field
  async fillInputField(locator, value) {
    cy.log(`Step: Filling the field ${locator}`);
    cy.get(locator)
      .should('be.visible')
      .should('be.empty')
      .type(value)
      .should('have.value', value);

    cy.log(`Completed: Filled ${locator} field with ${value}`);
  }

  // Fill the Email input field
  async fillEmail(email) {
    await this.fillInputField(LoginPageLocators.EMAIL_INPUT, email);
  }

  // Fill the Password input field
  async fillPassword(password) {
    await this.fillInputField(LoginPageLocators.PASSWORD_INPUT, password);
  }

  // Click the Login Button
  async clickLoginButton() {
    cy.log('Step: Clicking the Login Button');
    cy.xpath(LoginPageLocators.LOGIN_BUTTON)
      .should('be.visible')
      .should('be.enabled')
      .click();

    cy.log(`Completed: Clicked on Login Button with XPath ${LoginPageLocators.LOGIN_BUTTON}`);
  }

  // Check if there are no error messages displayed
  async checkNoErrorMessage() {
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
        cy.log('Completed: Found error message element but it does not contain invalid login text');
      } else {
        cy.log('Completed: No error message element found, which is expected.');
      }
    });
  }
}

export default LoginPage;
