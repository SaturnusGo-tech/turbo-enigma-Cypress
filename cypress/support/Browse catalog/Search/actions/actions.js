import { data } from '../data/keyword.js';
import {
    inputField,
    generalProductList,
    cartButton,
    acceptDeleting,
    accountButton,
    logoutButton,
    clearCart
} from './../locator/locators';
import { clickRandomAddToCartButton } from "../../../../plugins/utils/locatorUtility";

class Search {


 /**
   * Fills the search input field with a random keyword from a predefined data set.
   * This action simulates the initial step in a user's search process by inputting a random search term.
   */
  static fillInputWithRandomData() {
    const keys = Object.keys(data);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    cy.get(inputField)
      .should('be.enabled')
      .type(randomKey)
      .then(() => {
        this.selectRandomProductFromList();
      });
  }

 /**
   * Selects a random product from the list that appears after a search query is executed.
   * It clicks on the chosen product to navigate to the product's detail page.
   */
  static selectRandomProductFromList() {
    cy.xpath(generalProductList).find('div')
      .should('have.length.greaterThan', 0)
      .then((products) => {
        const randomIndex = Math.floor(Math.random() * products.length);
        cy.get(products).eq(randomIndex)
          .should('be.visible')
          .should('not.be.disabled')
          .then((productToClick) => {
            cy.log('Кликаю на элемент:', productToClick.text());
            cy.wrap(productToClick).click();
          });
      });
  }

   /**
   * Finds and clicks the 'View all' link which is typically used to display all search results or products in a category.
   * This action takes the user from a search results preview to the full category page.
   */
   static clickOnFullListLink() {
    cy.contains('a', 'View all')
      .should('be.visible')
      .should('not.be.disabled')
      .click();
  }

    /**
   * After navigating to the full list of search results, this method adds a random product to the shopping cart.
   * It extends the functionality of clicking 'View all' by also performing an 'Add to cart' action.
   */
  static clickOnViewAllAndAddRandomToCart() {
    cy.contains('a', 'View all')
      .should('be.visible')
      .should('not.be.disabled')
      .click()
      .then(() => {
        clickRandomAddToCartButton();
      });
  }

 /**
   * Clicks on the shopping cart button and confirms that the URL has changed to the cart's page.
   * This is typically used to navigate to the cart to review items before proceeding to checkout.
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
   * Clicks on a button located below the 'Clear cart' text.
   * This is usually associated with initiating the process to remove items from the shopping cart.
   */
static clickButtonBelowClearCart() {
    cy.xpath(clearCart)
      .should('be.visible')
      .should('not.be.disabled')
      .click();
  }

   /**
   * Confirms the action to clear the shopping cart by clicking the appropriate confirmation button.
   * This is part of the flow to empty the cart of all items, typically found on a modal or a prompt.
   */
static clickToAcceptClearCart() {
    cy.xpath(acceptDeleting)
      .should('be.visible')
      .should('not.be.disabled')
      .click();
  }

  /**
   * Executes a sequence of actions to log out of the user account.
   * This includes clicking the account button to reveal the logout option, and then clicking the logout button itself.
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

export default Search;
