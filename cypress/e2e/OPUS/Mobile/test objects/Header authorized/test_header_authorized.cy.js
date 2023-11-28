// Importing necessary objects and data
import HeaderValidator from '../../../../../support/objects/Header authorized/actions/actions';
import LoginPage from '../../../../../support/objects/LoginPage/actions/LoginPage';
import AuthLogin from '../../../../../fixtures/navigation/AuthLogin';
import TestData from "../../../../../fixtures/Secret_variables/Test_data";

// Initializing instances of the imported classes
const headerValidator = new HeaderValidator();
const loginPage = new LoginPage();

// Main test suite for validating catalog images after user login
describe('Header items validations at authorized status', function () {
    // Setup before running the tests
    before(() => {
        // Setting the viewport size to simulate a larger screen environment
        cy.viewport('macbook-15');

        // Clearing cookies and local storage to ensure a clean test environment
        cy.clearCookies();
        cy.clearLocalStorage();

        // Logging the start of the login phase
        cy.log('--- Starting Login Phase ---');

        // Navigating to the login page
        loginPage.visit();

        // Filling in the login form with credentials
        loginPage.fillEmail(TestData.email);
        loginPage.fillPassword(TestData.password);
        loginPage.clickLoginButton();

        // Checking that no error message is displayed post-login
        loginPage.checkNoErrorMessage();
    });

    // Test case for checking the state of multiple header elements after login
    it('Performs a series of header validations after login', () => {
        // Waiting for a set duration to ensure all elements are loaded and stable
        cy.wait(10000);

        // Logging the start of the process for checking multiple header elements
        cy.log('--- Checking multiple header elements state ---');

        // Validating the state of multiple header elements for their presence and visibility
        headerValidator.checkMultipleElementsState();

        // Logging the action of hovering over the header and checking for specific text appearance
        cy.log('--- Hovering over the header and checking text ---');

        // Executing the hover action and verifying text visibility
        headerValidator.clickAndCheckEachItem();
    });

});
