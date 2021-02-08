//Enum
  //Orientacion de fotografias

//const Landscape = 0;
//const portrait = 1;
//const square = 2;
//const panorama = 3;

//En typescript podremos definir estos valores como si fueran un nuevo tipo

enum PhotoOrientation{
  Landscape = 0, //0
  Portrait = 1, //1
  Square = 2, //2
  Panorama = 3, //3

}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log(landscape);
console.log(PhotoOrientation[0]); //accedemos al atributo del objeto
console.log(PhotoOrientation[landscape]); //podremos acceder incluso con la misma variable

//si inicializaramos el primer valor con 10 los siguientes aumentarian en 1
  //Siempre son valores consecutivos y que se van incrementando de uno en uno
enum PictureOrientation{
  Landscape = 10, //10
  Portrait,  //11
  Square,  //12
  Panorama //13

}

console.log('portrait', PictureOrientation.Portrait); //11

//Existe otra forma de personalizar los enum en typescript

enum Country{
  Bolivia = "BOL",
  Colombia = "COL",
  Mexico = "MEX",
  EEUU = "usa",
  Espana = "esp"


}

const country:Country = Country.Colombia;
console.log('country', country);