// Importing necessary objects and data
import HeaderValidator from '../../../../../support/objects/Header unauthorized/actions/actions';
import LoginPage from '../../../../../support/objects/LoginPage/actions/LoginPage';
import AuthLogin from '../../../../../fixtures/navigation/AuthLogin';

// Initializing instances of the imported classes
const headerValidator = new HeaderValidator();
const loginPage = new LoginPage();

// Main test suite for validating catalog images after user login
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

        // Navigating to the login page
        loginPage.visit();

        // Executing the login operation using credentials from AuthLogin
        // loginPage.login(AuthLogin.username, AuthLogin.password);
    });

    // Test case for checking the state of multiple header elements after login
    it('Performs a series of header validations after login', () => {
        // Waiting for a set duration to ensure all elements are loaded
        cy.wait(10000);

        // Logging the start of the check for multiple header elements
        cy.log('--- Checking multiple header elements state ---');

        // Validating the state of multiple header elements for their presence and visibility
        headerValidator.checkMultipleElementsState();

        // Logging the action of hovering over the header and checking for text appearance
        cy.log('--- Hovering over the header and checking text ---');

        // Executing the hover action and text visibility check
        headerValidator.hoverOverHeaderAndCheckText();
    });

});
