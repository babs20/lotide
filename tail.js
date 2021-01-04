const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = array => {
  return array.slice(1);
};


let result = tail(["Hello", "How", "Are", "You"]);
assertEqual(result.length, 3);
assertEqual(result[0], "How");
assertEqual(result[1], "Are");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

result = tail([]);
assertEqual(result.length, 0);
assertEqual(result[0], undefined);
assertEqual(result[1], undefined);

result = tail(['One']);
assertEqual(result.length, 0);
assertEqual(result[0], undefined);
assertEqual(result[1], undefined);