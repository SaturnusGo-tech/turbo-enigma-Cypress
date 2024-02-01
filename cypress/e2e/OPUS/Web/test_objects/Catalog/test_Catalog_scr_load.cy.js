// Importing necessary classes and data
import LoginPage from '../../../../../support/objects/LoginPage/actions/LoginPage';
import CatalogPage from '../../../../../support/objects/Catalog/actions/actions';

/**
 * Test suite for validating the display and functionality of catalog images after user login.
 */
describe('Catalog Images Validation after Login', { retries: 1 }, function () {
    /**
     * Setup actions to be performed before each test.
     * This includes clearing cookies and local storage to ensure a clean testing environment.
     */

    beforeEach(() => {

        cy.clearCookies(); // Clearing all cookies
        cy.clearLocalStorage(); // Clearing local storage
        cy.viewport('macbook-15');
    });

    // Initializing instances of Page Objects for reusable functionality

    const baseUrl = Cypress.env('baseUrl');
    const loginPage = new LoginPage();
    const catalog = new CatalogPage(baseUrl);

    /**
     * Main test case to perform login and validate the display and functionality of catalog images.
     * The test includes steps for logging in and verifying the presence and loading of catalog images.
     */
    it('Should login and then validate catalog images', function() {
        cy.log('--- Starting Login Phase ---'); // Logging the start of the login phase

        // Login Phase using LoginPage
        loginPage.visit(); // Navigating to the login page
        loginPage.login(); // Executing login steps

        // Verifying successful login
        cy.log('--- Verifying Successful Login ---'); // Logging the verification of successful login
        cy.url().should('include', '/home', { timeout: 10000 }); // Confirming redirection to the home page post-login
        cy.log('Successfully logged in and redirected to home page.');

        // Catalog Image Validation Phase
        cy.log('--- Starting Catalog Validation and pulling urls process ---');
        cy.wait(7000);
        catalog.openTableSupplierList()
        catalog.openSupplierList()
        catalog.scrollToLoadAllImages()
        catalog.findAndSaveSvgUrls();
        cy.log('Catalog images validated and svg urls has been successfully pulled.'); // Logging the completion of catalog validation
    });
});
