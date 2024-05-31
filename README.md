# First Character Finder

## Description
The `firstCharFinder` function is a TypeScript utility that identifies the first non-repeating character in a given string. It processes the input by removing all whitespace and then utilizes a `Map` to track the occurrence of each character.

## How It Works
1. **Whitespace Removal**: The function first removes all spaces from the input string to ensure that whitespace does not affect character counting.
2. **Character Mapping**: It then iterates over the string, mapping each character to its frequency of occurrence.
3. **Non-Repeating Character Identification**: Finally, it iterates over the string once more to find the first character that appears only once.

If all characters repeat, it returns the message `"there is no single character"`.

## Usage
To use this function, simply import it into your TypeScript file and pass a string as an argument:

```typescript
import firstCharFinder from './firstCharFinder';

const sampleInput = "your input string here";
const firstNonRepeatingChar = firstCharFinder(sampleInput);

console.log(firstNonRepeatingChar); // Outputs the first non-repeating character or the no-single-character message
