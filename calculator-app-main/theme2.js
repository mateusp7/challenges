const themeChoices = document.querySelector('.calculator-theme-box');
const body = document.querySelector('body');
const calculatorTitle = document.querySelector('.calculator-title');
const calculatorTheme = document.querySelector('.calculator-theme');
const calculatorBoxResult = document.querySelector('.calculator-box-result');
const calculatorBoxNumbers = document.querySelector('.calculator-box-numbers');

const changeForTheme = () => {
    if (themeChoices.classList.contains('theme1')) {
        themeChoices.classList.remove('theme1');
        body.classList.remove('theme1');
        calculatorTitle.classList.remove('theme1');
        calculatorTheme.classList.remove('theme1');
        calculatorBoxResult.classList.remove('theme1');
        calculatorBoxNumbers.classList.remove('theme1');
        themeChoices.classList.add('theme2');

        
        body.classList.add('theme2');
        calculatorTitle.classList.add('theme2');
        calculatorTheme.classList.add('theme2');
        calculatorBoxResult.classList.add('theme2');
        calculatorBoxNumbers.classList.add('theme2');
    }
    else if (themeChoices.classList.contains('theme2')) {
        themeChoices.classList.remove('theme2');
        body.classList.remove('theme2');
        calculatorTitle.classList.remove('theme2');
        calculatorTheme.classList.remove('theme2');
        calculatorBoxResult.classList.remove('theme2');
        calculatorBoxNumbers.classList.remove('theme2');
        themeChoices.classList.add('theme3');


        body.classList.add('theme3');
        calculatorTitle.classList.add('theme3');
        calculatorTheme.classList.add('theme3');
        calculatorBoxResult.classList.add('theme3');
        calculatorBoxNumbers.classList.add('theme3');
    } else if (themeChoices.classList.contains('theme3')) {
        themeChoices.classList.remove('theme3');
        body.classList.remove('theme3');
        calculatorTitle.classList.remove('theme3');
        calculatorTheme.classList.remove('theme3');
        calculatorBoxResult.classList.remove('theme3');
        calculatorBoxNumbers.classList.remove('theme3');
        themeChoices.classList.add('theme1');


        body.classList.add('theme1');
        calculatorTitle.classList.add('theme1');
        calculatorTheme.classList.add('theme1');
        calculatorBoxResult.classList.add('theme1');
        calculatorBoxNumbers.classList.add('theme1');
    }
}

themeChoices.addEventListener("click", changeForTheme);


