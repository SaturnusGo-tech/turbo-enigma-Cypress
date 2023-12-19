import AuthLogin from '../../../../fixtures/navigation/AuthLogin';
import { Locators } from '../locators/locators';

const ERROR_MESSAGE_INVALID_LOGIN = 'Invalid login credentials';

class LoginPage {
    constructor() {
        this.authLogin = new AuthLogin();
    }

    /**
     * Uses AuthLogin to navigate to the home page.
     * Logs the action of initiating a visit to the home page.
     */
    visit() {
        this.authLogin.visitHomePage();
        cy.log('Step: Initiated visit to Home Page');
    }

    /**
     * Fills in the email input field.
     * Uses the email locator from Locators to ensure correct selector targeting.
     *
     * @param {string} email - The email address to be entered in the email field.
     */
    fillEmail(email) {
        cy.get(Locators.EMAIL_INPUT) // Ensure Locators.EMAIL_INPUT points to the correct selector
            .should('be.visible')
            .clear()
            .type(email);
    }

    /**
     * Fills in the password input field.
     * Uses the password locator from Locators to ensure correct selector targeting.
     *
     * @param {string} password - The password to be entered in the password field.
     */
    fillPassword(password) {
        cy.get(Locators.PASSWORD_INPUT) // Ensure Locators.PASSWORD_INPUT points to the correct selector
            .should('be.visible')
            .clear()
            .type(password);
    }

    /**
     * Clicks the login button on the login page.
     * Uses the login button locator from Locators to ensure correct selector targeting.
     */
    clickLoginButton() {
        cy.xpath(Locators.LOGIN_BUTTON) // Ensure Locators.LOGIN_BUTTON points to the correct selector
            .should('be.visible')
            .click();
    }

    /**
     * Performs the entire login process.
     * Gets authorization credentials from AuthLogin and fills in the login form.
     */
    login() {
        const credentials = this.authLogin.getCredentials();
        this.fillEmail(credentials.email);
        this.fillPassword(credentials.password);
        this.clickLoginButton();
    }
}

export default LoginPage;
