/* En este ejercicio vamos a unir dos arreglos programáticamente.

📝 Instrucciones:
Escribe una función que combine dos arrays y retorne un único array nuevo, 
con todos los elementos de ambos arrays.
Asegúrate de no crear un array con 2 arrays anidados. 
Debe ser un solo array con todos los nombres en su orden original. */



/* let chunkOne = [ 'Lebron', 'Aaliyah' ];
let chunkTwo = [ 'Lucas', 'Jake' ];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    // Your code here
    newArray.push(...firstArray);
    newArray.push(...secondArray);
    return newArray
}

console.log(mergeArrays(chunkOne, chunkTwo)); */

/* otra forma de resolverlo */
/* 
let chunkOne = [ 'Lebron', 'Aaliyah' ];
let chunkTwo = [ 'Lucas', 'Jake', "pipo"];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    // Your code here
    newArray = firstArray.concat(secondArray);
    return newArray
}

console.log(mergeArrays(chunkOne, chunkTwo)); */

/* tercera forma solucion modelo de 4geeks */

let chunkOne = [ 'Lebron', 'Aaliyah' ];
let chunkTwo = [ 'Lucas', 'Jake', "pipo"];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    // Your code here
    firstArray.forEach((item) => {
        newArray.push(item);
    })

    secondArray.forEach((item) => {
        newArray.push(item);
    })
    return newArray
}

console.log(mergeArrays(chunkOne, chunkTwo));