let name1 = "sanvi"
//.... till 100

// To store multiple values we use arrays.
let person =  ["Sanvi", 12, "Lamborghini"] // Creating an array

console.log(person[2]);

// Create a array with the names of your 5 favorite sports

let sports = ["basketball", "swimming", "tennis", "badminton", "biking"]

console.log(sports[0])

// Array Methods

// .pop removes one element from the end of the array
sports.pop()
console.log(sports);

// .push adds one element in the end of the array
sports.push("Cricket")
console.log(sports);


// .shift removes element from the front of the array , adds and element given to the front of the array .unshift

sports.shift()
console.log(sports)

sports.unshift("running")
console.log(sports)

// [1,2,3,5]

let newArr = [1,2,3,4,5] 
newArr[1] = 20;
console.log(newArr);

// to take the length of the array you say 

console.log(newArr.length);