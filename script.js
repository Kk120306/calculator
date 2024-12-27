const numKey = document.querySelectorAll('.num-key');
const display = document.querySelector('.display-text');
const operatorKey = document.querySelectorAll('.operator-key');

const regex = /[+\-*/]/;


numKey.forEach((key) => {
    key.addEventListener('click', () => {
        if (display.textContent === '0') { // when the display is 0, makes sure that the 0 value dosent stay infront
            display.textContent = '';
        }
        display.textContent += key.value;
    })
});

operatorKey.forEach((key) => {
    key.addEventListener('click', () => {
        // implement the logic to limit the operator key to shown once, replace is other chosen
        if (key.value === '='){
            display.textContent = calcSum(display.textContent);
        } else if (regex.test(display.textContent.split('').pop())){
            display.textContent = display.textContent.substring(0, display.textContent.length - 1) + key.value;
            
        }else{
            display.textContent += key.value;
        }
        

    })
});

function calcSum(expression){
    const expressionArray = [...expression];
    let result = 0;

    expressionArray.forEach((char) => {
        if (char === '+'){

        }
    })
}

