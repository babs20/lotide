# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @bradyblair/lotide`

**Require it:**

`const _ = require('@bradyblair/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: Return the first element in a new array

- `tail(array)`: Return the all elements in a new array, _except_ the first element.
- `middle(array)`: Return the middle element in an array. If the amount of elements in the array is even, return the middle two elements.
- `countLetters(string)`: Calculate the frequency of each character in a string and return as an object. (Not including whitespace);
- `countOnly(arrayOfItems, itemsToCountObject)`: Check each element in arrayOfItems, if the element is equal to a key in itemsToCountObject and has the value of true, add it to the returned object as key, value pair. The key being the name and the value being the frequency it appears in arrayOfItems.
- `findKey(object)`: Return the first key in the object that matches the callback functions conditional statement. Return undefined if there are no matches.
- `findKeyByValue(object)`: Return the first key that is `===` to the valueToFind. Return undefined if there are no matches.
- `flatten(array)`: When given an array with an with one level of nesting, return a single array with all of the nested array elements included in the parent array.
- `letterPositions(string)`: Return an object with the position of each character in the string. _(NOTE: The amount of whitespace will not be included in the object, but will NOT be skipped when indexing the characters)._ Each character key's value will be an array of each index the character appears in the string.
- `map(array, callback)`: Return a new array according to the callback function.
- `takeUntil(array, callback)`: Return a new array based on the array argument up until the callback function's conditional.
- `without(array, arrayOfItemsToRemove)`: Return a new array without the elements from the arrayOfItemsToRemove argument.
- `assertArraysEqual(actualArray, expectedArray)`: Print to the console the results of a `===` conditional check on the given arrays.
- `assertEqual(actualPrimitive, expectedPrimitive)`: Print to the console the results of a `===` conditional check on the given primitives.
- `assertObjectsEqual(actualObject, expectedObject)`: Print to the console the results of a `===` conditional check on the given objects.
- `eqObject(object1, object2)`: Return a boolean value after comparing the strict equality of two objects.
- `eqArrays(array1, array2)`: Return a boolean value after comparing the strict equality of two arrays.
