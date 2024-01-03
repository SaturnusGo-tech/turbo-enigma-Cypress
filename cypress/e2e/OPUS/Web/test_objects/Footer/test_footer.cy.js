// Importing necessary page objects and test data
import LoginPage from '../../../../../support/objects/LoginPage/actions/LoginPage';
import FooterValidator from '../../../../../support/objects/Footer/actions/actions';
import TestData from "../../../../../fixtures/Secret_variables/Test_data";

/**
 * Test suite focusing on the validation of footer elements after user login.
 */
describe('Footer Validation after Login', { retries: 4 }, function () {
    /**
     * Setup actions to be performed before each test.
     * This includes setting the viewport size and clearing cookies and local storage
     * to ensure a consistent testing environment.
     */
    beforeEach(() => {
        cy.viewport('macbook-15'); // Setting the viewport to simulate a larger screen environment
        cy.clearCookies(); // Clearing all cookies
        cy.clearLocalStorage(); // Clearing local storage
    });

    // Initializing instances of Page Objects for reusability
    const loginPage = new LoginPage();
    const footer = new FooterValidator();

    /**
     * Main test case to perform login and then validate the presence and functionality of footer links.
     * This test includes steps for logging in and verifying the functionality of footer elements.
     */
    it('Should login and then validate footer links', function () {
        cy.log('--- Starting Login Phase ---'); // Logging the start of the login phase

        // Login Phase using LoginPage
        loginPage.visit(); // Navigating to the login page
        loginPage.login(); // Executing login steps

        // Verifying successful login
        cy.log('--- Verifying Successful Login ---'); // Logging the verification of successful login
        cy.url().should('include', '/home', {timeout: 10000}); // Confirming redirection to the home page post-login
        cy.log('Successfully logged in and redirected to home page.');

        // Footer Validation Phase
        footer.checkFooterLinks(); // Validating the functionality of footer links
    });
});
