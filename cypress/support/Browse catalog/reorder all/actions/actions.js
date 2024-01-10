import { orders, items } from './../locator/locators';

class ReorderAll {

  /**
   * Позже отпишу комменты
   */
  static clickOrdersButton() {
    cy.get(orders)
      .should('be.visible')
      .click({ multiple: true });
  }

  static clickRandomOrderLinkInItem() {
    cy.get(items)
      .should('have.length.greaterThan', 0)
      .then($items => {
        const randomIndex = Math.floor(Math.random() * $items.length);
        const $randomItem = $items.eq(randomIndex);

        cy.wrap($randomItem).as('randomBlock');

        cy.get('@randomBlock').find('a').should('have.length.greaterThan', 0);
      })
      .then(() => {
        cy.get('@randomBlock').find('a').then($links => {
          const randomLinkIndex = Math.floor(Math.random() * $links.length);
          const $randomLink = $links.eq(randomLinkIndex);

          cy.wrap($randomLink).invoke('attr', 'href').then(href => {
            if (href) {
              cy.visit(href);
            } else {
              cy.log('href attribute not found');
            }
          });
        });
      });
  }
}

export default ReorderAll;