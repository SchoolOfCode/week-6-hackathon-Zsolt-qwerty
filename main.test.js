// import vitest elements
import { test, expect, describe } from 'vitest';

// import the function being tested
import { letterMatches } from './main.js';

// testing a key wordle function
// test player's 4-letter word input if any of its letters are in the keyword
// check if it returns the correct number of matches and their positions
describe('letter matches', () => {

    // test input of "tick" and keyword of "test"
    test('input "tick" should return { green: [{ t, 1 }], amber: [] }', () => {
        // assign
        const keyword = 'test';
        const input = 'tick';
        const expected = {
            green: [
                { letter: 't', position: 1 },
            ],
            amber: [],
        };
        // act
        const result = letterMatches(keyword, input);
        // assert
        expect(result).toEqual(expected);
    });
    
    // test input of "fast" and keyword of "test"
    test('input "fast" should return { green: [{ s, 3 }, { t, 4 }], amber: [] }', () => {
        // assign
        const keyword = 'test';
        const input = 'fast';
        const expected = {
            green: [
                { letter: 's', position: 3 },
                { letter: 't', position: 4 },
            ],
            amber: [],
        };
        // act
        const result = letterMatches(keyword, input);
        // assert
        expect(result).toEqual(expected);
    });
    
    // test input of "tent" and keyword of "test"
    test('input "tent" should return { green: [{ t, 1 }, { e, 2 }, { t, 4 }], amber: [] }', () => {
        // assign
        const keyword = 'test';
        const input = 'tent';
        const expected = {
            green: [
                { letter: 't', position: 1 },
                { letter: 'e', position: 2 },
                { letter: 't', position: 4 },
            ],
            amber: [],
        };
        // act
        const result = letterMatches(keyword, input);
        // assert
        expect(result).toEqual(expected);
    });
    
    // test input of "shop" and keyword of "test"
    test('input "shop" should return { green: [], amber: [{ s, 1 }]}', () => {
        // assign
        const keyword = 'test';
        const input = 'shop';
        const expected = {
            green: [],
            amber: [
                { letter: 's', position: 1 },
            ]
        };
        // act
        const result = letterMatches(keyword, input);
        // assert
        expect(result).toEqual(expected);
    });
    
    // test input of "pick" and keyword of "test"
    test('input "pick" should return { message: "no hit" }', () => {
        // assign
        const keyword = 'test';
        const input = 'pick';
        const expected = { message: 'no hit' };
        // act
        const result = letterMatches(keyword, input);
        // assert
        expect(result).toEqual(expected);
    });

// end of group
});

// testing error handling
describe('error messages', () => {

    // test input of "two" and keyword of "test"
    test('input "two"  should return error message: "Input must be a 4 letter word" }', () => {
        // assign
        const keyword = 'test';
        const input = 'two';
        const expected = new Error('Input must be a 4 letter word');
        // act + assert
        expect(() => letterMatches(keyword, input)).toThrowError(expected);
    });

    // test input of "tEst" and keyword of "test"
    test('input "tEst" should return error message: "Input must only contain lowercase letters" }', () => {
        // assign
        const keyword = 'test';
        const input = 'tEst';
        const expected = new Error('Input must only contain lowercase letters');
        // act + assert
        expect(() => letterMatches(keyword, input)).toThrowError(expected);
    });
    
    // test input of "t3st" and keyword of "test"
    test('input "t3st" should return error message: "Input must only contain lowercase letters" }', () => {
        // assign
        const keyword = 'test';
        const input = 't3st';
        const expected = new Error('Input must only contain lowercase letters');
        // act + assert
        expect(() => letterMatches(keyword, input)).toThrowError(expected);
    });

// end of group
});
