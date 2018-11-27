/**
 * Day 007
 * This problem was asked by Facebook.
 * Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
 * For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
 * You can assume that the messages are decodable. For example, '001' is not allowed.
 */

const getNumberOfWays = (input) => {
    let numberOfWays = 0;
    if (input.startsWith('0')) {
        return numberOfWays;
    }

    if (input.length === 0 || input === undefined) {
        return 1;
    }

    const firstTwoNumbers = input.charAt(0) + input.charAt(1);
    if (input.length >= 2 && parseInt(firstTwoNumbers) > 10 && parseInt(firstTwoNumbers) <= 26) {
        return getNumberOfWays(input.substring(1)) + getNumberOfWays(input.substring(2));
    } else {
        return getNumberOfWays(input.substring(1));
    }
};

console.log(getNumberOfWays('2626'));
