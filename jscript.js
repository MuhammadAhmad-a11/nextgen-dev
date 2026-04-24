// // // //Let                   Var(never use)                 Const


// // // //Let           BlockScope       Const

// // // let userId = 23443

// // // {
// // //     console.log(userId)   
// // // }

// // // //Global scope             And        BlockScope
//***************************Conversion*************************** */
// // // let score = "23abc";

// // // console.log(typeof(score));

// // // let inScore = Number(score);

// // // console.log(typeof(inScore));
// // // console.log(inScore);

// // let a = "Ahmad"

// // console.log(a)

// // let course ="Ahmad"

// // console.log(course)

// // let isNumber = Boolean(course)
// // console.log(isNumber)
// // //Why we convert the data types of our variables in javascript Because the data conversion is must 
// // //For some calculation like when ever q=a customer enters the input he enters in string form and we have to calculate it
// // //And convert it into the numbers .

// let userId = "Ahmad 141m"

// //convert

// let usersId = Number(userId)

// console.log(typeof(usersId))
// //What ever the input was in string.

// let userName = "Ahmad"
// let userPersonal = Boolean(userName)
// console.log(userPersonal);

// let score = 33

// console.log(typeof (score))

// let valueInNumber = String(score)
// console.log( valueInNumber)
// console.log(typeof valueInNumber)

/*****************Operation********** */
// let value = 3
// let negValue = -value
// console.log(negValue)
//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2**2)
//console.log(2%2)
//console.log(2/2)

//Basic operations we use in our daily life!

/********comparison********** */

//Clean code is a good code!

// let name = "Ahmad"
// let myName = "Muhammad"

// console.log(name <= myName)

// console.log(null > 0)
// console.log(undefined >=0)
// console.log(true ==0)
// console.log("" ==
//  0) 

// console.log("1" + 2 + 2)

/****************DataTypes */

// Primitive datatypes

// let number = 23
// let number1;
// let l = true;
// let bigNumber = 28839992889833;    //BigInt , strings , Boolean , Numbers , Null , Undefined , Symbol
// let symNumber = Symbol('234')
// let  myName = "Ahmad"
// let isMyName = null;

// Non primitive dataTypes

//Arrays , objects , Functions 
let heros = ["Shan" , "Hairs Raouf" , "Ahmad"];

let obj = {
    name : "Ahmad",
    age : 22,
    userId : 4446,
}

console.log(obj)

let func = function(){
    console.log("Hello world")
}

console.log(func);