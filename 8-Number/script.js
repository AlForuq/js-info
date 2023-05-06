// console.log(1_000_000); // 1000000
// console.log(1_000_000+1); // 1000001
// console.log(+'1_000_000'+1); // NaN

// console.log(1e6); // 1 000 000
// console.log(1e-6); // 0.000001

// console.log(Number((0.1 + 0.2).toFixed(1)));

// let num = 0.1 + 0.2;
// num = num.toFixed(1);
// console.log(parseFloat(num)); // 0.1
// console.log(parseInt(num)); // 0

// let numString = "0.1 + 0.2";
// console.log(parseFloat(numString)); // 0.1
// console.log(parseInt(numString)); // 0
// console.log(Number(numString)); //  NaN
// console.log(eval(numString)); //  0.30000000000000004

// let number = 2.1
// console.log(Number.parseFloat(number)); // without Number, it is also the same
// console.log(Number.parseInt(number)); //  without Number, it is also the same

// let decimal = 5;
// binaryNum = decimal.toString(2);
// console.log(binaryNum); // 101
// decimal = parseInt(binaryNum, 2);
// console.log(decimal); // 5

// let decimal = 531;
// hex = decimal.toString(16);
// console.log(hex); // 213
// decimal = parseInt(hex, 16);
// console.log(decimal); // 531

// console.log(isNaN("string")); // true
// console.log(isNaN(+"5_000")); // true
// console.log(isNaN("5000")); // false
// console.log(isNaN(5000)); // false
// console.log(isNaN(5_000)); // false

// console.log(Object.is("1", 1)); // false
// console.log(Object.is(NaN, NaN)); // true
// console.log(Object.is(-0, 0)); // false

// const obj = {};
// console.log(Object.is(obj, {})); // false

// let num1 = 5.3123
// let num2 = 0.3123;
// let num3 = 0.0034523;
// console.log(num1.toPrecision(3));  // 5.31
// console.log(num2.toPrecision(3)); // 0.312 => zero ignored
// console.log(num3.toPrecision(3)); // 0.00345 => zero ignored

// console.log(9_999_999_999_999_999);

// console.log(Math.round(2.5)); // 3
// console.log(Math.round(2.4)); // 2
// console.log(Math.round(-2.5)); // -2
// console.log(Math.round(-2.6)); // -3

// console.log(Math.floor(9.9)); // 9
// console.log(Math.trunc(9.9)); // 9
// console.log(Math.floor(-9.9)); // -10
// console.log(Math.trunc(-9.9)); // -9

// let randomNum = 100;
// console.log(Math.trunc(Math.random() * randomNum));

// console.log(Math.sqrt(9)); // 3
// console.log(Math.cbrt(27)); // 3

// console.log(Math.sign(0)); // 0
// console.log(Math.sign(-0)); // -0
// console.log(Math.sign(123)); // 1
// console.log(Math.sign(-123)); // -1
// console.log(Math.sign("123")); // 1
// console.log(Math.sign("-123")); // -1
// console.log(Math.sign("123e5")); // 1
// console.log(Math.sign("-123e5")); // -1
// console.log(Math.sign(123e5)); // 1
// console.log(Math.sign(-123e5)); // -1

// let obyekt = { name: "me", child: null };
// console.log(obyekt.child?.age);
// console.log(obyekt.child.age);
