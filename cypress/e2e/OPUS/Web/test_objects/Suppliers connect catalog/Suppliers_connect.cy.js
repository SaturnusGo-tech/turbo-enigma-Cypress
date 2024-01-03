// Importing necessary page objects and test data
import LoginPage from '../../../../../support//objects/LoginPage/actions/LoginPage';
import TestData from "../../../../../fixtures/Secret_variables/Test_data";
import SupplierConnect from '../../../../../support/objects/Suppliers connect catalog/actions/actions';

/**
 * Test suite focusing on the validation of supplier connect functionality after user login.
 */
describe('Supplier connect Validation after Login', { retries: 4 }, function () {
    /**
     * Setup actions to be performed before each test.
     * This includes clearing cookies and local storage to ensure a clean testing environment.
     */
    beforeEach(() => {
        cy.clearCookies(); // Clearing all cookies for a clean state
        cy.clearLocalStorage(); // Clearing local storage data
    });

    // Initializing instances of Page Objects for reusable functionality
    const loginPage = new LoginPage();
    const supplier = new SupplierConnect();

    /**
     * Main test case to perform login and validate supplier connect catalog functionality.
     * This test includes steps for logging in and verifying the functionality related to supplier connect.
     */
    it('Should login and then validate supplier connect catalog', function () {
        cy.log('--- Starting Login Phase ---'); // Logging the start of the login phase

        // Login Phase
        cy.log('Visiting login page...'); // Logging the action of visiting the login page
        loginPage.visit(); // Navigating to the login page
        loginPage.login(); // Executing login steps

        // Verifying successful login
        cy.log('--- Verifying Successful Login ---'); // Logging the verification of successful login
        cy.url().should('include', '/home', {timeout: 10000}); // Confirming redirection to the home page post-login
        cy.log('Successfully logged in and redirected to home page.');

        // Supplier Connect Catalog Validation Phase
        cy.log('--- Starting Supplier Connect Catalog Validation ---'); // Logging the start of supplier connect validation
        supplier.RevertCatalogsData(); // Performing actions to revert or validate supplier catalogs
        // Additional steps or assertions can be added here to further validate supplier connect functionality
    });
});
