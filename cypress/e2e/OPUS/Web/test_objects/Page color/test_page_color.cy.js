import LoginPage from "../../../../../support/Critical_Path/page_objects/LoginPage/LoginPage";
import PageColor from "../../../../../support/objects/Page color/actions/actions";
import TestData from "../../../../../fixtures/Secret_variables/Test_data";

/**
 * Test suite for validating catalog images after a user logs in.
 * The tests cover login functionality and subsequent verification of catalog images.
 */
describe('Page color Validation after Login', function () {
    /**
     * Clear cookies and local storage before each test to reset the application state.
     */
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    // Initialize instances of Page Objects for reusable methods
    const loginPage = new LoginPage();
    const pageColor = new PageColor();
    const expectedColors = ['#006290', '#62A3D3', '#E77042', '#A8A09B']; // Define expected colors to validate

    /**
     * Test scenario to log in and validate catalog images.
     * Includes steps for logging in, interacting with UI elements, and verifying outcomes.
     */
    it('Should login and then validate home page colors', function () {
        // Phase 1: Logging in
        cy.log('--- Starting Login Phase ---');
        loginPage.visit(); // Navigate to the login page
        loginPage.fillEmail(TestData.email); // Fill in the email in the login form
        loginPage.fillPassword(TestData.password); // Fill in the password in the login form
        loginPage.clickLoginButton(); // Trigger the login process
        loginPage.checkNoErrorMessage(); // Ensure no login error messages are displayed

        // Phase 2: Verification after successful login
        cy.url().should('include', '/home', {timeout: 10000}); // Check URL to confirm redirection to the home page
        cy.log('Successfully logged in and redirected to home page.');

        pageColor.checkAndLogColors(expectedColors); // Validate the presence of expected colors in page styles
    });
});
