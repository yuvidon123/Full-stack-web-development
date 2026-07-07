// -----------------> String Template <-----------------
// //  let strName = "yuvi" // This is simple string
// let strName1 = `yuvi` // This is strings but with advanced version in we can use double "" and single '' quotes in it.

// // Example of Strings template
// let strName2 = `yuvi "Mittal"`
// console.log(strName2) // output will be (yuvi "Mittal")
// console.log(typeof(strName2)) // string

// -------------> Escape Characters <----------------
// Sometimes we need punchuation and typographic symbols in strings like "", '' or / . To make it display in program we use Escape Characters
// --> (\) - backslash escape character
// let strName3 = "yuvi \"Mittal\"" // \"" -> Insert "" in strings
// let strName4 = "yuvi \n\"Mittal\"" // \n -> Insert new line
// let strName5 = "yuvi \b\"Mittal\"" // \b -> Insert Backslash
// let strName6 = "yuvi \"Mittal\" \f" // \f -> Form Feed
// let strName7 = " Mittal \ryuvi" // \r -> return and replace after value from \r to the first according to lenght of word/char in \r
// let strName8 = "\t yuvi \t mittal" // \t -> Insert the tab space Horizontally
// let strName9 = " \v Mittal yuvi"// \v -> Insert the tab space Vertically
// //console.log(strName3)
// //console.log(strName4)
// //console.log(strName5)
// //console.log(strName6)
// //console.log(strName7)
// //console.log(strName8)
// //console.log(strName9)

// ----------------> Strings as Object <----------------
// Never or less use string as object bcoz in object we use new keyword to define object which it complicates the code & slow down execution speed & also produce unexpected result sometimes.
// let x = 10
// let y = 10
// console.log(x == y) // return True
// console.log(x === y) // return True

// //using object as string
// let str = "yuvi"
// let strObj = new String("mittal") // now this is object
// console.log(typeof(strObj))
// console.log(str + strObj)

// let xObj = new String("hlo")
// let yObj = new String("hlo")
// // Even though 2 object's data type and value are same but there are 2 purely different things in javascript
// // ----> Eg
// console.log(xObj == yObj) // return FALSE
// console.log(xObj === yObj) // return FALSE

// ------------------> INTERPOLATION <------------------------
// Syntax ==> ${}
// let game = "Minecraft"
// let txt = `I love to play ${game}`
// console.log(txt)
// console.log(`I love ${game}`)

// // what if
// let num = 5
// let num2 = 10
// console.log(`sum = ${num} + ${num2} = ${num + num2}`) // 5 + 10 = 15

// --------------------------> Strings METHODS <-------------------------
// * length
// * charAt --> this is not use negative index
// * charCodeAt
// * concat
// * at --> this is use negative index

// -----> Property Access
// let txt = "Fast as fuck boy"
// txt[0] = "L" // It will not work, But its not give an error also.

// -- This approach look strings like array (but they are not)
// -- If no character found it simple return undefined , while CharAt() returns an empty string

// -----> Extracting String Parts

// let txt = "I want to play minecraft with friends like old days"

// ----->  Slice(start, end)
// it will return slice part/ string. It contain negative value. So always prefer slice
// let _slice = txt.slice(14, 37)
// console.log(_slice)

// let _sliceNegative = txt.slice(-37) // In negative it return
// console.log(_sliceNegative)

// -----> substring(start, end)
// let _substring = txt.substring(14,37)
// console.log(_substring) // It doesn't contain negative value like slice

// ----> substr(start, length)
// substr is deprecated because there is other 2 method is available already . 3 same type of method must be confusing
// Also substr using length as the second parameter while other uses end .

// ------> toUpperCase()

// ---------> unicode = Unicode

// ------> toLowerCase()

// ------> Unicode = Unicode is a universal computing standard that assigns a unique numeric value (called a "code point") to every character and symbol in human language. It ensures that text—whether it's English letters, Hindi scripts, mathematical symbols, or emojis—displays correctly across all devices and platforms worldwide

// -------> isWellFormed()
// It will return true if string is well formed, or if not it will return false
// Eg -> "hlo world" = return true
//       "Hlo World \uD800" = return false

// --------> toWellFormed()
// It will display the unicode value in the string
// Eg -> "Fuck you &#128405" > output = Fuck you 🖕

// --------> trim() = The trim() method removes whitespace from both sides of a string
// Eg -> "    Hlo      World    " > output = hlo world

// --------> trimStart() = same as trim() but it remove whitespace from the start of the string only
// let y = ` hlo   "`
// let x = y.trimStart()
// console.log(x)
// console.log(x.length)

// --------> trimEnd() = Same as trimEnd

// ----> padStart() = It pads a string with another string (multiple times) until it reaches a given length.
// let x = "5"
// let padded = x.padStart(5,"1") // output = 11115
// console.log(padded)

// ----> padEnd()

// ----> repeat()
// The repeat() method returns a string with a number of copies of a string.
// # The repeat() method returns a new string.The repeat() method does not change the original string.
// let x = "Hlo "
// let spam = x.repeat(5)
// console.log(spam)

// ------> replace()
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");

// //By default, the replace() method replaces only the first match:
// let text1 = "Please visit Microsoft Microsoft!";
// let newText1 = text1.replace("Microsoft", "W3Schools");
// console.log(newText1) // output => Please visit W3Schools Microsoft

// // In replace() is case sensitive so we cannot acces opposite case sensitive strings, if we want to access we have to use regular expression with /i flag
// let text = "Please visit Microsoft!";
// let newTxt = text.replace(/MICROSOFT/i, "Google")
// console.log(newTxt)

// to replace the all matches in the string we uses /g regular expression
// let txt = " I love coding or food or webseries"
// let alltxt = txt.replace(/or/g, ",")
// console.log(alltxt)

// // /g use pattern to match the string and then convert it. It use for advanced searching and replacing
// let phone = "924-295-176"
// phone = phone.replace(/\d/g, "X")
// console.log(phone)

// -------> replaceAll()
// In replaceAll() is not uses pattern to access it only uses string name. It best for simple txt replacement.

// --------> split()
// A string can be converted to an array by adding some value to the method
// let txt = "linux,Macos,Windows"
// txt = txt.split(",") // , is help to split the string in part of arrays
// console.log(txt)
// // lets print the all array at once
// for(let i = 0; i < txt.length; i++){
//     console.log(txt[i])
// }

// -------------------------> Strings Search <-----------------------------------

// -----> indexOf()
// indexOf() methods return the index of the first occurrence of a string in a string
// let txt = "I am good at valorant"
// let index = txt.indexOf("valorant")
// console.log(index) // output > 13

// -----> lastIndexOf()
// let txt = "I am good at valorant and like valorant";
// let index = txt.lastIndexOf("valorant");
// // It will locate last index from starting 
// console.log(index); // output > 31


// ------> indexOf() with second parameter
// let txt = "I am good at valorant and like valorant"
// let index = txt.indexOf("valorant", 21)
// // the second parameter helps to locate input value after the index . It will help to customize the search
// console.log(index) // output > 13

// ------> search() 
// search index is same as indexOf() but it doesn't use second parameter. It can uses regular expression
// let txt = `console.log("Hlo world")`;
// let index = txt.search(/world/);
// console.log(index) // output 17

// -------> match()
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).
let txt = "The rain in SPAIN stays mainly in the plain";
let txt2 = txt.match("ain");
console.log(txt2[0]);
console.log(txt2.input);



