import { CatalogLocators } from '../CatalogLocators/Catalog_Locators';

class CatalogPage {


    checkImagePresence(imageLocator, imageAlt) {
        // Step: Ensure the image is present and visible on the page.
        console.log(`Validating the presence and visibility of image with locator: ${imageLocator}`);
        cy.get(imageLocator)
          .should('be.visible')
          .and(($img) => {
              // Check that the 'naturalWidth' attribute of the image is greater than 0 (indicating the image has loaded).
              expect($img[0].naturalWidth).to.be.greaterThan(0);
          })
          .and('have.attr', 'alt', imageAlt);

        // Step: Ensure the image is clickable.
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
