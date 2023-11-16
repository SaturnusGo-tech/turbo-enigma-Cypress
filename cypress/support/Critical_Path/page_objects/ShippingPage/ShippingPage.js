import { ShippingPageLocators } from './SippingLocators/ShippingLocators';

class ShippingPage {

     /**
     * Opens the list of available shipping addresses.
     * Waits for 10 seconds to ensure the page elements are loaded before attempting to click.
     */
    OpenShippingAddresses() {
        cy.wait(10000);  // Wait for 10 seconds for the page to load
        cy.xpath(ShippingPageLocators.openShippingAddresses)
          .should('be.visible')  // Element should be visible
          .click()  // Perform click action
          .then(($el) => {
              cy.log(`Clicked on OpenShippingAddresses with XPath: ${ShippingPageLocators.openShippingAddresses}`);
              cy.log(`Element state: ${$el}`);
          });
    }
 /**
     * Attempts to select a specific shipping address.
     * If the primary locator fails to find the element, an alternative locator is used.
     * Waits for 1.5 seconds before attempting the action.
     */ // Select a specific shipping address
SelectShippingAddress(IfNoFoundSelectThis) {
  cy.wait(1500); // Wait for 1.5 seconds

  // Try to find and click the element using the primary locator
  cy.xpath(ShippingPageLocators.selectShippingAddress, { timeout: 5000 })
    .should('be.visible')
    .click()
    .then($el => {
        cy.log(`Clicked on SelectShippingAddress with XPath: ${ShippingPageLocators.selectShippingAddress}`);
    })
    .then(null, error => {
        // In case of an error, try using an alternative locator
        cy.log('Primary locator not found, trying alternative locator.');
        cy.xpath(ShippingPageLocators.IfNoFoundSelectThis).should('be.visible').click().then($alternativeEl => {
            cy.log(`Clicked on alternative SelectShippingAddress with XPath: ${ShippingPageLocators.IfNoFoundSelectThis}`);
        });
    });
    }

  /**
     * Similar to SelectShippingAddress but intended for a different context (e.g., web).
     * Tries to select a shipping address and falls back to an alternative if needed.
     */
    SelectShippingAddressWeb(IfNoFoundSelectThis) {
  cy.wait(1500); // Wait for 1.5 seconds

  // Try to find and click the element using the primary locator
  cy.xpath(ShippingPageLocators.selectShippingAddressWeb, { timeout: 5000 })
    .should('be.visible')
    .click()
    .then($el => {
        cy.log(`Clicked on SelectShippingAddress with XPath: ${ShippingPageLocators.selectShippingAddressWeb}`);
    })
    .then(null, error => {
        // In case of an error, try using an alternative locator
        cy.log('Primary locator not found, trying alternative locator.');
        cy.xpath(ShippingPageLocators.IfNoFoundSelectThisWeb).should('be.visible').click().then($alternativeEl => {
            cy.log(`Clicked on alternative SelectShippingAddress with XPath: ${ShippingPageLocators.IfNoFoundSelectThisWeb}`);
        });
    });
    }


      /**
     * Confirms the selected shipping address.
     * Waits for 7 seconds after clicking to allow for page update.
     */
    AcceptShippingAddress() {
        cy.xpath(ShippingPageLocators.acceptShippingAddress)
          .should('be.visible')
          .click()
          .then(($el) => {
              cy.log(`Clicked on AcceptShippingAddress with XPath: ${ShippingPageLocators.acceptShippingAddress}`);
              cy.log(`Element state: ${$el}`);
          });
        cy.wait(7000);  // Wait for 7 seconds for the page to update
    }

    /**
     * Opens the delivery address options.
     * Waits for 3 seconds to ensure the page is ready for interaction.
     */
    OpenDeliverAddress() {
        cy.wait(3000);
        cy.xpath(ShippingPageLocators.openDeliverAddress)
          .should('be.visible')
          .click()
          .then(($el) => {
              cy.log(`Clicked on OpenDeliverAddress with XPath: ${ShippingPageLocators.openDeliverAddress}`);
              cy.log(`Element state: ${$el}`);
          });
    }

     /**
     * Selects a delivery method from the available options.
     * Waits for 3 seconds before attempting the action.
     */
    SelectDeliveryMethod() {
        cy.wait(3000);
        cy.xpath(ShippingPageLocators.selectDeliveryMethod)
          .should('be.visible')
          .click()
          .then(($el) => {
              cy.log(`Clicked on SelectDeliveryMethod with XPath: ${ShippingPageLocators.selectDeliveryMethod}`);
              cy.log(`Element state: ${$el}`);
          });
    }

      /**
     * Similar to SelectDeliveryMethod but intended for a different context (e.g., web).
     */
      SelectDeliveryMethodWeb() {
        cy.wait(3000);
        cy.xpath(ShippingPageLocators.selectDeliveryMethod)
          .should('be.visible')
          .click()
          .then(($el) => {
              cy.log(`Clicked on SelectDeliveryMethod with XPath: ${ShippingPageLocators.selectDeliveryMethod}`);
              cy.log(`Element state: ${$el}`);
          });
    }

      /**
     * Opens the list of addresses to choose from.
     * Forces a click if the element is not interactable, and waits for 3 seconds before the action.
     */
    OpenAddressList() {
        cy.wait(3000);
        cy.xpath(ShippingPageLocators.openAddressList)
          .should('not.have.css', 'pointer-events', 'none')
          .click({ force: true })  // Forcing click if element is not interactable
          .then(($el) => {
              cy.log(`Clicked on OpenAddressList with XPath: ${ShippingPageLocators.openAddressList}`);
              cy.log(`Element state: ${$el}`);
          });
    }

    /**
     * Selects an address that matches the type of the shipping address.
     */
    SelectEqualTypeOfShippingAddress() {
        cy.xpath(ShippingPageLocators.selectEqualTypeOfShippingAddress)
          .should('be.visible')
          .click()
          .then(($el) => {
              cy.log(`Clicked on SelectEqualTypeOfShippingAddress with XPath: ${ShippingPageLocators.selectEqualTypeOfShippingAddress}`);
              cy.log(`Element state: ${$el}`);
          });
    }

   /**
     * Accepts the preferred shipping method.
     * Waits for 3.5 seconds after clicking to allow for page update.
     */
    AcceptShippingPreference() {
        cy.xpath(ShippingPageLocators.acceptShippingPreference)
          .should('be.visible')
          .click()
          .then(($el) => {
              cy.log(`Clicked on AcceptShippingPreference with XPath: ${ShippingPageLocators.acceptShippingPreference}`);
              cy.log(`Element state: ${$el}`);
          });
        cy.wait(3500);  // Wait for 3.5 seconds for the page to update
    }


    /**
     * Opens the options for delivery methods.
     */
    OpenDeliveryMethod() {
        cy.xpath(ShippingPageLocators.openDeliveryMethod)
          .first()
          .should('be.visible')
          .click()
          .then(($el) => {
              cy.log(`Clicked on OpenDeliveryMethod with XPath: ${ShippingPageLocators.openDeliveryMethod}`);
              cy.log(`Element state: ${$el}`);
          });
    }

    /**
     * Selects a specific delivery option from the available choices.
     * Waits for 4 seconds after the action to allow for page update.
     */
    SelectDeliveryOption() {
        cy.xpath(ShippingPageLocators.selectDeliveryOption)
          .should('be.visible')
          .click()
          .then(($el) => {
              cy.log(`Clicked on SelectDeliveryOption with XPath: ${ShippingPageLocators.selectDeliveryOption}`);
              cy.log(`Element state: ${$el}`);
          });
        cy.wait(4000);  // Wait for 4 seconds for the page to update
    }

    /**
     * Proceeds to the billing page.
     * Waits for 5 seconds before attempting the click to ensure the page is ready.
     */
    GoNextToBillingPage() {
        cy.wait(5000);
        cy.xpath('//*[@id="order-summary"]/div[2]/a')
          .should('be.visible')
          .click()
          .then(($el) => {
              cy.log(`Clicked on GoNextToBillingPage with XPath: ${ShippingPageLocators.goNextToBillingPage}`);
              cy.log(`Element state: ${$el}`);
          });
    }
}

export default ShippingPage;

