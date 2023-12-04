// Importing necessary Page Objects for the test
import LoginPage from '../../../../support/Critical_Path/page_objects/LoginPage/LoginPage';
import HomePage from '../../../../support/Critical_Path/page_objects/HomePage/HomePage';
import CartPage from '../../../../support/Critical_Path/page_objects/CartPage/CartPage';
import ShippingPage from '../../../../support/Critical_Path/page_objects/ShippingPage/ShippingPage';
import BillingPageAccountBilling from '../../../../support/Critical_Path/page_objects/BillingPage/BillingPageAccountBilling';
import TestData from '../../../../fixtures/variables/Test_data';

describe('Login and Post-Login Tests', function() {
  // Initializing Page Objects
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const shippingPage = new ShippingPage();
  const billingPageAccountBilling = new BillingPageAccountBilling();

  // Clear cookies and local storage before each test
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  // Test for logging in and then performing a series of actions
  it('Should login and then perform actions', function() {
    // Login Phase
    loginPage.visit(); // Navigates to the login page
    loginPage.fillEmail(TestData.email); // Fills in the email field
    loginPage.fillPassword(TestData.password); // Fills in the password field
    loginPage.clickLoginButton(); // Clicks the login button
    loginPage.checkNoErrorMessage(); // Checks for the absence of error messages

    // Verify successful login
    cy.url().should('include', '/home'); // Verifies that URL includes '/home', indicating a successful login

    // Actions on Home Page
    homePage.clickCategoryItemButton(); // Clicks the category item button
    homePage.selectCategoryItem_GI(); // Selects a specific category item
    cy.wait(5000); // Waits for 5 seconds
    homePage.openCart(); // Opens the cart

    // Verifying the cart and proceeding to checkout
    cartPage.openProceedCheckoutPage(); // Navigates to the checkout page

    // Actions on Shipping Page
    shippingPage.OpenShippingAddresses(); // Opens the list of shipping addresses
    shippingPage.SelectShippingAddressWeb(); // Selects a specific shipping address
    shippingPage.AcceptShippingAddress(); // Confirms the shipping address
    shippingPage.OpenDeliverAddress(); // Opens delivery address options
    shippingPage.SelectDeliveryMethodWeb(); // Selects a delivery method
    shippingPage.GoNextToBillingPage(); // Navigates to the billing page

    // Actions on Billing Page
    billingPageAccountBilling.OpenPaymentMethod(); // Opens the payment method section
    billingPageAccountBilling.SelectPaymentMethodCreditCard(); // Selects credit card as payment method
    billingPageAccountBilling.ReviewOrderButton(); // Clicks the review order button
    billingPageAccountBilling.PlaceOrderButton(); // Clicks the place order button
    billingPageAccountBilling.checkElementAndCompleteTest(); // Checks an element and concludes the test
  });
});
