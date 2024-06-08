const whatISeeInDisplay = document.querySelector('#result-display');
let displayValue = '';
whatISeeInDisplay.textContent = displayValue;

const updateDisplayValue = function (x) {
    displayValue = x;
    whatISeeInDisplay.textContent += displayValue;
};
const clearDisplayValue = function() {
    whatISeeInDisplay.textContent = '';
}



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

const plusBtn = document.querySelector('#add');
const minusBtn = document.querySelector('#substract');
const perBtn = document.querySelector('#multiply');
const divBtn = document.querySelector('#divide');
const equalBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');


zeroBtn.addEventListener('click', () => {
    updateDisplayValue(0);
    });
oneBtn.addEventListener('click', () => {
    updateDisplayValue(1);
});
twoBtn.addEventListener('click', () => {
    updateDisplayValue(2);
});
threeBtn.addEventListener('click', () => {
    updateDisplayValue(3);
});
fourBtn.addEventListener('click', () => {
    updateDisplayValue(4);
});
fiveBtn.addEventListener('click', () => {
    updateDisplayValue(5);
});
sixBtn.addEventListener('click', () => {
    updateDisplayValue(6);
});
sevenBtn.addEventListener('click', () => {
    updateDisplayValue(7);
});
eightBtn.addEventListener('click', () => {
    updateDisplayValue(8);
});
nineBtn.addEventListener('click', () => {
    updateDisplayValue(9);
});


plusBtn.addEventListener('click', () => {
    updateDisplayValue('+');
});
minusBtn.addEventListener('click', () => {
    updateDisplayValue('-');
});
perBtn.addEventListener('click', () => {
    updateDisplayValue('*');
});
divBtn.addEventListener('click', () => {
    updateDisplayValue('/');
});
equalBtn.addEventListener('click', () => {

});
clearBtn.addEventListener('click', () => {
    clearDisplayValue();
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

