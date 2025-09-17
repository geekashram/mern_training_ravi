// WEB APIs
// DOM APIs are part of WEB APIS
// WEB APIS will help to communicate browser with JS

// console.log(document)

// const para1 = document.getElementById("para1")
// console.log(para1)

// para1.style.color = "red"

// para1.style.backgroundColor = "blue"

// para1.innerText = "I am changed"

// para1.innerHTML = "I am changed"

// para1.innerText = '<button>Save</button>'
// para1.innerHTML = '<button>Save</button>'


// const btn1 = document.getElementById("btn1")

// btn1.addEventListener("click", ()=>{
//     const para1 = document.getElementById("para1")
//     para1.style.color = "red"
//     para1.innerText = "I am clicked"
// })

// const btn1 = document.getElementById("btn1")

// btn1.addEventListener("click", ()=>{
//     // get input value
//     const nameInput = document.getElementById("nameInput")
//     const value = nameInput.value
//     // target p and put input value in p
//     const para1 = document.getElementById("para1")
//     para1.innerText = `Hi ${value}`
//     para1.style.display = "block"

//     nameInput.value = ""

//     alert(`Hi ${value}`)
// })

fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
    return res.json()
}).then((data)=>{
    for(let i=0; i<data.length; i++){

        const post = data[i]
        const {title} = post
        console.log(title)

        const root = document.getElementById("root")

        const h1 = document.createElement("h1")
        h1.innerText = title


        root.appendChild(h1)
    }
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("API Calling done")
})