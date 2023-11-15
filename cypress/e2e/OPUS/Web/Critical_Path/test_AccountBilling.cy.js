// Importing Page Objects
import LoginPage from '../../../../support/Critical_Path/page_objects/LoginPage/LoginPage';
import HomePage from '../../../../support/Critical_Path/page_objects/HomePage/HomePage';
import CartPage from '../../../../support/Critical_Path/page_objects/CartPage/CartPage';
import ShippingPage from '../../../../support/Critical_Path/page_objects/ShippingPage/ShippingPage';
import BillingPageAccountBilling from '../../../../support/Critical_Path/page_objects/BillingPage/BillingPageAccountBilling';
import TestData from '../../../../fixtures/Secret_variables/Test_data';

describe('Login and Post-Login Tests', function() {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const shippingPage = new ShippingPage();
  const billingPageAccountBilling = new BillingPageAccountBilling();

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Should login and then perform actions', function() {
    // Login Phase
    loginPage.visit();
    loginPage.fillEmail(TestData.email);
    loginPage.fillPassword(TestData.password);
    loginPage.clickLoginButton();
    loginPage.checkNoErrorMessage();

    // Verify successful login
    cy.url().should('include', '/home');

    // Actions on Home Page
    homePage.clickCategoryItemButton()
    cy.wait(5000);
    homePage.selectCategoryItem_GI();
    homePage.openCart();

    // Verifying the cart and proceeding to checkout
    cartPage.openProceedCheckoutPage();

    // Actions on Shipping Page
    shippingPage.OpenShippingAddresses();
    shippingPage.SelectShippingAddressWeb();
    shippingPage.AcceptShippingAddress();
    shippingPage.OpenDeliverAddress();
    shippingPage.SelectDeliveryMethodWeb();
    shippingPage.GoNextToBillingPage();

    // Actions on Billing Page
    billingPageAccountBilling.OpenPaymentMethod();
    billingPageAccountBilling.SelectPaymentMethodCreditCard();
    billingPageAccountBilling.ReviewOrderButton();
    billingPageAccountBilling.PlaceOrderButton();
    billingPageAccountBilling.checkElementAndCompleteTest();
  });
});
