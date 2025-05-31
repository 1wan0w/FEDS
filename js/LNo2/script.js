//turn on the new features
'use strict';

console.log('Learning');
console.log('JS');

['Na blyat!', 'Chto b ne vtukala, chepuha.'].forEach(alert);

console.log('Learning' + ' JS');

let basic = 'Learning JS';
console.log('basic = ', basic);

function hello() {
    console.log('Hello, ');
    console.log('motherfucker.');
}
hello();

document.getElementById('text').innerHTML =
    '!You can add some text to an element using a JS script!';
