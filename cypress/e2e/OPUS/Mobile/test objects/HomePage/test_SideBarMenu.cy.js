// Importing necessary page objects and test data
import LoginPage from '../../../../../support/Critical_Path/page_objects/LoginPage/LoginPage';
import Actions from '../../../../../support/objects/Side bar/actions/actions';
import TestData from '../../../../../fixtures/Secret_variables/Test_data';

/**
 * Test suite focusing on login functionality and subsequent interactions on the Home Page.
 */
describe('Login and HomePage Tests', function() {
    const loginPage = new LoginPage();
    const sideBarMenu = new Actions();

    /**
     * Setup actions to be executed once before all tests begin.
     */
    before(() => {
        cy.log('Setting viewport to 414x896'); // Setting the viewport to a specific resolution
        cy.viewport(414, 896); // This simulates a mobile device's screen
    });

    /**
     * Setup actions to be executed before each individual test.
     */
    beforeEach(() => {
        cy.log('Clearing cookies and local storage'); // Ensuring a clean state before each test
        cy.clearCookies();  // Clearing all cookies
        cy.clearLocalStorage();  // Clearing local storage data
    });

    /**
     * Helper function to perform login actions and verify successful login.
     */
    const performLogin = () => {
        cy.log('Starting Login Phase'); // Logging the beginning of the login process
        loginPage.visit(); // Navigating to the login page
        loginPage.login(); // Performing login actions

        cy.log('Verifying successful login'); // Checking if login was successful
        cy.wait(6000);  // Allowing time for page redirection (consider replacing with more reliable condition)
        cy.url().should('include', '/home'); // Ensuring the URL includes '/home', indicating redirection to the Home Page
    };

    /**
     * Test case to perform a series of actions on the Home Page after a successful login.
     */
    it('Should login and then perform actions', function() {
        performLogin(); // Executing the login process

        cy.log('Performing actions on the Home Page'); // Starting interaction with Home Page elements
        sideBarMenu.ClickCategoryItemButton(); // Clicking on a category item button
        sideBarMenu.checkButtonsAvailabilityAndClickability(); // Verifying availability and clickability of buttons
        sideBarMenu.checkButtonsAvailabilityAnd(); // Additional button checks (method name might need clarification)
        sideBarMenu.OpenCatalogMenu(); // Opening the catalog menu
        sideBarMenu.checkForChildLinks(); // Checking for child links in the menu
        sideBarMenu.GetBackToLinksList(); // Navigating back to the links list
        sideBarMenu.OpenAccountInfo(); // Opening account information section
        sideBarMenu.checkAccountInfo(); // Checking the account information details
        sideBarMenu.GetBackToLinksList(); // Returning to the links list
        sideBarMenu.checkSocialButtonssAvailability(); // Verifying availability of social buttons
    });
});
