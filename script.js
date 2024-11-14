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
    if (button.textContent !== ".") {
        button.addEventListener("click", () => {
            display.textContent += button.textContent;
            expression = display.textContent;
        });
    }
});

const dotButton = document.querySelector(".dot");

dotButton.addEventListener("click", () => {
    if (!display.textContent.includes(".")) {
        display.textContent += dotButton.textContent;
        expression = display.textContent;
    }
});

allOperatorButtons.forEach((button) => {
    console.log(expression.substring(expression.length - 1));
    if (button.textContent !== "=") {
        button.addEventListener("click", () => {
            if (expression.substring(expression.length - 1) !== " ") {
                display.textContent += ` ${button.textContent} `;
                expression = display.textContent;
            }
        });
    }
});

const clearButton = document.querySelector('.clear');

clearButton.addEventListener("click", () => {
    display.textContent = "";
    expression = "";
});

const deleteButton = document.querySelector(".delete");

deleteButton.addEventListener("click", () => {
    let deleteAmount;
    let lastChar = expression[expression.length - 1];
    if (lastChar === " ") {
        deleteAmount = 2;
    } else {
        deleteAmount = 1;
    }
    display.textContent = display.textContent.substring(0, display.textContent.length - deleteAmount);
    expression = expression.substring(0, expression.length - deleteAmount);
})

const equalButton = document.querySelector(".equal");

equalButton.addEventListener("click", () => {
    let lastChar = expression[expression.length - 1];
    if (lastChar === " ") {
        let pastOperator = expression[expression.length - 2];
        if (pastOperator === "*" || pastOperator === "/") {
            expression += "1";
        } else {
            expression += "0";
        }
    } else if (lastChar === ".") {
        expression += "0";
    }

    let expressionArray = expression.split(" ");
    let endValue = +expressionArray[0];
    console.log({expressionArray});
    for (let i = 1; i < expressionArray.length; i += 2) {
        let operator = expressionArray[i];
        let secondValue = +expressionArray[i + 1];
        endValue = operate(endValue, operator, secondValue);
    }

    const ROUND_VALUE = 100000 //5 decimal places
    endValue = Math.floor(endValue * ROUND_VALUE) / ROUND_VALUE;
    display.textContent = endValue;
});
