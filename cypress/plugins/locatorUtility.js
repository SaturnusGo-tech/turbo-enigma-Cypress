const productNames = [
  "Bowman® Glove Box Dispenser - Quad - Divided",
  "Global Industrial™ English 3 Ring Safety Data Sheet Binder",
  "Slice® Auto Retractable Utility Knife - 10554",
  "Pull Down Privacy Screens for 48\"W Dry Erase Boards",
  "Global Industrial™ Wire Binder Rack",
  "Global Industrial™ Single Stainless Steel Glove Box Holder",
  "U-Channel Sign Post, 8'L, 1.12 lbs./ft., Galvanized Post",
  "250 lbs. Concrete Base with 18\" Nesting Sleeve",
  "Magnetic Acrylic Pocket Marker Holder",
  "Global Industrial™ Plastic Box Cutter",
  "Global Industrial Heavy Duty Magnets, Pack of 4",
  "U-Channel Sign Post, 6'L, 1.12 lbs./ft., Green Post",
  "Global Industrial Dry Erase Eraser - Pack of 6",
  "ZING Eco GHS-SDS Binder (English/Spanish), 3.0\" Ring",
  "Global Industrial™ Quadruple Glove Box Holder",
];

{/* export function getAddToCartButtonLocator(texts, commonParentSelector, buttonSelector) {
  const randomText = texts[Math.floor(Math.random() * texts.length)];

  return cy.get('body').then($body => {
    const elementsWithText = $body.find('span').filter((index, el) => {
      return Cypress.$(el).text().includes(randomText);
    });

    if (elementsWithText.length === 0) {
      throw new Error('No element with the specified text was found');
    }

    const addButton = elementsWithText.closest(commonParentSelector).find(buttonSelector);
    if (addButton.length) {
      return cy.wrap(addButton);
    } else {
      throw new Error('ADD TO CART button not found');
    }
  });
}
*/}
export function getRandomTextElementLocator(texts) {
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  return `:contains('${randomText}')`;
}

export function getAddToCartButtonLocator() {
  return '.vc-button';
}

export default productNames;

