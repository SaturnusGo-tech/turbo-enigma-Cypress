import LoginPage from '../../../../../support/objects/LoginPage/actions/LoginPage'; // Укажите правильный путь к файлу LoginPage
import TestData from "../../../../../fixtures/Secret_variables/Test_data";
import QuickConnect from '../../../../../support/objects/Quick connect/actions/actions';
import AuthLogin from '../../../../fixtures/navigation/AuthLogin';

/**
 * Cypress test suite for validating catalog images after login.
 */
describe('Supplier quick connection after Login', function () {
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
    it('Should login and then validate supplier connect', function () {
        // Phase 1: Logging in
        loginPage.visit();
        loginPage.login();
        // Check the URL to confirm redirection to the home page after login
        cy.url().should('include', '/home', {timeout: 10000});
        cy.log('Successfully logged in and redirected to home page.');

      // Phase 3: Perform actions related to catalog images validation
          cy.log('--- Starting Actions for Supplier connect Validation ---');

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

          cy.log('--- Suppliers connect Validation Actions Completed ---');

    });
});
