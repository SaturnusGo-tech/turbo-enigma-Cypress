// Importing Page Objects
import LoginPage from '../../../../support/objects/LoginPage/actions/LoginPage'; // Укажите правильный путь к файлу LoginPage
import HomePage from '../../../../support/Critical_Path/page_objects/HomePage/HomePage';
import CartPage from '../../../../support/Critical_Path/page_objects/CartPage/CartPage';
import ShippingPage from '../../../../support/Critical_Path/page_objects/ShippingPage/ShippingPage';
import BillingPageAccountBilling from '../../../../support/Critical_Path/page_objects/BillingPage/BillingPageAccountBilling';
import TestData from '../../../../fixtures/Secret_variables/Test_data';

describe('Login and Post-Login Tests', function() {
  // Initializing Page Objects
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const shippingPage = new ShippingPage();
  const billingPageAccountBilling = new BillingPageAccountBilling();

 // This block runs before each test
  beforeEach(() => {
    cy.viewport(414, 896); // Set viewport resolution
    cy.clearCookies();  // Clear all cookies
    cy.clearLocalStorage();  // Clear local storage
  });

  // Main Test Scenario
  it('Should login and then perform actions', function() {
    // Login Phase
    loginPage.visit();
    loginPage.login();

    // Verify successful login
    cy.wait(6000);
    cy.url().should('include', '/home');
    homePage.checkImageVisibility();
    // Actions on Home Page
    // TODO: Ensure ClickCategoryItemButton has the correct selector and logic
    homePage.clickCategoryItemButton();
    // TODO: Ensure SelectCategoryItem_GI selects the correct category item
    homePage.selectCategoryItem_GI();
    // TODO: Ensure OpenFiltersCollection opens the filter collection correctly
    cy.wait(3000);
    homePage.openFiltersCollection();
    // TODO: Verify that SelectCheckBoxPocketNurse checks the correct checkbox
    homePage.selectCheckBoxPocketNurse();
    // TODO: Implement AcceptReference if needed to confirm any references
    homePage.acceptReference();
    // TODO: If necessary, implement SelectCategoryItemPN to select specific category items
    // homePage.SelectCategoryItemPN(); // Uncomment if needed
    homePage.openCart();

    // Verify the cart is not empty
    // TODO: Implement getAndStoreCartValue to get and store the cart value
    // cartPage.getAndStoreCartValue();
    // TODO: Replace 'cartPage.cartValue' with actual method to retrieve cart value
    // expect(cartPage.cartValue).to.be.greaterThan(0);

    cartPage.openProceedCheckoutPage();

    // Actions on Shipping Page
    shippingPage.OpenShippingAddresses();
    shippingPage.SelectShippingAddress();
    shippingPage.AcceptShippingAddress();
    shippingPage.OpenDeliverAddress();
    shippingPage.SelectDeliveryMethod();
    // TODO: Implement any commented-out shipping page actions if necessary
    // shippingPage.OpenAddressList();
    // shippingPage.SelectEqualTypeOfShippingAddress();
    // shippingPage.AcceptShippingPreference();
    // shippingPage.OpenDeliveryMethod();
    // shippingPage.SelectDeliveryOption();
    shippingPage.GoNextToBillingPage();

    // Actions on Billing Page
    billingPageAccountBilling.OpenPaymentMethod();
    billingPageAccountBilling.SelectPaymentMethodCreditCard();
    // TODO: Implement the commented-out billing actions if they are part of the test
    // billingPageAccountBilling.OpenBillingAddressList();
    // billingPageAccountBilling.SelectPaymentAddress();
    // billingPageAccountBilling.AcceptPaymentPreference();
    // billingPageAccountBilling.OpemSupplierPocketNurseMethod();
    // billingPageAccountBilling.SelectPocketNursePaymentMethod();
    billingPageAccountBilling.ReviewOrderButton();
    billingPageAccountBilling.PlaceOrderButton();

    // Post-order actions and verifications
    // TODO: Implement the checkElementAndCompleteTest to verify the test completion
    // billingPageAccountBilling.checkElementAndCompleteTest();
  });
});
