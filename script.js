const numKey = document.querySelectorAll('.num-key');
const display = document.querySelector('.display-text');
const operatorKey = document.querySelectorAll('.operator-key');
const evalText = document.querySelector('.eval-text');

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
            evalText.textContent = display.textContent + key.value;
            display.textContent = '';
        }
    })
});


function evalExpression(pre, operator, post){
    const evaluated = math.evaluate(pre + post);
    if (operator === '='){
        display.textContent = evaluated;
        evalText.textContent = '';
    } else {
        display.textContent = '';
        evalText.textContent = evaluated + operator
    }
}