let canvas = document.querySelector('canvas');
let lineWidth = document.querySelector('#widthRange');
let colorInput = document.querySelector('#choose-color');
let brushBtn = document.querySelector('.brush');
let eraserBtn = document.querySelector('.eraser');
let clearBtn = document.querySelector('#clear')
let saveBtn = document.querySelector('#save')
let ctx = canvas.getContext('2d');
let drawState = false;
let currentWidth = 5,currentColor = 'black';

window.addEventListener('load',()=>{
    colorInput.value = '#000'
    brushBtn.classList.add('active')
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,canvas.width,canvas.height)
})

function drawing(e){
    if(!drawState) return;
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
}
canvas.addEventListener('mousedown',()=>{
    ctx.beginPath()
    ctx.strokeStyle = currentColor
    ctx.lineWidth = currentWidth
    drawState = true
})
document.addEventListener('mouseup',()=>{
    drawState = false
})
canvas.addEventListener('mousemove',drawing)

lineWidth.addEventListener('change',()=>{
    currentWidth = lineWidth.value
})
colorInput.addEventListener('change',()=>{
    brushBtn.click()
    currentColor = colorInput.value
})
brushBtn.addEventListener('click',()=>{
    brushBtn.classList.add('active')
    eraserBtn.classList.remove('active')
    currentColor = colorInput.value
})
eraserBtn.addEventListener('click',()=>{
    eraserBtn.classList.add('active')
    brushBtn.classList.remove('active')
    currentColor = "white"
})
clearBtn.addEventListener('click',()=>{
    ctx.fillRect(0,0,canvas.width,canvas.height)
})
saveBtn.addEventListener('click',()=>{
    let link = document.createElement('a');
    link.href = canvas.toDataURL()
    link.download = `${Date.now()}`
    link.click()
})