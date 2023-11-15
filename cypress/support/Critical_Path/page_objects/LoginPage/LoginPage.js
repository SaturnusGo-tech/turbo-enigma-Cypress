import AuthLogin from '../../../../fixtures/navigation/AuthLogin';
import { LoginPageLocators } from './LoginPageLocators/LoginPageLocators';

const ERROR_MESSAGE_INVALID_LOGIN = 'Invalid login credentials';

class LoginPage {
  // Navigate to the Home Page
  visit() {
    AuthLogin.visitHomePage();
    cy.log('Step: Initiated visit to Home Page');
  }

  // Generic function to fill any input field
  fillInputField(locator, value) {
    cy.log(`Step: Preparing to fill the field ${locator}`);
    cy.get(locator)
      .should('be.visible')
      .clear()
      .type(value)
      .should('have.value', value);

    cy.log(`Completed: Filled ${locator} field with ${value}`);
  }

  // Fill the Email input field
  fillEmail(email) {
    this.fillInputField(LoginPageLocators.EMAIL_INPUT, email);
  }

  // Fill the Password input field
  fillPassword(password) {
    this.fillInputField(LoginPageLocators.PASSWORD_INPUT, password);
  }

  // Click the Login Button
  clickLoginButton() {
    cy.log('Step: Clicking the Login Button');
    cy.xpath(LoginPageLocators.LOGIN_BUTTON)
      .should('be.visible')
      .should('be.enabled')
      .click();

    cy.log(`Completed: Clicked on Login Button with XPath ${LoginPageLocators.LOGIN_BUTTON}`);
  }

  // Check if there are no error messages displayed
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
