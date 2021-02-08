export {}
//Utilizando | podremos inicializar una variable con varios tipos de datos.
/*let idUser: number | string;
idUser = 10;
idUser = '10';

// Buscar username dado un ID
  //Podremos tambien indicar el tipo de dato que tiene el parametro con varios 
    //Utilizando |
function getUsernameById(id:number|string){
  //Logica de negocio y encontrar el usuario

  return 'luixaviles';

}
//Podremos invocar la variable con cualquiera de los tipos de datos que definimos
  //En sus parametros
getUsernameById(20);
getUsernameById('20'); */

//Alias de tipo en ts
  //Los alias en ts nos ayudan a evitar redundancia en la union de tipos
    //Utilizamos la plabra reservada type y dentro de ella definimos los
      //Tipos de datos que utilizaremos 
        //Es como definir los tipos de datos en una variable

type IdUser = number | string;
let idUser: IdUser;
idUser = 10;
idUser = '10';

function getUsernameById(id:IdUser){
  

  return 'luixaviles';

}

getUsernameById('20');

//Tipos Literales 
//100 x 100, 500 x 500, 1000x1000

type SquareSize = '100x100' | '500x500' | '1000x1000';
//let smallPicture: SquareSize = '200x200' Error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';