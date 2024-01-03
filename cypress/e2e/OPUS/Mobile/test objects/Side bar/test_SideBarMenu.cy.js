// Importing necessary page objects and test data
import LoginPage from '../../../../../support/objects/LoginPage/actions/LoginPage';
import Actions from '../../../../../support/objects/Side bar/actions/actions';
import TestData from '../../../../../fixtures/Secret_variables/Test_data';

/**
 * Test suite focusing on login functionality and subsequent interactions on the Home Page.
 */
describe('Login and HomePage Tests', { retries: 4 }, function () {
    const loginPage = new LoginPage();
    const sideBarMenu = new Actions();

    /**
     * Setup actions to be executed once before all tests begin.
     * This includes setting the viewport size to simulate a specific device.
     */
    before(() => {
        cy.log('Setting viewport to 414x896'); // Logging the viewport setup
        cy.viewport(414, 896); // Simulating a mobile device's screen
    });

    /**
     * Setup actions to be executed before each individual test.
     * This involves clearing cookies and local storage to ensure a clean state.
     */
    beforeEach(() => {
        cy.log('Clearing cookies and local storage'); // Logging the clean-up action
        cy.clearCookies();  // Clearing all cookies
        cy.clearLocalStorage();  // Clearing local storage data
    });

    /**
     * Helper function to perform login actions and verify successful login.
     * It navigates to the login page, performs login actions, and verifies the URL to ensure successful login.
     */
    const performLogin = () => {
        cy.log('Starting Login Phase'); // Logging the initiation of the login process
        loginPage.visit(); // Navigating to the login page
        loginPage.login(); // Executing login steps

        cy.log('Verifying successful login'); // Checking if login was successful
        cy.wait(6000);  // Allowing time for page redirection (consider replacing with more reliable condition)
        cy.url().should('include', '/home'); // Ensuring the URL includes '/home', indicating redirection to the Home Page
    };

    /**
     * Test case to perform a series of actions on the Home Page after a successful login.
     * This includes interactions with various UI elements in the sidebar and verification of their functionality.
     */
    it('Should login and then perform actions', function() {
        performLogin(); // Executing the login process

        cy.log('Performing actions on the Home Page'); // Logging the start of interactions on the Home Page
        sideBarMenu.ClickCategoryItemButton(); // Clicking a category item button in the sidebar
        sideBarMenu.checkButtonsAvailabilityAndClickability(); // Verifying the availability and clickability of sidebar buttons
        sideBarMenu.checkButtonsAvailabilityAnd(); // Additional checks for button availability (method name might need clarification)
        sideBarMenu.OpenCatalogMenu(); // Opening the catalog menu in the sidebar
        sideBarMenu.checkForChildLinks(); // Checking for child links in the catalog menu
        sideBarMenu.GetBackToLinksList(); // Navigating back to the main links list in the sidebar
        sideBarMenu.OpenAccountInfo(); // Opening the account information section in the sidebar
        sideBarMenu.checkAccountInfo(); // Verifying the details in the account information section
        sideBarMenu.GetBackToLinksList(); // Returning to the main links list in the sidebar
        sideBarMenu.checkSocialButtonssAvailability(); // Checking the availability of social media buttons
    });
});
