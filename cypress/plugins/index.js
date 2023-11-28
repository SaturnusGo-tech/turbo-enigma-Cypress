// cypress/plugins/index.js
const fs = require('fs');
const path = require('path');

module.exports = (on, config) => {
    on('task', {
        writeToFile({ filename, content }) {
            const filePath = path.join(__dirname, '../../', filename);
            fs.writeFileSync(filePath, content, 'utf8');
            return null;
        }
    });
};
