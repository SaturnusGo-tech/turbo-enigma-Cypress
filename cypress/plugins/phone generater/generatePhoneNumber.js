/**
 * Generates a random US phone number.
 * @returns {string} Phone number in the format (XXX) XXX-XXXX
 */
export function generatePhoneNumber() {
    const areaCode = Math.floor(Math.random() * 900 + 100); // Generates a number between 100 and 999
    const firstPart = Math.floor(Math.random() * 900 + 100); // Generates a number between 100 and 999
    const secondPart = Math.floor(Math.random() * 9000 + 1000); // Generates a number between 1000 and 9999

    return `(${areaCode}) ${firstPart}-${secondPart}`;
}

export default generatePhoneNumber