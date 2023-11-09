import { CatalogLocators } from '../CatalogLocators/Catalog_Locators';

class CatalogPage {


 // Функция checkImagePresence проверяет, что изображение присутствует, видимо и загружено
checkImagePresence(imageLocator, imageAlt) {
    // Логирование: Валидация присутствия и видимости изображения
    console.log(`Validating the presence and visibility of image with locator: ${imageLocator}`);

    // Получаем элемент изображения с учетом пользовательского таймаута
    // для увеличения времени ожидания в случае медленной загрузки изображения
    cy.get(imageLocator, { timeout: 10000 }) // Устанавливаем таймаут в 10 секунд
      .should('be.visible') // Проверяем, что элемент видим
      .and(($img) => {
          // Проверяем, что натуральная ширина изображения больше 0, что указывает на его загрузку
          expect($img[0].naturalWidth, 'Image width').to.be.greaterThan(0);
      })
      .and('have.attr', 'alt', imageAlt) // Проверяем наличие атрибута alt у изображения

    // Если необходимо, проверяем, что изображение можно кликнуть
    console.log(`Checking clickability of image with locator: ${imageLocator}`);
    // В этом месте могут быть дополнительные проверки на кликабельность, если это требуется для вашего теста
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
