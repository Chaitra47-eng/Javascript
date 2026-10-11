// let movies  = ["spiderman","Mirzapur","paradise","RRR","Bahubali","Toxic","Durandhar","GOT"]

// console.log(movies)

// //len of array
// console.log(movies.length)

// //add the element
// movies[8] = "KGF"

// //update 
// movies[0] = "DON"
// console.log(movies)


// //delete
// delete movies[8]
// console.log(movies)
// console.log(movies[8])

//Built-in  methods
let movies  = ["spiderman","Mirzapur","paradise","RRR","Bahubali","Toxic","Durandhar","GOT"]
//1.tostring
// console.log(movies,typeof movies)
// let convertArr = movies.toString()
// console.log(convertArr,typeof convertArr)

// //2.pop- remove the element to the last position
// console.log(movies,typeof movies)
// let convertArr = movies.pop()
// console.log(convertArr,typeof convertArr)

//3.push-add the element to the last position
// console.log(movies,typeof movies)
// let convertArr = movies.push("power")
// console.log(convertArr,typeof convertArr)

//4.shift-remove the element from the 1 st position
//  console.log(movies,typeof movies)
//  let convertArr = movies.shift()
//  console.log(convertArr,typeof convertArr)

 //5.Unshift-add the element from the 1 st position
//  console.log(movies,typeof movies)
// let convertArr = movies.unshift()
// console.log(convertArr,typeof convertArr)

//6.join-join all the given array using separator passed inside it as argument
// let result = movies.join("$")
// console.log(result)

// //7.concat
// let movies2 = ["KGF","pushpa","jaiho"]
// let result = movies.concat(movies2)
// // console.log(result)
// console.log(movies.concat(movies2,[10,20,30]))


//function  with rest parameter & rest  operator
// function sum(...a){
//     return a
// }
// let res = sum(10,"hello",true)
// console.log(res)

//8.slice

// let result = movies.slice(0,3)
// // console.log(result)
// console.log(movies.slice(-1,-4))

//9.splice()-it removes the element from the existing array
// let removed = movies.splice(1,5)
// console.log(removed)

//10.reverse
// let reverse = movies.reverse()
// console.log(reverse)


//  vvimp-11.map()-it returns the new array & it iterate into existing array
// for(let i = 0;i<movies.length;i++){
//     console.log(movies[i])
// }
// let res = movies.map((item)=>{
//     console.log(item)
// })
// console.log(typeof res)

// vvimp-12.ForEach()-it will not return the array
// let res = movies.forEach((item)=>{
//     console.log(item)
// })
// console.log(typeof res)

// //vvimp-13.filter()-it will iterate through the array based on condition
// let nums = [1,2,3,4,5,6]
// let evenNums = nums.filter((num)=>{
//     return num % 2 === 0
// })
// console.log(evenNums)


//vvimp-14.reduce()
let num = [1,2,3,4]
let sum = num.reduce((acc,curVal)=>{
    return acc + curVal
})
console.log(sum)
      

