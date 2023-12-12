export const HomePageLocators = {

    imageUrl: "https://qa-opus.omniapartners.com/cms-content/assets/catalog/21057/d52d9a30489640dc8ea7b0ee2c651733/Getty Images_Education 1.png",

    /**
     * CSS Selector for the 'Education' category item button.
     * Targets an image element with the alt text 'Education'.
     * Typically used for selecting a specific category on the home page.
     */
    categoryItemButton: 'img[alt="Education"]',

    /**
     * XPath Selector for the 'GI' category item.
     * This complex selector navigates through several divs to reach the specific button for the 'GI' category.
     * Used to select a particular category item within the application's structure.
     */
    categoryItem_GI: '//*[@id="app"]/div/div[4]/div/div/div/div/div/div[4]/div[5]/div[5]/div[1]/button',

    /**
     * XPath Selector to open the filters collection.
     * Finds a button within a nested div structure starting from the root div with the ID 'app'.
     * Used for opening the filter options on a page.
     */
    openFiltersCollection: '//*[@id="app"]/div/div[4]/div/div/div/div/div/div[3]/button',

    /**
     * Absolute XPath Selector for the 'PocketNurse' checkbox.
     * Directly navigates to the input element representing the 'PocketNurse' checkbox.
     * Used for selecting this specific checkbox from a list of filters.
     */
    checkBoxPocketNurse: '/html/body/div[4]/div[2]/div[1]/div[2]/div/div/label[2]/input',

    /**
     * Absolute XPath Selector for the 'Accept Reference' button.
     * Navigates directly to the button responsible for accepting a reference.
     * Typically used in a dialog or modal window to confirm a selection.
     */
    acceptReference: '/html/body/div[4]/div[3]/div/button[2]',

    /**
     * XPath Selector for the 'PN' category item.
     * Targets a specific category item in a deeply nested div structure starting from the root div with ID 'app'.
     * Used to select the 'PN' category item specifically.
     */
    categoryItemPN: '//*[@id="app"]/div/div[4]/div/div/div/div/div[2]/div[5]/div[5]/div[1]/div[1]/div/div[1]/div/img',

    /**
     * XPath Selector to open the shopping cart.
     * Navigates through the application structure to find the cart icon.
     * Used to access the shopping cart from the homepage.
     */
    openCart: '//*[@id="app"]/div/div[1]/div[1]/div[2]/a[2]/span/svg'
};
