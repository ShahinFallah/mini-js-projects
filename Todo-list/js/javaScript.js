let createBtn = document.querySelector('#input-box');
let createBoxContainer = document.querySelector('.input-container');
let cancelBtn = document.querySelector('#cancel');
let boxInput = document.querySelector('#list-input')
let listContainer = document.querySelector('.todolist-list-ul')
let clearBtn = document.querySelector('#clear')
let searchInput = document.querySelector('#search')

showData()

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML = localStorage.getItem('data')
}
function createBoxVisibility(e){
    if(e.target == createBtn){
        createBoxContainer.style.visibility = 'visible'
    }
    else{
        createBoxContainer.style.visibility = 'hidden'
    }
}
function addList(){
    if(boxInput.value.length < 5){
        if(!boxInput.value){
            alert('You most write something')
            return
        }
        if(boxInput.value.length < 5){
            alert('Your number of characters must be at least 5')
        }
        return
    }
    let li = document.createElement('li')
    li.textContent = boxInput.value;
    listContainer.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = '\u00D7'
    li.appendChild(span)
    boxInput.value = ''
    createBoxContainer.style.visibility = 'hidden'
    saveData()
}
function search(){
    for(const li of listContainer.children){
        if(li.textContent.indexOf(searchInput.value) == -1){
            li.style.display = 'none'
        }else{
            li.style.display = 'block'
        }
    }
}

createBtn.addEventListener('click',createBoxVisibility)
cancelBtn.addEventListener('click',createBoxVisibility)

// List options ==>
listContainer.addEventListener('click',e=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }
    saveData()
})

// clear list ==>
clearBtn.addEventListener('click',()=>{
    localStorage.clear()
    listContainer.innerHTML = ''
    saveData()
})

// search ==>
searchInput.addEventListener('input',search)

// Enter key for add ==>
createBoxContainer.addEventListener('keydown',e=>{
    if(e.key == 'Enter'){
        addList()
    }
})