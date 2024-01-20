'use strict'

let phrase = 'La programación web es fundamental para el progreso'
let palabras = phrase.split(' ');
for (let ph of palabras){
    alert(ph)
};
let cantidadPalabras = palabras.length;
alert(`La cantida de palabras son: ${cantidadPalabras}`);
