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

// var markMass, markHeight, johnHeight, johnMass;

// //Mark 
// markMass = 70;
// markHeight = 1.76;
// markHeight *= markHeight;
// var markBMI = markMass / markHeight;
// console.log('Mark\'s BMI: ' + markBMI);

// johnMass = 80;
// johnHeight = 1.60;
// johnHeight *= johnHeight;
// var johnBMI = johnMass / markHeight;
// console.log('John\'s BMI: ' + johnBMI);

// var BMI = markBMI > johnBMI;
// console.log('Is Mark\'s BMI greater than John\'s? ' + BMI);

/*
If / else Statements
*/

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName+' is married');
// }else{
//     console.log(firstName+' will never get married!')
// }

// var isMarried= true;
// if (civilStatus) {
//     console.log(firstName+' is married');
// }else{
//     console.log(firstName+' will never get married!')
// }

// //Mark 
// markMass = 70;
// markHeight = 1.76;
// markHeight *= markHeight;
// var markBMI = markMass / markHeight;
// console.log('Mark\'s BMI: ' + markBMI);

// johnMass = 80;
// johnHeight = 1.60;
// johnHeight *= johnHeight;
// var johnBMI = johnMass / markHeight;
// console.log('John\'s BMI: ' + johnBMI);

// if(markBMI>johnBMI){
//     console.log('Mark\'s BMI is greater than John\'s.');
// }else{
//     console.log('John\'s BMI is greater than Mark\'s.');
// }

/*Boolean Logic */

// var firstName = 'John';
// var age =20;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teen.');
// } else if(age => 20 && age <30){
//     console.log(firstName+' is a young man.');
// } else {
//     console.log(firstName + ' is a man.');
// }

/*The ternary Operator and Switch Statements */

// var firstName = 'Nacho';
// var age = 16;

// //Ternary Operator
// age >= 18 ? console.log(firstName + ' drinks beer.')
//     : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// Same as above
// if(age>=18){
//     var drink='beer';
// } else{
//     var drink='juice';
// }

// Switch Statement

// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code');
//         break;
//     case 'driver':
//         console.log(firstName + ' drive an uber.');
//         break;
//     case 'designer':
//         console.log(firstName + ' like to draw fashion');
//         break;
//     default:
//         console.log(firstName + ' does nothing for his/her life');
// }

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teen.');
//         break;
//     case age => 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }

/*Truthy and Falsy Values */

/*Falsy are values that will be converted to false after been evaluated in
a true/false condition this values are: undefined, null, 0, '', NaN
Truthy values are values that are considered true after an true/flase condition
this values are: NOT falsy values*/

// var height;

// height=23;

// if(height){
//     console.log('variable is defined');
// }else{
//     console.log('Variable has not been defined');
// }

// //Equality operator
// if(height=='23'){
//     console.log('The == operatro does type coercion!');
// }
// if(height==='23'){
//     console.log('The === does not type coercion!');
// }


/*CODE CHALLENGE 2*/
/*John and Mike both play basketball in different teams.
In the latest 3 games, John's team scored 89,120 and 103 points,
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team.
2. Decide which team wins in average(highest average score), and
print the winner to the console. Also include the average socre in
the output.
3. Then change the score to show different winners.
Don't forget to take into account there might be a draw.

4. EXTRA: Mary also plays basketball, and her team scored 97, 134
and 105 points. Like before, log the average winner to the console.
HINT: you will need the && operator to take the decision.*/

// var averageJohnTeam = (89 + 120 + 103) / 3;
// var averageMikeTeam = (116 + 94 + 123) / 3;
// var averageMaryTeam = (97 + 134 + 105) / 3;
// winner = true;

// switch (winner) {
//     case averageJohnTeam > averageMikeTeam && 
//          averageJohnTeam > averageMaryTeam:
//         console.log('John\'s team is the winner with an average'
//             + ' score of ' + averageJohnTeam);
//         break;
//     case averageMikeTeam > averageJohnTeam && 
//          averageMikeTeam > averageMaryTeam:
//         console.log('Mike\'s team is the winner with an average'
//             + ' score of ' + averageMikeTeam);
//         break;
//     case averageMaryTeam > averageJohnTeam &&
//          averageMaryTeam > averageMikeTeam:
//         console.log('Mary\'s team is the winner with an average'
//             + ' score of ' + averageMaryTeam);
//         break;
//     case averageJohnTeam===averageMikeTeam &&
//          averageJohnTeam===averageMaryTeam:
//         console.log('There is a Draw!!');
//         break;
// }