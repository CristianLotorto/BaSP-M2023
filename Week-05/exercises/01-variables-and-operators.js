/**************************
 1. Variables y Operadores
 **************************/

console.log('1. Variables y Operadores');

/***************************************************************************************************** 
a- Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos 
números en una 3er variable.
 *****************************************************************************************************/

console.log('--Ejercicio 1.a');

var number1 = 3;
var number2 = 5;

var add = number1 + number2;

console.log(add);


/***************************************************************************************************** 
b- Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
 *****************************************************************************************************/

console.log('--Ejercicio 1.b');

var personName = 'Juan Sánchez';
var personLikes = 'likes art, Linier´s comics';

var personPhrase = personName+' '+personLikes;

console.log(personPhrase);


/***************************************************************************************************** 
c- Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length).
 *****************************************************************************************************/

console.log('--Ejercicio 1.c');

var hero = 'Batman';
var villain = 'Joker';

var stringAdd = hero.length + villain.length;

console.log(stringAdd);
