export {}
//Tuplas
  //En esta tumpla estre guardando dos tipos de datos
let user: [number, string];
user = [22, 'andres'];

console.log('user', user);

//Podremos acceder a la tupla normalmente como en cualquier array
  //Aaunque sea una tupla con distintos tipos de datos dependiendo de al valor
    //que estemos accediendo podremos utilizar sus respectivas funciones
console.log('user', user);
console.log('username', user[1]);
console.log('id', user[0]);

//Tuplas con varios valores
// id, username, isPro
  //Para definir tuplas debemos definir tipos de datos diferentes para cada una 
   //de las posiciones esa es una de las restricciones
let userInfo: [number, string, boolean];
userInfo = [2, 'paparazzi', true];
console.log('userInfo', userInfo);


//Arreglo de Tuplas
  //utilizamos unos [] adicionales para indicar que vamos a guardar en la variable
    //Un conjunto de tuplas
      //Dara error si solo lo declaramos y no le asignamos ningun valor
let arrayy: [number,string][] = [];
arrayy.push([1, 'andres']);
arrayy.push([2, 'andresb']);
arrayy.push([3, 'andresc']);

//Uso de funciones Array
//lensQueen -> lensQueen001
  //accedemos a la posicion de andesc y con concat le agregamos 001 y este valor se lo
    //reasignamos a esa misma posicion
arrayy[2][1] = arrayy[2][1].concat('001');
