const arrow = document.querySelector('.fa-arrow-down')
const btnArrow = document.querySelector('.arrow')
const picHidden = document.querySelector('.item1')

function addDelShow(){
    picHidden.classList.toggle('show')
}

btnArrow.addEventListener('click', addDelShow)