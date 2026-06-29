// // console.log("Hello World !");
// const accountID = 1000244055;
// let accountEmail = "Mitalyuvi@gmail.com"; // let can be declare within or inside any block and function scope only.
// var accountPassword = "8899"; // Pls do not use var due to block scope and function scope problem. Once var declare it can be used every where in a js file.
// accountCity = "jaipur"; // Bad Practice use always let.
// let country;

// // console.log(accountEmail, accountID, accountPassword);
// // console.table([accountID, accountEmail, accountPassword, accountCity, country]); // Best practice to print multiple variable at once and in table format.

// let x  = {};    
// // console.log(typeof(x))
// // console.log(x)

// let str = "hlo"
// let str2 = new String("hlo"); // Dont create string method because it create unexpected errors and new keyword complicates and slow the code .
// console.log(str, str2);

// INTERPOLAION 
// Template strings allow variable in strings  
let str1 = "hlo"
let str2 = "world"
let str3 = `${str1}, ${str2} in javascript`    
// This help to use string variable inside the string easily.
console.log(str3)
let experiment = `${2 + 2}`
console.log(experiment) // The output is 4 without any error
console.log(typeof(experiment)); // And the type of 4 is string.