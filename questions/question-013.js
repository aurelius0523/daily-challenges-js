/**
 * This problem was asked by Amazon.
 * Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
 * For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
 */

const main13 = (input, distinctCharCount) => {
    const charToCharCountMap = getMapOfCharacterToCharacterCount(input);
    const charactersWithSpecificCharCount = getListOfCharactersWithSpecificCount(charToCharCountMap, distinctCharCount);

    if (charactersWithSpecificCharCount.length === 1) {
        const firstOccurenceIndex = input.indexOf(charactersWithSpecificCharCount[0]);
        const secondOccurenceIndex = input.indexOf(charactersWithSpecificCharCount[0], firstOccurenceIndex + 1);
        console.log(input.substring(firstOccurenceIndex, secondOccurenceIndex + 1));
    } else {
        let highestOccurence = 0;
        let longestSubstring = '';
        charactersWithSpecificCharCount.forEach((character) => {
            const firstOccurenceIndex = input.indexOf(character);
            const secondOccurenceIndex = input.indexOf(character, firstOccurenceIndex + 1);

            const substringLength = secondOccurenceIndex - firstOccurenceIndex;

            if (substringLength > highestOccurence) {
                highestOccurence = substringLength;
                longestSubstring = input.substring(firstOccurenceIndex, secondOccurenceIndex + 1);
            }
        });

        console.log(longestSubstring);
    }
};

const getMapOfCharacterToCharacterCount = (inputString) => {
    let charToCharCountMap = new Map();
    for (let i = 0; i < inputString.length; i++) {
        const character = inputString[i];
        const charCount = charToCharCountMap.get(character);

        if (!charCount) {
            charToCharCountMap.set(character, 1);
        } else {
            charToCharCountMap.set(character, charCount + 1);
        }
    }
    return charToCharCountMap;
};

const getListOfCharactersWithSpecificCount = (charToCharCountMap, distinctCharCount) => {
    let charactersWithDistinctCharCount = [];
    charToCharCountMap.forEach((charCount, char) => {
        if (charCount === distinctCharCount) {
            charactersWithDistinctCharCount.push(char);
        }
    });
    return charactersWithDistinctCharCount;
};

main13('as12s352', 2);
