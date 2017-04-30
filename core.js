var x;

x = 5;

var y = 10;

var resultAdd = x + y;
var resultSub = x - y;
var resultMult = x * y;
var resultDiv = x / y;

console.log('Додавання:',resultAdd);
console.log('Віднімання:',resultSub);
console.log('Множення:',resultMult);
console.log('Ділення:',resultDiv);

var firstNumber = Number(prompt('Enter first number'));
var secondNumber = Number(prompt('Enter second number'));

console.log('First number:',firstNumber);
console.log('Second number:',secondNumber);

var resultAdd = firstNumber + secondNumber;
var resultDiv = firstNumber / secondNumber;
var resultMult = firstNumber * secondNumber;
var resultSub = firstNumber - secondNumber;
var mod = firstNumber % secondNumber;
var inc = ++firstNumber;
var dec = --secondNumber;

console.log('Додавання:',resultAdd);
console.log('Віднімання:',resultSub);
console.log('Множення:',resultMult);
console.log('Ділення:',resultDiv);
console.log('mod',mod);
console.log('inc',firstNumber++);
console.log('dec',secondNumber--);

var txt1 = 'My first text';
var txt2 = 'My second text';
document.write(txt1 +'<br>' + txt2);
