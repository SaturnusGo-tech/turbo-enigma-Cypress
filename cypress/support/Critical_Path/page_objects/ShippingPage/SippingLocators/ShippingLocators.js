export const ShippingPageLocators = {
    /**
     * XPath locator for the button that opens the shipping addresses section.
     * This locator navigates through the DOM structure starting from the main 'app' div.
     */
    openShippingAddresses: '//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div/div[2]/div[1]/div[1]/div[2]/div/p/button',

    /**
     * XPath locator for selecting a specific shipping address.
     * This locator finds a button in a modal or dropdown, used in standard contexts.
     */
    selectShippingAddress: '//button[@type="button" and contains(@class, "font-roboto-condensed") and contains(text(), "Select")]',

    /**
     * XPath locator for selecting a shipping address in a web-specific context.
     * Targets a button within a table row, used in web environments.
     */
    selectShippingAddressWeb: '//*[@id="headlessui-dialog-2"]/div[2]/div/div/div[1]/table/tbody/tr[2]/td[3]/button',

    /**
     * Fallback XPath locator for selecting a shipping address if the primary locator fails.
     * Targets an alternative button within the shipping address selection modal.
     */
    IfNoFoundSelectThis: '//*[@id="headlessui-dialog-2"]/div[2]/div/div/div[1]/div[1]/div[2]/div/div/div[2]/button',

    /**
     * Fallback XPath locator for selecting a shipping address in a web context if the primary locator fails.
     * Targets an alternative button within a table in the shipping address selection modal.
     */
    IfNoFoundSelectThisWeb: '//*[@id="headlessui-dialog-2"]/div[2]/div/div/div[1]/table/tbody/tr[3]/td[3]/button',

    /**
     * XPath locator for confirming the selected shipping address.
     * Targets the confirm button in the shipping address selection modal.
     */
    acceptShippingAddress: '//*[@id="headlessui-dialog-2"]/div[2]/div/div/div[2]/button[3]',

    /**
     * XPath locator for opening the delivery address options.
     * Targets a button to reveal various delivery address choices.
     */
    openDeliverAddress: '//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div/div[2]/div[1]/div[2]/div/div[2]/div/span/span',

    /**
     * XPath locator for selecting a delivery method.
     * Navigates to a specific list item within a dropdown or modal for delivery method selection.
     */
    selectDeliveryMethod: '//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div/div[2]/div[1]/div[2]/div/div[2]/div[2]/ul/li',

    /**
     * XPath locator for selecting a delivery method in a web-specific context.
     * Targets a button within a table row, used in web environments for delivery method selection.
     */
    electDeliveryMethodWeb: '//*[@id="headlessui-dialog-2"]/div[2]/div/div/div[1]/table/tbody/tr[4]/td[3]/button',

    /**
     * XPath locator for opening the list of addresses to choose from for delivery.
     * Targets a button that expands the address list for delivery address selection.
     */
    openAddressList: '//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div[2]/div[1]/div[1]/div[2]/div/p/button',

    /**
     * XPath locator for selecting a shipping address that matches the type of the billing address.
     * Used to ensure consistency in address selection for both shipping and billing.
     */
    selectEqualTypeOfShippingAddress: '//*[@id="headlessui-dialog-8"]/div[2]/div/div/div[1]/table/tbody/tr[1]/td[3]/button',

    /**
     * XPath locator for accepting the chosen shipping preference.
     * Targets the confirm button after selecting a shipping method.
     */
    acceptShippingPreference: '//*[@id="headlessui-dialog-8"]/div[2]/div/div/div[2]/button[3]',

    /**
     * XPath locator for opening the delivery method options.
     * Used to reveal different delivery method choices within the application.
     */
    openDeliveryMethod: '//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div[2]/div[1]/div[2]/div/div[2]/button',

    /**
     * XPath locator for selecting a specific delivery option.
     * Targets a list item in a dropdown or modal, used to choose a particular delivery method.
     */
    selectDeliveryOption: '//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div[2]/div[1]/div[2]/div/div[2]/div/ul/li[1]',

    /**
     * CSS locator for navigating to the billing page.
     * Targets a hyperlink that leads to the billing section of the checkout process.
     */
    goNextToBillingPage: 'a[href="/checkout/billing"]'
};
