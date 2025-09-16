// JS is Sync + Single Threaded

// API Calling - 
/*

1. How fast network is?
Syst 1 : Frontend -> Syst 2 : Backend

2. Syst 2 fastness

3. Syst 2 request load

*/

/*

GET https://backend.com/api/v1/users

Ravikant

Ankit

*/

console.log("Test1")

console.log("Test2")

// API Calling - Async 

console.log("Test3")

/*

// API Calling - Async : -> promise

// promise 
// 1. pending state
// 2. resolved/fullfilled
// 3. rejected

*/

function x(){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            try{
                // console.log(data.length)
                resolve(10)
            }catch(err){
                reject(err)
            }
        }, 5000)
       
    })
    return promise
}

x().then((data)=>{
    console.log(data, "Test1")
}).catch((err)=>{
    console.log(err, "Test2")
}).finally(()=>{
    console.log("x work is done")
})

/*

GET : Data Retreival - READ

POST : Data Create - CREATE

PUT : Update Data - UPDATE

DELETE : Data Delete - DELETE

PATCH : Partial Data Update - UPDATE

API_METHOD API_URL/API_ENDPOINT
GET https://jsonplaceholder.typicode.com/posts

*/

// Default Method used by fetch is GET
// axios is alternative of fetch
// fetch is inbuilt support in browser but axios third party dependency
fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("API Calling done")
})