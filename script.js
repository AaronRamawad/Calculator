function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let valueOne;
let operator;
let valueTwo;

function operate(valueOne, operator, valueTwo) {
    switch(operator){
        case "+":
            add(valueOne, valueTwo);
            break;
        case "-":
            subtract(valueOne, valueTwo);
            break;
        case "*":
            multiply(valueOne, valueTwo);
            break;
        case "/":
            divide(valueOne, valueTwo);
            break;
    }
}