import {
    CatalogButton,
    DropdownMenu,
    SupplierTiles,
    searchInputLocator,
    searchButtonLocator,
    productsListLocator
} from '../locators/locators';

class CatalogValidator {
    /**
     * Clicks the catalog button, checks for the dropdown menu, and verifies all links within it.
     */
    checkCatalogAndLinks() {
        // Logging the action of clicking the catalog button
        cy.log('Clicking the catalog button');

        // Clicking the catalog button and ensuring it's visible
        // The visibility check ensures that the button is not only present but also not obscured
        cy.xpath(CatalogButton).should('be.visible').click();

        // Verifying the presence of the dropdown menu after clicking the catalog button
        // This step confirms that the dropdown is accessible and rendered properly
        cy.xpath(DropdownMenu).should('exist').and('be.visible');

        // Iterating through each link in the dropdown menu
        cy.xpath(`${DropdownMenu}//a`).each(($link, index, $list) => {
            // Logging the action of checking each link
            cy.log('Checking a link in the dropdown menu');

            // Scrolling the link into view and ensuring it's visible and has a valid href attribute
            // This step is crucial to ensure the links are not only present but also actionable
            cy.wrap($link).scrollIntoView().should('be.visible');
            cy.wrap($link).invoke('attr', 'href').should('not.be.empty');

            // Additional checks or actions for each link can be added here
        });

        // Logging the completion of the dropdown menu checks
        cy.log('Completed checking all links in the dropdown menu');
    }

    /**
     * Searches for 'highlighter', clicks the search button, and retrieves a list of products.
     */
    searchAndRetrieveProducts() {
        // Logging the start of the search operation
        cy.log('Starting search for "highlighter"');

        // Typing 'highlighter' into the search input field
        // Ensuring the value is entered successfully
        cy.get(searchInputLocator)
          .type('highlighter')
          .then(() => {
              cy.log('Entered "highlighter" in the search input');
          });

        // Clicking the search button to initiate the search
        // Verifying the click action
        cy.xpath(searchButtonLocator)
          .click()
          .then(() => {
              cy.log('Clicked the search button');
          });

        // Retrieving the list of products as a result of the search
        // Checking if the products list exists and is visible
        cy.xpath(productsListLocator)
          .should('exist')
          .and('be.visible')
          .then($productsList => {
              cy.log('Retrieved products list');

              // Asserting that the products list contains items
              expect($productsList.length).to.be.greaterThan(0, 'Products list contains items');

              // Iterating through each product in the list
              // Adding specific checks for each product, such as visibility
              // Additional checks can include product name, price, image, etc.
              $productsList.each((index, product) => {
                  expect(Cypress.$(product)).to.be.visible;
                  // Here, you can add more specific checks for each product
              });

              // Logging the number of products found
              cy.log(`Found ${$productsList.length} products for "highlighter"`);
          });
    }
}

export default CatalogValidator;
