const outPut = document.querySelector('#output');
const userInPut = document.querySelector('#user-input');
const buttons = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.equal-btn');

buttons.forEach(function(button) {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        writeBtnValue(value);
    })
})

equalBtn.addEventListener('click', () => { // if '=' button clicked call operation function
    operation();
})

// function to write the number and operator as the user clicks the button

function writeBtnValue(value) {
    userInPut.textContent += String(value);
}

// function to perform operation depending on the operator 

function operation() {
    const userInPutStr = (String(userInPut.textContent));
    const strToArray = userInPutStr.match(/[+\-*\/]|\d+/g); // turning the user input into an array
    let results = parseInt(strToArray[0], 10);

    for (let i = 1; i < strToArray.length; i += 2) {
        const operator = strToArray[i];
        const num = parseInt((strToArray[i + 1]), 10);

        switch(operator) {
            case "+":
                results = add(results, num);
                break;
            case "-":
                results = subtract(results, num);
                break;
            case "*":
                results = multiply(results, num);
                break;
            case "/":
                if (num == 0) {
                    outPut.textContent = `You can't divide by 0`
                } else {
                    results = divide(results, num);
                };
                break;
        }
    }
    outPut.textContent = `${userInPut.textContent} = ${results}`;
    userInPut.textContent = results;
}

// functions for performing the addition, subtraction, multiplication and division

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

function divide(num1, num2) {
    const quotient = num1 / num2;
    return quotient;
}