import {lastNames} from "./data/data";

/**
 * Generates a random last name.
 * @returns {string} A random last name.
 */
export function generateRandomLastName() {
    const randomIndex = Math.floor(Math.random() * lastNames.length);
    return lastNames[randomIndex];
}