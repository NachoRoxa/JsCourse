/*Objects and Properties */
/**
 * inside a object you can store multiple types of values
 even another object or more than one object.
 To access the any propertie of the object you have to call
 the object with the dot notation. Ex: object.propertie
 or calling the object and the key of the object.
 The Key of the object is the "variable name" that you assign 
 in the object declaration.
 */

/*Object Literal */
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// //Object mutation
// john.job = 'designer';
// john['isMarried']=true;
// console.log(john);

// //New Object syntax
// var jane = new Object();
// jane.fisrtName='Jane';
// jane.birthYear=1969;
// jane['lastName']='Smith'

// console.log(jane);

/** Objects and Method
*/

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function () {
//         this.age= 2019 - this.birthYear;
//     }
// };

// /*var age = john.calcAge();
// john.age = age;*/
// /*this can also be declared in this way
// john.age = john.calcAge(); */

// john.calcAge()
// console.log(john)

/*CODING CHALLENGE 4 */

/**
Let's remember the fisrt coding challenge where Mark and John compared their BMIs.
Let's no implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass,
and height.
2. Then, add a method to each object to calculate the BMI. Save the BMI to 
the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with
the full name abd tge resoectuve BMI. Don't forget thay might have the same BMI.

Remember: BMI=mass/height^2=mass/(height*height) */

// var john = {
//     fullName: 'John Smith',
//     mass: 80,
//     height: 1.60,
//     johnBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// var mark = {
//     fullName: 'Mark Ruffalo',
//     mass: 70,
//     height: 1.76,
//     markBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// /*My Way of solving the problem */
// john.johnBMI();
// mark.markBMI();

// if (john.bmi < mark.bmi) {
//     console.log(mark.fullName + '\'s BMI is higher than ' +
//         john.fullName + '\'s ' + 'with: ' + mark.bmi);
// } else if (mark.bmi < john.bmi) {
//     console.log(john.fullName + '\'s BMI is higher than ' +
//         mark.fullName + '\'s ' + 'with: ' + john.bmi);
// } else {
//     console.log('They both have the same BMI, John\'s ' + john.bmi +
//         ' BMI and Mark\'s BMI is: ' + mark.bmi);
// }

// /**Teacher's way */
// if (john.johnBMI() > mark.markBMI()) {
//     console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
// } else if (mark.markBMI() > john.johnBMI()) {
//     console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// } else {
//     console.log('They have the same BMI');
// }

/**
* Loops and iteration 
*/

//For loop
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// var john = ['John', 'Smith', 1991, 'designer', false];

// for (i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// //While loop
// var i=0;
// while(i<john.length){
//     console.log(john[i]);
//     i++;
// }

//continue and break statements

// var john = ['John', 'Smith', 1991, 'designer', false];

// for (i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// /*Backward cycle */
// for (i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
// }

/**
* CODING CHALLENGE 5
 */