//Named function
//Ananymous fuct
//Arrow func
//Built- in funct
//call back func
//
//1.named func
// syntax:
// func func name(){
//     #code
// }
// // func Name()
// function display(){
//     console.log("Nature is Beautifull")
// }
// display()

//2.Ananymous func
// syntax:  let var=function(){
//     #code
// }
// variable()


// let display = function(){
//     console.log("Hello")
// }
// display()


//3.Arrow func:syntax=
// let var= ()=>{
//     #code
// }
// var()

// let display = () =>{
//     console.log("Hello JS")
// }
// display()

//fuction with default parameter
// function sum(a=10,b){
// function sum(a,b=5){
// console.log(a+b)
// }
// sum(10,20)
// sum(10,5)
// sum( undefined,10)

// default parameter these are used when we are not passing any value and aggumrnt during the func call default parameter helps tirstore the value the value not given
// default para wtll be having the least priority if the argumeny is passed
// default parameter must be given for second parameter beacause
// if you pass the  value for the first parameter  during the function call if we pass the agurmeny the value will not store the second paaramter it will override the paerameter the defaulit parameter and get the output NaN
// if you don't pass any default paramter and if  there are 2 parametrers during the funct call if we store only one value for the first parameter if you do some arithmatic opertion we will get output as NaN


// sum(15,10)
// function sum(a,b){
//     console.log(a+b)
//     //15
// }
//Note:
// sum(15,10)

// function sum(a,b){
//     console.log(a+b)
// }
// in the above example the func is been called before defining the function  and will get the output as expected because here  we are using func declaration so 
// *finction declaration can suport hosting or function hosting can be done using func declaration

// sum(15,10)
// let sum = (a,b) =>{
//     console.log(a+b)
// }
// // In the above example  calling the function before 

// //function with return keyword
// function sum(a,b){
//     return a+b
// }
// let res = sum(10,2)
// console.log(res)

// //function with return keyword+ console statement
// function sub(a,b){
//     return a+b
// }
// let res = sub(10,2){
//     console.log(a+b);
//     console.log("Start")
//     return a+b
//     console.log("End")
// }
// let res = sub(10,2)

// //IIFE
// ((a,b)=>{
//     console.log(a+b)
// })(10,2)

let a = 10;
let b = 20;
console.log(a + b);

(()=>{
    console.log("Hello")
})()


