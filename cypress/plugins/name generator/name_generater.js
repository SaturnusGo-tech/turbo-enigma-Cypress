import {firstNames} from "./data/data";

/**
 * Generates a random first name.
 * @returns {string} A random first name.
 */
export function generateRandomFirstName() {
    const randomIndex = Math.floor(Math.random() * firstNames.length);
    return firstNames[randomIndex];
}
