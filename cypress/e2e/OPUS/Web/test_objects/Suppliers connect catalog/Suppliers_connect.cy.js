import LoginPage from '../../../../../support/Critical_Path/page_objects/LoginPage/LoginPage';
import TestData from "../../../../../fixtures/Secret_variables/Test_data";
import SupplierConnect from '../../../../../support/objects/Suppliers connect catalog/actions/actions';

describe('Catalog Images Validation after Login', function () {
    beforeEach(() => {
        // Clear cookies and localStorage before each test to ensure no residual data
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    // Initializing Page Objects
    const loginPage = new LoginPage();
    const supplier = new SupplierConnect();

    // Main Test Scenario
    it('Should login and then validate catalog images', function () {
        cy.log('--- Starting Login Phase ---');

        // Login Phase
        cy.log('Visiting login page...');
        loginPage.visit();

        cy.log('Filling in email...');
        loginPage.fillEmail(TestData.email);

        cy.log('Filling in password...');
        loginPage.fillPassword(TestData.password);

        cy.log('Clicking login button...');
        loginPage.clickLoginButton();

        cy.log('Checking for absence of error messages...');
        loginPage.checkNoErrorMessage();

        // Verify successful login
        cy.log('--- Verifying Successful Login ---');
        // Increase timeout to wait for page navigation
        cy.url().should('include', '/home', {timeout: 10000});
        cy.log('Successfully logged in and redirected to home page.');

        // Perform actions to validate catalog images
        supplier.RevertCatalogsData();
    });
});
