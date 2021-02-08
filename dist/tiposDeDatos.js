"use strict";
//Number
//Explicito
//Daria error si el tipo de dato que se le asigna no es el que se le especifico
let phone;
phone = 1;
phone = 5273832;
//error phone = 'hola';
//Inferido
//No especificamos el tipo de dato pero el lenguaje infiere el tipo de dato que es
let phoneNumber = 6237830;
//Daria error si es que le asignaramos un valor distinto al que se le asigna
//Para poner hexadecimales  utilizamos 0xDespues caracteres comprendidos entre 0-9 a-f
let hexadecimal = 0xf00d;
//Para binarios utilizamos 0b luego numeros de 0 a 1 que es de los que se componen los binarios
let binary = 0b1010;
//Valor octal  0o y luego numeros comprendidos entre 4 y 7
let octal = 0o744;
//Tipo de dato boolean
//Explicito
let isPro = true;
isPro = false;
//Si asignamos valores distintos dara error
//isPro =1;
//Implicito
let isUserPro = false;
//Tipos de Datos String
let username = 'luixaviles';
username = "Luis";
//No podremos asignar un tipo de dato diferente
//String Template Strings
//Uso de back-tick `
//Podremos hacer uso de variable previamente definidas y tener espacios mas comodos de lo que
//Nos permite manejar un string normal
let userInfo;
userInfo = `
    User info:
    username: ${username}
    firstname: ${username} + 'Aviles'}
    phone: ${phone}
    isPro: ${isPro}
  
  `;
console.log('userInfo', userInfo);
