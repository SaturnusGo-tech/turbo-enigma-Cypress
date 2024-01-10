import categories from "../data/categories";
import { clickRandomAddToCartButton } from "../../../../plugins/utils/locatorUtility";
import { addToCart } from './../locator/locators';
import { acceptDeleting, accountButton, cartButton, clearCart, logoutButton } from "../../Search/locator/locators";

class ByCategory {

  /**
   * Finds all elements with specific alt attribute values and randomly clicks on one.
   * Assumes that alt texts correspond to values from the 'categories' object.
   */
  static clickRandomItemByAltText() {
    const altValues = Object.values(categories);
    const randomAlt = altValues[Math.floor(Math.random() * altValues.length)];

    cy.get(`[alt="${randomAlt}"]`)
      .should('exist')
      .click();
  }

  /**
   * Invokes the utility 'clickRandomAddToCartButton' to perform a click on a random 'Add to Cart' button.
   */
  static performRandomAddToCart() {
    clickRandomAddToCartButton();
  }

  /**
   * Searches for all blocks using the given CSS selector and randomly clicks on one of them.
   */
  static clickRandomLinkWithinBlock() {
    const blockSelector = '.flex.w-full.flex-col';

    cy.get(blockSelector)
      .should('have.length.greaterThan', 0)
      .then($blocks => {
        const randomBlockIndex = Math.floor(Math.random() * $blocks.length);
        const $randomBlock = $blocks.eq(randomBlockIndex);

        cy.wrap($randomBlock)
          .find('a')
          .should('have.length.greaterThan', 0)
          .then($links => {
            const randomLinkIndex = Math.floor(Math.random() * $links.length);
            const $randomLink = $links.eq(randomLinkIndex);

            cy.wrap($randomLink).click();
          });
      });
  }

  /**
   * Clicks the 'Add to Cart' button.
   */
  static clickAddToCart() {
    cy.xpath(addToCart)
      .should('be.visible')
      .click();
  }

  /**
   * Clicks the shopping cart button and verifies that the URL includes '/cart'.
   */
  static verifyCartAndNavigate() {
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
   * Clicks a button located below the 'Clear cart' text, initiating the cart clearing process.
   */
  static initiateCartClearing() {
    cy.xpath(clearCart)
      .should('be.visible')
      .should('not.be.disabled')
      .click();
  }

  /**
   * Confirms the action to clear the shopping cart by clicking the appropriate confirmation button.
   */
  static confirmCartClearing() {
    cy.xpath(acceptDeleting)
      .should('be.visible')
      .should('not.be.disabled')
      .click();
  }

  /**
   * Logs out of the user account by clicking the account button and then the logout button.
   */
  static logout() {
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

export default ByCategory;
