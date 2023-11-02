const WAIT_TIME = 6000;


// Import Page Objects
import LoginPage from '../../../../support/Core_Testing_Elements_web/page_objects/LoginPage/LoginPage';
import HomePage from '../../../../support/Core_Testing_Elements_web/page_objects/HomePage/HomePage';
import CartPage from '../../../../support/Core_Testing_Elements_web/page_objects/CartPage/CartPage';
import ShippingPage from '../../../../support/Core_Testing_Elements_web/page_objects/ShippingPage/ShippingPage';
import BillingPageAccountBilling from '../../../../support/Core_Testing_Elements_web/page_objects/BillingPage/BillingPageAccountBilling';
import BillingPageCreditCard from '../../../../support/Core_Testing_Elements_web/page_objects/BillingPage/BillingPageCreditCard';
import GetBalancePopUp from '../../../../support/Core_Testing_Elements_web/page_objects/BillingPage/GetBalancePopUp/GetBalance';
import TestData from '../../../../fixtures/Secret_variables/Test_data';

describe('Login and Post-Login Tests', function () {
  // Initializing Page Objects
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const shippingPage = new ShippingPage();
  const billingPage = new BillingPageAccountBilling();
  const billingPageCreditCard = new BillingPageCreditCard();
  const getBalancePopUp = new GetBalancePopUp();

  // This block runs before each test
  beforeEach(() => {
    cy.log('Clearing cookies and local storage'); // Logging
    cy.clearCookies(); // Clear all cookies
    cy.clearLocalStorage(); // Clear local storage
  });

  // Main Test Scenario
  it('Perform Login and Post-Login Actions', function () {
    cy.log('Starting Login Phase'); // Logging actions
    loginPage.visit(); // Navigate to the login page
    loginPage.fillEmail(TestData.email); // Fill in the Email field
    loginPage.fillPassword(TestData.password); // Fill in the Password field
    loginPage.clickLoginButton(); // Click the login button
    loginPage.checkNoErrorMessage(); // Check for the absence of error messages

    cy.log('Verifying successful login'); // Logging verification
    cy.wait(WAIT_TIME); // Wait
    cy.url().should('include', '/home'); // Check the URL

    cy.log('Performing actions on the Home Page'); // Logging
    // Actions on the Home Page
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

    cy.log('Performing actions on the Shipping Page'); // Logging
    // Actions on the Shipping Page
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

    cy.log('Performing actions on the Billing Page'); // Logging
    // Actions on the Billing Page
    billingPageCreditCard.OpenPaymentMethod();
    billingPageCreditCard.SelectPaymentMethodCreditCard();
    billingPageCreditCard.OpenBillingAddressList();
    billingPageCreditCard.SelectPaymentAddress();
    billingPageCreditCard.AcceptPaymentPreference();
    //billingPageCreditCard.OpemSupplierPocketNurseMethod();
    //billingPageCreditCard.SelectPocketNursePaymentMethod();
    billingPageCreditCard.ReviewOrderButton();
    billingPageCreditCard.PlaceOrderButton();
    billingPageCreditCard.GoBackToCart();
    billingPageCreditCard.PullBackPaymentButton();
    billingPageCreditCard.PullBackPaymentMethodConfirm();
    //billingPageCreditCard.checkElementAndCompleteTest();
    billingPageCreditCard.checkElementAndEndTest();
  });
});
