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
    if (b === 0) {
        return "Nice Try Bro";
    } else {
        return a / b;
    }
    
}

let valueOne;
let operator;
let valueTwo;

function operate(valueOne, operator, valueTwo) {
    if (operator === "+") {
        return add(valueOne, valueTwo);
    } else if (operator === "-") {
        return subtract(valueOne, valueTwo);
    } else if (operator === "*") {
        return multiply(valueOne, valueTwo);
    } else if (operator === "/") {
        return divide(valueOne, valueTwo);
    }
};

const display = document.querySelector('.display');
const allNumberButtons = document.querySelectorAll('.number');
const allOperatorButtons = document.querySelectorAll('.operator');
let expression = "";

allNumberButtons.forEach((button) => {
    if (button.textContent !== "=") {
        button.addEventListener("click", () => {
            display.textContent += button.textContent;
            expression = display.textContent;
        });
    }
});

allOperatorButtons.forEach((button) => {
    if (button.textContent !== "AC") {
        button.addEventListener("click", () => {
            display.textContent += ` ${button.textContent} `;
            expression = display.textContent;
        });
    }
});

const clearButton = allOperatorButtons[0];

clearButton.addEventListener("click", () => {
    display.textContent = "";
    expression = "";
});

const equalButton = document.querySelector(".equal");

equalButton.addEventListener("click", () => {
    
    let expressionArray = expression.split(" ");
    let endValue = +expressionArray[0];
    console.log({expressionArray});
    for (let i = 1; i < expressionArray.length; i += 2) {
        let operator = expressionArray[i];
        let secondValue = +expressionArray[i + 1];
        endValue = operate(endValue, operator, secondValue);
    }
    display.textContent = endValue;
});
