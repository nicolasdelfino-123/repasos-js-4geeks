/*Crea una función deletePerson que "elimine" a cualquier persona 
del arreglo y devuelva un nuevo arreglo sin esa persona. */

let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below
function deletePerson (name){
    let newArr = people.filter((item) => name != item)
    return newArr;
}


console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
