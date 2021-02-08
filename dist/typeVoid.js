"use strict";
//Void
//Tipo Explicito que tambien aplica a funciones
//Si la funcion no retorna ningun tipo de dato la funcion tendria como tipo de dato void
//Pero si retorna algun dato le asigna ese tipo de dato a la funcion
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: 'andres22', firstName: 'andres pinchao' });
//Tipo Inferido
function showFormattedInfo(user) {
    console.log('User Info', `
      id: ${user.id}
      username: ${user.username}
      firstName: ${user.firstName}
    `);
}
showFormattedInfo({ id: 1, username: 'andres22', firstName: 'andres pinchao' });
//tipo void, como tipo de dato en variable
let unusable;
// unusable = null;  no puede ser asignado con tipo void
unusable = undefined;
// Tipo de Dato Never
//Indicamos que la funcion nunca retornara utilizando never despues del parentesis de nuestros parametros
function handleError(code, message) {
    //Procesamiento el codigo
    //Generamos un mensaje
    throw new Error(`${message}. Code ${code}`);
}
//Si enfocamos el cursor en la invocacion nos dice que nunca retorna un resultado
handleError(22, 'andres en platzi master :D');
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
}
//ciclo infinito, el programa nunca termina
sumNumbers(10);
