class PageColor {
  constructor() {
    /**
     * Initialize a Set to store unique found colors.
     */
    this.foundColors = new Set();
  }

  /**
   * Method to find specified colors in the styles.
   * It iterates over all <style> elements in the document's <head> section
   * and checks if any of the expected colors are present.
   *
   * @param {string[]} expectedColors - Array of colors in HEX format to find.
   */
    findColorsInStyles(expectedColors) {
    cy.get('html head style').each((styleElement) => {
      const styleContent = styleElement.html();

      expectedColors.forEach(color => {
        const colorRegex = new RegExp(color, 'gi');
        if (colorRegex.test(styleContent)) {
          this.foundColors.add(color);
        }
      });
    }).then(() => {
      const matchedColorsCount = expectedColors.filter(color => this.foundColors.has(color)).length;
      expect(matchedColorsCount).to.be.at.least(3); // Тест успешен, если совпадают 3 из 4 цветов
    });
  }

  /**
   * Method to check colors and log the results. This method uses `findColorsInStyles`
   * to search for the colors and then logs the found colors to a file.
   *
   * @param {string[]} expectedColors - Array of colors in HEX format to find and log.
   */
  checkAndLogColors(expectedColors) {
    this.findColorsInStyles(expectedColors); // Call the method to find colors in styles

    // Use a Cypress task to log the found colors to a file
    cy.task('writeToFile', {
      filename: 'found-colors.txt',
      content: Array.from(this.foundColors).join('\n')
    });
  }
}

export default PageColor;
