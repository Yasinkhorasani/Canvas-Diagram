'use strict';

const calc = {
    // FUNKTIONEN
    createNumber(min, max) {
        return ~~(Math.random() * (max - min + 1) + min);
    },

    // Hier sind num, min und max Parameter bzw Variablen, die nichts mit den globalen Variablen zu tun haben
    createArray(num, min, max) {
        const data = [];
        for (let i = 0; i < num; i++) {
            data.push(calc.createNumber(min, max));
        }
        return data;
    }
}