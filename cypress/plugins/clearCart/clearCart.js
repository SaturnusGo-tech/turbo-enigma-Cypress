const clearCart = () => {
  console.log('Отправка запроса на очистку корзины');
  return cy.request({
    method: 'POST',
    url: 'https://qa-opus.omniapartners.com/xapi/graphql',
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
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  }).then(response => {
    console.log('Ответ сервера на запрос очистки корзины:', response);
  });
};

export default clearCart;
