/*

JS Func is very imp.

JS func is first class citizen.

First Class Citizen - 1. Store in variable, 2. Pass as an argument 3. return from the function

*/

// const age = 25;

// function greet(age){
//     console.log("You are ", age)
// }

// greet(25)

// function square(num){
//     return num**2
// }

// square(5)

// number is a first class citizen

// const greet = (name)=>{
//     console.log("hello ", name)
// }

// const calcAge = function (birthYear){
//     return 2025 - birthYear
// }

// greet("Ankit")

// console.log(calcAge(2001))

// const a = ()=>{
//     console.log(" I am a func")
// }

// const b = (x)=>{
//     x()
// }

// b(10)

// b(a) // we are passing a func as a argument to the b func

/*

We are passing a func as a argument to b func, that's why a is known as callback func

b func is a Higher Order Function - HoF

*/

// m func is a HoF
// const m = ()=>{
//     const n = (age)=>{
//         console.log("You are ", age, " years old.")
//     }
//     return n
// }

// const p = m()

// p(25)

// const a = ()=>{
//     console.log(" I am a func")
// }

// const b = (x)=>{
//     x()
//     return ()=>{
//         console.log("hello")
//     }
// }

// b(a)

// const logic = ()=>{
//     console.log("Hi") 
// }

// setTimeout(logic, 2000)

// setTimeout is a func, also it is a HoF
// logic is a callback (cb) func

const employees = [
  { id: 1, name: "John Doe", age: 28, department: "Engineering", role: "Software Developer", salary: 60000 },
  { id: 2, name: "Jane Smith", age: 32, department: "HR", role: "HR Manager", salary: 50000 },
  { id: 3, name: "Michael Johnson", age: 40, department: "Finance", role: "Accountant", salary: 55000 },
  { id: 4, name: "Emily Davis", age: 26, department: "Marketing", role: "Digital Marketer", salary: 45000 },
  { id: 5, name: "David Wilson", age: 35, department: "Engineering", role: "Team Lead", salary: 75000 },
  { id: 6, name: "Sophia Brown", age: 29, department: "Design", role: "UI/UX Designer", salary: 52000 },
  { id: 7, name: "Daniel Miller", age: 31, department: "Engineering", role: "Backend Developer", salary: 65000 },
  { id: 8, name: "Olivia Martinez", age: 27, department: "Sales", role: "Sales Executive", salary: 48000 },
  { id: 9, name: "James Anderson", age: 45, department: "Finance", role: "Finance Manager", salary: 80000 },
  { id: 10, name: "Ava Thomas", age: 30, department: "Engineering", role: "Frontend Developer", salary: 61000 },
  { id: 11, name: "William Taylor", age: 38, department: "Support", role: "Customer Support Lead", salary: 47000 },
  { id: 12, name: "Isabella White", age: 25, department: "HR", role: "Recruiter", salary: 42000 },
  { id: 13, name: "Ethan Harris", age: 33, department: "Engineering", role: "DevOps Engineer", salary: 70000 },
  { id: 14, name: "Mia Clark", age: 29, department: "Marketing", role: "Content Strategist", salary: 46000 },
  { id: 15, name: "Alexander Lewis", age: 36, department: "Engineering", role: "Architect", salary: 90000 },
  { id: 16, name: "Charlotte Walker", age: 28, department: "Design", role: "Graphic Designer", salary: 50000 },
  { id: 17, name: "Benjamin Hall", age: 41, department: "Sales", role: "Sales Manager", salary: 78000 },
  { id: 18, name: "Amelia Allen", age: 24, department: "Engineering", role: "Intern", salary: 25000 },
  { id: 19, name: "Lucas Young", age: 34, department: "Support", role: "Tech Support Engineer", salary: 52000 },
  { id: 20, name: "Harper King", age: 37, department: "Finance", role: "Business Analyst", salary: 67000 }
];

// const result = []
// for(let i =0; i<employees.length; i++){
//     const emp = employees[i]
//     const {age} = emp
//     if(age>=30){
//         result.push(emp)
//     }
// }

// console.log(result)

// const cb = ({age})=>{
//     return age>=30
// }

// const result = employees.filter(cb)

// console.log(result)

const result = employees.filter((emp)=>{
    const {salary} = emp
    return salary>=80000
})

console.log(result)


