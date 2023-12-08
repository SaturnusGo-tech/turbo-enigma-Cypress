class TextComparator {
  compareTextAndNavigate() {
    let firstText = '';

    cy.xpath('//*[@id="app"]/div/div[4]/div/div[2]/div/div/div/div/div[2]/div/table/tbody/tr/td[1]')
      .invoke('text')
      .then(text => {
        firstText = text.trim();
        cy.log('First text: ' + firstText);

        cy.visit('https://uat-opus.omniapartners.com/account/orders');
      })
      .then(() => {
        cy.xpath('//*[@id="app"]/div/div[4]/div/div/div/div[2]/div[4]/table')
          .each($link => {
            const url = $link.prop('href');
            cy.visit(url);

            cy.xpath('//*[@id="app"]/div/div[4]/div/div/div/div/div[1]')
              .invoke('text')
              .then(pageText => {
                if (pageText.trim() === firstText) {
                  cy.log('Success: Texts are matching on ' + url);
                  return false; // Остановить .each цикл
                }
              });

            cy.go('back');
          });
      });
  }
}

export default TextComparator;
