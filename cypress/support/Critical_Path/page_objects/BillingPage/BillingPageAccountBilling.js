import { BillingPageLocators } from './BillingPageLocators/BillingPageLocators';

class BillingPageAccountBilling {

    /**
     * Opens the payment method section on the billing page.
     * Waits for 1 second before attempting to click.
     */
    OpenPaymentMethod() {
        cy.wait(1000); // ml
        cy.xpath(BillingPageLocators.OpenPaymentMethod)
            .click()
            .then(($el) => {
                cy.log('Opened Payment Method');
                cy.log(`Element state: ${$el}`);
            });
    }

    /**
     * Selects 'Credit Card' as the payment method.
     * Waits for 3 seconds after the click to ensure the action is processed.
     */
    SelectPaymentMethodCreditCard() {
        cy.xpath(BillingPageLocators.SelectPaymentMethodCreditCard)
            .click()
            .then(($el) => {
                cy.log('Selected Payment Method: Credit Card');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(3000);
    }

     /**
     * Opens the list of available billing addresses.
     * This action is typically used to choose a billing address for the order.
     */
    OpenBillingAddressList() {
        cy.xpath(BillingPageLocators.OpenBillingAddressList)
            .click()
            .then(($el) => {
                cy.log('Opened Billing Address List');
                cy.log(`Element state: ${$el}`);
            });
    }

     /**
     * Selects a specific payment address from the list.
     * Waits for 2.5 seconds after the selection for processing.
     */
    SelectPaymentAddress() {
        cy.xpath(BillingPageLocators.SelectPaymentAddress)
            .click()
            .then(($el) => {
                cy.log('Selected Payment Address');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(2500);
    }

    /**
     * Confirms the selected payment preferences.
     * Waits for 2 seconds after clicking for the action to be processed.
     */
    AcceptPaymentPreference() {
        cy.xpath(BillingPageLocators.AcceptPaymentPreference)
            .click()
            .then(($el) => {
                cy.log('Accepted Payment Preference');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(2000);
    }

    /**
     * Opens the payment methods for a supplier, in this case, 'Pocket Nurse'.
     * Waits for 1.5 seconds after the action.
     */
    OpemSupplierPocketNurseMethod() {
        cy.xpath(BillingPageLocators.OpemSupplierPocketNurseMethod)
            .click()
            .then(($el) => {
                cy.log('Opened Supplier Pocket Nurse Method');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(1500);
    }

     /**
     * Selects 'Pocket Nurse' as the payment method.
     * Waits for 1.5 seconds after making the selection.
     */
    SelectPocketNursePaymentMethod() {
        cy.xpath(BillingPageLocators.SelectPocketNursePaymentMethod)
            .click()
            .then(($el) => {
                cy.log('Selected Pocket Nurse Payment Method');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(1500);
    }

     /**
     * Clicks the 'Review Order' button to proceed with the order review.
     * Waits for 3.5 seconds after the click to ensure the next page loads.
     */
    ReviewOrderButton() {
        cy.xpath(BillingPageLocators.ReviewOrderButton)
            .click()
            .then(($el) => {
                cy.log('Clicked Review Order Button');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(3500);
    }

     /**
     * Finalizes the order by clicking the 'Place Order' button.
     * Waits for 5.5 seconds after the click to process the order placement.
     */
    PlaceOrderButton() {
        cy.xpath(BillingPageLocators.PlaceOrderButton)
            .click()
            .then(($el) => {
                cy.log('Clicked Place Order Button');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(5500);
    }

    /**
     * Navigates back to the cart page.
     * Waits for 4.5 seconds before attempting the action.
     */
    GoBackToCart() {
        cy.wait(4500);
        cy.xpath(BillingPageLocators.GoBackToCart)
            .click()
            .then(($el) => {
                cy.log('Went Back To Cart');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(2500);
    }

      /**
     * Initiates the process to pull back or cancel the payment.
     * Waits for 7.5 seconds after the action for processing.
     */
    PullBackPaymentButton() {
        cy.xpath(BillingPageLocators.PullBackPaymentButton)
            .click()
            .then(($el) => {
                cy.log('Pulled Back Payment');
                cy.log(`Element state: ${$el}`);
            });
        cy.wait(7500);
    }

    /**
     * Confirms the action to pull back or cancel the payment method.
     * Waits for 18 seconds after clicking to ensure the process is completed.
     */
    PullBackPaymentMethodConfirm() {
        cy.xpath(BillingPageLocators.PullBackPaymentMethodConfirm)
            .click()
            .then(() => {
                cy.log('Confirmed Pulling Back Payment Method');
            });
        cy.wait(18000);


    }

      /**
     * Checks for the presence of a target element and completes the test if it exists.
     * This method is typically used as a final step in a test to verify the success of previous actions.
     */
     checkElementAndCompleteTest() {
         cy.log('Step: Checking for the presence of the target element');
         cy.xpath(BillingPageLocators.targetXPath)
             .should('exist')
             .then(() => {
                 cy.log('Completed: The target element exists, test will be marked as successful.');
                 // Здесь можно добавить дополнительные действия для завершения теста, если необходимо
             });
     }
}

export default BillingPageAccountBilling;
