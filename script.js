const numKey = document.querySelectorAll('.num-key');
const display = document.querySelector('.display-text');
const operatorKey = document.querySelectorAll('.operator-key');
const evalText = document.querySelector('.eval-text');
const acBtn = document.querySelector('.clear-key');
const delBtn = document.querySelector('.del-key');
const dotBtn = document.querySelector('.dot-key');


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
        if (regex.test(evalText.textContent.split('').pop()) && display.textContent === '' && key.value !== '='){
            evalText.textContent = evalText.textContent.substring(0, evalText.textContent.length - 1) + key.value;
        } else if (regex.test(evalText.textContent.split('').pop()) && display.textContent !== ''){
            evalExpression(evalText.textContent,key.value,display.textContent);
        }else {
            if (key.value !== '='){
                evalText.textContent = display.textContent + key.value;
                display.textContent = '';
            }
        }
    })
});


function evalExpression(pre, operator, post){
    const evaluated = Math.round(math.evaluate(pre + post) * 100) / 100;
    if (operator === '=' && display.textContent !== ''){
        display.textContent = evaluated;
        evalText.textContent = '';
    } else {
        display.textContent = '';
        evalText.textContent = evaluated + operator
    }
}

acBtn.addEventListener('click', () => {
    display.textContent = '0';
    evalText.textContent = '';
});

delBtn.addEventListener('click', () => {
    if (display.textContent !== ''){
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    } else if (display.textContent === '' && evalText.textContent !== ''){
        display.textContent = evalText.textContent.substring(0, evalText.textContent.length - 1);
        evalText.textContent = '';
 }});

dotBtn.addEventListener('click', () => {
    if (!display.textContent.includes('.')){
        display.textContent += '.';
    }
});