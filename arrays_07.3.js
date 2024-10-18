/*Usando un bucle for, invierte el array arr e imprime el nuevo array en la consola.
Por ejemplo:

Initial array:  [45, 67, 87, 23, 5, 32, 60];
Final array:    [60, 32, 5, 23, 87, 67, 45];

Pistas:
Debes recorrer todo el arreglo desde el final hasta el principio.

En cada bucle, inserta todos los elementos (a medida que avanza) 
en un nuevo array, este será tu arreglo invertido. ¿Qué otros métodos 
puedes usar además de push()?*/

let arr = [45,67,87,23,5,32,60];
let newArr = []

// Your code here

for (let i = arr.length -1; i >= 0; i--){
    let item = arr[i]
    newArr.push(item)
}
console.log(newArr);