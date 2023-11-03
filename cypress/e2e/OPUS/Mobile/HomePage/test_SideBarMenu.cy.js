import LoginPage from '../../../../support/Critical_Path/page_objects/LoginPage/LoginPage';
import SideBarMenu from '../../../../support/Core_mobile/page_objects/HomePage/SideBarMenu';
import TestData from '../../../../fixtures/Secret_variables/Test_data';

describe('Login and HomePage Tests', function() {
    const loginPage = new LoginPage();
    const sideBarMenu = new SideBarMenu();

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
        sideBarMenu.ClickCategoryItemButton();
        sideBarMenu.checkButtonsAvailabilityAndClickability();
        sideBarMenu.checkButtonsAvailabilityAnd();
        sideBarMenu.OpenCatalogMenu();
        sideBarMenu.checkForChildLinks();
        sideBarMenu.GetBackToLinksList();
        sideBarMenu.OpenAccountInfo();
        sideBarMenu.checkAccountInfo();
        sideBarMenu.GetBackToLinksList();
        sideBarMenu.checkSocialButtonssAvailability();
    });
});
