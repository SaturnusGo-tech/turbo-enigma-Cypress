// Import necessary Page Objects and utility classes
import LoginPage from '../../../../support/objects/LoginPage/actions/LoginPage';
import ByCategory from "../../../../support/Browse catalog/by category/actions/actions";

/**
 * Test suite for validating the user experience from login through to various post-login actions.
 * The flow includes navigating to the home page, interacting with the catalog, managing the cart,
 * and ultimately logging out.
 */
describe('Login and Post-Login Workflow Tests', function() {
    // Instantiate Page Objects for convenient access
    const loginPage = new LoginPage();
    const byCategory = new ByCategory();

    // Set up testing environment before each test case
    beforeEach(() => {
        cy.viewport('macbook-15'); // Simulate a desktop environment
        cy.clearCookies();        // Clear any existing cookies
        cy.clearLocalStorage();   // Ensure clean local storage
    });

    /**
     * Core test case that simulates a user logging in and performing a series of interactions
     * across various pages such as the home page, catalog, cart, and finally logging out.
     */
    it('should log in and then navigate through catalog and cart', function() {
        // Phase 1: User Authentication
        loginPage.visit(); // Navigate to the login page
        loginPage.login(); // Execute login action
        cy.url().should('include', '/home'); // Confirm navigation to the home page post-login

        // Phase 2: Post-Login User Interactions
        ByCategory.clickRandomItemByAltText();   // Randomly selects an item from the catalog using its alt text
        ByCategory.performRandomAddToCart();     // Adds a randomly selected item to the cart
        ByCategory.clickRandomLinkWithinBlock(); // Navigates to a random link within a specified block
        ByCategory.clickAddToCart();             // Triggers the 'Add to Cart' action for a chosen item
        ByCategory.verifyCartAndNavigate();      // Verifies the cart's contents and navigates to the cart page
        ByCategory.initiateCartClearing();       // Starts the process to empty the cart
        ByCategory.confirmCartClearing();        // Confirms the cart clearing process
        ByCategory.logout();                     // Logs out from the user account

        // Additional actions can be appended here
    });
});
