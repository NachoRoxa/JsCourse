/**
 * This file is the first of the Section 3 of the JsCourse
 */

/**
 * Lecture: Hoisting
 */

calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

//retirement(1990);
//Function expression doesn't work in Hoisting
var retirement = function (year) {
    console.log(65 - (2016 - year));
}

//variables
console.log(age);// It's undefined 
var age = 23;
console.log(age);


function foo(){
    var age=65;
    console.log(age); //variable in a different context, only for the function
    //this one print 65 it's because it takes the value of the variable in the function
}

foo();
console.log(age);//this one takes the value of the global context.