// Data types are used to store / tell js what kinda of data is it eg - integer, string etc.

// There are 4 datatypes present in js

/**
 * Integer -> Stores Numbers.
 * Boolean -> Stores True and False value.
 * String  -> Stores any text if there is " " or ' ' that indicates a string to js.
 * Float   -> The decimal values.
 */


// var num1 = "3"
// var num2 = "2"

// console.log(num1 + num2);
//              3   +    2


/**      Operators       */


// In js there are mainly 5 types of operators

/**
 * Arithmetic Operator  -> + , - , / , * , %
 * Comparision Operator -> < , > , <= , ==
 * Logical Operator -> || (or) , && (and), ! (not)
 */

// if the driver is above 18 and also know to drive

var knowToDrive = false;
var age = 17;

/** && (and) in JS
 * True   True  -> True
 * False  True  -> False 
 * True   False -> False
 * False  False -> False
 */

// And is used when 2 or more conditions needs to be evaluated to true for code to run

if (age > 18 && knowToDrive) {
    alert("and Accepted")
}else{
    alert("and Rejected")
}


/** || (or) in JS 
 * True   True  -> 
 * False  True  ->
 * True   False -> 
 * False  False -> 
 */

if (age > 18 || knowToDrive) {
    alert("or Accepted")
}else{
    alert("or Rejected")
}


var percent = 10
var name = "saanvi"

if(percent > 80){
    console.log("Saanvi has socred 80");
}else if(percent > 70){
    console.log("Saanvi has scored between 70 and 80")
}else if(percent < 40){
    console.log("Saanvi needs to find a new home");
}else{
    console.log(name);
}


// the empolyee scores more than 80% he will get promoted.
// the empolyee scores between 70-80 will get promoted next year.
// the employee scores exact 68 will not get promoted.
// the employee scores less than 50 will get salary reduced