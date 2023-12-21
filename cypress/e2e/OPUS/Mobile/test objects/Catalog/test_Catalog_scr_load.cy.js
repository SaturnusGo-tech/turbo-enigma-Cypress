// Importing necessary page objects and test data
import LoginPage from '../../../../../support/objects/LoginPage/actions/LoginPage';
import CatalogPage from '../../../../../support/objects/Catalog/actions/actions';
import TestData from "../../../../../fixtures/Secret_variables/Test_data";

/**
 * Test suite for validating the appearance and functionality of catalog images after user login.
 */
describe('Catalog Images Validation after Login', function () {
    /**
     * Setup actions to be performed before each test.
     */
    beforeEach(() => {
        cy.log('Setting viewport to 414x896'); // Logging the viewport setup
        cy.viewport(414, 896); // Setting viewport resolution to simulate a specific device

        // Clearing cookies and local storage to ensure a clean testing state
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    // Initializing instances of Page Objects for reusability
    const loginPage = new LoginPage();
    const catalog = new CatalogPage();

    /**
     * Main test case to validate the display and functionality of catalog images post-login.
     */
    it('Should login and then validate catalog images', function() {
        cy.log('--- Starting Login Phase ---'); // Logging the start of the login phase

        // Performing login actions
        loginPage.visit(); // Navigating to the login page
        loginPage.login(); // Executing login steps

        // Verifying successful login
        cy.log('--- Verifying Successful Login ---');
        cy.url().should('include', '/home', { timeout: 10000 }); // Verifying redirection to the home page post-login
        cy.log('Successfully logged in and redirected to home page.');

        // Catalog image validation phase
        cy.log('--- Starting Catalog Validation ---');
        catalog.validateAllImages(); // Validating the appearance and loading of catalog images
        cy.log('Catalog images validated.'); // Logging the completion of catalog validation
    });
});
