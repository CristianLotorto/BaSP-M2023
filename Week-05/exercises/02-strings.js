/**************************
 2. Strings
 **************************/

 console.log('2. Strings');

/***************************************************************************************************** 
a- Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase).
 *****************************************************************************************************/
console.log('--Ejercicio 2.a');

var lowerCaseString = 'i want it with mayonnaise, no ketchup and  with mustard';
var upperCaseString = lowerCaseString.toUpperCase();

console.log(upperCaseString);

/***************************************************************************************************** 
b- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
 *****************************************************************************************************/

console.log('--Ejercicio 2.b');

var fullStringStart = 'oompa loompa';
var cutStringStart = fullStringStart.substring(0, 5);

console.log(cutStringStart);

/***************************************************************************************************** 
c- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
 *****************************************************************************************************/

console.log('--Ejercicio 2.c');

var fullStringEnd = 'chiforimpula';
var cutStringEnd = fullStringEnd.substring(fullStringEnd.length - 3, fullStringEnd.length);

console.log(cutStringEnd);

/***************************************************************************************************** 
d- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).
 *****************************************************************************************************/

console.log('--Ejercicio 2.d');

var noCapitalString = 'woogity woogity woogity';
var capitalString = noCapitalString.toUpperCase().substring(0,1) + noCapitalString.toLowerCase().substring(1,noCapitalString.length);

console.log(capitalString);

/***************************************************************************************************** 
e- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar 
la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
 *****************************************************************************************************/

console.log('--Ejercicio 2-e');

var blankSpaceString= 'A great power, comes with a great responsibility';
var blankSpacePosition= blankSpaceString.indexOf(" ", 0);

console.log(blankSpacePosition);

/***************************************************************************************************** 
f- Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio 
entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga 
la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, 
substring, toUpperCase, toLowerCase y el operador +).
 *****************************************************************************************************/

console.log('--Ejercicio 2-f');

var longLowerCaseString = 'simona la cacariza';
var longCapitalString = longLowerCaseString.toUpperCase().substring(0,1) + longLowerCaseString.toLowerCase()
.substring(1, longLowerCaseString.lastIndexOf(' ', longLowerCaseString.length)+1) + longLowerCaseString.toUpperCase().
substring(longLowerCaseString.lastIndexOf(' ', longLowerCaseString.length)+1,longLowerCaseString
.lastIndexOf(' ', longLowerCaseString.length)+2) + longLowerCaseString.toLowerCase()
.substring(longLowerCaseString.lastIndexOf(' ', longLowerCaseString.length)+2, longLowerCaseString.length);

console.log(longCapitalString);