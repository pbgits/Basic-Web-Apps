// Simple calculator logic
document.querySelector('.keys').addEventListener('click', e => {
const target = e.target;
if(!target.matches('button')) return;


if(target.hasAttribute('data-number')){
inputNumber(target.getAttribute('data-number'));
updateDisplay();
return;
}


const action = target.getAttribute('data-action');
switch(action){
case 'clear': clearAll(); break;
case 'neg': toggleSign(); break;
case 'percent': percent(); break;
case '=':
if(operator){
current = String(performCalculation(operator, previous, parseFloat(current)));
operator = null;
previous = null;
waitingForNewNumber = true;
}
break;
default:
// operator (+ - * /)
handleOperator(action);
}
updateDisplay();
});


// Keyboard support
window.addEventListener('keydown', e => {
const { key } = e;
if((/^[0-9.]$/).test(key)){
inputNumber(key);
updateDisplay();
return;
}
if(key === 'Enter' || key === '='){
document.querySelector('[data-action="="]').click();
return;
}
if(key === 'Backspace'){
current = current.length > 1 ? current.slice(0,-1) : '0';
updateDisplay();
return;
}
if(key === '+' || key === '-' || key === '*' || key === '/'){
handleOperator(key);
updateDisplay();
return;
}
if(key.toLowerCase() === 'c'){
clearAll(); updateDisplay();
}
});


updateDisplay();
