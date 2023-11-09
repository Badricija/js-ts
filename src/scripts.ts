/*Define all functions as arrow functions like in the example. 
Each function has a unique title. 
Name functions in camelCase and with descriptive titles.*/

/*Define types for all arguments passed to the function and add a return type.
Write a function that takes two numbers (a and b) as argument
Sum a and b
task 1
myFunction(1,2)
Expected
3

myFunction(1,10)
Expected
11

myFunction(99,1)
Expected
100 */

function sumTwoNumbers(a: number, b: number) {
    return a + b;
}
console.log(sumTwoNumbers(1,2)); // =3
console.log(sumTwoNumbers(1,10)); // =11
console.log(sumTwoNumbers(99,1)); // =100


/*task 2
Write a function that takes a value as argument
Return the type of the value

myFunction(1)
Expected
'number'

myFunction(false)
Expected
'boolean'

myFunction({})
Expected
'object'

myFunction(null)
Expected
'object'

myFunction('string')
Expected
'string'

myFunction(['array'])
Expected
'object' */

const getType = (value: string | number | boolean | string[]) => typeof value;

console.log(getType(1)) ; // number
console.log(getType(false)) ; // boolean
console.log(getType({})) ; // object
console.log(getType(null)) ; // object
console.log(getType('string')) ; // 'string'
console.log(getType(['array'])) ; // object

/* task 3
Write a function that takes two values, say a and b, as arguments
Return true if the two values are equal and of the same type

myFunction(2, 3)
Expected
false 

myFunction(3, 3)
Expected
true 

myFunction(1, '1')
Expected
false 

myFunction('10', '10')
Expected
true
 */

const twoValuesTrueOrFalse = (a: string | number,b: string | number) => a === b;
console.log(twoValuesTrueOrFalse(2,3)); // false
console.log(twoValuesTrueOrFalse(3,3)); // true
console.log(twoValuesTrueOrFalse(1,'1')); // false
console.log(twoValuesTrueOrFalse('10','10')); // true

/* task 4
Write a function that takes a string (a) and a number (n) as arguments
Return the nth character of 'a'

myFunction('abcd',1)
Expected
'a'

myFunction('zyxbwpl',5)
Expected
'w'

myFunction('gfedcba',3)
Expected
'e' */

const getStringOrNumber = (a: string | any[],n: number) => a[n-1];
console.log(getStringOrNumber('abcd',1)); // a
console.log(getStringOrNumber('zyxbwpl',5)); // w
console.log(getStringOrNumber('gfedcba',3)); // e

/* task 5
Write a function that takes a string (a) as argument
Remove the first 3 characters of a
Return the result

myFunction('abcdefg')
Expected
'defg'

myFunction('1234')
Expected
'4'

myFunction('fgedcba')
Expected
'dcba' */

const doTheRemove = (a: string) => a.substring(3);
console.log(doTheRemove('abcdefg')); // 'defg'
console.log(doTheRemove('1234')); // '4'
console.log(doTheRemove('fgedcba')); // 'dcba'

/* task 6 
Write a function that takes a string as argument
Extract the last 3 characters from the string
Return the result

myFunction('abcdefg')
Expected
'efg'

myFunction('1234')
Expected
'234'

myFunction('fgedcba')
Expected
'cba' */

const useThreeCharacters = (string: string | any[]) => string.slice(-3);
console.log(useThreeCharacters('abcdefg')) // 'efg'
console.log(useThreeCharacters('1234')) // '234'
console.log(useThreeCharacters('fgedcba')) // 'cba'

/* task 7
Write a function that takes a string (a) as argument
Get the first 3 characters of a
Return the result

myFunction('abcdefg')
Expected
'abc'

myFunction('1234')
Expected
'123'

myFunction('fgedcba')
Expected
'fge' */
const useFirstCharacters = (a: string) => a.substring(0,3);
console.log(useFirstCharacters('abcdefg')); // 'abc'
console.log(useFirstCharacters('1234')); // '123'
console.log(useFirstCharacters('fgedcba')); // 'fge'

/*task 8 
Write a function that takes a string (a) as argument
Extract the first half a
Return the result

myFunction('abcdefgh')
Expected
'abcd'

myFunction('1234')
Expected
'12'

myFunction('gedcba')
Expected
'ged' */

const theFirstHalf = (a: string) => a.substring(0, Math.floor(a.length / 2));

console.log(theFirstHalf('abcdefgh')); // Output: 'abcd'
console.log(theFirstHalf('1234'));     // Output: '12'
console.log(theFirstHalf('gedcba'));   // Output: 'ged'


/* task 9
Write a function that takes a string (a) as argument
Remove the last 3 characters of a
Return the result

myFunction('abcdefg')
Expected
'abcd'

myFunction('1234')
Expected
'1'

myFunction('fgedcba')
Expected
'fged' */

const removeLast = (a: string | any[]) => a.slice(0,-3);
console.log(removeLast('abcdefg')) // 'abcd'
console.log(removeLast('1234')) // '1'
console.log(removeLast('fgedcba')) // 'fged'

/*task 10
Write a function that takes two numbers (a and b) as argument
Return b percent of a

myFunction(100,50)
Expected
50

myFunction(10,1)
Expected
0.1

myFunction(500,25)
Expected
125 */
const makePercent = (a: number,b: number) => (b / 100) * a;
console.log(makePercent(100,50)); // 50
console.log(makePercent(10,1)); // 0.1
console.log(makePercent(500,25)); // 125

/*task 11 
Write a function that takes 6 values (a,b,c,d,e,f) as arguments
Sum a and b
Then substract by c
Then multiply by d and divide by e
Finally raise to the power of f and return the result
Tip: mind the order

myFunction(6,5,4,3,2,1)
Expected
10.5

myFunction(6,2,1,4,2,3)
Expected
2744

myFunction(2,3,6,4,2,3)
Expected
-8 */

const someMath = (a: number,b: number,c: number,d: number,e: number,f: number) => (((a + b - c) * d / e) ** f);
console.log(someMath(6,5,4,3,2,1)); // 10.5
console.log(someMath(6,2,1,4,2,3)); // 2744
console.log(someMath(2,3,6,4,2,3)); // -8

/*task 12
Write a function that takes a number as argument
If the number is even, return true
Otherwise, return false

myFunction(10)
Expected
true

myFunction(-4)
Expected
true

myFunction(5)
Expected
false

myFunction(-111)
Expected
false */

const ifItIsTrue = (num: number) => num % 2 === 0;
console.log(ifItIsTrue(10)); // true
console.log(ifItIsTrue(-4)); // true
console.log(ifItIsTrue(5)); // false
console.log(ifItIsTrue(-111)); // false

/* task 13
Write a function that takes two strings (a and b) as arguments
Return the number of times a occurs in b


myFunction('m', 'how many times does the character occur in this sentence?')
Expected
2

myFunction('h', 'how many times does the character occur in this sentence?')
Expected
4

myFunction('?', 'how many times does the character occur in this sentence?')
Expected
1

myFunction('z', 'how many times does the character occur in this sentence?')
Expected
0 */

const repeatString = (a: string, b: string) => b.split(a).length - 1;
console.log(repeatString('m', 'how many times does the character occur in this sentence?')); // 2
console.log(repeatString('h', 'how many times does the character occur in this sentence?')); // 4
console.log(repeatString('?', 'how many times does the character occur in this sentence?')); // 1
console.log(repeatString('z', 'how many times does the character occur in this sentence?')); // 0

/*task 14
Write a function that takes a number (a) as argument
If a is a whole number (has no decimal place), return true
Otherwise, return false

myFunction(4)
Expected
true 

myFunction(1.123)
Expected
false 

myFunction(1048)
Expected
true 

myFunction(10.48)
Expected
false */

const aIsWholeNumber = (a) => Number.isInteger(a);
console.log(aIsWholeNumber(4)); // true
console.log(aIsWholeNumber(1.123)); // false
console.log(aIsWholeNumber(1048)); // true
console.log(aIsWholeNumber(10.48)); // false

/*task 15
Write a function that takes two numbers (a and b) as arguments
If a is smaller than b, divide a by b
Otherwise, multiply both numbers
Return the resulting value

myFunction(10, 100)
Expected
0.1

myFunction(90, 45)
Expected
4050

myFunction(8, 20)
Expected
0.4

myFunction(2, 0.5)
Expected
1 */

const ifItIsSmaller = (a: number, b: number) => a < b ? a / b : a * b;
console.log(ifItIsSmaller(10, 100)); // 0.1
console.log(ifItIsSmaller(90, 45)); // 4050
console.log(ifItIsSmaller(8, 20)); // 0.4
console.log(ifItIsSmaller(2, 0.5)); // 1

/*task 16
Write a function that takes two strings (a and b) as arguments
If a contains b, append b to the beginning of a
If not, append it to the end
Return the concatenation

myFunction('cheese', 'cake')
Expected
'cheesecake'

myFunction('lips', 's')
Expected
'slips'

myFunction('Java', 'script')
Expected
'Javascript'

myFunction(' think, therefore I am', 'I')
Expected
'I think, therefore I am' */

const appendBegining = (a: string | any[], b: string) => a.includes(b) ? b + a : a + b;
console.log(appendBegining('cheese', 'cake')); // 'cheesecake'
console.log(appendBegining('lips', 's')); // 'slips'
console.log(appendBegining('Java', 'script')); // 'Javascript'
console.log(appendBegining(' think, therefore I am', 'I')); // 'I think, therefore I am'

/* task 17
Write a function that takes a number (a) as argument
Round a to the 2nd digit after the comma
Return the rounded number

myFunction(2.12397)
Expected
2.12

myFunction(3.136)
Expected
3.14

myFunction(1.12397)
Expected
1.12

myFunction(26.1379)
Expected
26.14 */

const rounderNumber = (a: number) => Math.round(a * 100) / 100;
console.log(rounderNumber(2.12397)); // 2.12
console.log(rounderNumber(3.126)); // 3.14
console.log(rounderNumber(1.12397)); // 1.12
console.log(rounderNumber(26.1379)); // 26.14

/* task 18
Write a function that takes a number (a) as argument
Split a into its individual digits and return them in an array
Tip: you might want to change the type of the number for the splitting

myFunction(10)
Expected
[1,0]

myFunction(931)
Expected
[9,3,1]

myFunction(193278)
Expected
[1,9,3,2,7,8] */

const splitNumber = (a: number) => String(a).split('').map(Number);

console.log(splitNumber(10)); // [1,0]
console.log(splitNumber(931)); // [9,3,1]
console.log(splitNumber(193278)); // [1,9,3,2,7,8]

/*task 19
It seems like something happened to these strings
Can you figure out how to clear up the chaos?
Write a function that joins these strings together such that they form the following words:
'Javascript', 'Countryside', and 'Downtown'
You might want to apply basic JS string methods such as replace(), split(), slice() etc.

myFunction('java', 'tpi%rcs')
Expected
'Javascript'

myFunction('c%ountry', 'edis')
Expected
'Countryside'

myFunction('down', 'nw%ot')
Expected
'Downtown' */

const clearTheChaos = (firstStr: string, secondStr: string) => {
    firstStr = firstStr.replace(/[^a-z]/gi, '');
    secondStr = secondStr.replace(/[^a-z]/gi, '');
    if(firstStr === 'java'){
        return firstStr + secondStr.split('').reverse().join('');
    }else if (firstStr === 'coun'){
        return firstStr + 'try' + secondStr;
    } else {
        return firstStr + secondStr.split('').reverse().join('');
    }
}
console.log(clearTheChaos('java', 'tpi%rcs'));      // 'javascript'
console.log(clearTheChaos('c%ountry', 'edis'));     // 'countryside'
console.log(clearTheChaos('down', 'nw%ot'));        // 'downtown'

/*task 20 
This challenge is a little bit more complex
Write a function that takes a number (a) as argument
If a is prime, return a
If not, return the next higher prime number

myFunction(38)
Expected
41

myFunction(7)
Expected
7

myFunction(115)
Expected
127

myFunction(2000)
Expected
2003 */
const isPrime = (num: number) => {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
const primeHigher = (n: number) => {
    while(!isPrime(++n));
    return n;
}
console.log(primeHigher(38));  // 41
console.log(primeHigher(7));   // 7
console.log(primeHigher(115)); // 127
console.log(primeHigher(2000));  // 2003

/* task 21
Write a function that takes two numbers, say x and y, as arguments
Check if x is divisible by y
If yes, return x
If not, return the next higher natural number that is divisible by y

myFunction(1, 23)
Expected
23

myFunction(23, 23)
Expected
23

myFunction(7, 3)
Expected
9

myFunction(-5, 7)
Expected
0 */
const ifItIsDivisable = (x: number, y: number) => {
    if(x % y === 0) {
        return x;
    } else {
        while(x % y !== 0) {
            x++
        }
        return x;
    } 
}
console.log(ifItIsDivisable(1, 23)); // 23
console.log(ifItIsDivisable(23, 23)); // 23
console.log(ifItIsDivisable(7, 3)); // 9
console.log(ifItIsDivisable(-5, 7)); // 0

/* task 22
Write a function that takes two strings (a and b) as arguments
Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
Return the resulting string

myFunction('1234567','.')
Expected
'1.234.567'

myFunction('abcde','$')
Expected
'ab$cde'

myFunction('zxyzxyzxyzxyzxyz','w')
Expected
'zwxyzwxyzwxyzwxyzwxyz' */

 const puttingStringInString = (a: string | any[], b: string) => {
    let result = '';
    let count = 0;
    
    for (let i = a.length - 1; i >= 0; i--) {
    result = a[i] + result;
    count++;
    if (count % 3 === 0) {
        result = b + result;
    }
    }
    return result;
}

console.log(puttingStringInString('1234567','.')); // '1.234.567'
console.log(puttingStringInString('abcde','$')); // 'ab$cde'
console.log(puttingStringInString('zxyzxyzxyzxyzxyz','w')); // 'zwxyzwxyzwxyzwxyzwxyz'

/* task 23
Write a function that takes a string as argument
As it is, the string has no meaning
Increment each letter to the next letter in the alphabet
Return the correct word

myFunction('bnchmf')
Expected
'coding'

myFunction('bgddrd')
Expected
'cheese'

myFunction('sdrshmf')
Expected
'testing' */

const nextAlphabetLetter = (s: string) => {
    return s.split('').map(char => 
        String.fromCharCode(char.charCodeAt(0) + 1)
    ).join('');
} 

console.log(nextAlphabetLetter('bnchmf')); // 'coding'
console.log(nextAlphabetLetter('bgddrd')); // 'cheese'
console.log(nextAlphabetLetter('sdrshmf')); // 'testing'

/* task 24
Write a function that takes an array (a) and a value (n) as argument
Return the nth element of 'a'

myFunction([1,2,3,4,5],3)
Expected
3

myFunction([10,9,8,7,6],5)
Expected
6

myFunction([7,2,1,6,3],1)
Expected
7 */
const useArray = (a: { [x: string]: any; }, n: string | number) => a[n-1];
console.log(useArray([1,2,3,4,5],3)); // 3
console.log(useArray([10,9,8,7,6],5)); // 6
console.log(useArray([7,2,1,6,3],1)); // 7

/* task 25
Write a function that takes an array (a) as argument
Remove the first 3 elements of 'a'
Return the result

myFunction([1,2,3,4])
Expected
[4]

myFunction([5,4,3,2,1,0])
Expected
[2,1,0]

myFunction([99,1,1])
Expected
[] */
const removeFirstThree = (a: number[]) => {
    const copiedArray = [...a];
    copiedArray.splice(0, 3);
    return copiedArray;
}
console.log(removeFirstThree([1,2,3,4])); // [4]
console.log(removeFirstThree([5,4,3,2,1,0])); // [2,1,0]
console.log(removeFirstThree([99,1,1])); // []

/* task 26
Write a function that takes an array (a) as argument
Extract the last 3 elements of a
Return the resulting array

myFunction([1,2,3,4])
Expected
[2,3,4]

myFunction([5,4,3,2,1,0])
Expected
[2,1,0]

myFunction([99,1,1])
Expected
[99,1,1]
*/
const theLastInArray = (a: string | any[]) => a.slice(a.length - 3);
console.log(theLastInArray([1,2,3,4])); // [2,3,4]
console.log(theLastInArray([5,4,3,2,1,0])); // [2,1,0]
console.log(theLastInArray([99,1,1])); // [99,1,1]

/*task 27 
Write a function that takes an array (a) as argument
Extract the first 3 elements of a
Return the resulting array

myFunction([1,2,3,4])
Expected
[1,2,3]

myFunction([5,4,3,2,1,0])
Expected
[5,4,3]

myFunction([99,1,1])
Expected
[99,1,1] */
const theFirstInArray = (a: string | any[]) => a.slice(0, 3);
console.log(theFirstInArray([1,2,3,4])); // [1,2,3]
console.log(theFirstInArray([5,4,3,2,1,0])); // [5,4,3]
console.log(theFirstInArray([99,1,1])); // [99,1,1]

/*task 28
Write a function that takes an array (a) and a number (n) as arguments
It should return the last n elements of a

myFunction([1, 2, 3, 4, 5], 2)
Expected
[ 4, 5 ]

myFunction([1, 2, 3], 6)
Expected
[ 1, 2, 3 ]

myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)
Expected
[ 6, 7, 8 ] */

const arrayNumberArgument = (a: string | any[], n: number) => a.slice(a.length - n);
console.log(arrayNumberArgument([1, 2, 3, 4, 5], 2)); // [ 4, 5 ]
console.log(arrayNumberArgument([1, 2, 3], 6)); // [ 1, 2, 3 ]
console.log(arrayNumberArgument([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [ 6, 7, 8 ]

/* task 29
Write a function that takes an array (a) and a value (b) as argument
The function should clean a from all occurrences of b
Return the filtered array

myFunction([1,2,3], 2)
Expected
[1, 3]

myFunction([1,2,'2'], '2')
Expected
[1, 2]

myFunction([false,'2',1], false)
Expected
['2', 1]

myFunction([1,2,'2',1], 1)
Expected
[2, '2'] */
const cleanAllOccurrences = (a: any[], b: string | number | boolean) => a.filter((item: any) => item !== b);
console.log(cleanAllOccurrences([1,2,3], 2)); // [1, 3]
console.log(cleanAllOccurrences([1,2,'2'], '2')); // [1, 2]
console.log(cleanAllOccurrences([false,'2',1], false)); // ['2', 1]
console.log(cleanAllOccurrences([1,2,'2',1], 1)); // [2, '2']

/*task 30 
Write a function that takes an array (a) as argument
Return the number of elements in a

myFunction([1,2,2,4])
Expected
4

myFunction([9,9,9])
Expected
3

myFunction([4,3,2,1,0])
Expected
5 */

const arrayArgument = (a: string | any[]) => a.length;
console.log(arrayArgument([1,2,2,4])); // 4
console.log(arrayArgument([9,9,9])); // 3
console.log(arrayArgument([4,3,2,1,0])); // 5

/* task 31
Write a function that takes an array of numbers as argument
Return the number of negative values in the array

myFunction([1,-2,2,-4])
Expected
2

myFunction([0,9,1])
Expected
0

myFunction([4,-3,2,1,0])
Expected
1 */
const numberOfNegative = (arr: number[]) => arr.filter((num: number) => num < 0).length;
console.log(numberOfNegative([1,-2,2,-4])); // 2
console.log(numberOfNegative([0,9,1])); // 0
console.log(numberOfNegative([4,-3,2,1,0])); // 1


/* task 32
Write a function that takes an array of numbers as argument
It should return an array with the numbers sorted in descending order

myFunction([1,3,2])
Expected
[3,2,1]

myFunction([4,2,3,1])
Expected
[4,3,2,1] */
const arrayReverse = (arr: number[]) => arr.sort((a: number, b: number) => b - a);
console.log(arrayReverse([1,3,2])); // [3,2,1]
console.log(arrayReverse([4,2,3,1])); // [4,3,2,1]

/*task 33
Write a function that takes an array of strings as argument
Sort the array elements alphabetically
Return the result

myFunction(['b', 'c', 'd', 'a'])
Expected
['a', 'b', 'c', 'd']

myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])
Expected
['a', 'a', 'c', 'd', 'w', 'y', 'z'] */

const elementsAlphabeticaly = (arr: any[]) => arr.sort();
console.log(elementsAlphabeticaly(['b', 'c', 'd', 'a'])); // ['a', 'b', 'c', 'd']
console.log(elementsAlphabeticaly(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); // ['a', 'a', 'c', 'd', 'w', 'y', 'z']

/* task 34
Write a function that takes an array of numbers as argument
It should return the average of the numbers

myFunction([10,100,40])
Expected
50

myFunction([10,100,1000])
Expected
370

myFunction([-50,0,50,200])
Expected
50 */
const averageNumbers = (arr: any[]) => arr.reduce((sum: any, value: any) => sum + value, 0) / arr.length;
console.log(averageNumbers([10,100,40])); // 50
console.log(averageNumbers([10,100,1000])); // 370
console.log(averageNumbers([-50,0,50,200])); // 50

/* task 35
Write a function that takes an array of strings as argument
Return the longest string

myFunction(['help', 'me'])
Expected
'help'

myFunction(['I', 'need', 'candy'])
Expected
'candy' */

const longestString = (arr: any[]) => arr.reduce((longest: string | any[], current: string | any[]) => current.length > longest.length ? current : longest, ''); 
console.log(longestString(['help', 'me'])); // 'help'
console.log(longestString(['I', 'need', 'candy'])); // 'candy'

/* task 36
Write a function that takes an array as argument
It should return true if all elements in the array are equal
It should return false otherwise

myFunction([true, true, true, true])
Expected
true 

myFunction(['test', 'test', 'test'])
Expected
true 

myFunction([1,1,1,2])
Expected
false 

myFunction(['10',10,10,10])
Expected
false */
const trueOrFalse = (arr: any[]) => arr.every((val: any) => val === arr[0]);
console.log(trueOrFalse([true, true, true, true])); // true
console.log(trueOrFalse(['test', 'test', 'test'])); // true
console.log(trueOrFalse([1,1,1,2])); // false
console.log(trueOrFalse(['10',10,10,10])); // false

/* task 37
Write a function that takes arguments an arbitrary number of arrays
It should return an array containing the values of all arrays

myFunction([1, 2, 3], [4, 5, 6])
Expected
[1, 2, 3, 4, 5, 6]

myFunction(['a', 'b', 'c'], [4, 5, 6])
Expected
['a', 'b', 'c', 4, 5, 6]

myFunction([true, true], [1, 2], ['a', 'b'])
Expected
[true, true, 1, 2, 'a', 'b'] */

const returnArrayValue = (...arrays: (string[] | number[] | boolean[])[]) => [].concat(...arrays); 
console.log(returnArrayValue([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(returnArrayValue(['a', 'b', 'c'], [4, 5, 6])); // ['a', 'b', 'c', 4, 5, 6]
console.log(returnArrayValue([true, true], [1, 2], ['a', 'b'])); // [true, true, 1, 2, 'a', 'b']

/* task 38
Write a function that takes an array of objects as argument
Sort the array by property b in ascending order
Return the sorted array

myFunction([{a:1,b:2},{a:5,b:4}])
Expected
[{a:1,b:2},{a:5,b:4}]

myFunction([{a:2,b:10},{a:5,b:4}])
Expected
[{a:5,b:4},{a:2,b:10}]

myFunction([{a:1,b:7},{a:2,b:1}])
Expected
[{a:2,b:1},{a:1,b:7}] */
const arrayProperty = (arr: { b: number; }[] | { a: number; b: number; }[]) => arr.sort((a: { b: number; }, b: { b: number; }) => a.b - b.b);
console.log(arrayProperty([{a:1,b:2},{a:5,b:4}])); // [{a:1,b:2},{a:5,b:4}]
console.log(arrayProperty([{a:2,b:10},{a:5,b:4}])); // [{a:5,b:4},{a:2,b:10}]
console.log(arrayProperty([{a:1,b:7},{a:2,b:1}])); // [{a:2,b:1},{a:1,b:7}]

/* task 39
Write a function that takes two arrays as arguments
Merge both arrays and remove duplicate values
Sort the merge result in ascending order
Return the resulting array

myFunction([1, 2, 3], [3, 4, 5])
Expected
[ 1, 2, 3, 4, 5 ]

myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
Expected
[ -11, -10, 5, 22, 41,  42, 333] */
 const mergeArrays = (arr1: string | any[], arr2: number[]) => {
    let merged = arr1.concat(arr2);
    let unique = [...new Set(merged)];
    return unique.sort((a, b) => a - b);
} 
 console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
 console.log(mergeArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // [ -11, -10, 5, 22, 41,  42, 333]

/*task 40
Write a function that takes an array (a) and a number (b) as arguments
Sum up all array elements with a value greater than b
Return the sum

myFunction([1, 2, 3, 4, 5, 6, 7], 2)
Expected
25

myFunction([-10, -11, -3, 1, -4], -3)
Expected
1

myFunction([78, 99, 100, 101, 401], 99)
Expected
602 */
const sumAllArrays = (a: any[], b: number) => a.filter((val: number) => val > b).reduce((a: any, b: any) => a + b, 0);
console.log(sumAllArrays([1, 2, 3, 4, 5, 6, 7], 2)); //25
console.log(sumAllArrays([-10, -11, -3, 1, -4], -3)); //1
console.log(sumAllArrays([78, 99, 100, 101, 401], 99)); // 602
 
/* task 41 
Write a function that takes two numbers (min and max) as arguments
Return an array of numbers in the range min to max

myFunction(2, 10)
Expected
[2, 3, 4, 5, 6, 7, 8, 9, 10]

myFunction(1, 3)
Expected
[1, 2, 3]

myFunction(-5, 5)
Expected
[-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]

myFunction(2, 7)
Expected
[2, 3, 4, 5, 6, 7] */
const rangeNumbers = (min: number, max: number) => {
    const rangeArray = [];
    for(let i = min; i <= max; i++) {
      rangeArray.push(i);
    }
    return rangeArray;
  } 
console.log(rangeNumbers(2, 10)); //[2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rangeNumbers(1, 3)); //[1, 2, 3]
console.log(rangeNumbers(-5, 5)); //[-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(rangeNumbers(2, 7)); //[2, 3, 4, 5, 6, 7]

/*task 42 
Write a function that takes an array of strings as argument
Group those strings by their first letter
Return an object that contains properties with keys representing first letters
The values should be arrays of strings containing only the corresponding strings
For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
{ a: ['Alf', 'Alice'], b: ['Ben']}

myFunction(['Alf', 'Alice', 'Ben'])
Expected
{ a: ['Alf', 'Alice'], b: ['Ben']}

myFunction(['Ant', 'Bear', 'Bird'])
Expected
{ a: ['Ant'], b: ['Bear', 'Bird']}

myFunction(['Berlin', 'Paris', 'Prague'])
Expected
{ b: ['Berlin'], p: ['Paris', 'Prague']} */

const correspondingStrings = (strings: any[]) => {
    return strings.reduce((result: { [x: string]: any[]; }, string: string[]) => {
      const firstLetter = string[0].toLowerCase();
      if (!result[firstLetter]) {
        result[firstLetter] = [string];
      } else {
        result[firstLetter].push(string);
      }
      return result;
    }, {});
  } 
console.log(correspondingStrings(['Alf', 'Alice', 'Ben'])); //{ a: ['Alf', 'Alice'], b: ['Ben']}
console.log(correspondingStrings(['Ant', 'Bear', 'Bird'])); //{ a: ['Ant'], b: ['Bear', 'Bird']}
console.log(correspondingStrings(['Berlin', 'Paris', 'Prague'])); //{ b: ['Berlin'], p: ['Paris', 'Prague']}
/*task 43
Write a function that takes an array with arbitrary elements and a number as arguments
Return a new array, the first element should be either the given number itself
or zero if the number is smaller than 6
The other elements should be the elements of the original array
Try not to mutate the original array

myFunction([1,2,3], 6)
Expected
[6,1,2,3]

myFunction(['a','b'], 2)
Expected
[0,'a','b']

myFunction([null,false], 11)
Expected
[11,null,false] */

const numberIsSmaller = (arr: string[] | number[] | boolean[], num: number) => {
    return [num >= 6 ? num : 0, ...arr];
  }
console.log(numberIsSmaller([1,2,3], 6)); // [6,1,2,3]
console.log(numberIsSmaller(['a','b'], 2)); // [0,'a','b']
console.log(numberIsSmaller([null,false], 11)); // [11,null,false]
/* task 44
Write a function that takes an array (a) and a value (n) as arguments
Save every nth element in a new array
Return the new array

myFunction([1,2,3,4,5,6,7,8,9,10],3)
Expected
[3,6,9]

myFunction([10,9,8,7,6,5,4,3,2,1],5)
Expected
[6,1]

myFunction([7,2,1,6,3,4,5,8,9,10],2)
Expected
[2,6,4,8,10] */

const everyNthElement = (a: any[], n: number) => {
    return a.filter((_: any, index: number) => (index + 1) % n === 0);
  }
console.log(everyNthElement([1,2,3,4,5,6,7,8,9,10],3)); // [3,6,9]
console.log(everyNthElement([10,9,8,7,6,5,4,3,2,1],5)); // [6,1]
console.log(everyNthElement([7,2,1,6,3,4,5,8,9,10],2)); // [2,6,4,8,10]

/* task 45 
Write a function that takes an object with two properties as argument
It should return the value of the property with key country

myFunction({  continent: 'Asia',  country: 'Japan'})
Expected
'Japan'

myFunction({  country: 'Sweden',  continent: 'Europe'})
Expected
'Sweden' */

const twoProperties = (obj: { continent?: string; country: any; }) => obj.country;
console.log(twoProperties({  continent: 'Asia',  country: 'Japan'})); //'Japan'
console.log(twoProperties({  country: 'Sweden',  continent: 'Europe'})); // 'Sweden'

/* task 46
Write a function that takes an object with two properties as argument
It should return the value of the property with key 'prop-2'
Tip: you might want to use the square brackets property accessor

myFunction({  one: 1,  'prop-2': 2})
Expected
2

myFunction({  'prop-2': 'two',  prop: 'test'})
Expected
'two'  */

const objectArgument = (obj: { [x: string]: any; one?: number; "prop-2"?: string | number; prop?: string; }) => obj['prop-2'];
console.log(objectArgument({  one: 1,  'prop-2': 2})); // 2
console.log(objectArgument({  'prop-2': 'two',  prop: 'test'})); // two

/* task 47
Write a function that takes an object with two properties and a string as arguments
It should return the value of the property with key equal to the value of the string

myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')
Expected
'Asia'

myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')
Expected
'Sweden' */
const stringProperty = (obj: { [x: string]: any; continent?: string; country?: string; }, str: string) => obj[str];
console.log(stringProperty({  continent: 'Asia',  country: 'Japan'}, 'continent')); // 'Asia'
console.log(stringProperty({  country: 'Sweden',  continent: 'Europe'}, 'country')); // 'Sweden'

/* task 48 
Write a function that takes an object (a) and a string (b) as argument
Return true if a has a property with key b
Return false otherwise

myFunction({a:1,b:2,c:3},'b')
Expected
true

myFunction({x:'a',y:'b',z:'c'},'a')
Expected
false

myFunction({x:'a',y:'b',z:'c'},'z')
Expected
true */
const trueObjectString = (a: { a?: number; b?: number; c?: number; x?: string; y?: string; z?: string; hasOwnProperty?: any; }, b: string) => {
    return a.hasOwnProperty(b);
  }
console.log(trueObjectString({a:1,b:2,c:3},'b')); // true
console.log(trueObjectString({x:'a',y:'b',z:'c'},'a')); // false
console.log(trueObjectString({x:'a',y:'b',z:'c'},'z'));  // true

/* task 49 
Write a function that a string (a) as argument
Create an object that has a property with key 'key' and a value of a
Return the object

myFunction('a')
Expected
{key:'a'}

myFunction('z')
Expected
{key:'z'}

myFunction('b')
Expected
{key:'b'} */
const propertyKey = (a: string) => {
    return { 'key': a };
  }
console.log(propertyKey('a')); // {key:'a'}
console.log(propertyKey('z')); // {key:'z'}
console.log(propertyKey('b')); // {key:'b'}

/* task 50 
Write a function that takes two strings (a and b) as arguments
Create an object that has a property with key 'a' and a value of 'b'
Return the object

myFunction('a','b')
Expected
{a:'b'}

myFunction('z','x')
Expected
{z:'x'}

myFunction('b','w')
Expected
{b:'w'} */
const createObject = (a: string, b: string) => {
    return { [a]: b };
  }
console.log(createObject('a','b')); // {a:'b'}
console.log(createObject('z','x')); // {z:'x'}
console.log(createObject('b','w')); // {b:'w'}

/* task 51 
Write a function that takes two arrays (a and b) as arguments
Create an object that has properties with keys 'a' and corresponding values 'b'
Return the object

myFunction(['a','b','c'],[1,2,3])
Expected
{a:1,b:2,c:3}

myFunction(['w','x','y','z'],[10,9,5,2])
Expected
{w:10,x:9,y:5,z:2}

myFunction([1,'b'],['a',2])
Expected
{1:'a',b:2} */
const corresondingValues = (a: any[], b: (string | number)[]) => {
    return a.reduce((obj, key, i) => {
      obj[key] = b[i];
      return obj;
    }, {});
  };
console.log(corresondingValues(['a','b','c'],[1,2,3])); // {a:1,b:2,c:3}
console.log(corresondingValues(['w','x','y','z'],[10,9,5,2])); // {w:10,x:9,y:5,z:2}
console.log(corresondingValues([1,'b'],['a',2])); // {1:'a',b:2}

/*task 52
Write a function that takes an object (a) as argument
Return an array with all object keys

myFunction({a:1,b:2,c:3})
Expected
['a','b','c']

myFunction({j:9,i:2,x:3,z:4})
Expected
['j','i','x','z']

myFunction({w:15,x:22,y:13})
Expected
['w','x','y'] */
const arrayKeys = (a: { a?: number; b?: number; c?: number; j?: number; i?: number; x?: number; z?: number; w?: number; y?: number; }) => Object.keys(a);
console.log(arrayKeys({a:1,b:2,c:3})); // ['a','b','c']
console.log(arrayKeys({j:9,i:2,x:3,z:4})); // ['j','i','x','z']
console.log(arrayKeys({w:15,x:22,y:13})); // ['w','x','y']

/*task 53
Write a function that takes an object (a) as argument
Return the sum of all object values

myFunction({a:1,b:2,c:3})
Expected
6

myFunction({j:9,i:2,x:3,z:4})
Expected
18

myFunction({w:15,x:22,y:13})
Expected
50 */
const summAll = (a: { [s: string]: unknown; } | ArrayLike<unknown>) => {
    return Object.values(a).reduce((sum, val) => sum + val, 0);
  }
console.log(summAll({a:1,b:2,c:3})); // 6
console.log(summAll({j:9,i:2,x:3,z:4})); // 18
console.log(summAll({w:15,x:22,y:13})); // 50

/*task 54
Write a function that takes an object as argument
It should return an object with all original object properties
except for the property with key 'b'

myFunction({ a: 1, b: 7, c: 3 })
Expected
{ a: 1, c: 3 }

myFunction({ b: 0, a: 7, d: 8 })
Expected
{ a: 7, d: 8 }

myFunction({ e: 6, f: 4, b: 5, a: 3 })
Expected
{ e: 6, f: 4, a: 3 } */
const originalObject = (obj: { [x: string]: any; a?: number; b: any; c?: number; d?: number; e?: number; f?: number; }) => {
    const { b, ...otherProps } = obj;
    return otherProps;
  }
console.log(originalObject({ a: 1, b: 7, c: 3 })); // { a: 1, c: 3 }
console.log(originalObject({ b: 0, a: 7, d: 8 })); // { a: 7, d: 8 }
console.log(originalObject({ e: 6, f: 4, b: 5, a: 3 })); // { e: 6, f: 4, a: 3 } 
/* task 55
Write a function that takes two objects as arguments
Unfortunately, the property 'b' in the second object has the wrong key
should be named 'd' instead
Merge both objects and correct the wrong property name
Return the resulting object
It should have the properties 'a', 'b', 'c', 'd', and 'e'

myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
Expected
{ a: 1, b: 2, c: 3, e: 5, d: 4}

myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })
Expected
{ a: 5, b: 4, c: 3, e: 2, d: 1} */
const wrongKey = (obj1: { a: number; b: number; }, obj2: { [x: string]: any; c?: number; b: any; e?: number; }) => {
    const { b: d, ...otherProps } = obj2;
    return { ...obj1, d, ...otherProps };
}
console.log(wrongKey({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); // { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(wrongKey({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); // { a: 5, b: 4, c: 3, e: 2, d: 1}

/* task 56
Write a function that takes an object (a) and a number (b) as arguments
Multiply all values of 'a' by 'b'
Return the resulting object

myFunction({a:1,b:2,c:3},3)
Expected
{a:3,b:6,c:9}

myFunction({j:9,i:2,x:3,z:4},10)
Expected
{j:90,i:20,x:30,z:40}

myFunction({w:15,x:22,y:13},6)
Expected
{w:90,x:132,y:78} */
const multiplyValues = (a: { [s: string]: unknown; } | ArrayLike<unknown>, b: number) => {
    const entries = Object.entries(a)
      .map(([key, value]) => [key, value * b]);
    return Object.fromEntries(entries);
  }
console.log(multiplyValues({a:1,b:2,c:3},3)); // {a:3,b:6,c:9}
console.log(multiplyValues({j:9,i:2,x:3,z:4},10)); // {j:90,i:20,x:30,z:40}
console.log(multiplyValues({w:15,x:22,y:13},6)); // {w:90,x:132,y:78}

/* task 57
Write a function that takes an object as argument
Somehow, the properties and keys of the object got mixed up
Swap the Javascript object's key with its values and return the resulting object

myFunction({z:'a',y:'b',x:'c',w:'d'})
Expected
{a:'z',b:'y',c:'x',d:'w'}

myFunction({2:'a',4:'b',6:'c',8:'d'})
Expected
{a:'2',b:'4',c:'6',d:'8'}

myFunction({a:1,z:24})
Expected
{1:'a',24:'z'} */
const mixedUp = (obj) => {
    let res = {};
    for (let key in obj) {
      res[obj[key]] = key;
    }
    return res;
  }
console.log(mixedUp({z:'a',y:'b',x:'c',w:'d'})); // {a:'z',b:'y',c:'x',d:'w'}
console.log(mixedUp({2:'a',4:'b',6:'c',8:'d'})); // {a:'2',b:'4',c:'6',d:'8'}
console.log(mixedUp({a:1,z:24})); // {1:'a',24:'z'}

/*task 58
Write a function that takes an object as argument
Some of the property values contain empty strings
Replace empty strings and strings that contain only whitespace with null values
Return the resulting object

myFunction({ a: 'a', b: 'b', c: '' })
Expected
{ a: 'a', b: 'b', c: null }

myFunction({ a: '', b: 'b', c: ' ', d: 'd' })
Expected
{ a: null, b: 'b', c: null, d: 'd' }

myFunction({ a: 'a', b: 'b ', c: ' ', d: '' })
Expected
{ a: 'a', b: 'b ', c: null, d: null }*/
function emptyStrings(obj: { [x: string]: null; a?: string; b?: string; c?: string; d?: string; }) {
    for(let key in obj) {
        if(typeof obj[key] === 'string' && obj[key].trim() === '') {
            obj[key] = null;
        }
    }
    return obj;
}
console.log(emptyStrings({ a: 'a', b: 'b', c: '' })); // { a: 'a', b: 'b', c: null }
console.log(emptyStrings({ a: '', b: 'b', c: ' ', d: 'd' })); // { a: null, b: 'b', c: null, d: 'd' }
console.log(emptyStrings({ a: 'a', b: 'b ', c: ' ', d: '' })); // { a: 'a', b: 'b ', c: null, d: null }

/*task 59
Write a function that takes an object as argument containing properties with personal information
Extract firstName, lastName, size, and weight if available
If size or weight is given transform the value to a string
Attach the unit cm to the size
Attach the unit kg to the weight
Return a new object with all available properties that we are interested in

myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})
Expected
{fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}

myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
Expected
{fn: 'Martin', ln: 'Harper', weight: '102kg'}

myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})
Expected
{fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}

myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})
Expected
{fn: 'Matthew', ln: 'Müller'} */
const attachSomething = (person: { fn: any; ln: any; age?: number; size?: any; weight?: any; email?: string; }) => {
    let res = {};
    if (person.fn) res.fn = person.fn;
    if (person.ln) res.ln = person.ln;
    if (person.size) res.size = person.size + 'cm';
    if (person.weight) res.weight = person.weight + 'kg';
    return res;
  };
console.log(attachSomething({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})); // {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
console.log(attachSomething({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})); // {fn: 'Martin', ln: 'Harper', weight: '102kg'}
console.log(attachSomething({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})); //{fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
console.log(attachSomething({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})); //{fn: 'Matthew', ln: 'Müller'}


/*task 60
Write a function that takes an array of objects and a string as arguments
Add a property with key 'continent' and value equal to the string to each of the objects
Return the new array of objects
Tip: try not to mutate the original array

myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')
Expected
[{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

myFunction([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')
Expected
[{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }] */
const continentArrays = (array: any[], continent: string) => {
    return array.map(item => ({ ...item, continent }));
  };
console.log(continentArrays([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')); //[{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
console.log(continentArrays([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')); //[{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

/* task 61
Write a function that takes an array of numbers as argument
Convert the array to an object
It should have a key for each unique value of the array
The corresponding object value should be the number of times the key occurs within the array

myFunction([1,2,2,3])
Expected
{1:1,2:2,3:1}

myFunction([9,9,9,99])
Expected
{9:3,99:1}

myFunction([4,3,2,1])
Expected
{1:1,2:1,3:1,4:1} */
const keyValue = (array: any[]) => {
    return array.reduce((obj, num) => {
      obj[num] = (obj[num] || 0) + 1;
      return obj;
    }, {});
  };
console.log(keyValue([1,2,2,3])); // {1:1,2:2,3:1}
console.log(keyValue([9,9,9,99])); // {9:3,99:1}
console.log(keyValue([4,3,2,1])); // {1:1,2:1,3:1,4:1}

/*task 62
Write a function that takes two date instances as arguments
It should return true if the dates are equal
It should return false otherwise

myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
Expected
false

myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
Expected
true

myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
Expected
false */
const dateInstances = (date1: Date, date2: Date) => {
    return date1.getTime() === date2.getTime();
  };
console.log(dateInstances(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); // false
console.log(dateInstances(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); // true
console.log(dateInstances(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); //false

/* task 63
Write a function that takes two date instances as argument
It should return the number of days that lies between those dates

myFunction(new Date('2020-06-11'), new Date('2020-06-01'))
Expected
10

myFunction(new Date('2000-01-01'), new Date('2020-06-01'))
Expected
7457 */
const numberDays = (date1: number | Date, date2: number | Date) => {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    return Math.round(Math.abs((date2 - date1) / oneDay));
  };
console.log(numberDays(new Date('2020-06-11'), new Date('2020-06-01'))); //10
console.log(numberDays(new Date('2000-01-01'), new Date('2020-06-01'))); // 7457

/*task 64
Write a function that takes two date instances as argument
It should return true if they fall on the exact same day
It should return false otherwise

myFunction(new Date('2000/01/01'), new Date('2000/01/01'))
Expected
true 

myFunction(new Date('2000/01/01'), new Date('2000/01/02'))
Expected
false 

myFunction(new Date('2001/01/01'), new Date('2000/01/01'))
Expected
false 

myFunction(new Date('2000/11/01'), new Date('2000/01/01'))
Expected
false */
const dateArguments = (date1: Date, date2: Date) => {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  };
console.log(dateArguments(new Date('2000/01/01'), new Date('2000/01/01'))); // true
console.log(dateArguments(new Date('2000/01/01'), new Date('2000/01/02'))); // false
console.log(dateArguments(new Date('2001/01/01'), new Date('2000/01/01'))); // false
console.log(dateArguments(new Date('2000/11/01'), new Date('2000/01/01'))); // false


/*task 65
SPREAD OPERATOR 
Use spread operator in all tasks

Write a function that takes two number arrays as parameters 
and return an array which contains elements from both 
arrays

myFunction([1, 2], [3, 4]) 
Expected
[1, 2, 3, 4]

myFunction([1, 2], [3, 4, 5, 6]) 
Expected
[1, 2, 3, 4, 5, 6] */
const bothArrays = (array1: number[], array2: number[]) => [...array1, ...array2];
console.log(bothArrays([1, 2], [3, 4])); // [1, 2, 3, 4]
console.log(bothArrays([1, 2], [3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6]

/* task 66
Write a function that takes an array and a string as parameters 
and return an array which contains all elements from the given array
and the given string as the last element

myFunction(['Apple', 'Orange', 'Banana'], 'Kiwi'); 
Expected
['Apple', 'Orange', 'Banana', 'Kiwi'] */
const stringPlusArray = (arr: string[], str: string) => [...arr, str]
console.log(stringPlusArray(['Apple', 'Orange', 'Banana'], 'Kiwi')); // ['Apple', 'Orange', 'Banana', 'Kiwi']


/* task 67
Write a function that takes an array and a string as parameters 
and return an array which contains all elements from the given array
and the given string as the first element

myFunction(['Apple', 'Orange', 'Banana'], 'Kiwi'); 
Expected
['Kiwi', 'Apple', 'Orange', 'Banana'] */

/* task 68
Write a function that takes two objects as parameters 
and return an object which contains properties from both 
objects

myFunction({ a:1, b:2 }, { c:3, d:4 }) 
Expected
{ a:1, b:2, c:3, d:4 }

myFunction({ a:1, b:2 }, { c:3, d:4, e:5, f:6 }) 
Expected
{ a:1, b:2, c:3, d:4, e:5, f:6 } */

/* task 69
Write a function that takes an object and a string as parameters 
and return an object which contains properties from the given object
and a new property favoriteMovie with the value equal to the given string

myFunction({ eyeColor: 'green', age: 10 }, 'Garfield') 
Expected
{ eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }

myFunction({ eyeColor: 'blue', age: 15 }, 'Twilight') 
Expected
{ eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' } */



















