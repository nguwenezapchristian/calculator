const num1 = 100;
const num2 = 175;

add(num1, num2);
subtract(num1, num2);
divide(num2, num1);
multiply(num1, num2);

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

