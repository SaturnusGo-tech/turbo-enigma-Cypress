const { defineConfig } = require("cypress");


require('dotenv').config();

module.exports = defineConfig({
  env: {
    username: process.env.OPUS_LOGIN,
    password: process.env.OPUS_PASSWORD
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});
