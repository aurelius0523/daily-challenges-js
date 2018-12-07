/**
 * This problem was asked by Twitter.
 * Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.
 * For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
 * Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
 */

const main11 = (userInput, autocompleteArray) => {
    const finalItem = autocompleteArray.filter((item) => item.startsWith(userInput));

    console.log(finalItem);
};

const main11_alt = (userInput) => {
    let dictionary = new Map();
    dictionary.set('d', ['dog', 'deer', 'deal']);
    dictionary.set('do', ['dog']);
    dictionary.set('dog', ['dog']);
    dictionary.set('de', ['deer', 'deal']);
    dictionary.set('dee', ['deer']);
    dictionary.set('deer', ['deer']);
    dictionary.set('dea', ['deal']);
    dictionary.set('deal', ['deal']);

    console.log(dictionary.get(userInput));
};

main11('de', ['dog', 'deer', 'deal']);
main11_alt('deal');
