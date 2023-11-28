import { Locators, DisabledHeaderItems } from '../locators/locators'

class HeaderValidator {
    /**
     * Checks if the specified element is present and clickable (active).
     * @param {string} locator - The XPath locator of the element to be checked.
     */
    checkElementState(locator) {
        cy.log(`[Element State Check] - Checking element with locator: ${locator}`);

        // Perform checks for the presence, visibility, and clickability of the element
        cy.xpath(locator)
            .should('exist')
            .and('be.visible')
            .and('be.enabled')
            .then(() => {
                cy.log('[Element State Check] - Element is present, visible, and clickable');
            });
    }

    /**
     * Iterates through multiple elements and checks each for their presence and visibility.
     * It does not verify if the elements are clickable.
     */
    checkMultipleElementsState() {
        DisabledHeaderItems.forEach(element => {
            const { locator, type } = element;

            // Select the element based on its type (XPath or href)
            const selectElement = type === 'xpath' ? cy.xpath(locator) : cy.get(`a[href="${locator}"]`);

            // Check that the element exists and is visible
            selectElement
                .should('exist')
                .and('be.visible')
                .then(() => {
                    cy.log(`[Element State Check] - Element with locator ${locator} is present and visible`);
                });
        });
    }

    /**
     * Hovers over a specified header element and checks for the appearance of a specific text.
     * Assumes that the text becomes visible only after hovering over the header element.
     */
    hoverOverHeaderAndCheckText() {
        const headerLocator = Locators.Header; // Locator for the element to hover over
        const expectedText = 'Please log in to OPUS';
        const targetElement = '.unauthorized-warning'; // Target element expected to become visible

        cy.log(`[Hover Action] - Hovering over the header with locator: ${headerLocator}`);

        // Simulate mouse hover action
        cy.xpath(headerLocator).trigger('mouseover');

        // Force CSS property change to mimic the hover effect
        cy.get(targetElement).invoke('css', 'opacity', '1');

        // Additional wait time to allow CSS effects to apply
        cy.wait(500); // Wait for a short time to ensure CSS effects are applied

        // Verify the visibility of the target element
        cy.get(targetElement).should('exist').and(($el) => {
            expect($el.text()).to.include(expectedText);
        });
    }
}

export default HeaderValidator;
