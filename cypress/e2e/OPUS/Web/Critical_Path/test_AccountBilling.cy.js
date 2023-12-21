// Importing necessary Page Objects and test data
import LoginPage from '../../../../support/objects/LoginPage/actions/LoginPage';
import HomePage from '../../../../support/Critical_Path/page_objects/HomePage/HomePage';
import CartPage from '../../../../support/Critical_Path/page_objects/CartPage/CartPage';
import ShippingPage from '../../../../support/Critical_Path/page_objects/ShippingPage/ShippingPage';
import BillingPageAccountBilling from '../../../../support/Critical_Path/page_objects/BillingPage/BillingPageAccountBilling';
import TextComparator from '../../../../support/objects/orders/actions/actions';
import TestData from '../../../../fixtures/Secret_variables/Test_data';
import clearCart from "../../../../plugins/clearCart/clearCart";
/**
 * Test suite focusing on the login process and subsequent user actions on various pages.
 */
describe('Login and Post-Login Tests', function() {
  // Initializing instances of Page Objects for ease of use
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const shippingPage = new ShippingPage();
  const billingPageAccountBilling = new BillingPageAccountBilling();
  const textComparator = new TextComparator();
  // Clearing cookies and local storage before each test to ensure a clean state

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();

     clearCart().then(() => {
      console.log('Корзина очищена');
     });
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

    // Phase 2: Interactions on Home Page
    homePage.clickCategoryItemButton(); // Clicking on a category item button on the home page
    homePage.selectCategoryItem_GI(); // Selecting a specific category item
    cy.wait(5000); // Waiting to ensure elements are loaded
    homePage.openCart(); // Opening the cart

    // Phase 3: Actions on Cart Page
    cartPage.openProceedCheckoutPage(); // Navigating to the checkout page from the cart

    // Phase 4: Interactions on Shipping Page
    shippingPage.OpenShippingAddresses(); // Opening the list of available shipping addresses
    shippingPage.SelectShippingAddressWeb(); // Choosing a specific shipping address
    shippingPage.AcceptShippingAddress(); // Confirming the selected shipping address
    shippingPage.OpenDeliverAddress(); // Accessing delivery address options
    shippingPage.SelectDeliveryMethodWeb(); // Selecting a delivery method
    shippingPage.GoNextToBillingPage(); // Proceeding to the billing page

    // Phase 5: Actions on Billing Page
    billingPageAccountBilling.OpenPaymentMethod(); // Accessing the payment method section
    billingPageAccountBilling.SelectPaymentMethodCreditCard(); // Choosing credit card as the payment method
    billingPageAccountBilling.ReviewOrderButton(); // Reviewing the order
    billingPageAccountBilling.PlaceOrderButton(); // Placing the order
    //billingPageAccountBilling.checkElementAndCompleteTest(); // Performing a final check and concluding the test

    // Additional interactions and text comparison can be added here if needed
    // cy.wait(20000);
    // textComparator.compareTextAndNavigate();
  });
});
