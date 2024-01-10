// Import necessary Page Objects and utility classes
import LoginPage from '../../../../support/objects/LoginPage/actions/LoginPage';
import ByCategory from "../../../../support/Browse catalog/by category/actions/actions";
import ReorderAll from "./../../../../support/Browse catalog/reorder all/actions/actions";

/**
 * Test suite for login functionality and post-login navigational flow.
 * It includes steps like reordering items, managing the cart, and logging out.
 */
describe('User Login and Workflow Tests', function() {
    // Initialize instances of Page Objects for easy reference
    const loginPage = new LoginPage();
    const byCategory = new ByCategory();
    const reorderAll = new ReorderAll();

    // Setting up the browser's viewport and cleaning state before each test run
    beforeEach(() => {
        cy.viewport('macbook-15'); // Simulating a desktop environment
        cy.clearCookies();        // Ensuring no cookies are present at the start
        cy.clearLocalStorage();   // Clearing local storage for a clean slate
    });

    /**
     * A comprehensive test that covers the user's journey from logging in,
     * browsing categories, reordering items, reviewing and clearing the cart,
     * and finally logging out.
     */
    it('should log in and perform various actions through the user workflow', function () {
        // Phase 1: Logging into the application
        loginPage.visit();  // Navigate to the login page
        loginPage.login();  // Execute login action
        cy.url().should('include', '/home');  // Confirm navigation to the home page

        // Phase 2: User workflow after successful login
        // View and select past orders
        ReorderAll.clickOrdersButton();         // Click to view orders
        ReorderAll.clickRandomLink();           // Open a random past order
        ReorderAll.clickReorderAndAccept();     // Initiate and confirm reorder

        // Manage cart contents
        ReorderAll.clickOnCartButtonAndCheckUrl();  // Navigate to and verify cart page
        ReorderAll.clickButtonBelowClearCart();     // Begin the process to clear cart
        ReorderAll.clickToAcceptClearCart();        // Confirm and clear the cart

        // Phase 3: Logging out of the application
        ReorderAll.clickAccountAndLogout();     // Access account options and log out
    });
});
