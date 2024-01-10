// Import necessary Page Objects and utility classes
import LoginPage from '../../../../support/objects/LoginPage/actions/LoginPage';
import ByCategory from "../../../../support/Browse catalog/by category/actions/actions";

/**
 * Test suite focusing on the login process and subsequent user actions on various pages.
 */
describe('Login and Post-Login Tests', function() {
    // Initializing instances of Page Objects for ease of use
    const loginPage = new LoginPage();
    const category = new ByCategory();
    // Clearing cookies and local storage before each test to ensure a clean state

    beforeEach(() => {

        cy.viewport('macbook-15'); // Simulating a desktop environment
        cy.clearCookies();
        cy.clearLocalStorage();
    });

  /**
   * Main test case to perform login and then execute a series of actions across different pages.
   * This includes navigating through home, cart, shipping, and billing pages and interacting with various elements.
   */
  it('Should login and then perform actions', function() {
    // Phase 1: Login
    loginPage.visit(); // Navigating to the login page
    loginPage.login(); // Performing login actions
    cy.url().should('include', '/home'); // Verifying successful login by checking the URL

    // Phase 2: Navigate to Catalog and Click a Random Tile
    // Assuming the catalog is accessible directly from the home page
    // You may need to adjust the navigation if there's an intermediate step
ByCategory.clickRandomItemByAltText(); // Randomly clicks an item in the catalog based on alt text
ByCategory.performRandomAddToCart(); // Randomly clicks an 'Add to Cart' button
ByCategory.clickRandomLinkWithinBlock(); // Randomly clicks a link within a block
ByCategory.clickAddToCart(); // Clicks the 'Add to Cart' button
ByCategory.verifyCartAndNavigate(); // Clicks the cart button and checks the URL
ByCategory.initiateCartClearing(); // Clicks a button to initiate clearing the cart
ByCategory.confirmCartClearing(); // Confirms the action to clear the cart
ByCategory.logout(); // Logs out of the account


    // Further actions can be added here if necessary
  });
});