/* Instrucciones:
Compara el elemento. Si es 1, agrega el número en el arreglo return_array.

Compara el elemento. Si es 0, agrega el string 'Yahoo' en el arreglo return_array (en lugar del número).

Por ejemplo, la salida de [0,0,1,1,0] sería:

['Yahoo','Yahoo', 1, 1,'Yahoo'] */

let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];


const zerosToYahoo = (arr) => {
    let newArray = [];
    arr.forEach((item) =>{ 
        if (item === 1){
            newArray.push(item);
        }else{
            newArray.push("Yahoo");
        }
    });
    return newArray
}
console.log(zerosToYahoo(myArray));