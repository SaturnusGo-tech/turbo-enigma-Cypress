module.exports = (on, config) => {
    const fs = require('fs');
    const path = require('path');

    on('task', {
        saveSvgUrls(urls) {
            const filePath = path.join(__dirname, '..', 'urls.txt');
            fs.writeFileSync(filePath, urls.join('\n'), 'utf-8');
            return null;
        }
    });
};