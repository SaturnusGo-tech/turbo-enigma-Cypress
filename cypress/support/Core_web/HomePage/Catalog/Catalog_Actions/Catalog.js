import { CatalogLocators } from '../CatalogLocators/Catalog_Locators';

class CatalogPage {

    // The checkImagePresence function verifies that the image is present, visible, and loaded
    checkImagePresence(imageLocator, imageAlt) {
        // Logging: Validating the presence and visibility of the image
        console.log(`Validating the presence and visibility of image with locator: ${imageLocator}`);

        // Get the image element considering the custom timeout
        // to increase waiting time in case of slow image loading
        cy.get(imageLocator, { timeout: 10000 }) // Set the timeout to 10 seconds
          .should('be.visible') // Check that the element is visible
          .and(($img) => {
              // Verify that the natural width of the image is greater than 0, indicating it has loaded
              expect($img[0].naturalWidth, 'Image width').to.be.greaterThan(0);
          })
          .and('have.attr', 'alt', imageAlt) // Verify the presence of the alt attribute in the image

        // If necessary, check that the image is clickable
        console.log(`Checking clickability of image with locator: ${imageLocator}`);
    }

    validateCategoryImages(category) {
        console.log(`Starting validation for ${category.name} images.`);
        this.checkImagePresence(category.locator, category.alt);
        console.log(`Validated ${category.name} image.`);
    }

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
            locator: CatalogLocators[`Img_${category.replace(/ & /g, '_').replace(/ /g, '_')}`],
            alt: CatalogLocators[`Alt_${category.replace(/ & /g, '_').replace(/ /g, '_')}`]
        }));

        console.log('Starting validation of all images.');
        imageCategories.forEach(category => {
            this.validateCategoryImages(category);
        });
        console.log('Completed validation of all images.');
    }
}

export default CatalogPage;
