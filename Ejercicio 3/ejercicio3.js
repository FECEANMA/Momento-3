'use strict'

let phrase = 'La programación web es fundamental para el progreso'
let palabras = phrase.split(' ');
let palabrasmayor = palabras.filter(palabra => palabra.length > 3);
alert(palabrasmayor);