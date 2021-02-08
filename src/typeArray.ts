// Corchetes []

//Tipo Explicito
  // tipodeDato[]

let users:string[];
users =['luixaviles', 'paparazzi', 'lensqueen'];

//Si le pusieramos distintos tipos de datos al que se le establecio al array
  //Daria error
// users = [1, true, 'test']; Error

//Tipo Inferido
  //Si le asignamos a una variable un array sin especificar el tipo
    //Typescript infiere el tipo de dato que tendra dependiendo lo que le pasemos


let otherUsers = ['luixaviles', 'paparazzi', 'lensqueen'];

// users = [1, true, 'test']; Error

// Arra<TIPO>
  //Definimos el array esplicitamente y dentro de los <> ponemos el tipo de dato que
    //Tendra el array

let pictureTitles: Array<string>;

  //Al berificar con el cursor la variable veremos el tipo de dato que tiene el array

pictureTitles =['Favorite Sunset', 'Vacation Time', 'Landscape'];


//Accediendo a los valores en un Array
  //Podremos acceder al elemento de un array igual que en js

  console.log(pictureTitles[0]); 


//Propiedades en Array

console.log(users.length) //3

//Funciones en Array

users.push('platzi users');
users.sort();
console.log('users', users);