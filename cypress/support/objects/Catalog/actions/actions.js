import createLocators from '../locators/locators';

/**
 * Class representing a catalog page.
 * Provides methods to validate the presence and attributes of images in different categories.
 */
class CatalogPage {
    /**
     * Constructs a new instance of the CatalogPage class.
     * Initializes locators for images based on the provided base URL.
     *
     * @param {string} baseUrl - The base URL used for creating image locators.
     */
    constructor(baseUrl) {
        this.locators = createLocators(baseUrl);
    }

    /**
     * Checks the presence and visibility of an image, and verifies its 'alt' attribute.
     * Utilizes explicit waits instead of hard-coded wait times.
     *
     * @param {string} imageLocator - The CSS locator for the image.
     * @param {string} imageAlt - The expected 'alt' attribute value for the image.
     */
    checkImagePresence(imageLocator, imageAlt) {
        cy.get(imageLocator, {timeout: 20000}) // Explicit wait up to 20 seconds
            .should('be.visible')
            .and($img => {
                if (!$img[0].naturalWidth) {
                    throw new Error(`Image not loaded for locator: ${imageLocator}`);
                }
            })
            .and('have.attr', 'alt', imageAlt);
    }

    /**
     * Validates the presence and attributes of images in a specific category.
     *
     * @param {Object} category - An object containing the locator and 'alt' text for a category.
     */
    validateCategoryImages(category) {
        this.checkImagePresence(category.locator, category.alt);
    }

    /**
     * Validates the presence and attributes of all images across various categories.
     * Iterates through a predefined list of categories to perform the validation.
     * Avoids hard-coded wait times for image loading.
     */
    validateAllImages() {
        const categories = [
            'Business Products & Services',
            'Facilities',
            'Information Technology',
            'Food',
            'Furniture',
            'Furnishings',
            'Education',
            'Construction',
            'Parks & Rec',
            'Disaster Preparedness & Relief',
            'Public Works',
            'Public Safety',
        ];

        const imageCategories = categories.map(category => ({
            name: category,
            locator: this.locators[`Img_${category.replace(/ & /g, '_').replace(/ /g, '_')}`],
            alt: this.locators[`Alt_${category.replace(/ & /g, '_').replace(/ /g, '_')}`]
        }));

        cy.wait(15000); // Wait for all images to load

        imageCategories.forEach(category => {
            this.validateCategoryImages(category);
        });
    }

    /**
     * Opens the table of supplier list.
     * It finds a link with a specific href attribute and then scrolls to it and clicks it.
     */
    openTableSupplierList() {
        cy.get('a[href="/home/supplier-tile"]') // Selects the link with the specific href
            .scrollIntoView() // Scrolls the page until the element is in view
            .click(); // Clicks the selected link
    }

    /**
     * Opens the supplier list.
     * This function locates a button containing the text "List" within a span and clicks it.
     */
    openSupplierList() {
        cy.xpath('//button[span[contains(text(), "List")]]') // Selects the button with the text 'List'
            .click(); // Clicks the selected button
    }


    /**
     * Scrolls to load all images on the page.
     * It continually scrolls to the bottom of the page until no new images are loaded.
     */
    scrollToLoadAllImages() {
        let previousLength = 0;
        let attempts = 0;

        function loadMoreImages() {
            cy.get('img').then(($imgs) => {
                if ($imgs.length > previousLength) { // Checks if new images are loaded
                    previousLength = $imgs.length; // Updates the length for the next check
                    cy.scrollTo('bottom'); // Scrolls to the bottom of the page
                    cy.wait(1000); // Waits for images to load
                    loadMoreImages(); // Recursively calls itself to load more images
                } else if (attempts < 3) { // Allows a few attempts to load more images
                    attempts++;
                    cy.wait(1000); // Waits before trying again
                    loadMoreImages();
                } else {
                    cy.log('All images have been loaded'); // Logs when all images are loaded
                }
            });
        }

        loadMoreImages();
    }

    /**
     * Finds and saves SVG URLs.
     * It scrolls through the page, checks for new SVG images at each scroll,
     * and saves the URLs of these images to a file.
     */
    findAndSaveSvgUrls() {
        const svgUrls = [];
        let lastImgLength = 0;
        let attempts = 0;

        function checkImages() {
            cy.get('img').then(($imgs) => {
                if (lastImgLength !== $imgs.length) { // Checks if new images are loaded
                    lastImgLength = $imgs.length; // Updates the length for the next check
                    cy.scrollTo('bottom'); // Scrolls to the bottom of the page
                    cy.wait(1000); // Waits for images to load
                    attempts = 0; // Resets attempts counter on new images load
                    checkImages(); // Recursively calls itself to check for more images
                } else if (attempts < 3) { // Allows a few attempts to load more images
                    attempts++;
                    cy.wait(1000); // Waits before trying again
                    checkImages();
                } else {
                    $imgs.each((index, img) => { // Iterates through each image
                        const src = img.src;
                        // Filters and saves SVG URLs
                        if (src.startsWith('https://uat-opus.omniapartners.com') && src.includes('.svg')) {
                            svgUrls.push(src);
                        }
                    });
                    if (svgUrls.length > 0) {
                        const filename = 'svgUrls.txt';
                        const content = svgUrls.join('\n');
                        cy.task('writeToFile', {filename, content: content}); // Writes URLs to a file
                        cy.log(`${svgUrls.length} SVG URLs found and saved.`);
                    } else {
                        cy.log('No SVG URLs found.'); // Logs if no SVG URLs found
                    }
                }
            });
        }

        checkImages(); // Initiates the image checking process
    }
}

export default CatalogPage;