/**********
5. For
 **********/

console.log('05- For');

/***************************************************************************************************** 
a- Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de 
JavaScript para mostrar una alerta utilizando cada una de las palabras.
 *****************************************************************************************************/

console.log('--Ejercicio 5-a');

var heroArray = ['batman', 'aquaman', 'superman', 'flash'];

for (var i = 0; i < heroArray.length; i++) {
     
    alert(heroArray[i]);
    
}

/***************************************************************************************************** 
b- Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por 
cada palabra modificada.
 *****************************************************************************************************/

console.log('--Ejercicio 5-b');

for (var i = 0; i < heroArray.length; i++) {
     
    heroArray[i]= heroArray[i].toUpperCase().substring(0, 1) + heroArray[i].toLowerCase().
    substring(1, heroArray[i].length);

    alert(heroArray[i]);
    
}

/***************************************************************************************************** 
c- Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) 
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final 
mostrar una única alerta con la cadena completa.

 *****************************************************************************************************/

console.log('--Ejercicio 5-c');

var sentence = " ";

for (var i = 0; i < heroArray.length; i++) {
     
    if(i===heroArray.length-1){
        sentence += heroArray[i]= heroArray[i].toUpperCase().substring(0, 1) + heroArray[i].toLowerCase().
        substring(1, heroArray[i].length);
    }else{
        sentence += heroArray[i]= heroArray[i].toUpperCase().substring(0, 1) + heroArray[i].toLowerCase().
        substring(1, heroArray[i].length) + " - ";
    }
    
}

alert(sentence);

/***************************************************************************************************** 
d- Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la 
repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del 
array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final 
(utilizar console.log).
 *****************************************************************************************************/

console.log('--Ejercicio 5-d');

var emptyArray = [];
var fill;

for(var i = 0; i < 10; i++) {

    emptyArray.push(i);

}

console.log(emptyArray);