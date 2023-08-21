const num1 = 10000;
const num2 = 1750000;
const outPut = document.querySelector('#output');
const userInPut = document.querySelector('#user-input');
const buttons = document.querySelectorAll('.btn');


// var operatorValue = '';


buttons.forEach(function(button) {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        writeBtnValue(value);
        // alert(value);
    })
})


function writeBtnValue(value) {
    userInPut.textContent += String(value);
    // console.log(String(value));
    // console.log(userInPut);
    // let arrayOfInPut = (String(userInPut.textContent)).split('');
    // console.log(arrayOfInPut);
}

function operation() {
    const userInPutStr = (String(userInPut.textContent));
    const strToArray = userInPutStr.match(/[+\-*\/]|\d+/g);
    console.log(strToArray);
}

function add(num1, num2) {
    const total = num1 + num2;
    return total;
}

function subtract(num1, num2) {
    const difference = num2 - num1;
    return difference;    
}

function multiply(num1, num2) {
    const product = num1 * num2;
    return product;
}

function divide(num2, num1) {
    const quotient = num2 / num1;
    return quotient;
}