/**
 * Encodes special characters in a given path component of a URL.
 * Specifically, it replaces '&' with '%26' to ensure correct URL encoding.
 * This function is used to construct fully qualified image source URLs.
 *
 * @param {string} baseUrl - The base URL to which the path will be appended.
 * @param {string} path - The path component of the URL, containing the relative path to the image.
 * @return {string} The fully constructed and encoded URL.
 */
const InvertURL = (baseUrl, path) => {
    const correctedPath = path.replace(/&/g, "%26");
    return `img[src="${baseUrl}/${correctedPath}"]`;
};

/**
 * Creates a set of locators for images, dynamically adjusting the base URL.
 * In the case of the demo environment, '-storefront' is removed from the URL.
 * This function generates locators with corrected URLs for each environment.
 *
 *
 *
 * @param {string} baseUrl - The base URL, which may be adjusted for the demo environment.
 * @return {Object} An object containing the locators for different images and categories.
 */
export const DynamicID = (baseUrl = '') => {

    // Adjusts baseUrl for the demo environment by removing '-storefront'
    console.log('baseUrl:', baseUrl);
    const isDemoEnvironment = baseUrl.includes('omnia-demo-storefront');

    const correctedBaseUrl = isDemoEnvironment ? baseUrl.replace('-storefront', '') : baseUrl;

    // Defines locators for different images and categories
    return {
        Img_Business_Products_Services: InvertURL(correctedBaseUrl, 'cms-content/assets/catalog/21057/38b1d91d44a84260b621260ad9582a8f/Getty Images_Business Products & Services 1.png'),
        Img_Facilities: InvertURL(correctedBaseUrl, 'cms-content/assets/catalog/21057/f57c36085bf34fe3be084d2280c88915/Getty Images_Facilities 1.png'),
        Img_Information_Technology: InvertURL(correctedBaseUrl, 'cms-content/assets/catalog/21057/6bc1d63f0ed94827ad9e463cc51b1001/Getty Images_Information Technology 1.png'),
        Img_Food: InvertURL(correctedBaseUrl, 'cms-content/assets/catalog/21057/8a2eb57793d744efaf75768cb98dccf8/Getty Images_Food 1.png'),
        Img_Furniture: InvertURL(correctedBaseUrl, 'cms-content/assets/catalog/21057/8effc4b1384942d7a615beaaf2e1e9ef/Getty Images_Furniture 1.png'),
        Img_Furnishings: InvertURL(correctedBaseUrl, 'cms-content/assets/catalog/21057/dc2885ddda25480c8f091d7ce9057182/Getty Images_Furnishings 1.png'),
        Img_Education: InvertURL(correctedBaseUrl, 'cms-content/assets/catalog/21057/d52d9a30489640dc8ea7b0ee2c651733/Getty Images_Education 1.png'),
        Img_Construction: InvertURL(correctedBaseUrl, 'cms-content/assets/catalog/21057/ebfbf53e728c437a8b6b5d446a2c4dbb/Getty Images_Construction 1.png'),
        Img_Parks_Rec: InvertURL(correctedBaseUrl, 'cms-content/assets/catalog/21057/d1404c01d36449158b20b6aa5d88151c/Getty Images_Parks & Recreation 1.png'),
        Img_Disaster_Preparedness_Relief: InvertURL(correctedBaseUrl, 'cms-content/assets/catalog/21057/eec29d75658b466787d39b95f2a40e71/Getty Images_Disaster Preparedness & Relief 1.png'),
        Img_Public_Works: InvertURL(correctedBaseUrl, 'cms-content/assets/catalog/21057/a1edc29c309a4ee483c41f13096c63fc/Getty Images_Public Works 1.png'),
        Img_Public_Safety: InvertURL(correctedBaseUrl, 'cms-content/assets/catalog/21057/2e296eac1f2f4db5974cb7a59d790170/Getty Images_Public Safety 1.png'),

        Alt_Business_Products_Services: "Business Products & Services",
        Alt_Facilities: "Facilities",
        Alt_Information_Technology: "Information Technology",
        Alt_Food: "Food",
        Alt_Furniture: "Furniture",
        Alt_Furnishings: "Furnishings",
        Alt_Education: "Education",
        Alt_Construction: "Construction",
        Alt_Parks_Rec: "Parks & Rec",
        Alt_Disaster_Preparedness_Relief: "Disaster Preparedness & Relief",
        Alt_Public_Works: "Public Works",
        Alt_Public_Safety: "Public Safety"
    };
};

export default DynamicID;
