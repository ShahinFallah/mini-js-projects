let generateBtn = document.querySelector("button") 
let qrContainer = document.querySelector(".qr-code")
let qrInput = document.querySelector("input")
let qrImage = document.querySelector(".qr-code img")

generateBtn.addEventListener("click",()=>{
    if(!qrInput.value){
        return alert("Please enter your text or web address")
    }
    generateBtn.innerText = "please wait . . .";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`
    qrImage.addEventListener("load",()=>{
        generateBtn.innerText = "Generate qr code";
        qrContainer.classList.remove("hidden")
    })
})
qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        qrContainer.classList.add("hidden")
    }
})













// https://jsonplaceholder.typicode.com/posts