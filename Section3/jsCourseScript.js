// /**
//  * This file is the first of the Section 3 of the JsCourse
//  */

// /**
//  * Lecture: Hoisting
//  */

// calculateAge(1965);

// function calculateAge (year) {
//   console.log(2016 - year);
// }

// // retirement(1990);
// // Function expression doesn't work in Hoisting
// var retirement = function (year) {
//   console.log(65 - (2016 - year));
// }

// // variables
// console.log(age);// It's undefined
// var age = 23;
// console.log(age);

// function foo () {
//   var age = 65;
//   console.log(age);// variable in a different context, only for the function
//   // this one print 65 it's because it takes the value of the variable in the function
// }

// foo();
// console.log(age); // this one takes the value of the global context

// First scoping example

// var a = 'Hello!';
// first();

// function first () {
//   var b = 'Hi!';
//   second();

//   function second () {
//     var c = 'Hey!';
//     console.log(a + b + c);
//   }
// }

// var a = 'Hello!';
// first();

// function first () {
//   var b = 'Hi!';
//   second();

//   function second () {
//     var c = 'Hey!';
//     third();
//   }
// }

// function third () {
//   var d = 'John';
//   // console.log(c); // this throws an error of not defined.
//   console.log(a + d); // this works because this function has access only to the global variable
//   // a and d
// }

/**
 * THIs Keyword
 */

// console.log(this);
// calculateAge(1985);

// function calculateAge (year) {
//   console.log(2019 - year);
//   console.log(this);
// }

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function () {
    console.log(this);
    console.log(2019 - this.yearOfBirth);

    // function innerFunction () {
    //   console.log(this);
    // }
    // innerFunction();
  }
};

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
