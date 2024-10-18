/* 📝 Instrucciones:
Usando un bucle, imprime un nuevo array en la consola que contenga los tipos de valores (data-types) que contiene el array mix en cada posición.
💻 Resultado esperado:
[
  'number', 'boolean',
  'string', 'object',
  'string', 'number',
  'object'
]
  Pista
Crea un nuevo arreglo vacío.

Recorre el arreglo original mediante un bucle.

En cada bucle, obtén el tipo de elemento utilizando la función typeof.

Como la función typeof devuelve un string, puedes insertar(push) ese string en el nuevo arreglo.
Cuando finalice el bucle, debes haber encontrado todos los tipos de elementos del arreglo original 
y haberlos insertado(push) en el nuevo arreglo.
*/

let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here

let arr = [];

for (let i = 0; i < mix.length; i++){
    let item = mix[i];
    arr.push(typeof item);
}
console.log(arr)
