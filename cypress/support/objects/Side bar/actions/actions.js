import { Locators } from '../locators/locators';

class Actions {

  // Click the 'Category Item' button
  ClickCategoryItemButton() {
    cy.wait(5000);
    cy.xpath(Locators.openFilterBar)
      .should('be.visible')
      .click()
      .then(($el) => {
        cy.log('Clicked on Category Item Button');
        cy.log(`Element state: ${$el}`);
      });
  }

  // Check the availability and clickability of buttons
  checkButtonsAvailabilityAndClickability() {
    const locatorsArray = [
      Locators.catalog,
      Locators.orders,
      Locators.cart,
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

  checkButtonsAvailabilityAnd() {
    const locatorsArray = [
      Locators.aboutUs,
      Locators.faq,
      Locators.contactUs,
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
  OpenCatalogMenu() {
    cy.wait(5000);
    cy.xpath(Locators.catalog)
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
        cy.log(`Found child link ${index + 1}: ${$el.text()}`);
      });
  }

  GetBackToLinksList() {
    cy.wait(1500);
    cy.xpath(Locators.backButton)
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Clicked on the Back button');
      });
  }

  OpenAccountInfo() {
    cy.wait(1500);
    cy.xpath(Locators.accountInfo)
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Clicked on the Back button');
      });
  }


   checkSocialButtonssAvailability() {
    const locatorsArray = [
      Locators.aboutUs,
      Locators.faq,
      Locators.contactUs,
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


  checkAccountInfo() {
    const locatorsArray = [
      Locators.profile,
      Locators.Orders,
      Locators.agency,
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
}

export default Actions;
