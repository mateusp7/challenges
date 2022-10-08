const result = document.querySelector('[data-calculator="result"]');
const boxNumbers = document.querySelector('.calculator-box-numbers');
const calculator = document.querySelector('.calculator-box-result');

const calcular = (firstValue, operator, secondValue) => {
    if (operator === 'add') {
        return parseFloat(firstValue) + parseFloat(secondValue);
    } else if (operator === 'subtract') {
        return parseFloat(firstValue) - parseFloat(secondValue);
    } else if (operator === 'divide') {
        return parseFloat(firstValue) / parseFloat(secondValue)
    } else if (operator === 'multiply') {
        return parseFloat(firstValue) * parseFloat(secondValue)
    }
}

boxNumbers.addEventListener('click', (e) => {
    const key = e.target;
    const action = key.dataset.operation;
    const keyContent = key.textContent;
    const displayedNum = result.textContent;
    if(e.target.matches('button')) {
        const previousKeyType = calculator.dataset.previousKeyType;
        if (!action) {
            calculator.dataset.previousKeyType = 'number';
            if (displayedNum === '0' || previousKeyType === 'operator') {
                result.textContent = keyContent;
            } else {
                result.textContent = displayedNum + keyContent;
            }
        }
        if(action === 'delete') {
            if (result.textContent.length >= 1) {
                const lastDigit = result.textContent.replace(/.$/, '');
                result.textContent = lastDigit
            } if (result.textContent.length === 0) {
                result.textContent = '0'
            }
        }
        if (action === 'decimal') {
            calculator.dataset.previousKeyType = 'decimal';
            if(!displayedNum.includes('.')) {
                result.textContent = displayedNum + ".";
            } if (previousKeyType === 'operator') {
                console.log('sim')
                result.textContent = '0.';
            }
            calculator.dataset.previousKeyType = 'decimal';
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action;
        }
        if (action === 'equal') {
            calculator.dataset.previousKeyType = 'equal';
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            result.textContent = calcular(firstValue, operator, secondValue)
        }
        if (action === 'reset') {
            calculator.dataset.previousKeyType = 'reset';
            result.textContent = 0;
        }
    }
} )

