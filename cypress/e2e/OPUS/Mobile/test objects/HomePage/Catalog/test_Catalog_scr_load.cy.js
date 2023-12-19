import LoginPage from '../../../../../../support/objects/LoginPage/actions/LoginPage';
import CatalogPage from '../../../../../../support/objects/Catalog/actions/actions';
import TestData from "../../../../../../fixtures/Secret_variables/Test_data";

describe('Catalog Images Validation after Login', function () {
    // Initializing Page Objects
    const loginPage = new LoginPage();
    const catalog = new CatalogPage();

     // Set viewport to iPhone 12/13 Pro Max resolution
    beforeEach(() => {
        cy.viewport(414, 896);
    });

    // Main Test Scenario
    it('Should login and then validate catalog images', function() {
        cy.log('--- Starting Login Phase ---');

         // Фаза входа с использованием LoginPage
        loginPage.visit();
        loginPage.login();

        // Verify successful login
        cy.log('--- Verifying Successful Login ---');
        cy.wait(6000);  // Consider replacing this with a more deterministic wait if possible, if not it's okay)
        cy.url().should('include', '/home');
        cy.log('Successfully logged in and redirected to home page.');
        cy.wait(1500);

        // Catalog Validation
        cy.log('--- Starting Catalog Validation ---');
        catalog.validateAllImages();
        cy.log('Catalog images validated.');

    });
});
