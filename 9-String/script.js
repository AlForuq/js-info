let str1 = "webbrain";
let str2 = new String("webbrain");

// console.log(str2.valueOf());

// console.log(str1 === str2);
// console.log(str1 == str2);

// console.log(str2);

// let string1 = "webbrain";
// let string2 = "ebbr";
// console.log(string1.localeCompare(string2)); // 1
// console.log(string2.localeCompare(string1)); // -1   if both of them are the same, then it is 0

let indexOfString = "Muhammadamin";

// console.log(indexOfString.charAt(-1)); // positive value. empty space for minus number
// console.log(indexOfString[1]); // only positive number for index. undefined for minus number
// console.log(indexOfString.at(-1)); // positive or negative, does Not matter.

// console.log(indexOfString.indexOf('a')); // 3
// console.log(indexOfString.indexOf("a", 4)); // 6

// console.log(indexOfString.lastIndexOf("m")); // 9
// console.log(indexOfString.lastIndexOf("m", 8)); // 5

let stringCase = "abc2432434abc";
// console.log(stringCase.toUpperCase());
// console.log(stringCase.toLocaleUpperCase('en-US'));

let OfString = "webbrain academy";

// console.log(OfString.includes('bb')); // true
// console.log(OfString.startsWith('we')); // true
// console.log(OfString.endsWith('demy')); // true

// console.log(OfString.padEnd(OfString.length + 3, "."));
// console.log(OfString.padStart(OfString.length + 3, "."));

let str = "webbrain academy";

/* slice(start, end) => from start to end (not including end) => allows negative */

// console.log(str.slice(0));
// console.log(str.slice(1));
// console.log(str.slice(0, 4));  // ONLY greater index second
// console.log(str.slice(1, -2));

/* substring(start, end) => from start to end (not including end) =>  negative values means 0 */

// console.log(str.substring(4, 0));
// console.log(str.substring(4, 1)); // can swipe greater index first.
// console.log(str.substring(5, -77)); // minus is swiped to first, and act like zero => (0, 5)

/* substr(start, length) => from start get length characters  => allows negative start */

// console.log(str.substr(-6,3 ));

let trimStr = "  webbrain   ";
// console.log(trimStr.trim().length);
// console.log(trimStr.length);

let conCat = "web";

// console.log(conCat.concat("brain ", "hey"));

let replaceStr = "webbrain IT center";

// console.log(replaceStr.replace('bb', 'dd'));
// console.log(replaceStr.replace("qq", "dd")); // nothing changed because there is no "qq"

// console.log(replaceStr.replace(/WEB/ig, 'hi'));

let loopStr = 'Muhammadamin'

// for (let char of loopStr) {
//   console.log(char);
// }

let splitStr = "my name is Muhammadamin";

// console.log(splitStr.split(" ", 3));
