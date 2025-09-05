// Basics : Why JS?
// Let/Var/Const - Scope
// Functions

// function add(a, b){
//     return a + b
// }

// console.log(add(18, 22))
// console.log(add(10, 5))
// console.log(add(45, 10))
// console.log(add("Ankit", "Singh"))
// console.log(add("Ankit", 20))

// operators : +, -, 

// 'Ankit' "Ankit" `Ankit`

// greet fn defination
// function greet(name, city){ // name & city are parameter of greet fn
//     console.log(`Hello ${name}, when you came from ${city}.`) // String literal - `Hello ${name}, when you came from ${city}.`
// }

// greet fn calling/invocation
// greet("Ankit Singh", "Bihar") // "Ankit Singh", "Bihar" are arguments of greet fn

// const greet = (name, city)=>{
//     console.log(`Hello ${name}, when you came from ${city}.`)
// }

// greet("Ankit Singh", "Bihar")

// let greet = (name, city)=>{
//     console.log(`Hello ${name}, when you came from ${city}.`)
// }

// greet("Ankit Singh", "Bihar")

// var greet = (name, city)=>{
//     console.log(`Hello ${name}, when you came from ${city}.`)
// }

// greet("Ankit Singh", "Bihar")

const greet = (name, city) => console.log(`Hello ${name}, when you came from ${city}.`) // Arrow Func
greet("Ankit Singh", "Bihar")


// const add = (num1, num2)=>{
//     const res = num1 + num2
//     return num1
// }

// const add = (num1, num2)=>{
//     return num1 + num2
// }

// const add = (num1, num2)=>num1 + num2
// console.log(add(10, 20))

// const x = (num1, num2)=>{
//     const res = num1 + num2
//     if(res%2===0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }

// x(10, 20)


// const x = (num1, num2) => ((num1+num2)%2) ? console.log("odd") : console.log("even")

// x(10, 20)


