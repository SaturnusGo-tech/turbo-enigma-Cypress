export function clickRandomAddToCartButton() {
  // Using XPath to select all 'Add to cart' buttons within a specific div structure.
  // The buttons are identified by their text and parent class attributes.
  cy.xpath("//div[contains(@class, 'flex') and contains(@class, 'w-full')]//button[contains(., 'Add to cart')]")
    .then($buttons => {
      // Selecting a random button from the list of 'Add to cart' buttons.
      const randomIndex = Math.floor(Math.random() * $buttons.length);
      const buttonToClick = $buttons[randomIndex];

      // Clicking the randomly selected 'Add to cart' button.
      cy.wrap(buttonToClick).click();

      // Checking for the presence of a specific div element after the click action.
      // The div is identified by its data attribute and class name.
      cy.get("body").then($body => {
        if ($body.find("div[data-v-b0da629d][class='whitespace-nowrap rounded-full bg-[color:var(--color-in-stock-out-bg)] px-[0.625rem] py-[1px] text-[13px] leading-5 text-[color:var(--color-in-stock-out)] lg:text-[11px]']").length > 0) {
          // If the specific div is found, the function searches for another 'Add to cart' button to click.
          // This ensures that the action is performed on an available (in-stock) item.
          cy.xpath("//div[contains(@class, 'flex') and contains(@class, 'w-full')]//button[contains(., 'Add to cart')]")
            .then($otherButtons => {
              let nextButtonToClick;
              do {
                // Selecting another random button, ensuring it is different from the first one clicked.
                const nextRandomIndex = Math.floor(Math.random() * $otherButtons.length);
                nextButtonToClick = $otherButtons[nextRandomIndex];
              } while (nextButtonToClick === buttonToClick && $otherButtons.length > 1) // Ensuring a different button is selected.

              // Clicking the newly selected 'Add to cart' button.
              cy.wrap(nextButtonToClick).click();
            });
        }
      });
    });
}
