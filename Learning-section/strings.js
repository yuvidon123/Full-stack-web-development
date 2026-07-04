//-----------------> String Template <-----------------
//  let strName = "yuvi" // This is simple string
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
// 
// -----> Property Access
// let txt = "Fast as fuck boy"
// txt[0] = "L" // It will not work, But its not give an error also.

// -- This approach look strings like array (but they are not)
// -- If no character found it simple return undefined , while CharAt() returns an empty string

// -----> Extracting String Parts

let txt = "I want to play minecraft with friends like old days"
// Slice(start, end)
let _slice = txt.slice(14, 37)// it will return slice part/ string
_slice = txt.slice(-37) // In negative it return
console.log(_slice)
// substring(start, end)
let _substring = txt.substring(14,37)
console.log(_substring)
