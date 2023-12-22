export const clearCart = () => {
  return cy.getCookie('.AspNetCore.Identity.Application').then(cookie => {
    if (!cookie || !cookie.value) {
      throw new Error('Кука аутентификации не найдена или не имеет значения');
    }
    const token = cookie.value;
    return cy.request({
      method: 'POST',
      url: 'https://qa-opus.omniapartners.com/xapi/graphql',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: {
        operationName: "ClearCart",
        query: `
          mutation ClearCart($command: InputClearCartType!) {
            clearCart(command: $command) {
              id
              itemsQuantity
            }
          }
        `,
        variables: {
          command: {
            cartId: "16b4a67a-c26a-4ec2-b2c8-07b7a0908103",
            storeId: "opus",
          }
        }
      },
      failOnStatusCode: false
    }).then(response => {
      console.log('Ответ сервера на запрос очистки корзины:', response.body);
      return response;
    });
  });
};
