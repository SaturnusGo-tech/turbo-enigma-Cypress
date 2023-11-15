import { HomePageLocators } from './HomePageLocators/HomePageLocators';
import productNames, { getAddToCartButtonLocator, getRandomTextElementLocator } from '../../../../plugins/locatorUtility';

class HomePage {

  // Click the 'Category Item' button
  clickCategoryItemButton() {
    cy.get(HomePageLocators.categoryItemButton, { timeout: 10000 })
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Clicked on Category Item Button');
      });
  }

  // Select the 'GI' category item
selectCategoryItem_GI() {
  const textElementLocator = getRandomTextElementLocator(productNames);
  cy.get(textElementLocator).should('exist');

  const addToCartButtonLocator = getAddToCartButtonLocator();
  cy.get(addToCartButtonLocator)
    .should('exist')
    .then(($buttons) => {
      const randomIndex = Math.floor(Math.random() * $buttons.length);
      cy.wrap($buttons.eq(randomIndex))
        .should('be.visible')
        .click()
        .then(() => {
          cy.log('Clicked on a random ADD TO CART button');
        });
    });
}


  // Open the 'Filters' collection
  openFiltersCollection() {
    cy.get(HomePageLocators.openFiltersCollection, { timeout: 10000 })
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Opened Filters Collection');
      });
  }

  // Select the 'PocketNurse' checkbox
  selectCheckBoxPocketNurse() {
    cy.get(HomePageLocators.checkBoxPocketNurse, { timeout: 10000 })
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Selected CheckBox PocketNurse');
      });
  }

  // Accept the reference
  acceptReference() {
    cy.get(HomePageLocators.acceptReference, { timeout: 10000 })
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Accepted Reference');
      });
  }

  // Select the 'PN' category item
  selectCategoryItemPN() {
    cy.get(HomePageLocators.categoryItemPN, { timeout: 10000 })
      .first()
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Selected Category Item PN');
      });
  }

  // Open the shopping cart
  openCart() {
    cy.get(HomePageLocators.openCart, { timeout: 10000 })
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Opened Cart');
      });
  }
}

export default HomePage;
