const fs = require('fs');
const axios = require('axios');
const path = require('path');

// Path to the file containing the list of SVG URLs
const urlsFile = 'downloaded_svgs.txt';

// Path to the folder on the desktop where the SVGs will be downloaded
const desktopPath = path.join(require('os').homedir(), 'Desktop', 'DownloadedSVGs');

/**
 * Downloads an SVG image from a given URL and saves it to a specified filepath.
 * @param {string} url - The URL of the SVG image to download.
 * @param {string} filepath - The path where the SVG image will be saved.
 */
const downloadImage = async (url, filepath) => {
  try {
    // Making a request to the URL to get the image data as a buffer
    const response = await axios({
      url,
      responseType: 'arraybuffer',
    });

    // Writing the image data to a file at the specified filepath
    fs.writeFileSync(filepath, response.data);
    console.log(`Downloaded: ${filepath}`);
  } catch (error) {
    // Logging any errors that occur during the download process
    console.error(`Error downloading ${url}: ${error}`);
  }
};

/**
 * Ensures that a directory exists at the given path, and if not, creates it.
 * @param {string} dirpath - The path of the directory to check or create.
 */
const ensureDirectoryExists = (dirpath) => {
  if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath, { recursive: true });
  }
};

/**
 * Main function to download all SVGs from the list in the file.
 * It reads the URLs from the file and downloads each SVG to the desktop path.
 */
const downloadAllSvgs = async () => {
  // Ensuring that the directory on the desktop exists
  ensureDirectoryExists(desktopPath);

  // Reading the list of URLs from the file
  const urls = fs.readFileSync(urlsFile, 'utf8').split('\n');
  // Iterating over each URL and downloading the SVG
  for (const url of urls) {
    if (url) {
      // Extracting the filename from the URL and removing any URL parameters
      const filename = url.split('/').pop().split('?')[0];
      const filepath = path.resolve(desktopPath, filename);
      // Downloading the SVG
      await downloadImage(url, filepath);
    }
  }
};

// Executing the download process
downloadAllSvgs().catch(console.error);
