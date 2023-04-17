/**********
6. Funciones
 **********/

console.log('6. Funciones');

/******************************************************************************************************** 
a- Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función 
y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
 ********************************************************************************************************/

console.log('-- Ejercicio 6.a');

function addFunction(a, b){  
   return a + b
}

var add = addFunction(5, 12);

console.log(add);

/******************************************************************************************************** 
b- Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros 
no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y 
retornar el valor NaN como resultado.
 ********************************************************************************************************/

console.log('-- Ejercicio 6.b');

function addFunctionValidated(a, b){  

    var result;

    if (isNaN(a) || isNaN(b)) {
        alert('Error: one of the parameters is not a number')
        result = NaN;
    }else{
        result = a + b;
    }

    return result;

 }

add = addFunctionValidated('wjkqnw', 12);

console.log(add);

/******************************************************************************************************** 
c- Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un 
número entero.
 ********************************************************************************************************/

console.log('-- Ejercicio 6.c');

function validateInteger(num){
    return Number.isInteger(num);
}

var isInteger = validateInteger(4.6);

console.log(isInteger);

/******************************************************************************************************** 
d- Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del 
ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con 
el error y retornar el número convertido a entero (redondeado).
 ********************************************************************************************************/

console.log('-- Ejercicio 6.d');

function newAddFunctionValidated(a, b){  

    var result;

    if (isNaN(a) || isNaN(b)) {
        alert('Error: one of the parameters is not a number');
        result = NaN;
    }else{

        if(validateInteger(a) && validateInteger(b)){
            result = a + b;
        }else{
            alert('Error: one of the parameters is not an integer');

            if(!validateInteger(a) && validateInteger(b)){
                Math.round(a);
            }else if(validateInteger(a) && !validateInteger(b)){ 
                Math.round(b);
            }else{
                result = Math.round(a) + ', ' + Math.round(b);
            }
        }

    }

    return result;

 }

var validation = newAddFunctionValidated(3.4, 5.6);

console.log(validation);

/******************************************************************************************************** 
e- Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva 
función probando que todo siga funcionando igual que en el apartado anterior.
 ********************************************************************************************************/

console.log('-- Ejercicio 6.e');

function greatValidation(a, b){

    var result;

    if (isNaN(a) || isNaN(b)) {
        alert('Error: one of the parameters is not a number');
        result = NaN;
    }else{

        if(validateInteger(a) && validateInteger(b)){
            result = a + b;
        }else{
            alert('Error: one of the parameters is not an integer');

            if(!validateInteger(a) && validateInteger(b)){
                Math.round(a);
            }else if(validateInteger(a) && !validateInteger(b)){ 
                Math.round(b);
            }else{
                result = Math.round(a) + ', ' + Math.round(b);
            }
        }

    }

    return result;

}

function newAddFunction(a, b){

    return greatValidation(a, b);

}

var newAddFunctionResult = newAddFunction(10.2, 'qwqwdqwdwq');

console.log(newAddFunctionResult);