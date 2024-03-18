let contextCon = document.querySelector('.container');
let shareMenu = document.querySelector('.share-menu')

document.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    
    let x = e.offsetX;
    let y = e.offsetY;
    let winWidth = window.innerWidth;
    let contextWidth = contextCon.offsetWidth;
    let winHeight = window.innerHeight;
    let contextHeight = contextCon.offsetHeight;
    let shareMenuWidth = shareMenu.offsetWidth;

    x = x > winWidth - contextWidth ? winWidth - contextWidth - 20 : x
    y = y > winHeight - contextHeight ? winHeight - contextHeight - 20 : y

    if(x > winWidth - (contextWidth + shareMenuWidth)){
        shareMenu.style.left="-210px"
    }
    else{
        shareMenu.style.left="270px"
    }
    contextCon.style.left=`${x}px`
    contextCon.style.top=`${y}px`
    contextCon.style.visibility="visible";
    contextCon.style.opacity="1"
})
document.addEventListener('mousedown',()=>{
    contextCon.style.visibility="hidden"
    contextCon.style.opacity='0'
})