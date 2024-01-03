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
     * Throws an error if the image is not loaded or the 'alt' attribute does not match.
     *
     * @param {string} imageLocator - The CSS locator for the image.
     * @param {string} imageAlt - The expected 'alt' attribute value for the image.
     */
    checkImagePresence(imageLocator, imageAlt) {
        cy.get(imageLocator, { timeout: 20000 })
          .should('be.visible')
          .then($img => {
              if (!$img[0].naturalWidth) {
                  throw new Error(`Image not loaded for locator: ${imageLocator}`);
              }
          })
          .should('have.attr', 'alt', imageAlt);
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
}

export default CatalogPage;
