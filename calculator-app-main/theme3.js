const themeChoicesTeste = document.querySelector('.calculator-theme-box');

const changeForTheme3 = () => {
    themeChoicesTeste.classList.add('theme3');
    themeChoicesTeste.classList.remove('theme2');
}

if(themeChoicesTeste.classList.contains("theme2")) {
    console.log('contem')
    themeChoicesTeste.addEventListener("click", changeForTheme3);
}



