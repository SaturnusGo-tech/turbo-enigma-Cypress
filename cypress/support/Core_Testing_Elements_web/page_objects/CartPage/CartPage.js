import { CartPageLocators } from './CartPageLocators/CartPageLocators';

class CartPage {

  // Retrieve and store the current cart value
  getAndStoreCartValue() {
    cy.wait(2000);  // Wait for 2 seconds to ensure the cart value is loaded
    cy.xpath(CartPageLocators.cartValue)
      .invoke('text')  // Get the text value of the cart
      .then((text) => {
        cy.wrap(text).as('cartValue');  // Store the cart value for future use
        cy.log(`Retrieved and stored cart value: ${text}`);  // Log the stored cart value
      });
  }

  // Navigate to the Proceed to Checkout page
  OpenProceedCheckoutPage() {
    cy.wait(1800);  // Wait for 1.8 seconds to ensure all elements are loaded
    cy.xpath(CartPageLocators.proceedCheckoutButton)
      .click()  // Click the Proceed to Checkout button
      .then(($el) => {
        cy.log('Navigated to the Proceed to Checkout page');  // Log navigation
        cy.log(`Element state: ${$el}`);  // Log the state of the clicked element
      });
  }
}

export default CartPage;
