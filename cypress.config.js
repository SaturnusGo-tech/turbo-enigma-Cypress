const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  projectId: "fei7tm",
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        writeToFile({ filename, content }) {
          const dirPath = path.join(__dirname, '..', 'cypress');
          const filePath = path.join(dirPath, filename);

          // Проверяем, существует ли директория
          if (!fs.existsSync(dirPath)){
            fs.mkdirSync(dirPath); // Создаем директорию, если она не существует
          }

          fs.writeFileSync(filePath, content, 'utf8');
          return null;
        }
      });

      return config;
    },
  },
});
