const num1 = 10000;
const num2 = 1750000;
const outPut = document.querySelector('#output');
const userInPut = document.querySelector('#user-input');
const buttons = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.equal-btn');

buttons.forEach(function(button) {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        writeBtnValue(value);
        // alert(value);
    })
})

equalBtn.addEventListener('click', () => {
    operation();
})


function writeBtnValue(value) {
    userInPut.textContent += String(value);
}

function operation() {
    const userInPutStr = (String(userInPut.textContent));
    const strToArray = userInPutStr.match(/[+\-*\/]|\d+/g); // turning the user input into an array
    let results = parseInt(strToArray[0], 10);

    for (let i = 1; i < strToArray.length; i+2) {
        const operator = strToArray[i];
        const num = parseInt((strToArray[i++]), 10);

        switch(operator) {
            case "+":
                results = add(results, num);
                break;
            case "-":
                results = subtract(results, num);
                break;
        }
    }
}

function add(num1, num2) {
    const total = num1 + num2;
    return total;
}

function subtract(num1, num2) {
    const difference = num1 - num2;
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