//Crear una forografia
  //Si no especificamos el tipo de dato en el parametro este sera any y no tendremos
    //Posibilidad de utilizar funciones especificas que brindas dependiendo el tipo de dato
/*function crearFoto(titulo, fecha, tamaño){

  titulo
}*/


//Usamos ts, definimos tipos para parametros

type SquareSize = '100x100' | '500x500' | '1000x100'
function crearFoto2(title:string, fecha:string, size: SquareSize){

  //Se crea la fotografia
  console.log('crear foto', title, fecha, size);



}

crearFoto2('hola','sabado', '100x100');
//crearFoto2('no','se'); Error

//Otro aspecto a considerar
  //Es que podremos agregar parametros opcionales para que la funcion no nos
    //Lo pida si es que no tenemos este dato
      //Lo hacemos agregando un ? al lado del nombre del parametro

function crearFoto3(title?:string, fecha?:string, size?: SquareSize){

  //Se crea la fotografia
  console.log('crear foto', title, fecha, size);


  crearFoto3(); // todo ok

  //Podremos invocar la funcion con cualquier parametro
    //Sea solo uno que falte o asi y no importa porque si esta el ? lo ignorara
      //Y imprimira ese parametro como undefined

  //Flat Array Function

  let createPic = (title:string, date:string, size: SquareSize):object =>{

    return{
      title: title,
      date: date,
      size: size

    };
 //Una forma mejor de hacerlo es
  // De esta forma no duplicamos el valor ni la clave ya que es el mismo
    return {
      title,
      date,
      size
    }
  

  };

 
  




