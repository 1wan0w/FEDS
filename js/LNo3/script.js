'use strict';
/*
while using 'use strict' mode, a keyword "let" is necessary to create a new variable
*/

/*
valid variable names: age, info123, $size, _color, leftSidebarSize(lowerCamelCase)
invalid variable names: 123infon, my-age, let/break/for, 
*/


// Можно объявить переменную и после прописать ей значение
let myFirstVariable;
myFirstVariable = 'text';
console.log(myFirstVariable);


// Можно объявлять сразу несколько переменных под одним keyword-ом
let userName = 'test', userAge = '404', userMessage = 'hello';
/*
let userName = 'test',
    userAge = '404',
    userMessage = 'hello';

let userName = 'test';
let userAge = '404';
let userMessage = 'hello';
*/
console.log(userName, userAge, userMessage);
// И динамически изменять значение переменной
userMessage = 'go fuck yourself';
console.log(userName, userAge, userMessage);


// Можно перезаписать значение одной переменной на значение другой
let _userName = 'test';
let _newUserName = 'testtest';
_userName = _newUserName;
console.log(_newUserName);


// Переменная объявленная внутри блока - изолирована
function testBlock() {
    let textTest = 'Function block testing';
    console.log(textTest);
}
testBlock();
// console.log(textTest);


// Возможно реализовать переменные с одним названием и разным значением в изолированных блоках
let test = 'Outside the block text';
function testBlock2() {
    let test = 'Inside the block text';
    console.log(test);
}
testBlock2();
console.log(test);


/*
You can't change a variable's value in a shared block
let _test = 1;
let _test = 2;

But it works for different blocks that use the same variable name
*/
for (let i = 0; i < 3; i++) {
    console.log(i);
    if (i == 2) {
        console.log('End of the first loop');
    };
}

for (let i = 5; i != 0; i--) {
    console.log(i);
    if (i == 1) {
        console.log('End of the second loop');
    }
}

const testVar = 'test';
console.log(testVar);

// Имена заранее известных констант указываются в uppercase
const CASH = '100';
const COLOR_RED = '#F00';

// Возможно изменять значения данных внутри константы-объекта/массива
const userData = {
    name: 'test',
    age: 404,
    message: 'F*ckU'
}
console.log(userData);

userData.age = 505;
console.log(userData);


// значение var можно использовать до объявления, даже в 'use strict' моде
price = 125;
console.log(price);

var price;

// переменная, объявленная через var в блоках(кроме function), будет видна за его пределами
if (true) {
    var sizeVar = 50;
    console.log('Inside the block value =', sizeVar);
}
console.log('Outside the block value=', sizeVar);

