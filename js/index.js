const arrow = document.querySelector('.fas')
const btnArrow = document.querySelector('.arrow')
const picHidden = document.querySelector('.item1')

function addDelShow(){
    picHidden.classList.toggle('show')
    if (picHidden.classList.contains('show')){
        arrow.style.rotate = '180deg'
    }
    else{
        arrow.style.rotate = '0deg'
    }
}

btnArrow.addEventListener('click', addDelShow)
