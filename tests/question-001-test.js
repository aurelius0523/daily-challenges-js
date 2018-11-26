import { main } from '../questions/question-001.js';
let chai = require('chai');
chai.should();

describe('Question 001', () => {
    describe('given the inputs are invalid', () => {
        describe('wow', () => {
            it('testCase', () => {
                console.log('magic');
            });
        });
    });
    // it('has values that sums up to k of 10', () => {
    //     main([0, 10, 3, 7], 10).should.be.true;
    // });

    // it('has no combination that sums up to k', () => {
    //     main([1, 2, 3, 4], 99).should.be.false;
    // });

    // it('has duplicate values that sum up to k', () => {
    //     main([1, 1, 1], 2).should.be.true;
    // });

    // it('has empty input and should be false', () => {
    //     main([], 2).should.be.false;
    // });
});
