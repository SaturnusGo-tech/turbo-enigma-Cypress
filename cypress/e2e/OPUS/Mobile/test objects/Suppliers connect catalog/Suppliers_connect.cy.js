// Importing necessary page objects and test data
import LoginPage from '../../../../../support/Critical_Path/page_objects/LoginPage/LoginPage';
import TestData from "../../../../../fixtures/Secret_variables/Test_data";
import SupplierConnect from '../../../../../support/objects/Suppliers connect catalog/actions/actions';

/**
 * Test suite focusing on the validation of catalog images after user login.
 */
describe('Catalog Images Validation after Login', function () {
    /**
     * Setup actions to be performed before each test.
     * This includes clearing cookies and local storage for a clean testing environment,
     * and setting the viewport size.
     */
    beforeEach(() => {
        cy.clearCookies(); // Clearing all cookies for a clean state
        cy.clearLocalStorage(); // Clearing local storage data
        cy.log('Setting viewport to 414x896'); // Logging the viewport setup
        cy.viewport(414, 896); // Simulating a mobile device's screen
    });

    // Initializing instances of Page Objects for reusability
    const loginPage = new LoginPage();
    const supplier = new SupplierConnect();

    /**
     * Main test case to perform login and validate catalog images.
     * This test includes steps for logging in and verifying catalog image presence and functionality.
     */
    it('Should login and then validate catalog images', function () {
        cy.log('--- Starting Login Phase ---'); // Logging the beginning of the login phase

        // Performing login actions
        loginPage.visit(); // Navigating to the login page
        loginPage.login(); // Executing login steps

        // Verifying successful login
        cy.log('--- Verifying Successful Login ---'); // Logging the verification of successful login
        cy.url().should('include', '/home', {timeout: 10000}); // Confirming redirection to the home page post-login
        cy.log('Successfully logged in and redirected to home page.');

        // Catalog Image Validation Phase
        cy.log('--- Starting Catalog Images Validation ---'); // Logging the start of catalog image validation
        supplier.RevertCatalogsData(); // Performing actions to revert catalog data to a previous state or setup
    });
});
