function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

let num1 = '';
let num2 = '';
let currentInput = 'num1';
let operator = '';

function operate(operator, num1, num2){
    switch (operator){
        case '+':
            return add(num1, num2)
            break;
        case '-':
            return subtract(num1, num2)
            break;
        case '*':
            return multiply(num1, num2)
            break;
        case '/':
            return divide(num1, num2)
            break;
    }   

}


const numBtn = document.querySelectorAll('.number')
const display = document.querySelector('.display')
const operatorBtn = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equals')
const clearBtn = document.querySelector('.clear')


function updateDisplay(value){
    display.textContent = value || '0'
}

numBtn.forEach(button => {
    button.addEventListener('click', (event) => {
        const digit = event.target.textContent;
        if (currentInput === 'num1'){
            num1 += digit;
            updateDisplay(num1);
        }
        else{
            num2 += digit;
            updateDisplay(num2);
        }
    });
})

operatorBtn.forEach(button => {
    button.addEventListener('click', (event) => {
        const op = event.target.textContent;
        currentInput = 'num2'
        operator = op
    })
})

equalsBtn.addEventListener('click', (e) =>{
    if(!operator || num1 === '' || num2 === ''){
        alert('Please, enter numbers and operator.')
        return
    }
    
    const a = Number(num1);
    const b = Number(num2);
    let result;
    result = operate(operator, a, b);
    display.textContent = result;

    num1 = String(result);
    num2 = '';
    currentInput = 'num1';
    operator = ''

})

clearBtn.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    currentInput = 'num1';
    operator = '';
    updateDisplay('0');
})


