import { BillingPageLocators2 } from './BillingPageLocators/BillingPageLocators2';

class BillingPageCreditCard {

    // Open the payment method section
    OpenPaymentMethod() {
        cy.wait(1000); // ml
        cy.xpath(BillingPageLocators2.OpenPaymentMethod)
            .click()
            .then(($el) => {
                cy.log('Opened Payment Method');
                cy.log(`Element state: ${$el}`);
            });
    }

    // Select Credit Card as a payment method
    SelectPaymentMethodCreditCard() {
        cy.xpath(BillingPageLocators2.SelectPaymentMethodCreditCard)
            .click()
            .then(($el) => {
                cy.log('Selected Payment Method: Credit Card');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(3000);
    }

    // Open the list of available billing addresses
    OpenBillingAddressList() {
        cy.xpath(BillingPageLocators2.OpenBillingAddressList)
            .click()
            .then(($el) => {
                cy.log('Opened Billing Address List');
                cy.log(`Element state: ${$el}`);
            });
    }

    // Select a payment address from the list
    SelectPaymentAddress() {
        cy.xpath(BillingPageLocators2.SelectPaymentAddress)
            .click()
            .then(($el) => {
                cy.log('Selected Payment Address');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(2500);
    }

    // Confirm the selected payment preferences
    AcceptPaymentPreference() {
        cy.xpath(BillingPageLocators2.AcceptPaymentPreference)
            .click()
            .then(($el) => {
                cy.log('Accepted Payment Preference');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(2000);
    }

    // Open Pocket Nurse payment methods
    OpemSupplierPocketNurseMethod() {
        cy.xpath(BillingPageLocators2.OpemSupplierPocketNurseMethod)
            .click()
            .then(($el) => {
                cy.log('Opened Supplier Pocket Nurse Method');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(1500);
    }

    // Select Pocket Nurse as the payment method
    SelectPocketNursePaymentMethod() {
        cy.xpath(BillingPageLocators2.SelectPocketNursePaymentMethod)
            .click()
            .then(($el) => {
                cy.log('Selected Pocket Nurse Payment Method');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(1500);
    }

    // Click the Review Order Button
    ReviewOrderButton() {
        cy.xpath(BillingPageLocators2.ReviewOrderButton)
            .click()
            .then(($el) => {
                cy.log('Clicked Review Order Button');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(3500);
    }

    // Click the Place Order Button
    PlaceOrderButton() {
        cy.xpath(BillingPageLocators2.PlaceOrderButton)
            .click()
            .then(($el) => {
                cy.log('Clicked Place Order Button');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(5500);
    }

    // Navigate back to the cart
    GoBackToCart() {
        cy.wait(4500);
        cy.xpath(BillingPageLocators2.GoBackToCart)
            .click()
            .then(($el) => {
                cy.log('Went Back To Cart');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(2500);
    }

    // Pull back payment
    PullBackPaymentButton() {
        cy.xpath(BillingPageLocators2.PullBackPaymentButton)
            .click()
            .then(($el) => {
                cy.log('Pulled Back Payment');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(7500);
    }

    // Confirm the pullback of payment
    PullBackPaymentMethodConfirm() {
        cy.xpath(BillingPageLocators2.PullBackPaymentMethodConfirm)
            .click()
            .then(() => {
                cy.log('Confirmed Pulling Back Payment Method');
            });
        cy.wait(18000);


    }
     checkElementAndCompleteTest() {
         cy.log('Step: Checking for the presence of the target element');
         cy.xpath(BillingPageLocators2.targetXPath)
             .should('exist')
             .then(() => {
                 cy.log('Completed: The target element exists, test will be marked as successful.');
                 // Здесь можно добавить дополнительные действия для завершения теста, если необходимо
             });
     }
     checkElementAndEndTest() {
         cy.log('Step: Checking for the presence of the target element');


         cy.xpath(BillingPageLocators2.targetSuccessXPath)
             .should('exist')
             .then(() => {
                 cy.log('Completed: The target element exists, ending test as successful.');
                 cy.end();
             });
     }
}

export default BillingPageCreditCard;
