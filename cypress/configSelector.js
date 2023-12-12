const fs = require('fs');
const path = require('path');

function getConfig(env) {
    const configPath = path.join(__dirname, 'environments.json');
    const configFile = fs.readFileSync(configPath);
    const environments = JSON.parse(configFile);

    return environments[env];
}

const currentEnvironment = process.env.CYPRESS_ENV || 'qa'; // Используйте переменную окружения CYPRESS_ENV для определения текущего окружения
const config = getConfig(currentEnvironment);

if (!config) {
    console.error(`Environment not found: ${currentEnvironment}`);
    process.exit(1);
}

// Экспорт конфигурации для использования в тестах Cypress
module.exports = config;
