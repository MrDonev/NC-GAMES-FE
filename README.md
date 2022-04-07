# remote-pre-doc-searching

This resource is designed to help you get used to using online documentation to help yourself when you are stuck.

It is not true to say you are supposed to remember every possible function or syntax - much of being a programmer is about smart googling. This means when you are faced with a challenge you can't solve in the real world you are unlikely to find a stackoverflow that gives you the whole solution, so relying on this approach as you deal with smaller tasks will not help you later on.

This morning try using the more comprehensive and clearer documentation to navigate websites such as

- [MDN](https://developer.mozilla.org/en-US/)
- [Javascript.info](https://javascript.info/)
- [Devdocs.io](https://devdocs.io/)

With the following methods find out and write down the answers to these questions:

1. What data type(s) does the method (function) take as its arguments?
2. What data type does the method return as its value?
3. Does it have any _optional arguments_?
4. Does it overwrite existing data or does it create new data (does it mutate) ?
5. Summarise what the function does
6. Can you think of a situation where the method might prove useful?

## Strings

- endsWith(searchString, length) - uses string as an argument, if provided with length parameter ,it is used as the length of the string. Returns true/false.
- toUpperCase() - doesn't take parameters. Returns new string converted to upper case.
- substr(start, length) - deprecated method. Returns a portion of the string,starting at the specified index and extending for a given number of characters afterwards.
- substring(indexStart, indexEnd) - returns the part of the string between indexStart and indexEnd, or to the end of the string.
- slice(beginIndex, endIndex) - this method extracts a section of the string and returns it as a new string, without modifying the original string.
- concat(str1, str2, ... ,strN) - concatenates the strings passed as arguments and returns a new string.
- split(separator,limit) - divides a string into an ordered list of substrings, returns an array.

## Operators

- `+` - add or convert to number
- `%` - remainder operator
- `++` - postfix increment
- `+=` - addition assignment
- `!` - logical not operator

## Numbers

- toFixed(num) -
- parseFloat() -
- Math.ceil() - 

## Arrays

- isArray()
- flat()
- push()
- shift()
- slice()
- splice()
- join()

## Objects

- keys()
- hasOwnProperty()

## Regular Expressions

- test
- match
- replace
