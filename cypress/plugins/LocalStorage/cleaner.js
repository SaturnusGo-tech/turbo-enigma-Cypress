export const forceClickClearCart = () => {
  cy.document().then(document => {
    console.log('Поиск кнопки очистки корзины');
    const clearCartButton = document.querySelector('.vc-button.vc-button--size--sm.vc-button--color--secondary.vc-button--outline--secondary.self-start');

    if (clearCartButton) {
      console.log('Кнопка очистки корзины найдена. Выполнение клика.');
      clearCartButton.click();
    } else {
      console.log('Кнопка очистки корзины не найдена.');
    }
  });
};

