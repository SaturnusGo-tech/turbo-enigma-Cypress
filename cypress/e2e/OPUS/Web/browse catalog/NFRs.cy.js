import LoginPage from '../../../../support/objects/LoginPage/actions/LoginPage';
import Search from '../../../../support/Browse catalog/Search/actions/actions';

/**
 * Test suite focusing on the login process and subsequent user actions on various pages.
 */
describe('Login and Post-Login Tests', function() {
  // Initializing instances of Page Objects for ease of use
  const loginPage = new LoginPage();
  const search = new Search();
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

     Search.fillInputWithRandomData();
     Search.selectRandomProductFromList();
     Search.clickOnFullListLink();
     Search.clickOnViewAllAndAddRandomToCart();
     Search.clickOnCartButtonAndCheckUrl();
     Search.clickButtonBelowClearCart();
     Search.clickToAcceptClearCart();
     Search.clickAccountAndLogout();
       });
});

