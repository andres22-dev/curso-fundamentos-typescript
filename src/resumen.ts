// Tipo de retorno con typescript

function handleError(code:number, message:string):never | string{

  //Procesamiento del mensaje

  if(message === "error"){

    throw new Error(`${message}. code error: ${code}`);
  }else{

    return 'un error ha ocurrido';
  }


}

try{
let result = handleError(200, "ok");//string
console.log('result',result);

result = handleError(404, 'error');//never
console.log('result', result);
} catch (error){


  
}

//Para poder arreglar el contexto donde ejecutamos nuestra funcion
  //Utilizamos try catch y manejaremos el error dentro del mismo
