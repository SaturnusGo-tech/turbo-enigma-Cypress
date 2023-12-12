class AuthLogin {
  visitHomePage(url = 'https://qa-opus.omniapartners.com/', options = {failOnStatusCode: false, timeout: 10000}) {
    cy.log('Step: Initiating visit to Home Page');

    cy.visit(url, options).then((response) => {
      if (response && response.status) {
        cy.log(`HTTP Status Code: ${response.status}`);
        expect(response.status).to.be.oneOf([200, 304], 'Successful HTTP response');
      } else {
        cy.log('Warning: The response object or the status is undefined or null');
      }

    });

    cy.log('Completed: Visited Home Page');
  }
}

export default new AuthLogin();
