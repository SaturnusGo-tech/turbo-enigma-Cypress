export const CartPageLocators = {
    /**
     * CSS Selector for the cart value.
     * This selector targets the second child div within the element with the ID 'products'.
     * Typically used to retrieve information about the products in the cart.
     */
    cartValue: '#products > div:nth-child(2)',

    /**
     * XPath Selector for the 'Proceed to Checkout' button.
     * This selector finds an anchor tag (a) inside the second child div of the element with the ID 'order-summary'.
     * Generally used to navigate to the checkout process.
     */
    proceedCheckoutButton: '//*[@id="order-summary"]/div[2]/a'
};
