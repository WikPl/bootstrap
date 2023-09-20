const arrow = document.querySelector('.fa-arrow-down')
const btnArrow = document.querySelector('.arrow')
const picHidden = document.querySelector('.item1')

function addDelShow(){
    picHidden.classList.toggle('show')
    if (picHidden.classList.contains('show')){
        console.log('OK');
    }
    else{
        console.log('NIE OK');
    }
}

btnArrow.addEventListener('click', addDelShow)
