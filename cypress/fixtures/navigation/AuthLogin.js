export default class AuthLogin {
  constructor() {
    const env = Cypress.env('envName') || 'qa';
    const envConfig = require('../../config.json')[env];
    this.url = envConfig.url;
    this.email = envConfig.email;
    this.password = envConfig.password;
  }


  // Метод для посещения домашней страницы
  visitHomePage() {
    cy.visit(this.url, { failOnStatusCode: false, timeout: 10000 });
    cy.log(`Visited ${this.url}`);
  }

  // Получение данных для авторизации
  getCredentials() {
    return {

      email: this.email,
      password: this.password
    };
  }
}

