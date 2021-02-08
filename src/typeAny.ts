// Tipo explicito
 //El tipo de dato any utiliza cualquier tipo de dato
let idUser: any;
idUser = 1; //number
idUser = 'a'; //podremos cambiar el valor por otro tipo de dato

console.log('idUser',idUser); // a

let otherId; // si declaramos una variable implicitamente se le asigna any como tipo de dato;
otherId = 12123;
otherId = 'este es un string :)';
console.log('otherId', otherId);

let surprise: any = 'hello typescript';

const res = surprise.substring(6); //Error
console.log('res', res);