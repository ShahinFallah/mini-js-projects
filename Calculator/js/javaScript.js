let vals = document.querySelectorAll('.val')
let output = document.querySelector(".text")
let equal = document.querySelector('.equal')
let DEL = document.querySelector('.DEL')
let AC = document.querySelector('.AC')

AC.addEventListener("click",()=>{
    output.value = ""
})
DEL.addEventListener("click",()=>{
    output.value = output.value.slice(0,-1);
})
vals.forEach(val => {
    val.addEventListener("click",()=>{
        output.value += val.value;
    })
});

equal.addEventListener("click",()=>{
    output.value = eval(output.value);
})