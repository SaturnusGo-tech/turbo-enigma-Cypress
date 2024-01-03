// Importing necessary page objects and test data
import LoginPage from '../../../../../support/objects/LoginPage/actions/LoginPage'; // Ensure the correct path to LoginPage file
import TestData from "../../../../../fixtures/Secret_variables/Test_data";
import QuickConnect from '../../../../../support/objects/Quick connect/actions/actions';
import AuthLogin from '../../../../../fixtures/navigation/AuthLogin';

/**
 * Test suite focusing on the validation of the supplier quick connection feature after user login.
 */
describe('Supplier quick connection after Login', { retries: 4 }, function () {
    /**
     * Setup actions to be performed before each test.
     * This includes clearing cookies and local storage to ensure a clean test environment,
     * and setting the viewport size.
     */
    beforeEach(() => {
        cy.clearCookies(); // Clearing all cookies
        cy.clearLocalStorage(); // Clearing local storage
        cy.log('Setting viewport to 414x896'); // Setting the viewport to simulate a mobile device screen
        cy.viewport(414, 896);
    });

    // Initializing instances of Page Objects for reusable functionality
    const loginPage = new LoginPage();
    const quickconnect = new QuickConnect();

    /**
     * Main test case to perform login and then execute a series of actions for supplier connection validation.
     * The test includes steps for logging in, interacting with UI elements on the page, and verifying the outcomes.
     */
    it('Should login and then validate supplier connect', function () {
        // Phase 1: User Login
        loginPage.visit(); // Navigating to the login page
        loginPage.login(); // Executing login steps
        cy.url().should('include', '/home', {timeout: 10000}); // Confirming redirection to the home page post-login
        cy.log('Successfully logged in and redirected to home page.');

        // Phase 2: Supplier Connection Validation
        cy.log('--- Starting Actions for Supplier Connect Validation ---');
        cy.log('Hovering over an element and clicking QUICKCONNECT...');
        quickconnect.hoverAndClickQuickConnect(); // Hover over a specific UI element and click 'QUICKCONNECT'
        cy.log('Checking for the presence and visibility of the popup...');
        quickconnect.checkForPopup(); // Validate the presence and visibility of a popup after the click action
        cy.log('Popup presence and visibility verified.');
        cy.log('Entering data into input fields...');
        quickconnect.enterDataInInputs(); // Enter data into various input fields within the popup
        cy.log('Data entered into input fields.');
        cy.log('Filling in the supplier note...');
        quickconnect.FillSupplierNote(); // Fill in a note or text area related to the supplier
        cy.log('Supplier note filled.');
        cy.log('Clicking a random available radio button and submitting...');
        quickconnect.clickRandomAvailableRadioButtonAndSubmit(); // Interact with radio buttons and submit the form
        cy.log('Random radio button clicked and form submitted.');
        cy.log('--- Supplier Connect Validation Actions Completed ---');
    });
});
