// const name1 = "Ankit"
// const name2 = "Raju"
// const name3 = "Swati"
// const name4 = "Sidhi"
// const name5 = "Aryan"

// Array can store more than one value inside it (in single variable)
// const students = ["Ankit", "Raju", "Swati", "Sidhi", "Aryan"]
// console.log(students[0])

// const marks = [88, 89, 23, 60, 27]
// console.log(marks[2])

// JS Array can hold different data types together.
// Array is non-primitive, because can hold different primitive data type : heterogenous nature
// Array is ordered
// Indexing will start from 0
// Array having dynamic size
// const student1 = ["Ankit", 88, "Bihar", false, "Sonipat"]
// console.log(student1[2])
// console.log(student1.length)
// for(let i=0; i<student1.length; i++){
//     console.log(student1[i])
// }

// const student1 = new Array("Ankit", 24, false)
// console.log(student1)

// student1[1]+=1
// console.log(student1)

// const data = ["Swati Priya", "18-09-25", 24]

// const data = ["Ankit", "Raju", "Shyam"]

// const data = {
//     full_name : "Swati Priya",
//     journey_date : "18-09-25",
//     age : 24
// }

// console.log(data.full_name)
// console.log(data['full_name'])
// const key_name = "age"
// console.log(data[key_name])

// console.log(data.full_name)

// Object length
// console.log(Object.keys(data).length)

// const keys = Object.keys(data)
// console.log(keys)
// for(let i=0; i<Object.keys(data).length; i++){
//     console.log(data[keys[i]])
// }

// Destructuring of Array & Objects

// const data = ["Ankit Singh", 24, "Sonipat", ["13.5", "13.2"]]

// const name =  data[0] 
// const age = data[1]
// const city = data[2]
// const pstCTC = data[3][0]
// const ruCTC = data[3][1]

// In array destructuring order of element matters
// const [name, age, city,[pstCTC, ruCTC]] = data
// console.log(name, age, city, pstCTC, ruCTC)

const data = {
    full_name : "Swati Priya",
    journey_date : "18-09-25",
    age : 24,
    address : {
        city : "Mohania",
        pincode : "821109"
    },
    skills : ["React", "Nodejs", "AWS"],
    marks : [99, 45]
}

// In object destructuring order of element doesn't matters
// const {full_name, journey_date, age} = data
// const {journey_date, full_name, age} = data
const {full_name, journey_date, age, address : {city, pincode}, skills, marks : [phyMarks, chemMarks] } = data

// console.log(full_name, journey_date, age, city, pincode, skills, phyMarks, chemMarks)
// console.log(address)
console.log(marks)
