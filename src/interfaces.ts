export{}
// Funcion para mostrar una fotografia

enum PhotoOrientation{

  Landscape,
  Portrait,
  Square,
  Panorama

}

//Se le llama contrato a preestablecer un objeto con ciertos atributos que no
 //Pueen ser diferentes ni en su tipo ni aumentarse de atributos al momento de 
  //Invocar la funcion
function showPicture(picture:{title:string, date:string, orientation:PhotoOrientation}){

  console.log(`[title : ${picture.title}, 
                date: ${picture.date}, 
                orientation: ${picture.orientation}]`);


}

let myPic = {
  title: 'Test Title',
  date:'2020-03',
  orientation: PhotoOrientation.Landscape

};

//Invocamos la funcion y le pasamos por paremetro un objeto
showPicture(myPic)
//Tambien podemos enviarle un objeto anonimo

showPicture({
  title: 'Test Title',
  date: '2020-03',
  orientation: PhotoOrientation.Portrait,
  //Si pusieramos un atributo adicional no se reconoceria ya que solo establecimos
    //3 en nuestra funcion y con determinados tipos de datos
});


//Otra forma 
//Establecemos una interface la cual representa un objeto
 //En el que contiene atributos que tienen asignados tipos de datos
interface Picture{

  title: string;
  date:string;
  orientation:PhotoOrientation
}

//Luego le pasamos a la funcion como parametro el nombre y el tipo que seria
  //El tipo que establecimos previamente en la interface
function showPicture2(picture:Picture){


}