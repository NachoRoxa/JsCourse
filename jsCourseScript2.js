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
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

//Object mutation
john.job = 'designer';
john['isMarried']=true;
console.log(john);

//New Object syntax
var jane = new Object();
jane.fisrtName='Jane';
jane.birthYear=1969;
jane['lastName']='Smith'

console.log(jane);
