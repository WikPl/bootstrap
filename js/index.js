const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const color = document.querySelector('.color')
const p = document.querySelector('p')

function bigText(){
    p.style.fontSize = '150px'
}

sizeUp.addEventListener('click', bigText)