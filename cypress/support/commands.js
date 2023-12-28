// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-xpath');

import 'cypress-real-events/support'

Cypress.Commands.add('clearSessionStorage', () => {
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});

Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe) => {
  const iframe = $iframe.contents();
  return cy.wrap(iframe);
});

Cypress.Commands.add('forceClickClearCart', () => {
  cy.document().then(document => {
    const clearCartButton = document.querySelector('.vc-button.vc-button--size--sm.vc-button--color--secondary.vc-button--outline--secondary.self-start');
    if (clearCartButton) {
      clearCartButton.click();
    }
  });
});


Cypress.Commands.add('findElement', (selector, retries = 5, wait = 2000) => {
  const find = (count) => {
    return cy.get('body').then(body => {
      if (body.find(selector).length > 0) {
        return cy.get(selector); // Элемент найден
      } else if (count > 0) {
        cy.wait(wait); // Ожидание перед следующей попыткой
        return find(count - 1);
      } else {
        throw new Error('Элемент не найден после нескольких попыток');
      }
    });
  };
  return find(retries);
});
