import LoginPage from '../../../../../support/Critical_Path/page_objects/LoginPage/LoginPage';
import TestData from "../../../../../fixtures/Secret_variables/Test_data";
import QuickConnect from '../../../../../support/objects/Quick connect/actions/actions';

/**
 * Cypress test suite for validating catalog images after login.
 */
describe('Catalog Images Validation after Login', function () {
    /**
     * Before each test, clears cookies and localStorage to reset the application state.
     */
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    // Initializing instances of Page Objects for reusable methods
    const loginPage = new LoginPage();
    const quickconnect = new QuickConnect();

    /**
     * Test scenario to log in and validate catalog images.
     * Includes steps for logging in, interacting with UI elements, and verifying outcomes.
     */
    it('Should login and then validate catalog images', function () {
        // Phase 1: Logging in
        cy.log('--- Starting Login Phase ---');

        cy.log('Visiting login page...');
        loginPage.visit(); // Navigate to the login page

        cy.log('Filling in email...');
        loginPage.fillEmail(TestData.email); // Enter email in the login form

        cy.log('Filling in password...');
        loginPage.fillPassword(TestData.password); // Enter password in the login form

        cy.log('Clicking login button...');
        loginPage.clickLoginButton(); // Trigger the login process

        cy.log('Checking for absence of error messages...');
        loginPage.checkNoErrorMessage(); // Ensure no login errors are displayed

        // Phase 2: Verification after successful login
        cy.log('--- Verifying Successful Login ---');
        // Check the URL to confirm redirection to the home page after login
        cy.url().should('include', '/home', {timeout: 10000});
        cy.log('Successfully logged in and redirected to home page.');

      // Phase 3: Perform actions related to catalog images validation
          cy.log('--- Starting Actions for Catalog Images Validation ---');

          cy.log('Hovering over an element and clicking QUICKCONNECT...');
          quickconnect.hoverAndClickQuickConnect(); // Trigger hover and click on a specific UI elementcy.log('Hover and click action performed.');
          cy.log('Checking for the presence and visibility of the popup...');
          quickconnect.checkForPopup(); // Check for a popup's presence and visibility
          cy.log('Popup presence and visibility verified.');

          cy.log('Entering data into input fields...');
          quickconnect.enterDataInInputs(); // Enter data into various input fields
          cy.log('Data entered into input fields.');

          cy.log('Filling in the supplier note...');
          quickconnect.FillSupplierNote(); // Fill in a note or text area
          cy.log('Supplier note filled.');

          cy.log('Clicking a random available radio button and submitting...');
          quickconnect.clickRandomAvailableRadioButtonAndSubmit(); // Interact with radio buttons and submit a form
          cy.log('Random radio button clicked and form submitted.');

          cy.log('--- Catalog Images Validation Actions Completed ---');

    });
});