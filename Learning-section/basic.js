// console.log("Hello World !");
const accountID = 1000244055;
let accountEmail = "Mitalyuvi@gmail.com"; // let can be declare within or inside any block and function scope only.
var accountPassword = "8899"; // Pls do not use var due to block scope and function scope problem. Once var declare it can be used every where in a js file.
accountCity = "jaipur"; // Bad Practice use always let.
let country;

console.log(accountEmail, accountID, accountPassword);
console.table([accountID, accountEmail, accountPassword, accountCity, country]); // Best practice to print multiple variable at once and in table format.

// Type Conversion
