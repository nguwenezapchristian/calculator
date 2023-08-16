const num1 = 10000;
const num2 = 1750000;
const outPut = document.querySelector('#output');
const userInPut = document.querySelector('#user-input');
const buttons = document.querySelectorAll('.btn');

// const operator = "/";

console.log(add(num1, num2));
console.log(subtract(num1, num2));
console.log(divide(num2, num1));
console.log(multiply(num1, num2));

buttons.forEach(function(button) {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        dealWithValue(value);
        alert(value);
    })
})

function dealWithValue(value) {
    if (typeof value === 'number') {
        
    }
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

