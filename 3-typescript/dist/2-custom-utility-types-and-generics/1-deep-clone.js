"use strict";
/**
 * Challenge: Create a deep clone function
 *
 * Create a function that takes an object and returns a deep clone of that object. The function should handle nested objects, arrays, and primitive types.
 *
 * Requirements:
 * - The function should accept an object of any type.
 * - It should return a new object that is a deep clone of the original object.
 * - The function should handle nested objects and arrays.
 * - It should handle primitive types (strings, numbers, booleans, null, undefined).
 * - The function should not use any external libraries
 */
//? implement the function  here
function deepClone(input) {
    // Handle primitives and null
    if (input === null || typeof input !== 'object') {
        return input;
    }
    // Handle Date
    if (input instanceof Date) {
        return new Date(input.getTime());
    }
    // Handle Array
    if (Array.isArray(input)) {
        const cloneArr = [];
        for (const item of input) {
            cloneArr.push(deepClone(item));
        }
        return cloneArr;
    }
    // Handle Object
    const cloneObj = {};
    for (const key in input) {
        if (input.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(input[key]);
        }
    }
    return cloneObj;
}
