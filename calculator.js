let firstNumber = 0;
let operator = '';
let secondNumber = 0;


const operate = function(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+': return add(firstNumber, secondNumber);
                    break;
        case '-': return substract(firstNumber, secondNumber);
                    break;
        case '*': return multiply(firstNumber, secondNumber);
                    break;
        case '/': return divide(firstNumber, secondNumber);
                    break;
    }
}


const add = function(a, b) {
    return a + b;
};

const substract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

console.log(operate(firstNumber, operator, secondNumber));