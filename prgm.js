//WAJSP check number is even or odd

 const prompt = require("prompt-sync")({sigint:true})
// let num = +(prompt("Enter the number:"));
// if(num %2==0){
//     console.log("The number is even");
// }
// else{
//     console.log("The number is odd"); 
// }

// //WAJSP check number is even or odd
// const prompt = require("prompt-sync")({sigint:true})
// let num = +prompt("Enter the number:")
// if( num % 5 == 0 || num % 10 == 0){
//     console.log( " entered number is divisible by 5 and 10")
// }
// else{
//     console.log(" entered number is not divisible by 5 and 10")
// }

//write a js prgm to find the gratest among the 3 numbers
// const prompt = require("prompt-sync")({sigint:true})
// let a = +(prompt("Enter the  first number:"));
// let b = +(prompt("Enter the  second number:"));
// let c = +(prompt("Enter the  third number:"));

//  if(a>b && a>c){
//     console.log("Greatest number is :",a)
//  }
//  else if(b>a && b>c){
//     console.log("Greatest number is:",b)   
//  }
//  else{
//     console.log("Greatest number is :",c)
//  }





// wjp to check whether tha number is positive even positive odd
// const prompt = require("prompt-sync")({sigint:true})
// let num = +(prompt("Enter the number:"));
// if(num > 0 && num % 2 === 0){
//     console.log("The number is positive even")
// }
// // else if(num > 0 && num % 2 !== 0){
// //     console.log("The number is positive odd")
// // }
// // else{
// //     console.log("The number is not positive number")
// // }

// //  wjp to calculate a shopping discount based on purchase amount
// const prompt = require("prompt-sync")({sigint: true});

// let amount = +prompt("Enter purchase amount: ");
// let discount;

// if (amount >= 5000) {
//     discount = amount * 20 / 100;
// }
// else if (amount >= 3000) {
//     discount = amount * 10 / 100;
// }
// else if (amount >= 1000) {
//     discount = amount * 5 / 100;
// }
// else {
//     discount = 0;
// }

// let finalAmount = amount - discount;

// console.log("Purchase Amount:", amount);
// console.log("Discount:", discount);
// console.log("Final Amount:", finalAmount);

//  wjp to given num is single 2,3,digit
//  const prompt = require("prompt-sync")({sigint:true})
//  let num = +(prompt("Enter the number:"));
//  if(num >=0 && num<=9){
//     console.log("The num is single digit")
//  }
//  else if(num >=10 && num<=99){
//     console.log("The num is double digit")
//  }
//   else if(num >=100 && num<=999){
//     console.log("The num is three digit")
//  }
//  else{
//     console.log("Num is not gratest among 3 numbers")
//  }

// // wajp to check wherhter the number is positivr or negative if it is positive check wherther it is even or odd
// let num = +prompt("Enter the number:")
// if(num > 0){
//    if(num% 2 ===0){
//       console.log("The number is positive and even number")
//    }
//    else{
//       console.log("The number is positive and  but not even number")
//    }
// // }
// // else{
// //    console.log("The number is not positive ")
// // }
    

// // check whether a person is eligible for vote if eligible ,check whether the person is a senior citizen if the 
// let age = +prompt("Enter the age:")
// if(age>=18){
//    console.log("The person is eligible for vote")
//       if(age>=60){
//              console.log("The person is senior Citizen")
//                  let gender = prompt("Enter the gender(Male/Female):")
//                     if (gender =="Male"){
//                      console.log("The person id Uncle")
//                     }
//                     else if(gender=="Female"){
//                      console.log("The person is Aunty")
//                     }
//                     else{
//                      console.log("Invalid Gender")
//                     }
//       }else {
//    console.log("The person is not senior Citizen")
// }
// }
// else{
//    console.log("The person is not eligible for vote")
// }

// wajp to check wthether  if a student have passed  check whether student has scored distiction
//  let marks = +prompt("Enter the marks:")
//  if(marks>=35){
//    console.log("Student is passed")
//    if(marks>=85){
//       console.log("student got Distinction")
//    }
//    else{
//       console.log("student  not got Distinction")
//    }
//  }else{
//    console.log("Student is passed")
//  }

// wajp to check whether a person is eligible for driving license if eligible check whether the person knous how to drive the car
// let driving = prompt("Do you have driving Lisence(yes/no):")
// if(driving == "yes"){
//    console.log("The person has the driving lisence")
//    let know = prompt("Do you now how to drive the car(yes/no):")
//    if(know == "yes"){
//       console.log("The person knows how to drive the car")
//    }

// else(know == "no")
// {
//    console.log("The person  not knows how to drive the car")
// }
// }else{
//    console.log("The person  don't have the driving lisence")
// }
// wap for ATM check whether the pin is correct if the pin is correct check wthether the account has suffiicient bal with withdrawal
// let pin = +prompt("Enter the PIN");

// if (pin == 1234) {
//     console.log("PIN is correct");

//     let balance = +prompt("Enter the account balance");
//     let amount = +prompt("Enter the withdrawal amount");

//     if (balance >= amount) {
//         console.log("Sufficient balance");
//         console.log("Withdrawal successful");
//         console.log("Remaining balance:", balance - amount);
//     } else {
//         console.log("Insufficient balance");
//     }

// } else {
//     console.log("Incorrect PIN");
// }

//wajp to find the sum of numbers from 1 to 9 using for loop 
//  let sum = 0;
// for(let i=0;i<=9;i+=1)
//      sum = sum + i;

// console.log("sum =",sum);

// // wajp to print multiples of 5 from 1 to 15
// for(let i=0;i<=50;i++)
//     if(i%5==0){
//         console.log(i)
//     }


// // wajp to check whether the given number is palindrome- imp
//  let num = +prompt("Enter the num:")
//  let original = num
//  let reverse = 0
//  while(num>0){
//     let digit = num%10
//     reverse = reverse*10+digit
//     num = Math.floor(num/10)
//  }
//  if(original === reverse){
//     console.log("palindrome")
//  }else{
//     console.log("Not a Palindrome")
//  }
 

// wajp to print all nubers divisible by 3 between 1 and 30
// for(let i = 0;i<=30;i++)
//     if(i%3==0){
//         console.log(i)
//     }

// find the factorial of the given number - imp
let num = +prompt("Enter the num:")
let  fact = 1
for(let i=1;i<=num;i++)
    fact = fact*i
console.log("Factorial=",fact)
 