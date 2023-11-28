import {
    Tile, quickconnect, firstNameInput, lastNameInput, phoneInput,
    popupLocator, textareaLocator, submitButtonLocator, successMessage
} from '../locators/locators';
import generatePhoneNumber from "../../../../plugins/phone generater/generatePhoneNumber";
import { generateRandomFirstName } from '../../../../plugins/name generator/name_generater';
import { generateRandomLastName } from '../../../../plugins/last name generater/lastname_generater';
import { generateRandomText } from '../../../../plugins/sentence generater/sentence';

class QuickConnect {
    /**
     * Hover over a random element from a list and then click on the 'QUICKCONNECT' button.
     * This method selects a random element from the list and triggers a mouseover event,
     * then waits for the 'QUICKCONNECT' button to appear and clicks on it.
     */
    hoverAndClickQuickConnect() {
        // Get all children elements within the container
        cy.xpath(Tile).children().then($listItems => {
            const itemCount = $listItems.length;

            // Generate a random index to select an item
            const randomIndex = Math.floor(Math.random() * itemCount);

            // Hover over the randomly selected element
            cy.wrap($listItems[randomIndex]).trigger('mouseover');

            // Wait for the QUICKCONNECT button to appear and then click on it
            cy.contains(quickconnect).click();
        });
    }

    /**
     * Checks for the presence of a popup and validates its visibility.
     * Asserts that the popup exists and is visible on the screen.
     */
    checkForPopup() {
        cy.log('Checking for the presence of the popup...');
        cy.xpath(popupLocator).should('exist').and('be.visible');
        cy.log('Popup is present and visible.');
    }

    /**
     * Enters generated data into input fields and validates the input.
     * Randomly generates a phone number and optionally a first name and last name,
     * then enters these into the corresponding input fields.
     * @param {string} firstName - First name to enter.
     * @param {string} lastName - Last name to enter.
     */
    enterDataInInputs(firstName, lastName) {
        cy.log('Generating a phone number...');
        const phoneNumber = generatePhoneNumber();
        cy.log(`Generated phone number: ${phoneNumber}`);

        // Commented out as the parameters are being overwritten by generated values
        // Uncomment and use firstName and lastName parameters if needed
        /*
        cy.log('Entering first name...');
        cy.get(firstNameInput).should('be.visible').type(generateRandomFirstName()).should('have.value', firstName);
        cy.log('Entering last name...');
        cy.get(lastNameInput).should('be.visible').type(generateRandomLastName()).should('have.value', lastName);
        */

        cy.log('Entering phone number...');
        cy.get(phoneInput).should('be.visible').type(phoneNumber).should('have.value', phoneNumber);
        cy.log('Data entered successfully in all input fields.');
    }

    /**
     * Randomly clicks one of the available radio buttons and then clicks the Submit button.
     * After clicking, it checks for a success message popup.
     * This method selects a random radio button from the available ones and clicks on it,
     * then clicks the Submit button and checks for the presence of a success message.
     */
    clickRandomAvailableRadioButtonAndSubmit() {
        cy.get('#purposes')
          .find('[type="radio"]')
          .then($radioButtons => {
              const availableRadioButtons = $radioButtons.filter((i, el) => Cypress.$(el).is(':visible') && !Cypress.$(el).is(':disabled'));

              if (availableRadioButtons.length > 0) {
                  const randomIndex = Math.floor(Math.random() * availableRadioButtons.length);
                  cy.wrap(availableRadioButtons[randomIndex]).click();
                  cy.log('Clicked a random available radio button.');

                  cy.xpath(submitButtonLocator).click();

                  cy.contains(successMessage).should('be.visible');
                  cy.log('Success message popup found.');
              } else {
                  cy.log('No available radio buttons found.');
              }
          });
    }

    /**
     * Generates and enters random text into a textarea, then clicks the submit button.
     * It uses a utility to generate random text, enters it into the textarea,
     * and then clicks the submit button.
     */
    FillSupplierNote() {
        cy.log('Generating random text...');
        const randomText = generateRandomText(3); // Example: generate 3 sentences of random text

        cy.log('Entering generated text into the textarea...');
        cy.get(textareaLocator).should('be.visible').type(randomText);

        cy.log('Clicking the submit button...');
        cy.xpath(submitButtonLocator).should('be.visible').click();

        cy.log('Text entered and submit button clicked.');
    }
}

export default QuickConnect;
