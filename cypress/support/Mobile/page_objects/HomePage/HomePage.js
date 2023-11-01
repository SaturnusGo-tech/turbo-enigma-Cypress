import { HomePageLocators } from './HomePageLocators/HomePageLocators';

class HomePage {

  // Click the 'Category Item' button
  ClickCategoryItemButton() {
    cy.wait(5000);  // Wait for 5 seconds to ensure all elements are loaded
    cy.xpath(HomePageLocators.openFilterBar)
      .should('be.visible')
      .click()  // Click the Category Item button
      .then(($el) => {
        cy.log('Clicked on Category Item Button');  // Log the action
        cy.log(`Element state: ${$el}`);  // Log the state of the clicked element
      });
  }

  // Check the availability and clickability of buttons
  checkButtonsAvailabilityAndClickability() {
    const locatorsArray = [
      HomePageLocators.catalog,
      HomePageLocators.orders,
      HomePageLocators.cart,
    ];

    locatorsArray.forEach((locator) => {
      cy.xpath(locator)
        .scrollIntoView()
        .should('be.visible')
        .should('not.be.disabled')
        .then(($el) => {
          cy.log(`Checked button with locator: ${locator}`);
          cy.log(`Element state: ${$el}`);
        });
    });
}


  // Open the Catalog menu
  OpenCatalogMenu(){
    cy.wait(5000);
    cy.xpath(HomePageLocators.catalog)
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Opened Catalog Menu');
      });
  }

  // Check for the presence of all child links
  checkForChildLinks() {
    cy.xpath('//*[@id="app"]/div/nav/section/div')
      .find('a')
      .each(($el, index, $list) => {
        // Simply log the index and the text of the link
        cy.log(`Found child link ${index + 1}: ${$el.text()}`);
      });
  }
}

export default HomePage;
