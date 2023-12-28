import { CartPageLocators } from './CartPageLocators/CartPageLocators';


class CartPage {

  /**
   * Retrieves the current value from the cart and stores it using Cypress's aliasing feature.
   * This method is useful for accessing the cart value in subsequent tests.
   * It waits for the cart value element to be visible before retrieving the text.
   */
  getAndStoreCartValue() {
    cy.get(CartPageLocators.cartValue, { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        cy.wrap(text).as('cartValue');
        cy.log(`Retrieved and stored cart value: ${text}`);
      });
  }

  /**
   * Navigates to the 'Proceed to Checkout' page.
   * It ensures that the 'Proceed to Checkout' button is visible and then performs a click action on it.
   * Logs the navigation action to the checkout page after clicking the button.
   */
  openProceedCheckoutPage() {
  cy.findElement(CartPageLocators.proceedCheckoutButton)
    .should('be.visible')
    .click()
    .then(() => {
      cy.log('Navigated to the Proceed to Checkout page');
    });
}
}

export default CartPage;
