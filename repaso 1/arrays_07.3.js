/*Usando un bucle for, invierte el array arr e imprime el nuevo array en la consola.
Debes recorrer todo el arreglo desde el final hasta el principio.

En cada bucle, inserta todos los elementos (a medida que avanza) en un nuevo array, 
este será tu arreglo invertido. ¿Qué otros métodos puedes usar además de push()?

*/

let arr = [45,67,87,23,5,32,60];



// Your code here


let newArr = [];

for (let i = arr.length -1; i >= 0; i--){
    newArr.push(arr[i]);
};

console.log(newArr);

