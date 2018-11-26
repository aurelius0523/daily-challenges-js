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

var input = '1111';
var combinationCount = 1;

// overlap loop
for (var i = 0; i < input.length - 1; i++) {
    var number = input[i] + input[i + 1];
    if (number <= 26) {
        console.log('overlap loop number = ' + number);
        combinationCount += 1;
    }
}

// non-overlap loop
var duplicateArray = [];
for (var j = 0; j < input.length; j += 2) {
    var _number = input[j] + input[j + 1];
    if (!_number.includes('undefined') && _number <= 26 && !duplicateArray.includes(_number)) {
        console.log('non overlap loop number = ' + _number);
        combinationCount += 1;
        duplicateArray.push(_number);
    }
}

console.log(combinationCount);