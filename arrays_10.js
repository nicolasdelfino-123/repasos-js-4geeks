/* Instrucciones:
Compara el elemento. Si es 1, agrega el número en el arreglo return_array.

Compara el elemento. Si es 0, agrega el string 'Yahoo' en el arreglo return_array (en lugar del número).

Por ejemplo, la salida de [0,0,1,1,0] sería:

['Yahoo','Yahoo', 1, 1,'Yahoo'] */

let myArray2 = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const myFunction = (arr) => {
    let arrayNew = [];
    arr.forEach((item) => {
        if (item == 1){
            arrayNew.push(item);
        }else{
            arrayNew.push("Yahoo");
        }
    });
    return arrayNew;
}

console.log(myFunction(myArray2))
