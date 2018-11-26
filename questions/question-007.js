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

const charMap = new Map();
charMap.set(1, 'a');
charMap.set(2, 'b');
charMap.set(3, 'c');
charMap.set(4, 'd');
charMap.set(5, 'e');
charMap.set(6, 'f');
charMap.set(7, 'g');
charMap.set(8, 'h');
charMap.set(9, 'i');
charMap.set(10, 'j');
charMap.set(11, 'k');
charMap.set(12, 'l');
charMap.set(13, 'm');
charMap.set(14, 'n');
charMap.set(15, 'o');
charMap.set(16, 'p');
charMap.set(17, 'q');
charMap.set(18, 'r');
charMap.set(19, 's');
charMap.set(20, 't');
charMap.set(21, 'u');
charMap.set(22, 'v');
charMap.set(23, 'w');
charMap.set(24, 'x');
charMap.set(25, 'y');
charMap.set(26, 'z');

const input = '1111';
let combinationCount = 1;

// overlap loop
for (let i = 0; i < input.length - 1; i++) {
    const number = input[i] + input[i + 1];
    if (number <= 26) {
        console.log(`overlap loop number = ${number}`);
        combinationCount += 1;
    }
}

// non-overlap loop
let duplicateArray = [];
for (let j = 0; j < input.length; j += 2) {
    const number = input[j] + input[j + 1];
    if (!number.includes('undefined') && number <= 26 && !duplicateArray.includes(number)) {
        console.log(`non overlap loop number = ${number}`);
        combinationCount += 1;
        duplicateArray.push(number);
    }
}

console.log(combinationCount);
