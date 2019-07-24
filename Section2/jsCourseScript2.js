/* Objects and Properties */
/**
 * inside a object you can store multiple types of values
 even another object or more than one object.
 To access the any propertie of the object you have to call
 the object with the dot notation. Ex: object.propertie
 or calling the object and the key of the object.
 The Key of the object is the "variable name" that you assign
 in the object declaration.
 */

/* Object Literal */
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

/* CODING CHALLENGE 4 */

/**
Let's remember the first coding challenge where Mark and John compared their BMIs.
Let's now implement the same functionality with objects and methods.
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

// For loop
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

// continue and break statements

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

/**
 * Remember the tip calculator challenge? Let's create a more
 * advance version using everything we leanerd.
 * This time, John and his family went to 5 different restaurant.
 * The bills were $124, $48, $268, $180 and $42-
 * John likes to tip 20% when the bill is less than $50, 15% when the bill
 * is between $50 and $200, and 10%if the bill is more than $200
 *
 * Implement a tip calculator using object and loops:
 * 1.- Create an object with an array for the bill values
 * 2.- Add a method to calculate the tip.
 * 3.- This method should include a loop to iterate over all
 * the paid bills and do the tip calculations.
 * 4.- As an output, create 1) a new array containing all tips,
 * and 2) an array containing final paid amounts (bill+tip).
 *
 * EXTRA AFTER FINISHING: Mark's family also wetn on a holiday going to
 * 4 different restaurants. The bills were $77, $375, $110 and $45.
 * Mark likes to tip 20% of the bill when the bill is less than $100,
 * 10% when the bill is between $100 and $300, and 25% if the bill is more than $300
 * (different than John).
 *
 * 5.- Implement the same funcionality as before. this time using Mark's tipping rules
 * 6.- Crea a function (not a method) to calculate the average of a given array of tips.
 * Hint: Loop over the array, and in each iteration store the current sum in
 * a variable (starting from 0). After you have the sum of the array, divide it
 * by the number of elements in it (that's how you calculate the average).
 * 7.- Calculate the average tip for each family
 * 8.- Log to the console which family paid the highest tips on average.
 */

// var johnBills = {
//     bills: [124, 48, 268, 180, 42],
//     tips: [],
//     finalAmount: [],
//     tipCalculator: function () {
//         for (i = 0; i < this.bills.length; i++) {
//             if (this.bills[i] < 50) {
//                 this.tips.push(this.bills[i] * 0.2);
//                 this.finalAmount.push(this.bills[i] + this.tips[i]);
//             } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
//                 this.tips.push(this.bills[i] * 0.15);
//                 this.finalAmount.push(this.bills[i] + this.tips[i]);
//             } else {
//                 this.tips.push(this.bills[i] * 0.1);
//                 this.finalAmount.push(this.bills[i] + this.tips[i]);
//             }
//         }
//     }
// };

// var markBills = {
//     bills: [77, 375, 110, 45],
//     tips: [],
//     finalAmount: [],
//     tipCalculator: function () {
//         for (i = 0; i < this.bills.length; i++) {
//             if (this.bills[i] < 100) {
//                 this.tips.push(this.bills[i] * 0.2);
//                 this.finalAmount.push(this.bills[i] + this.tips[i]);
//             } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
//                 this.tips.push(this.bills[i] * 0.1);
//                 this.finalAmount.push(this.bills[i] + this.tips[i]);
//             } else {
//                 this.tips.push(this.bills[i] * 0.25);
//                 this.finalAmount.push(this.bills[i] + this.tips[i]);
//             }
//         }
//     }
// };

// function averageTips(tip) {
//     var tipSum = 0;
//     for (i = 0; i < tip.length; i++) {
//         tipSum += tip[i];
//     }
//     return tipSum / tip.length;
// }

// johnBills.tipCalculator();
// markBills.tipCalculator();
// johnBills.average=averageTips(johnBills.tips);
// markBills.average=averageTips(markBills.tips);

// if (markBills.average >johnBills.average) {
//         console.log('Mark\'s family spent an average of: '+
//         averageTips(markBills.tips));
// }else{
//     console.log('John\'s family spent an average of: '+
//         averageTips(johnBills.tips));
// }
