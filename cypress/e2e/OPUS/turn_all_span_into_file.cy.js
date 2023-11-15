import LoginPage from '../../support/Critical_Path/page_objects/LoginPage/LoginPage';
import TestData from "../../fixtures/Secret_variables/Test_data";
import HomePage from '../../support/Critical_Path/page_objects/HomePage/HomePage';

describe('Extract and Save Span Texts with Specific Keywords', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const keywords = [
    'Bowman', 'Global', 'Slice', 'Pull Down', 'U-Channel Sign Post', '250 lbs.',
    'Concrete Base', 'Magnetic Acrylic Pocket Marker Holder', 'U-Channel', 'ZING',
    'TrippNT', 'Ideal', '20', 'Omnimed', 'Self-Retracting', '125', 'Magna',
    'Standard', '10', 'Durable', 'Self', 'USA', 'Grade', 'World', 'Jonti',
    'INCOM', 'Plasticade', 'eLEDing', 'Edison', 'World Centric'
  ];

  it('Should login and then perform actions', function() {
    // Login Phase
    loginPage.visit();
    loginPage.fillEmail(TestData.email);
    loginPage.fillPassword(TestData.password);
    loginPage.clickLoginButton();
    loginPage.checkNoErrorMessage();

    // Verify successful login
    cy.url().should('include', '/home');
    homePage.clickCategoryItemButton();
    cy.wait(10000);


    cy.get('span').then(spans => {
      const allSpans = spans.toArray();
      console.log(`Total spans found: ${allSpans.length}`);

      const filteredTexts = allSpans
        .filter(span => keywords.some(keyword => span.textContent.includes(keyword)))
        .map(span => span.textContent.trim())
        .filter((value, index, self) => self.indexOf(value) === index); // Удаление дубликатов

      console.log(`Filtered spans count: ${filteredTexts.length}`);
      const combinedTexts = filteredTexts.join('\n');

      const filename = 'cypress/output/filtered_span_texts.txt';
      cy.task('writeToFile', { filename, content: combinedTexts });
    });
  });
});
