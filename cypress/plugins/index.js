module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)
  // Здесь можно зарегистрировать другие задачи, если это необходимо
  return config
}
