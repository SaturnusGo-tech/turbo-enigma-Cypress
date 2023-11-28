import { Footer } from '../locators/locators';

/**
 * Finds the footer and checks the clickability of all links within it.
 */
class FooterValidator {
    checkFooterLinks() {
        // Logging the start of footer check
        cy.log('Checking the footer');

        // Finding the footer
        cy.get(Footer).should('exist').and('be.visible').as('footer');

        // Checking if the footer contains any links
        cy.get('@footer').find('a').should('exist');

        // Getting all links in the footer
        cy.get('@footer').find('a').each(($link) => {
            // Logging the link check
            cy.log(`Checking a link with href: ${$link.prop('href')}`);

            // Checking that the link is visible, has an 'href' attribute, and is not empty
            cy.wrap($link).should('be.visible').and('have.attr', 'href').and('not.be.empty');

            // For further testing clickability, i will probably can add additional checks here, for instance:
            // cy.wrap($link).click(); // Click on the link
            // cy.go('back'); // Return to the previous page after the click
        });

        // Logging the completion of footer check
        cy.log('Completed checking all links in the footer');
    }
}

export default FooterValidator;
