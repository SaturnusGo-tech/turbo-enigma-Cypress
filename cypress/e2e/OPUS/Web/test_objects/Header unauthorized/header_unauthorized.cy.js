// Importing necessary objects and data for testing
import HeaderValidator from '../../../../../support/objects/Header unauthorized/actions/actions';
import LoginPage from '../../../../../support/objects/LoginPage/actions/LoginPage';
import AuthLogin from '../../../../../fixtures/navigation/AuthLogin';

// Initializing instances of the imported classes for use in tests
const headerValidator = new HeaderValidator();
const loginPage = new LoginPage();

/**
 * Main test suite for validating the appearance and functionality of header items
 * when the user is not authorized (not logged in).
 */
describe('Header items validations at unauthorized status', function () {
    /**
     * Setup actions to be performed before running the tests.
     * Includes setting the viewport size and clearing cookies and local storage
     * for a consistent test environment.
     */
    before(() => {
        cy.viewport('macbook-15'); // Simulating a desktop environment for testing

        // Clearing cookies and local storage for a fresh test session
        cy.clearCookies();
        cy.clearLocalStorage();

        cy.log('--- Starting Login Phase ---'); // Logging the initiation of the login phase
        loginPage.visit(); // Navigating to the login page

        // Ensuring the page is fully loaded before proceeding with tests
        cy.document().its('readyState').should('eq', 'complete');
    });

    /**
     * Test case to verify the state and visibility of multiple header elements
     * in an unauthorized (logged out) state.
     */
    it('Performs a series of header validations after login', function () {
        cy.log('--- Checking multiple header elements state ---'); // Logging the start of header validation

        // Validating the state of multiple header elements for their presence and visibility
        headerValidator.checkMultipleElementsState();

        cy.log('--- Hovering over the header and checking text ---'); // Logging hover actions and text checks

        // Executing the action of hovering over header elements and verifying text visibility
        headerValidator.hoverOverHeaderAndCheckText();
    });

    /**
     * Handling any uncaught exceptions during the test run.
     * This is useful to prevent the test from failing due to unrelated JavaScript errors.
     */
    Cypress.on('uncaught:exception', (err, runnable) => {
        cy.log('Uncaught exception', err); // Logging the exception for debugging purposes
        return false; // Prevents Cypress from failing the test on uncaught exceptions
    });
});
