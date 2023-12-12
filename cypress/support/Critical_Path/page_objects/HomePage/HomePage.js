import { HomePageLocators } from './HomePageLocators/HomePageLocators';
import { clickRandomAddToCartButton } from '../../../../plugins/utils/locatorUtility';

class HomePage {

  checkImageVisibility() {
  const imageUrl = HomePageLocators.imageUrl
  // Проверяем, что изображение присутствует на странице и видимо
  cy.get(`img[src="${imageUrl}"]`).should('exist').should('be.visible').then($img => {
    if ($img.is(':visible')) {
      cy.log('Image is visible on the page');
    } else {
      // Прокрутка страницы до изображения, если оно не видимо
      cy.get(`img[src="${imageUrl}"]`).scrollIntoView().should('be.visible').then(() => {
        cy.log('Image is visible after scrolling');
      });
    }
  });
}

  /**
   * Clicks on the 'Category Item' button on the home page.
   * Uses a locator from Locators to find the button and performs a click operation.
   * Logs the action to Cypress after the click.
   */
  clickCategoryItemButton() {
    cy.get(HomePageLocators.categoryItemButton, { timeout: 10000 })
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Clicked on Category Item Button');
      });
  }

  /**
   * Selects the 'GI' category item by invoking the clickRandomAddToCartButton utility function.
   * The utility function handles the selection of a random 'Add to cart' button.
   */
  selectCategoryItem_GI() {
    console.log('clickRandomAddToCartButton function:', clickRandomAddToCartButton);
    clickRandomAddToCartButton();
  }

  /**
   * Opens the 'Filters' collection on the page.
   * The action is performed by clicking on a specific button determined by a locator.
   * Logs the action to Cypress after opening the filters.
   */
  openFiltersCollection() {
    cy.xpath(HomePageLocators.openFiltersCollection, { timeout: 10000 })
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Opened Filters Collection');
      });
  }

  /**
   * Selects the 'PocketNurse' checkbox on the page.
   * Locates and clicks on the checkbox, then logs the action.
   */
  selectCheckBoxPocketNurse() {
    cy.xpath(HomePageLocators.checkBoxPocketNurse, { timeout: 10000 })
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Selected CheckBox PocketNurse');
      });
  }

  /**
   * Accepts a reference on the page, likely in a dialog or a modal.
   * The method clicks a button to confirm the action and logs the event.
   */
  acceptReference() {
    cy.xpath(HomePageLocators.acceptReference, { timeout: 10000 })
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Accepted Reference');
      });
  }

  /**
   * Selects the 'PN' category item on the home page.
   * Finds and clicks on the first occurrence of the item and logs the action.
   */
  selectCategoryItemPN() {
    cy.xpath(HomePageLocators.categoryItemPN, { timeout: 10000 })
      .first()
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Selected Category Item PN');
      });
  }

  /**
   * Opens the shopping cart by directly navigating to its URL.
   * Logs the navigation action to the cart page.
   */
  openCart() {
    const cartUrl = 'https://qa-opus.omniapartners.com/cart';
    cy.visit(cartUrl).then(() => {
      cy.log('Opened Cart at ' + cartUrl);
    });
  }
}

export default HomePage;
