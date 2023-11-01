import LoginPage from '../../../../support/Critical_Path/page_objects/LoginPage/LoginPage';
import HomePage from '../../../../support/Mobile/page_objects/HomePage/HomePage';
import TestData from '../../../../fixtures/Secret_variables/Test_data';

describe('Login and HomePage Tests', function() {
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    // This block runs once before all tests
    before(() => {
        cy.log('Setting viewport to 414x896'); // Logging
        cy.viewport(414, 896); // Set viewport resolution
    });

    // This block runs before each test
    beforeEach(() => {
        cy.log('Clearing cookies and local storage'); // Logging
        cy.clearCookies();  // Clear all cookies
        cy.clearLocalStorage();  // Clear local storage
    });

    // Helper function to perform login
    const performLogin = () => {
        cy.log('Starting Login Phase'); // Logging
        loginPage.visit();
        loginPage.fillEmail(TestData.email);
        loginPage.fillPassword(TestData.password);
        loginPage.clickLoginButton();
        loginPage.checkNoErrorMessage();

        cy.log('Verifying successful login'); // Logging
        cy.wait(6000);  // Consider replacing with a more reliable condition
        cy.url().should('include', '/home');
    };

    it('Should login and then perform actions', function() {
        performLogin();

        cy.log('Performing actions on the Home Page'); // Logging
        homePage.ClickCategoryItemButton();
        homePage.checkButtonsAvailabilityAndClickability();
        homePage.OpenCatalogMenu();
        homePage.checkForChildLinks();
    });
});
