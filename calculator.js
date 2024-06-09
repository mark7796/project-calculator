const whatISeeInDisplay = document.querySelector('#result-display');
let displayValue = '';
whatISeeInDisplay.textContent = displayValue;

const updateDisplayValue = function (x) {
    displayValue = x;
    whatISeeInDisplay.textContent += displayValue;
};


let firstNumber = [];
let operator = '';
let secondNumber = [];


const clearAll = function() {
    whatISeeInDisplay.textContent = '';
    firstNumber = [];
    operator = '';
    secondNumber = [];
};

const anotherOperation = function(x) {
    a = parseInt(firstNumber.join(''));
    b = parseInt(secondNumber.join(''));
    whatISeeInDisplay.textContent = '';
    updateDisplayValue(operate(a, operator, b));
    if (operator == '/' && b == 0) {
        clearAll();
        updateDisplayValue('ERROR! You cannot divide by zero!');
    } else if (operator == '') {
        clearAll();
        updateDisplayValue('You have to select an operator!');
    } else if (console.log(operate(a, operator, b) == false)) {
        whatISeeInDisplay.textContent = '';
        updateDisplayValue(operate(a, operator, a));
    }
    firstNumber = [operate(a, operator, b)];
    operator = x;
    secondNumber = [];
    updateDisplayValue(x);
}

/*const backSpace = function() {
    whatISeeInDisplay.textContent = displayValue.replace(/.$/, "");    
    console.log('backspace');
};*/

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
const dotBtn = document.querySelector('#dot');
const backSpaceBtn = document.querySelector('#backspace');


const updateFirstAndSecondNumber = function (x) {
    if (operator == '') {
        firstNumber.push(x);
    } else {
        secondNumber.push(x);
    }
}; 
const updateOperator = function (x) {
    operator += x;
};

zeroBtn.addEventListener('click', () => {
    updateDisplayValue(0);
    updateFirstAndSecondNumber(0);
});
oneBtn.addEventListener('click', () => {
    updateDisplayValue(1);
    updateFirstAndSecondNumber(1);
});
twoBtn.addEventListener('click', () => {
    updateDisplayValue(2);
    updateFirstAndSecondNumber(2);
});
threeBtn.addEventListener('click', () => {
    updateDisplayValue(3);
    updateFirstAndSecondNumber(3);
});
fourBtn.addEventListener('click', () => {
    updateDisplayValue(4);
    updateFirstAndSecondNumber(4);
});
fiveBtn.addEventListener('click', () => {
    updateDisplayValue(5);
    updateFirstAndSecondNumber(5);
});
sixBtn.addEventListener('click', () => {
    updateDisplayValue(6);
    updateFirstAndSecondNumber(6);
});
sevenBtn.addEventListener('click', () => {
    updateDisplayValue(7);
    updateFirstAndSecondNumber(7);
});
eightBtn.addEventListener('click', () => {
    updateDisplayValue(8);
    updateFirstAndSecondNumber(8);
});
nineBtn.addEventListener('click', () => {
    updateDisplayValue(9);
    updateFirstAndSecondNumber(9);
});


plusBtn.addEventListener('click', () => {
    if (operator !== '') {
        anotherOperation('+');
    } else {
        updateDisplayValue('+');
    updateOperator('+');
    }
});
minusBtn.addEventListener('click', () => {
    if (operator !== '') {
        anotherOperation('-');
    } else {
        updateDisplayValue('-');
        updateOperator('-');
    }
});
perBtn.addEventListener('click', () => {
    if (operator !== '') {
        anotherOperation('*');
    } else {
    updateDisplayValue('*');
    updateOperator('*');
    }
});
divBtn.addEventListener('click', () => {
    if (operator !== '') {
        anotherOperation('/');
    } else {
    updateDisplayValue('/');
    updateOperator('/');
    }
});
equalBtn.addEventListener('click', () => {
    a = parseInt(firstNumber.join(''));
    b = parseInt(secondNumber.join(''));
    whatISeeInDisplay.textContent = '';
    updateDisplayValue(operate(a, operator, b));
    if (operator == '/' && b == 0) {
        clearAll();
        updateDisplayValue('ERROR! You cannot divide by zero!');
    } else if (operator == '') {
        clearAll();
        updateDisplayValue('You have to select an operator!');
    } else if (console.log(operate(a, operator, b) == false)) {
        whatISeeInDisplay.textContent = '';
        updateDisplayValue(operate(a, operator, a));
    }
});
clearBtn.addEventListener('click', () => {
    clearAll();
});
/*dotBtn.addEventListener('click', () => {
    updateDisplayValue('.');
    if (firstNumber.includes('.') || secondNumber.includes('.')) {
        clearAll();
        updateDisplayValue('You cannot use dot twice!');
    }
    updateFirstAndSecondNumber('.');
});*/
backSpaceBtn.addEventListener('click', () => {
    backSpace();
});




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
    let division = a / b;
    let result = division.toFixed(1);
    return result;
};

