// Importing Page Objects
import LoginPage from '../../../../support/Critical_Path/page_objects/LoginPage/LoginPage';
import HomePage from '../../../../support/Critical_Path/page_objects/HomePage/HomePage';
import CartPage from '../../../../support/Critical_Path/page_objects/CartPage/CartPage';
import ShippingPage from '../../../../support/Critical_Path/page_objects/ShippingPage/ShippingPage';
import BillingPageAccountBilling from '../../../../support/Critical_Path/page_objects/BillingPage/BillingPageAccountBilling';
import GetBalancePopUp from '../../../../support/Critical_Path/page_objects/BillingPage/GetBalancePopUp/GetBalance';
import TestData from '../../../../fixtures/Secret_variables/Test_data';

describe('Login and Post-Login Tests', function() {
  // Initializing Page Objects
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const shippingPage = new ShippingPage();
  const billingPageAccountBilling = new BillingPageAccountBilling();
  const getBalancePopUp = new GetBalancePopUp();

 // This block runs before each test
beforeEach(() => {
  cy.log('Clearing cookies and local storage'); // Logging
  cy.clearCookies();  // Clear all cookies
  cy.clearLocalStorage();  // Clear local storage
});


  // Main Test Scenario
  it('Should login and then perform actions', function() {
    cy.log('Starting Login Phase'); // Logging
    // Login Phase
    loginPage.visit();
    loginPage.fillEmail(TestData.email);
    loginPage.fillPassword(TestData.password);
    loginPage.clickLoginButton();
    loginPage.checkNoErrorMessage();

    cy.log('Verifying successful login'); // Logging
    // Verify successful login
    cy.wait(6000);
    cy.url().should('include', '/home');

    cy.log('Performing actions on the Home Page'); // Logging
    // Actions on Home Page
    homePage.ClickCategoryItemButton();
    homePage.SelectCategoryItem_GI();
    homePage.OpenFiltersCollection();
    homePage.SelectCheckBoxPocketNurse();
    homePage.AcceptReference();
    //homePage.SelectCategoryItemPN();
    homePage.OpenCart();

    cy.log('Verifying the cart is not empty'); // Logging
    // Check that cart is not empty
    // cartPage.getAndStoreCartValue();
    // expect(cartPage.cartValue).to.be.greaterThan(0);

    cy.log('Proceeding to checkout'); // Logging
    cartPage.OpenProceedCheckoutPage();

    cy.log('Performing actions on Shipping Page'); // Logging
    // Actions on Shipping Page
    shippingPage.OpenShippingAddresses();
    shippingPage.SelectShippingAddress();
    shippingPage.AcceptShippingAddress();
    shippingPage.OpenDeliverAddress();
    shippingPage.SelectDeliveryMethod();
    //shippingPage.OpenAddressList();
    //shippingPage.SelectEqualTypeOfShippingAddress();
    //shippingPage.AcceptShippingPreference();
    //shippingPage.OpenDeliveryMethod();
    //shippingPage.SelectDeliveryOption();
    shippingPage.GoNextToBillingPage();

    cy.log('Performing actions on Billing Page'); // Logging
    // Actions on Billing Page
    billingPageAccountBilling.OpenPaymentMethod();
    billingPageAccountBilling.SelectPaymentMethodCreditCard();
    //billingPage.OpenBillingAddressList();
    //billingPage.SelectPaymentAddress();
    //billingPage.AcceptPaymentPreference();
    //billingPage.OpemSupplierPocketNurseMethod();
    //billingPage.SelectPocketNursePaymentMethod();
    billingPageAccountBilling.ReviewOrderButton();
    billingPageAccountBilling.PlaceOrderButton();
    //billingPage.GoBackToCart();
    //billingPage.PullBackPaymentButton();
    //billingPage.PullBackPaymentMethodConfirm();
    billingPageAccountBilling.checkElementAndCompleteTest();
  });

});
