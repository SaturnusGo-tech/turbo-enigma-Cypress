import { Locators, EnabledHeaderItems } from '../locators/locators'

class HeaderValidator {
    /**
     * Checks if a specified element is present, visible, and clickable.
     * Mainly used for elements that can be clicked, like buttons or links.
     * @param {string} locator - The XPath locator of the element to check.
     */
    checkElementState(locator) {
        cy.log(`[Element State Check] - Checking element with locator: ${locator}`);

        // Check the element for existence, visibility, and being enabled (clickable)
        cy.xpath(locator)
            .should('exist')
            .and('be.visible')
            .and('be.enabled')
            .then(() => {
                cy.log('[Element State Check] - Element is present, visible, and clickable');
            });
    }

    /**
     * Iterates through a list of elements and checks each for presence and visibility.
     * This method is used to validate that essential elements are rendered on the page.
     * Does not verify if the elements are clickable.
     */
    checkMultipleElementsState() {
        EnabledHeaderItems.forEach(element => {
            const { locator, type } = element;

            // Check each element based on its type (XPath or href)
            if (type === 'xpath') {
                // Checking an XPath element for existence and visibility
                cy.xpath(locator)
                    .should('exist')
                    .and('be.visible');
            } else {
                // Checking a hyperlink (href) for existence and visibility
                cy.get(`a[href="${locator}"]`)
                    .should('exist')
                    .and('be.visible')
                    .then((link) => {
                        const href = link.prop('href');
                        // Verifying the response status of the link's URL
                        cy.request(href).its('status').should('be.within', 200, 600);
                    });
            }
        });
    }

    /**
     * Clicks on each item in a list and checks the response status of the linked page.
     * After each click, it navigates back to the original page.
     * Used to validate the functionality of navigation elements.
     */
    clickAndCheckEachItem() {
        const baseUrl = Cypress.config('baseUrl'); // Retrieving the base URL from Cypress configuration

        EnabledHeaderItems.forEach(element => {
            const { locator, type } = element;

            // Click on the element based on its type (XPath or href)
            if (type === 'xpath') {
                // Clicking on an XPath element
                cy.xpath(locator).click();
            } else {
                // Clicking on each href element found
                cy.get(`a[href="${locator}"]`).click({ multiple: true });
            }

            // Verifying the status of the response after navigation
            cy.location('href').then((url) => {
                cy.request(url).its('status').should('be.within', 200, 600);
            });

            // Navigating back to the previous page
            cy.go('back');
        });
    }
}

export default HeaderValidator;
