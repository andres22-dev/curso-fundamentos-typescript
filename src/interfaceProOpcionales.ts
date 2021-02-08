export{}
//Para hacer que los aributos sean opcionales se pone un ? delante del nombre
  //Del atributo y asi cuando invoquemos la funcion no nos lo pedira como obligatorio

interface PictureConfig{
  title?:string;
  date?: string;
  orientation?: PhotoOrientation;

  
}

function generatePicture(config:PictureConfig){
  const pic = {title:'default', date:'2020-03'};
  if(config.title){

    pic.title = config.title;


  }

  if(config.date){
    pic.date = config.date;

  }
  return pic;


}
//Si pusieramos un objeto basio no nos permitiria ponerlo ya que prestablecimos
  //En el contrato(interface) que atributos y tipos de datos los cuales deben
   // Tener un valor correspondiente
   let picture = generatePicture({})

   console.log(picture); //como enviamos un objeto vacio nos muestra los valores
   // por default que establecimos

   picture = generatePicture({title: 'Travel Pic'})
   console.log('picture', picture); // En este caso cambiaria el primer parametro
   //Porque solo le enviamos uno e otro si quedaria por default


   //Interfaces propiedades solo lectura
    //reanonly sirve para especificar un atributo como solo lectura esto significa
      //que podremos inicializarlo con un valor pero despues no podres cambiarlo
   interface User {
    readonly id:number; //solo lectura 
    username:string;
    isPro: boolean;

   }

   let user: User;
   user = {id: 10, username:'andres', isPro:true};

   console.log(user);
   user.username="otra cosa";
   //user.id = 20; Error
   console.log(user); //el cambio se hace efectivo