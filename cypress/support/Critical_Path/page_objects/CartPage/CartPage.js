import { CartPageLocators } from './CartPageLocators/CartPageLocators';

class CartPage {

  // Retrieve and store the current cart value
  getAndStoreCartValue() {
    // Use should command to wait for the element to have the desired condition
    cy.get(CartPageLocators.cartValue, { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        cy.wrap(text).as('cartValue');
        cy.log(`Retrieved and stored cart value: ${text}`);
      });
  }

  // Navigate to the Proceed to Checkout page
  openProceedCheckoutPage() {
    // Ensure the button is visible and clickable
    cy.get(CartPageLocators.proceedCheckoutButton, { timeout: 10000 })
      .should('be.visible').and('be.enabled')
      .click()
      .then(() => {
        cy.log('Navigated to the Proceed to Checkout page');
      });
  }
}

export default CartPage;
