//Explicita
  //Definir variables con tipo de dato null es valido y solo acepta valor tipo null nada ma
let nullVariable:null;
nullVariable = null;
// nullVariable = 1;  Error

//Implicita
let otherVariable = null;
otherVariable = 'test';

//Undefined
  //Solo soporta ese tipo de dato como asignacion
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; Error

let otherUndefined =  undefined; //como no le pusimos ningun tipo de dato a la variable podremos reasignarla
otherUndefined = 1;

console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);


//Null y undefined como subtimos

// --strictNullChecks
  //Consiste en agregar una bandera al compilador de typecrit para identificar las diferentes asignaciones
let albumName:string;
//albumName = null;
//albumName = undefined;