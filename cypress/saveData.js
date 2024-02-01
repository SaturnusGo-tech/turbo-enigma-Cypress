const fs = require('fs');
const axios = require('axios');
const path = require('path');

/**
 * Downloads an image from the specified URL and saves it to the given filepath.
 * @param {string} url - The URL of the image to download.
 * @param {string} filepath - The path where the image will be saved.
 */
const downloadImage = async (url, filepath) => {
  try {
    // Making a request to the URL to get the image data
    const response = await axios({
      url,
      responseType: 'arraybuffer', // Getting the data as a buffer
      validateStatus: status => status >= 200 && status < 300 // Only considering successful responses
    });

    // Getting the Content-Type of the response
    const contentType = response.headers['content-type'];

    // Checking if the Content-Type is of SVG images
    if (contentType.includes('image/svg+xml')) {
      // Writing the image data to a file at the specified filepath
      fs.writeFileSync(filepath, response.data);
      console.log(`Downloaded: ${filepath}`);
    } else {
      console.log(`Skipped non-SVG image: ${url} with Content-Type ${contentType}`);
    }
  } catch (error) {
    console.error(`Error downloading ${url}: ${error}`);
  }
};

/**
 * Ensures that the given directory path exists, and if not, creates it.
 * @param {string} dirpath - The path of the directory to check or create.
 */
const ensureDirectoryExists = (dirpath) => {
  if (!fs.existsSync(dirpath)){
    fs.mkdirSync(dirpath, { recursive: true });
  }
};

/**
 * Reads a list of URLs from a file and downloads each image.
 * @param {string} file - The path to the file containing URLs of images.
 */
const downloadImagesFromList = async (file) => {
  const urls = fs.readFileSync(file, 'utf8').split('\n');

  // Path where the downloaded images will be stored
  const imagesDirPath = path.resolve(__dirname, 'downloaded_svgs');
  ensureDirectoryExists(imagesDirPath);

  // Looping through each URL and downloading the image
  for (const url of urls) {
    if (url) {
      const filename = url.split('/').pop().split('?')[0]; // Removing URL parameters
      const filepath = path.resolve(imagesDirPath, filename);
      try {
        await downloadImage(url, filepath);
        console.log(`Downloaded: ${filename}`);
      } catch (error) {
        console.error(`Error downloading ${filename}: ${error}`);
      }
    }
  }
};

// The file containing the list of URLs to download
const urlsFile = 'downloads/svgUrls.txt';
downloadImagesFromList(urlsFile).catch(console.error);
