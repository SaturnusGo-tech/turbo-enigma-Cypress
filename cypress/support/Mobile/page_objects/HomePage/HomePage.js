import { HomePageLocators } from './HomePageLocators/HomePageLocators'

class HomePage {

    // Click the 'Category Item' button
    ClickCategoryItemButton() {
        cy.wait(5000);  // Wait for 5 seconds to ensure all elements are loaded
        cy.xpath(HomePageLocators.openFilterBar)
            .click()  // Click the Category Item button
            .then(($el) => {
                cy.log('Clicked on Category Item Button');  // Log the action
                cy.log(`Element state: ${$el}`);  // Log the state of the clicked element
            });

        checkButtonsAvailabilityAndClickability() {
        const locatorsArray = [
            HomePageLocators.aboutUs,
            HomePageLocators.faq,
            HomePageLocators.contactUs
        ];

        locatorsArray.forEach((locator) => {
            cy.xpath(locator)
                .should('be.visible')  // Проверить на наличие
                .and('be.enabled')  // Проверить, что кнопка активна
                .click()  // Кликнуть по кнопке
                .then(($el) => {
                    cy.log(`Clicked on button with locator: ${locator}`);  // Залогировать действие
                    cy.log(`Element state: ${$el}`);  // Залогировать состояние элемента
                });
        });
        }
    }

}
  export default HomePage;

