// var a =10
// console.log(a)

// //!Declaration 
// var b;
// console.log("value of b before re-secl:",b)

// //!Initialization
// var insti = "pyspiders";
// console.log ("value of insti before re ini:",insti)

// //!Re=declaration & Re-initialization
// var b = 20 //re-declaration
// console.log("val of b after re=declaration:",b)

// insti = "Qspiders" //Re-Initialization
// console.log("val of insti after re-ini:",insti)

// //!Acessibilities
// //blocks & fuctions

// //!if i'm initi  a variable using var outside the block can i access the same variable inside the block
// //it is possible

// var place = "bangalore"
// {
//     console.log(place)
// }
// //if i'm initi a variable using var inside the block can i acess the same variable outside the block
// //it is possible
// var c=60
// {
//     console.log("val of c inside the block:",c)
// }
// //if i'm initi a variable using var outside the function can i acess the same variable inside the funciton
// //it is possible 

// var place = "pune"
// function display(){
//     console.log("val of place inside the function",place)

// }

// //!if i'm initi a varible using var inside the fuction can i acess the same variable outside the function
// //it is not possible
// function display(){
//     var isActive=true
// }
// console.log("val of place outside the function",place)

let area = "BTM"
console.log(area)

//RE-initialization
area = "HSR layout"
console.log(area)

let pincode = "560029"

//!Re-declaration: using let redeclaration is not possible
//(cannot redeclare block-scope varaible)
//let pincode = "560034"

//!IF i'm initi a var using let ouside the block can i acess the same var inside the block
//it is possible
let place = "Bangalore"
{
    console.log("Inside the bolck:,place")
}

//!IF i'm initi a var using let Inside the block can i acess the same var outside the block
//it is  not possible
{
    let c = 60

}
console.log("value of c outsside the block:",c)
//!IF i'm initi a var using let outside the function can i acess the same var inside the function
//it is  not possible
let place = "pune"
function display(){
    console.log("value of place inside the function",place)
}
//display

//!IF i'm initi a var using let inside the function can i acess the same var outside the function
//it is  not possible

function display(){
    var isActive = True
}
 console.log("val of place outside the function",place)


