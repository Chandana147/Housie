let selectedNumbers = [];
let pickNext = document.querySelector('#pickNext');
let currentNumber = document.querySelector('#currentNumber');
let refresh = document.querySelector('#refresh');

pickNext.addEventListener('click', pickNextNumber);
refresh.addEventListener('click', () =>{
    window.location.reload();
})

function pickNextNumber() {
    let number = getRandomNumber();
    if(selectedNumbers.includes(number)){
        pickNextNumber();
    }
    else{
        selectedNumbers.push(number);
    }
    displayAllNumbers();
    currentNumber.innerHTML = number;
}

function getRandomNumber(){
    let randomNumber = Math.ceil(Math.random() * 90)
    return randomNumber
}

displayAllNumbers();
function displayAllNumbers() {
    let allNumbers = document.querySelector('aside');
    allNumbers.innerHTML='';
    for (let i=1; i <= 90; i++){
        let span = document.createElement('span')
        if(selectedNumbers.includes(i)){
            span.classList.add('selected-numbers');
        }
        span.innerHTML = i;
        allNumbers.append(span);
    }
}