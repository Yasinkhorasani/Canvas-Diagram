'use strict';

let numValues = 20, min = 10, max = 5000;
const elements = {};
let padding = 2;


// DOM-Elemente initial suchen
const domMapping = () => {
    elements.main = document.querySelector('main');
}

// FUNKTIONEN
const init = () => {
    domMapping();

    diagram.create(calc.createArray(10, 20, 50));
    diagram.create(calc.createArray(20, 100, 500));
    diagram.create(calc.createArray(50, 1e9, 2e9));

}

// INIT
init();
