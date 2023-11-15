// CatalogPage.js
// This class handles the validation of catalog images in a web application.

import { CatalogLocators } from './CatalogTilesLocators/Catalog_Locators';

class CatalogPage {

    // Method to check the presence and proper loading of an image
   checkImagePresence(imageLocator, imageAlt) {
        console.log(`Validating the presence and visibility of image with locator: ${imageLocator}`);

        // Check if the image is present and visible
        cy.get(imageLocator, { timeout: 10000 })
          .should('be.visible')
          .then(($img) => {
              // Ensure the image element is valid before proceeding
              if (!$img || $img.length === 0 || !$img[0].naturalWidth) {
                  throw new Error(`Image not found or not loaded properly for locator: ${imageLocator}`);
              }
              expect($img[0].naturalWidth, 'Image width').to.be.greaterThan(0);
          });

        // Check the 'alt' attribute separately
        cy.get(imageLocator)
          .should('have.attr', 'alt')
          .then((alt) => {
              expect(alt, 'alt attribute').to.equal(imageAlt);
          });

        console.log(`Image validation completed for locator: ${imageLocator}`);
    }

    // Method to validate images for a specific category
    validateCategoryImages(category) {
        // Log message indicating the start of image validation for a category
        console.log(`Starting validation for ${category.name} images.`);
        // Calling checkImagePresence method for each category
        this.checkImagePresence(category.locator, category.alt);
        // Log message indicating the completion of image validation for a category
        console.log(`Validated ${category.name} image.`);
    }

    // Method to validate all images in the catalog
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

        // Mapping categories to their respective locators and alt texts
        const imageCategories = categories.map(category => ({
            name: category,
            locator: CatalogLocators[`Img_${category.replace(/ & /g, '_').replace(/ /g, '_')}`],
            alt: CatalogLocators[`Alt_${category.replace(/ & /g, '_').replace(/ /g, '_')}`]
        }));

        // Logging the start of the image validation process
        console.log('Starting validation of all images.');
        // Iterating over each category and validating its images
        imageCategories.forEach(category => {
            this.validateCategoryImages(category);
        });
        // Logging the completion of the image validation process
        console.log('Completed validation of all images.');
    }
}

export default CatalogPage;
