import { ShippingPageLocators } from './SippingLocators/ShippingLocators';

class ShippingPage {

    // Open the available shipping addresses
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

    // Select a specific shipping address
    SelectShippingAddress() {
        cy.wait(1500);
        cy.xpath(ShippingPageLocators.selectShippingAddress)
          .should('be.visible')
          .click()
          .then(($el) => {
              cy.log(`Clicked on SelectShippingAddress with XPath: ${ShippingPageLocators.selectShippingAddress}`);
              cy.log(`Element state: ${$el}`);
          });
    }

    // Confirm the selected shipping address
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

    // Open the delivery address options
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

    // Select a delivery method
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

    // Open the address list to choose from
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

    // Select an address that has the same type as the shipping address
    SelectEqualTypeOfShippingAddress() {
        cy.xpath(ShippingPageLocators.selectEqualTypeOfShippingAddress)
          .should('be.visible')
          .click()
          .then(($el) => {
              cy.log(`Clicked on SelectEqualTypeOfShippingAddress with XPath: ${ShippingPageLocators.selectEqualTypeOfShippingAddress}`);
              cy.log(`Element state: ${$el}`);
          });
    }

    // Accept the shipping preference
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

    // Open delivery method options
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

    // Select a delivery option
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

    // Proceed to the billing page
    GoNextToBillingPage() {
        cy.xpath(ShippingPageLocators.goNextToBillingPage)
          .should('be.visible')
          .click()
          .then(($el) => {
              cy.log(`Clicked on GoNextToBillingPage with XPath: ${ShippingPageLocators.goNextToBillingPage}`);
              cy.log(`Element state: ${$el}`);
          });
    }
}

export default ShippingPage;

