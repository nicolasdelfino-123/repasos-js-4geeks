/* Instrucciones:
Escribe una función llamada findMax que encuentre el número entero más grande dentro de un array.

Imprime ese número en la consola con la función console.log().

💡 Pistas:
Define una variable auxiliar. ¿Cuál debería ser su valor inicial?

Luego compara la variable auxiliar con todos los elementos del arreglo.

Reemplaza el valor cada vez que el nuevo elemento sea más grande que el almacenado en la variable auxiliar.

Al final tendrás el mayor número almacenado en la variable. */

let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];


// Your code here
function findMax(arr){
    let numMax = arr[0];
    for(let i = 1; i < arr.length; i++){
        if (numMax < arr[i]){   // esto es la clave, comparar si numMax es menor al segundo
            numMax = arr[i]; // solo si es true se actualiza numMax, sino no entra al if y queda numMax como máximo
        }
    }
    return numMax

}
console.log(findMax(myArray));