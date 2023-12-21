import LoginPage from "../../../../../support/objects/LoginPage/actions/LoginPage";
import PageColor from "../../../../../support/objects/Page color/actions/actions";
import TestData from "../../../../../fixtures/Secret_variables/Test_data";

/**
 * Test suite for validating the color scheme of the home page after user login.
 */
describe('Page color Validation after Login', function () {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    const loginPage = new LoginPage();
    const pageColor = new PageColor();
    const expectedColors = ['#006290', '#62A3D3', '#E77042', '#A8A09B']; // Define expected colors for validation

    it('Should login and then validate home page colors', function () {
        cy.log('--- Starting Login Phase ---');
        loginPage.visit();
        loginPage.login();

        cy.url().should('include', '/home', {timeout: 10000});
        cy.log('Successfully logged in and redirected to home page.');

        // Validate the presence of expected colors in page styles
        // Note: Test failed due to '#62A3D3' not being found in the page colors
        pageColor.checkAndLogColors(expectedColors);
    });
});
