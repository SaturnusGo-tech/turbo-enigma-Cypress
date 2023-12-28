export const BillingPageLocators = {

     /**
     * XPath locator for the button that opens the payment method section.
     * It navigates through a series of divs from the root element with ID 'app' to reach the specific button.
     */
    OpenPaymentMethod: '//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div/div[2]/div/div[2]/div[1]/div[2]/div',

     /**
     * XPath locator for selecting the 'Credit Card' option as the payment method.
     * This locator finds a specific span element within a nested structure in the payment method section.
     */
    SelectPaymentMethodCreditCard: '//*[@id="app"]/div[3]/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div/div[2]/div/div[2]/div[1]/div[2]/div[2]/ul/li/span',

     /**
     * XPath locator for opening the list of available billing addresses.
     * It targets a button within a complex nested div structure starting from the root element with ID 'app'.
     */
    OpenBillingAddressList: '//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div/div[1]/div[1]/div[2]/div/p/button',

     /**
     * Absolute XPath locator for selecting a specific payment address.
     * Directly navigates to a button within a table structure in a modal or dropdown.
     */
    SelectPaymentAddress: '/html/body/div[3]/div/div/div/div[2]/div/div/div[1]/table/tbody/tr[1]/td[3]/button',

      /**
     * XPath locator for confirming the selected payment preferences.
     * It targets a button within a dialog, specifically focusing on the accept or confirm button.
     */
    AcceptPaymentPreference: '//*[@id="headlessui-dialog-14"]/div[2]/div/div/div[2]/button[3]',

     /**
     * XPath locator for opening the payment methods for 'Pocket Nurse'.
     * Navigates through the div structure to find the button for Pocket Nurse payment options.
     */
    OpemSupplierPocketNurseMethod: '//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/button',

      /**
     * XPath locator for selecting 'Pocket Nurse' as the payment method.
     * It targets a specific list item (li) within a dropdown or list structure.
     */
    SelectPocketNursePaymentMethod: '//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/div/ul/li/span',

     /**
     * XPath locator for the 'Review Order' button.
     * It's typically located in the order summary section and used to navigate to the order review page.
     */
     ReviewOrderButton: 'a[href="/checkout/review"]',


     /**
     * XPath locator for the 'Place Order' button.
     * This locator is used to finalize the order, located within the order summary section.
     */
    PlaceOrderButton: '//*[@id="order-summary"]/div[2]/button',

      /**
     * XPath locator for navigating back to the cart.
     * Targets a specific list item or link in a navigation structure.
     */
    GoBackToCart: '//*[@id="app"]/div/div[2]/div/div/div[1]/ul/li',

     /**
     * XPath locator for the button to cancel or pull back the payment.
     * Located typically in the order summary for cancelling the current transaction.
     */
    PullBackPaymentButton: '//*[@id="order-summary"]/div[2]/button',
      /**
     * XPath locator for confirming the cancellation or pullback of the payment method.
     * This locator targets a confirmation button within a dialog or modal.
     */
    PullBackPaymentMethodConfirm: '//*[@id="app"]/div/div[2]/div/div/div/div/div[2]/div[1]/div/div[2]/div[2]/div/div[2]/button',
    /**
     * XPath locator for a target element, used as a verification step in testing.
     * This locator is used to confirm the presence of a specific element, ensuring test accuracy.
     */
    targetXPath: '//*[@id="app"]/div/div[4]/div/div[2]/div/div/div/strong'
};
