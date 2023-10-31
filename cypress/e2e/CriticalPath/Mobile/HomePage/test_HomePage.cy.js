import LoginPage from '../../../../support/Critical_Path/page_objects/LoginPage/LoginPage';
import HomePage from '../../../../support/Mobile/page_objects/HomePage/HomePage';
import TestData from '../../../../fixtures/Secret_variables/Test_data';


describe('Login and HomePage Tests', function() {
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    // This block runs before each test
    beforeEach(() => {
        cy.log('Setting viewport to 414x896'); // Logging
        cy.viewport(414, 896); // Set viewport resolution

        cy.log('Clearing cookies and local storage'); // Logging
        cy.clearCookies();  // Clear all cookies
        cy.clearLocalStorage();  // Clear local storage
    });


    it('Should login and then perform actions', function() {
    cy.log('Starting Login Phase'); // Logging
    // Login Phase
    loginPage.visit();
    loginPage.fillEmail(TestData.email);
    loginPage.fillPassword(TestData.password);
    loginPage.clickLoginButton();
    loginPage.checkNoErrorMessage();

     cy.log('Verifying successful login'); // Logging
    // Verify successful login
    cy.wait(6000);
    cy.url().should('include', '/home');

    cy.log('Performing actions on the Home Page'); // Logging

        homePage.ClickCategoryItemButton();
        });
});
