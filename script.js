// var firstName = 'John';
// console.log(firstName);

// var lastname='Smith';
// var age= 29;

// var fullAge=true;
// console.log(fullAge);

// var job;
// console.log(job);

/*Variable mutation and type coercion */

// var firstName= 'Smith';
// var age=28;

// //Type Coercion
// console.log(firstName+' '+age);

// var job, isMarried;
// job='teacher';
// isMarried=false;

// console.log(firstName+' is a '+age+' ' + job
// + ' is he married? '+isMarried);

// //variable Mutation
// age ='twenty eight';
// job='Driver';

// alert(firstName+' is a '+age+' ' + job
// + ' is he married? '+isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName+ ' '+lastName);

/*******************/
/*Basic Operators */

/*var year, yearJohn, yearMark;
now = 2019;
ageJohn = 28;
ageMark = 33
//Math operator
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);
johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);*/

/**
Operator precedence
 */

/*
var now, yearJohn, fullAge;
now = 2019;
yearJohn = 1989;
fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn, ageMark, average;
ageJohn = now - yearJohn;
ageMark = 35;
average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//More Operators;

x = x * 2;
console.log(x);
x *= 2;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
*/

//Coding Challenge 1

/*
Mark and John are trying to compare ther BMI
(Body Mass Index), which is calculated using the formular:
BMI= mass / height^2=mass / (height * height).
(mass in KG and height in meter)
*/

var markMass, markHeight, johnHeight, johnMass;

//Mark 
markMass = 70;
markHeight = 1.76;
markHeight *= markHeight;
var markBMI = markMass / markHeight;
console.log('Mark\'s BMI: ' + markBMI);

johnMass = 80;
johnHeight = 1.60;
johnHeight *= johnHeight;
var johnBMI = johnMass / markHeight;
console.log('John\'s BMI: ' + johnBMI);

var BMI = markBMI > johnBMI;
console.log('Is Mark\'s BMI greater than John\'s? ' + BMI);