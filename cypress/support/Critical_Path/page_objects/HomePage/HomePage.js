import { HomePageLocators } from './HomePageLocators/HomePageLocators';

class HomePage {

  // Click the 'Category Item' button
  ClickCategoryItemButton() {
    cy.wait(5000);  // Wait for 5 seconds to ensure all elements are loaded
    cy.get(HomePageLocators.categoryItemButton)
      .click()  // Click the Category Item button
      .then(($el) => {
        cy.log('Clicked on Category Item Button');  // Log the action
        cy.log(`Element state: ${$el}`);  // Log the state of the clicked element
      });
  }

  // Select the 'GI' category item
  SelectCategoryItem_GI() {
    cy.wait(3000);  // Wait for 3 seconds
    cy.xpath(HomePageLocators.categoryItem_GI)
      .first()
      .click()  // Click the first 'GI' category item
      .then(($el) => {
        cy.log('Selected Category Item GI');  // Log the action
        cy.log(`Element state: ${$el}`);  // Log the state of the clicked element
      });
  }

  // Open the 'Filters' collection
  OpenFiltersCollection() {
    cy.wait(1500);  // Wait for 1.5 seconds
    cy.xpath(HomePageLocators.openFiltersCollection)
      .click()  // Click to open filters collection
      .then(($el) => {
        cy.log('Opened Filters Collection');  // Log the action
        cy.log(`Element state: ${$el}`);  // Log the state of the clicked element
      });
  }

  // Select the 'PocketNurse' checkbox
  SelectCheckBoxPocketNurse() {
    cy.wait(1500);  // Wait for 1.5 seconds
    cy.xpath(HomePageLocators.checkBoxPocketNurse)
      .click()  // Click the 'PocketNurse' checkbox
      .then(($el) => {
        cy.log('Selected CheckBox PocketNurse');  // Log the action
        cy.log(`Element state: ${$el}`);  // Log the state of the clicked element
      });
  }

  // Accept the reference
  AcceptReference() {
    cy.wait(4500);  // Wait for 2.5 seconds
    cy.xpath(HomePageLocators.acceptReference)
      .click()  // Click to accept the reference
      .then(($el) => {
        cy.log('Accepted Reference');  // Log the action
        cy.log(`Element state: ${$el}`);  // Log the state of the clicked element
      });
  }

  // Select the 'PN' category item
  SelectCategoryItemPN() {
    cy.wait(1500);  // Wait for 1.5 seconds
    cy.xpath(HomePageLocators.categoryItemPN)
      .first()
      .click()  // Click the first 'PN' category item
      .then(($el) => {
        cy.log('Selected Category Item PN');  // Log the action
        cy.log(`Element state: ${$el}`);  // Log the state of the clicked element
      });
  }

  // Open the shopping cart
  OpenCart() {
    cy.wait(1500);  // Wait for 1.5 seconds
    cy.xpath(HomePageLocators.openCart)
      .click()  // Click to open the cart
      .then(($el) => {
        cy.log('Opened Cart');  // Log the action
        cy.log(`Element state: ${$el}`);  // Log the state of the clicked element
      });
  }
}


export default HomePage;
