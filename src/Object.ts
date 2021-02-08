// Type: Object
let user: object;
user = {}; // Objeti

user = {

  id:1,
  username: 'paparazzi',
  firstName: 'Pablo',
  isPro: true
}

console.log(user);
//Al tratar de acceder a una key de ese objeto da error dice que la propiedad name no existe en el objeto
//      console.log(user.name);

//Object vs object (Clase JS vs tipo Ts)
  // Cuando acercamos el cursor para ver el tipo de dato que tiene nuestra variable a la que le asignamos
    // Un objeto  vemos que no tiene especificado ningun tipo de dato
      //Esto sucede porque typescript esta considerando al tipo que representa la variable como
        //Una instancia de la clase objeto

const myObj = {

  id:1,
  username: 'paparazzi',
  firstName: 'Pablo',
  isPro: true
}

//Para berificarlo haremos una instancia de nuestra variable que contiene un objeto

const isInstance = myObj instanceof Object; 
console.log('isInstance', isInstance); //true

//Utilizando Object si podremos acceder a los atributos de mi objeto

console.log('isInstance', isInstance)

