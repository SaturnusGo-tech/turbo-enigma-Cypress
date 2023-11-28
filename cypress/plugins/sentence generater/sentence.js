const words = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et",
    "dolore", "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam"
];

/**
 * Generates a random sentence with a specified number of words.
 * Selects random words from the 'words' array and concatenates them into a sentence.
 * @param {number} wordCount - Number of words in the sentence.
 * @returns {string} A random sentence ending with a period.
 */
function generateRandomSentence(wordCount) {
    let sentence = [];
    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        sentence.push(words[randomIndex]);
    }
    return sentence.join(' ') + '.';
}

/**
 * Generates random text consisting of a specified number of sentences.
 * Each sentence has a random length within a defined range.
 * This function is useful for generating mock text for testing or placeholders.
 * @param {number} sentenceCount - Number of sentences in the text.
 * @returns {string} Randomly generated text composed of multiple sentences.
 */
export function generateRandomText(sentenceCount) {
    let text = [];
    for (let i = 0; i < sentenceCount; i++) {
        // Generate sentences of random lengths between 4 and 10 words
        const randomSentenceLength = Math.floor(Math.random() * 7) + 4;
        text.push(generateRandomSentence(randomSentenceLength));
    }
    return text.join(' ');
}
