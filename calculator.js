const whatISeeInDisplay = document.querySelector('#result-display');
let displayValue = '';
whatISeeInDisplay.textContent = displayValue;

const updateDisplayValue = function (x) {
    displayValue = x;
    whatISeeInDisplay.textContent += displayValue;
};



const zeroBtn = document.querySelector('#zero');
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');


zeroBtn.addEventListener('click', () => {
    updateDisplayValue(0);
    });
oneBtn.addEventListener('click', () => {
    result += '1';
});
twoBtn.addEventListener('click', () => {
    result += '2';
});
threeBtn.addEventListener('click', () => {
    result += '3';
});
fourBtn.addEventListener('click', () => {
    result += '4';
});
fiveBtn.addEventListener('click', () => {
    result += '5';
});
sixBtn.addEventListener('click', () => {
    result += '6';
});
sevenBtn.addEventListener('click', () => {
    result += '7';
});
eightBtn.addEventListener('click', () => {
    result += '8';
});
nineBtn.addEventListener('click', () => {
    result += '9';
});



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