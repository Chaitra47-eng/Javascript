// let a = 10;
// let b = 20;
// console.log(a + b);

// (()=>{
//     console.log("Hello")
// })()

function display1(){
    console.log("Monday")
}
function display2(){
    console.log("Tuesday")
}
function display3(){
    console.log("Get Lost")
}
// display1(display3())//Here inner most fun will be excuted first then the outer most
// //Innermost fun is called as callback function
// //outer most function is called highered order function
// display2()
display1(display2(display3()))