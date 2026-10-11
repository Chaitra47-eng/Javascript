// let insti = "pyspider"
// let place = "BENGALORE"

//1.toupperCase()
// console.log(insti.toUpperCase())

// //2.tolowerCase()
// console.log(place.toLowerCase())

// //3.length
// console.log(insti.length)

// //4.slice()
// console.log(place.slice())

// //5.Replace()
//console.log(place.replace("BENGALORE","HAVERI"))
// console.log(place.replace("B","p"))

//6.concat
// console.log(insti.concat(place))

//7.Trim
// let place = "         BTM           "
// console.log(place)
// console.log(place.trim())

//8.trimStart
// console.log(place.trimStart())

// //9.trimEnd
// console.log(place.trimEnd())

//10.split-it will return the array[] of string elements 
// let  personal = "i am chaitra i'm 20 years old"
// console.log(personal.split(" ",3))
// console.log(personal.split("'",2))
// console.log(personal.split("$",5))//[ "i am chaitra i'm 20 years old" ]

// //11.padstart
// let insti = "pyspiders"
// console.log(insti.length)
// console.log(insti.padStart(10,"$"))
// console.log(insti.padStart(15,"$"))

// const prompt = require("prompt-sync")({sigint : true})
// let contactNumber = prompt("Enter the number to send the otp")
// console.log(contactNumber)

// let extractedNumber = contactNumber.slice(6)
// console.log(extractedNumber)

// let uniNumber = extractedNumber.padStart(10,"*")
// console.log(`OTP has been sent to ${uniNumber} Number`)

// //optimize
// console.log(contactNumber.slice(6).padStart(10,"*"))

//12.padEnd
let insti = "pyspiders"
// console.log(insti.padEnd())

//13.indexOf()-returns the index number of specified character
console.log(insti.indexOf("d"))

//14.charAt-returns the character which s present at specified index
console.log(insti.charAt("s"))

//15.charCodeAt()-returns the ASCII value of character which is present at specified index
console.log(insti.charCodeAt("i"))