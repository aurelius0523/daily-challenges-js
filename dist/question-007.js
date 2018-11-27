'use strict';

/**
 * Day 007
 * This problem was asked by Facebook.
 * Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
 * For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
 * You can assume that the messages are decodable. For example, '001' is not allowed.
 */

// 1542
// aedb
// odb

//1237
//abcg
//mcg
//ayg

//26262
//bfbfb
//zzb

//1111
//aaaa
//aka
//kaa
//aak
//kk

//2626
//bfbf
//zz

//3333
//cccc

//2222
//bbbb
//bvb
//bbv
//vbb
//vv

//12345
//abcde
//lcde
//ayde

var getNumberOfWays = function getNumberOfWays(input) {
    var numberOfWays = 0;
    if (input.startsWith('0')) {
        return numberOfWays;
    }

    if (input.length === 0 || input === undefined) {
        return 1;
    }

    var firstTwoNumbers = input.charAt(0) + input.charAt(1);
    if (input.length >= 2 && parseInt(firstTwoNumbers) > 10 && parseInt(firstTwoNumbers) <= 26) {
        console.log('here');
        return getNumberOfWays(input.substring(1)) + getNumberOfWays(input.substring(2));
    } else {
        console.log('there');
        return getNumberOfWays(input.substring(1));
    }
};

console.log(getNumberOfWays('2626'));