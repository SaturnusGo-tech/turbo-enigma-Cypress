import { View_all_catalog, Supplier_tiles_connect, Supplier_tiles_items } from '../locators/locators';

class SupplierConnect {
    /**
     * Clicks a button and checks the elements after the click.
     */
    RevertCatalogsData() {
        // Wait for elements to be available, if necessary
        cy.wait(10000); // Adjust wait time as needed

        // Check for visibility and enablement of the button
        cy.get(`a[href="${View_all_catalog}"]`).then($button => {
            if ($button.is(':visible') && $button.is(':enabled')) {
                // Click the button if it is visible and enabled
                $button.click();
            } else {
                // Log a message if the button is not clickable
                cy.log('Button is not clickable:', $button);
            }
        });

        // Click the button with a specified href
        cy.get(`a[href="${Supplier_tiles_connect}"]`).click();

        // Check for the existence of all elements after the click
        cy.xpath(Supplier_tiles_items).should('exist');

        // Get all supplier tiles and check each for visibility and attempt an action
        cy.xpath(Supplier_tiles_items).each(($tile, index, $list) => {
            // Check for visibility of the tile
            cy.xpath(Supplier_tiles_items).eq(index).should('be.visible').then($tileVisible => {
                // Attempt an action with the element
                try {
                    // Click or perform another action on the visible tile
                    cy.wrap($tileVisible).click(); // Uncomment or modify if a click is not suitable
                } catch (e) {
                    // Log if unable to interact with the element
                    cy.log('Failed to interact with the element:', e);
                }
            });
        });
    }
}

export default SupplierConnect
