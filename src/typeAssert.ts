export{}
//<tipo> // Angle Bracket sintax
let username:any;
username = 'luixaviles';

//tenemos una cadena, TS confia en mi!
  //Queremos utilizar la funcion length pero la variable esta declarada con any
    //Entonces lo que hacemos es utilizar <tipoDato> para indicarle que es un string
       //Y poder utilizar length para conocer la longitud del string
let message:string = (<string>username).length > 5? 
                      `Welcome ${username}`:
                      'Username es muy corto';
console.log(message);

let usernameWithId: any  = 'luixviles 1';
//Como obtener el username

username = (<string>usernameWithId).substring(0,10);
console.log(username);


//Sintaxis as
  //Es otra forma de insertar tipos en ts
    //En lugar de los <> podemos utilizar as dentro de los parentisis para especificarle
      // Un tipo de dato a la variable

message = (username as string).length > 5? 
                      `Welcome ${username}`:
                      'Username es muy corto';
console.log(message);

let helloUser: any;
helloUser = "hello paparazzi";
username = (helloUser as string).substring(6);