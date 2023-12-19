// Importing necessary objects and data for the test
import HeaderValidator from '../../../../../support/objects/Header authorized/actions/actions';
import LoginPage from '../../../../../support/objects/LoginPage/actions/LoginPage';
import AuthLogin from '../../../../../fixtures/navigation/AuthLogin';
import TestData from "../../../../../fixtures/Secret_variables/Test_data";

// Initializing instances of the imported classes for reuse in the tests
const headerValidator = new HeaderValidator();
const loginPage = new LoginPage();

/**
 * Test suite focusing on the validation of header elements when the user is logged in.
 * It aims to ensure that all header items appear and function correctly in an authorized state.
 */
describe('Header items validations at authorized status', function () {
    /**
     * Initial setup before running the tests.
     * Includes setting the viewport size and clearing cookies and local storage for a clean test environment.
     */
    before(() => {
        cy.viewport('macbook-15'); // Simulating a desktop environment
        cy.clearCookies(); // Clearing cookies for a fresh session
        cy.clearLocalStorage(); // Clearing local storage to reset application state
        cy.wait(10000); // Waiting for any background processes to complete

        cy.log('--- Starting Login Phase ---'); // Logging the start of the login process
        loginPage.visit(); // Navigating to the login page
        loginPage.login(); // Executing login actions
    });

    /**
     * Test case to verify the appearance and functionality of header elements after the user logs in.
     * It checks multiple elements for proper display and interactivity.
     */
    it('Performs a series of header validations after login', () => {
        cy.wait(10000); // Allowing time for elements to fully load post-login

        cy.log('--- Checking multiple header elements state ---'); // Starting the validation process
        headerValidator.checkMultipleElementsState(); // Validating the state of header elements

        cy.log('--- Hovering over the header and checking text ---'); // Logging interaction steps
        headerValidator.clickAndCheckEachItem(); // Performing hover actions and text visibility checks
    });
});
