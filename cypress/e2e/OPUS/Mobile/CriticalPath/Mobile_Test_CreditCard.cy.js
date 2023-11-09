const WAIT_TIME = 6000;

// Import Page Objects
import LoginPage from '../../../../support/Critical_Path/page_objects/LoginPage/LoginPage';
import HomePage from '../../../../support/Critical_Path/page_objects/HomePage/HomePage';
import CartPage from '../../../../support/Critical_Path/page_objects/CartPage/CartPage';
import ShippingPage from '../../../../support/Critical_Path/page_objects/ShippingPage/ShippingPage';
import BillingPageAccountBilling from '../../../../support/Critical_Path/page_objects/BillingPage/BillingPageAccountBilling';
import BillingPageCreditCard from '../../../../support/Critical_Path/page_objects/BillingPage/BillingPageCreditCard';
import GetBalancePopUp from '../../../../support/Critical_Path/page_objects/BillingPage/GetBalancePopUp/GetBalance';
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

  beforeEach(() => {
    cy.viewport(414, 896);
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Perform Login and Post-Login Actions', function () {
    // Login Phase
    loginPage.visit();
    loginPage.fillEmail(TestData.email);
    loginPage.fillPassword(TestData.password);
    loginPage.clickLoginButton();
    loginPage.checkNoErrorMessage();

    // Verify successful login
    cy.wait(WAIT_TIME);
    cy.url().should('include', '/home');

    // Actions on the Home Page
    // TODO: Implement ClickCategoryItemButton in HomePage class
    homePage.ClickCategoryItemButton();
    // TODO: Implement SelectCategoryItem_GI in HomePage class
    homePage.SelectCategoryItem_GI();
    // TODO: Implement OpenFiltersCollection in HomePage class
     homePage.OpenFiltersCollection();
    // TODO: Implement SelectCheckBoxPocketNurse in HomePage class
     homePage.SelectCheckBoxPocketNurse();
    // TODO: Implement AcceptReference in HomePage class
    // homePage.SelectCategoryItemPN(); //
    homePage.AcceptReference();
    // TODO: Implement OpenCart in HomePage class
    homePage.OpenCart();


    // Verify the cart is not empty
    // TODO: Implement getAndStoreCartValue in CartPage class
    // cartPage.getAndStoreCartValue();
    // TODO: Replace 'cartPage.cartValue' with actual method to retrieve cart value
    // expect(cartPage.cartValue).to.be.greaterThan(0);

    // Proceed to checkout
    cartPage.OpenProceedCheckoutPage();

    // Actions on the Shipping Page
    shippingPage.OpenShippingAddresses();
    shippingPage.SelectShippingAddress();
    shippingPage.AcceptShippingAddress();
    shippingPage.OpenDeliverAddress();
    shippingPage.SelectDeliveryMethod();
    // TODO: Implement the rest of the commented out shipping actions if necessary
    shippingPage.GoNextToBillingPage();

    // Actions on the Billing Page
    billingPageCreditCard.OpenPaymentMethod();
    billingPageCreditCard.SelectPaymentMethodCreditCard();
    billingPageCreditCard.OpenBillingAddressList();
    billingPageCreditCard.SelectPaymentAddress();
    billingPageCreditCard.AcceptPaymentPreference();
    // TODO: Implement the commented out billing actions if they are part of the test
    billingPageCreditCard.ReviewOrderButton();
    billingPageCreditCard.PlaceOrderButton();

    // TODO: Implement a check to verify the order was placed successfully
    // billingPageCreditCard.verifyOrderSuccess(); // This is a placeholder, replace with actual method

    // Post-order actions (if needed)
    billingPageCreditCard.GoBackToCart();
    billingPageCreditCard.PullBackPaymentButton();
    billingPageCreditCard.PullBackPaymentMethodConfirm();
    // TODO: Implement checkElementAndEndTest in BillingPageCreditCard class
    // billingPageCreditCard.checkElementAndEndTest();
  });
});
