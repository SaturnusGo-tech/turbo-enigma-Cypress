// Importing necessary objects and data
import HeaderValidator from '../../../../../support/objects/Header unauthorized/actions/actions';
import LoginPage from '../../../../../support/objects/LoginPage/actions/LoginPage';
import AuthLogin from '../../../../../fixtures/navigation/AuthLogin';

// Initializing instances of the imported classes
const headerValidator = new HeaderValidator();
const loginPage = new LoginPage();

// Main test suite for validating header items at unauthorized status
describe('Header items validations at unauthorized status', function () {
    // Setup before running the tests
    before(() => {
        // Setting viewport size to simulate a larger screen
        cy.viewport('macbook-15');

        // Clearing cookies and local storage to ensure a clean test environment
        cy.clearCookies();
        cy.clearLocalStorage();

        // Logging the start of the login phase
        cy.log('--- Starting Login Phase ---');

        // Navigating to the login page and ensuring the page has loaded
        loginPage.visit(); // Assuming this function correctly performs cy.visit()

        // Ensuring the page is fully loaded before proceeding
        cy.document().its('readyState').should('eq', 'complete');
    });

    // Test case for checking the state of multiple header elements after login
    it('Performs a series of header validations after login', function () {

        // Logging the start of the check for multiple header elements
        cy.log('--- Checking multiple header elements state ---');

        // Validating the state of multiple header elements for their presence and visibility
        headerValidator.checkMultipleElementsState();

        // Logging the action of hovering over the header and checking for text appearance
        cy.log('--- Hovering over the header and checking text ---');

        // Executing the hover action and text visibility check
        headerValidator.hoverOverHeaderAndCheckText();
    });

    // Handling uncaught exceptions to prevent the test from failing unexpectedly
    Cypress.on('uncaught:exception', (err, runnable) => {
        cy.log('Uncaught exception', err);
        // Returning false here prevents Cypress from failing the test
        return false;
    });
});
