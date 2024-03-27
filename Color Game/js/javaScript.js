let items = document.querySelectorAll('.item');
const itemsContainer = document.querySelector('.parent')
let modalCon = document.querySelector('.modal-container')
let modalImg = document.querySelector('.modal-img img')
let modalScore = document.querySelector('.modal-score')
let currentScore = document.querySelector('#current-score')
let modalBtn = document.querySelector('.modal-again')
let level = document.querySelector('.level')
let loseText = document.querySelector('.lose-text')
const colors = ["#9b5de5","#f15bb5","#00bbf9","#fb5607",'#ff006e',"#8338ec","#3a86ff","#69072D","#f7d070"]
const abc = ["d","e","f"]
let score = 0,colorLight = "c1" ,colorLightNum = 1,abcNum = 0,itemsLength = 9;

modalBtn.addEventListener('click',()=>{
    currentScore.innerHTML = ` Your Score: ${score}`;
    itemsContainer.style.gridTemplateRows = "1fr 1fr 1fr"
    itemsContainer.style.gridTemplateColumns = "1fr 1fr 1fr"
    level.innerHTML = `level ${abcNum + 1}`
    itemsLength = 9
    items.forEach(val=>{

        val.style.borderRadius = "8px"
    })
    modalCon.style.visibility = "hidden"
    
})

function colorizeItems(){
    let mainColor = colors[Math.floor(Math.random()* colors.length  )]
    
    items.forEach(item=>{
        item.style.backgroundColor = mainColor
    })
    let r = Math.floor(Math.random()* itemsLength)
    let rColor =  mainColor.replace(mainColor,mainColor + colorLight)
    items[r].style.backgroundColor = rColor
    items.forEach((item,index) => {
        if(index == r){
            item.removeEventListener('click',loseGame)
            item.addEventListener('click',winGame)
        }
        else{
            item.removeEventListener('click',winGame)
            item.addEventListener('click',loseGame)
        }
    })
}


function winGame(){
    ++score;
    currentScore.innerHTML = `Your Score: ${score}`;
    nextLevel(score)
    colorizeItems();
}
function loseGame(){
    loseText.innerHTML = "You Lose"
    modalImg.src = "image/sad.png"
    modalScore.innerHTML = `Your Score: ${score}`;
    itemsLength = 9
    colorLight = 'c1'
    colorLightNum = 0
    abcNum = 0;
    modalCon.style.visibility = "visible";
    score = 0;
    colorizeItems();
    
}
function nextLevel(levelScore){
    ++colorLightNum
    colorLight = colorLight.slice(0,-1) + colorLightNum
    if(colorLight.includes(10)){
        colorLight = abc[abcNum] + "1";
        colorLightNum = 1;
        ++abcNum
    }
    if(levelScore == 10){
        itemsContainer.style.gridTemplateRows = "1fr 1fr 1fr 1fr"
        itemsContainer.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
        itemsLength = 16
        level.innerHTML = `level ${abcNum + 1}`
        items.forEach(val=>{
            val.style.borderRadius = "20%"
        })
    }
    if(levelScore == 20){
        itemsContainer.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr"
        itemsContainer.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr"
        itemsLength = 25
        level.innerHTML = `level ${abcNum + 1}`
        items.forEach(val=>{
            val.style.borderRadius = "50%"
        })
    }
    if(levelScore == 30){
        loseText.innerHTML = "You Win"
        modalImg.src = "image/happy.png"
        modalScore.innerHTML = `Your Score: ${score}`;
        itemsLength = 9
        colorLight = 'c1'
        colorLightNum = 0
        score = 0;
        abcNum = 0;
        modalCon.style.visibility = "visible";
    }
}
colorizeItems()