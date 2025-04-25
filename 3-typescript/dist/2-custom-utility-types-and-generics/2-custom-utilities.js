"use strict";
/**
 * Exercise #1: Filter object properties by type.
 *
 * Using a utility type `OmitByType`, this example demonstrates how to pick properties
 * from a type `T` whose values are *not* assignable to a specified type `U`.
 *
 * @example
 * type OmitBoolean = OmitByType<{
 *   name: string;
 *   count: number;
 *   isReadonly: boolean;
 *   isEnable: boolean;
 * }, boolean>;
 *
 * Resulting type:
 *
 * {
 * name: string;
 * count: number;
 * }
 */
const todo = {
    title: "Hey",
    description: "foobar"
};
// Add here your example
const fn = (v) => {
    if (v) {
        return 1;
    }
    else {
        return 2;
    }
};
/*
expected result:
{
  name: string;
  age: number;
  address: string;
}
*/
