import {
  orders,
  items,
  reorderAll,
  acceptReorder,
  cartButton,
  acceptDeleting,
  accountButton,
  logoutButton,
  clearCart
} from './../locator/locators';

class ReorderAll {

  /**
   * Clicks the 'Orders' button to view the list of orders.
   * It is the first step in the reorder process which allows the user to review past orders.
   */
  static clickOrdersButton() {
    cy.get(orders)
      .should('be.visible')
      .click({ multiple: true });
  }

  /**
   * Clicks on a random order link from the list of items.
   * This method randomly selects an order to potentially reorder from the list of available orders.
   */
  static clickRandomLink() {
    cy.xpath(items)
      .find('a')
      .should('have.length.greaterThan', 0)
      .then($links => {
        const randomIndex = Math.floor(Math.random() * $links.length);
        const $randomLink = $links.eq(randomIndex);

        cy.wrap($randomLink)
          .invoke('removeAttr', 'target')
          .click();
      });
  }

  /**
   * Clicks the 'Reorder All' button to initiate reordering of a previous order,
   * and then clicks 'Accept' to confirm the action.
   * This action effectively duplicates a previous order into the current cart.
   */
  static clickReorderAndAccept() {
    cy.xpath(reorderAll).click();
    cy.wait(1000); // Wait for any modals or UI changes.
    cy.xpath(acceptReorder).click();
  }

  /**
   * Clicks on the cart button to navigate to the cart page,
   * and confirms that the URL has changed to the cart's page.
   * This action is usually taken prior to reviewing items in the cart.
   */
  static clickOnCartButtonAndCheckUrl() {
    cy.get(cartButton)
      .first()
      .should('be.visible')
      .should('not.be.disabled')
      .click()
      .then(() => {
        cy.url().should('include', '/cart');
      });
  }

  /**
   * Clicks the button to clear the shopping cart.
   * This method will remove all items from the cart, usually before starting a new order.
   */
  static clickButtonBelowClearCart() {
    cy.xpath(clearCart)
      .should('be.visible')
      .should('not.be.disabled')
      .click();
  }

  /**
   * Confirms the action to clear the cart.
   * This step is necessary to confirm the intention of removing all items from the cart.
   */
  static clickToAcceptClearCart() {
    cy.xpath(acceptDeleting)
      .should('be.visible')
      .should('not.be.disabled')
      .click();
  }

  /**
   * Logs the user out of the system.
   * This function clicks the account button to reveal the logout option and then performs the logout.
   */
  static clickAccountAndLogout() {
    cy.xpath(accountButton)
      .should('be.visible')
      .should('not.be.disabled')
      .click()
      .then(() => {
        cy.xpath(logoutButton)
          .should('be.visible')
          .should('not.be.disabled')
          .click();
      });
  }
}

export default ReorderAll;
