import LoginPage from '../../../../../support/Critical_Path/page_objects/LoginPage/LoginPage';
import CatalogPage from '../../../../../support/objects/Catalog/actions/actions';
import TestData from "../../../../../fixtures/Secret_variables/Test_data";

describe('Catalog Images Validation after Login', function () {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    // Initializing Page Objects
    const loginPage = new LoginPage();
    const catalog = new CatalogPage();

    // Main Test Scenario
    it('Should login and then validate catalog images', function() {
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
        cy.url().should('include', '/home', { timeout: 10000 }); // Увеличение таймаута для ожидания перехода на страницу
        cy.log('Successfully logged in and redirected to home page.');

        // Catalog Validation
        cy.log('--- Starting Catalog Validation ---');
        catalog.validateAllImages();
        cy.log('Catalog images validated.');
    });
});
